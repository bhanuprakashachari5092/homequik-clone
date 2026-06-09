import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// Trigger when a new document is created in the "bookings" collection
export const onNewBooking = functions.firestore
  .document("bookings/{bookingId}")
  .onCreate(async (snap: functions.firestore.QueryDocumentSnapshot, context: functions.EventContext) => {
    const bookingData = snap.data();
    const docId = context.params.bookingId;

    console.log(`[New Booking] Received booking ${docId}`);
    console.log(`[Payload]`, bookingData);

    try {
      // 1. Prepare Customer Information for Notifications
      let serviceText = "our services";
      if (bookingData.services && Array.isArray(bookingData.services)) {
        serviceText = bookingData.services.map((s: any) => s.title).join(", ");
      } else if (bookingData.serviceName) {
        serviceText = bookingData.serviceName;
        if (bookingData.selectedItems && bookingData.selectedItems.length > 0) {
          serviceText += " (" + bookingData.selectedItems.join(", ") + ")";
        }
      }

      const customerInfo = {
        name: bookingData.customerName || "Customer",
        phone: bookingData.customerPhone || "+919999999999", // Fallback test number
        services: serviceText,
      };

      // 2. WhatsApp Confirmation via Meta Graph API (or Twilio)
      console.log(`[WhatsApp API] Sending confirmation to ${customerInfo.phone}...`);
      try {
        // Example for Meta WhatsApp Business API
        // NOTE: You must configure functions.config().whatsapp.token and phone_id
        const waToken = functions.config().whatsapp?.token || "YOUR_WHATSAPP_TOKEN";
        const phoneId = functions.config().whatsapp?.phone_id || "YOUR_PHONE_ID";
        
        const waResponse = await fetch(`https://graph.facebook.com/v17.0/${phoneId}/messages`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${waToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: customerInfo.phone.replace("+", ""),
            type: "text",
            text: {
              body: `Hello ${customerInfo.name}! 🌟 Your booking for ${customerInfo.services} has been successfully confirmed. Our team will contact you shortly to finalize the details. Thank you for choosing Vendor99!`
            }
          })
        });
        
        if (!waResponse.ok) {
          console.error("[WhatsApp API] Failed:", await waResponse.text());
        } else {
          console.log(`[WhatsApp API] Success: Message sent to ${customerInfo.name}.`);
        }
      } catch (e) {
        console.error("[WhatsApp API] Exception:", e);
      }

      // 3. AI Voice Call Confirmation via Bland AI
      console.log(`[AI Voice API] Initiating voice call to ${customerInfo.phone}...`);
      try {
        // NOTE: You must configure functions.config().bland.api_key
        const blandApiKey = functions.config().bland?.api_key || "YOUR_BLAND_API_KEY";
        
        const aiResponse = await fetch("https://api.bland.ai/v1/calls", {
          method: "POST",
          headers: {
            "Authorization": blandApiKey,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            phone_number: customerInfo.phone,
            task: `You are a helpful assistant from Vendor99. Call the customer named ${customerInfo.name} and let them know that their booking for ${customerInfo.services} has been confirmed. Thank them for their business and ask if they have any questions. Keep it brief and professional.`,
            voice: "nat",
            wait_for_greeting: true,
          })
        });

        if (!aiResponse.ok) {
          console.error("[AI Voice API] Failed:", await aiResponse.text());
        } else {
          console.log(`[AI Voice API] Success: Call queued for ${customerInfo.phone}.`);
        }
      } catch (e) {
        console.error("[AI Voice API] Exception:", e);
      }

      // Update the document to show notification status
      await snap.ref.update({
        notifiedCustomerWhatsApp: true,
        notifiedCustomerCall: true,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      console.log(`[Workflow Complete] Booking ${docId} processed successfully.`);
    } catch (error) {
      console.error(`[Error] Failed to process booking workflow for ${docId}:`, error);
      
      // Update status to reflect failure
      await snap.ref.update({
        notificationError: true,
      });
    }
  });
