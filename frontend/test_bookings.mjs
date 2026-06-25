import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8yfL_9YR9ZvfO9ID6MKfn3eqCpZdhy-8",
  authDomain: "homequik-clone.firebaseapp.com",
  projectId: "homequik-clone",
  storageBucket: "homequik-clone.firebasestorage.app",
  messagingSenderId: "956042980288",
  appId: "1:956042980288:web:df5c2ef1a53848b3f03625"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testBooking() {
  console.log("Starting Booking test...");
  
  const bookingData = {
    bookingId: "BKG-TEST-" + Math.floor(Math.random() * 10000),
    customerName: "Automated Test Customer",
    customerPhone: "9876543210",
    customerAddress: "123 Test Street, Bangalore",
    serviceName: "CCTV Installation",
    selectedItems: ["Installation: CAMERA [₹499/-]", "Repair: Visit Charge [₹450/-]"],
    bookingDate: new Date().toISOString().split('T')[0],
    bookingTime: "10:00 AM",
    notes: "This is a test booking from the system",
    amount: "₹949",
    numericAmount: 949,
    status: "Pending",
    createdAt: new Date()
  };

  try {
    console.log("1. Sending to Google Sheets...");
    const sheetResponse = await fetch("https://script.google.com/macros/s/AKfycbylfcX1xeYmnGfMR9j6d-VL-9iUCiTolApZ_YURJfpHb3KquLNULAP-mk8K-r6gfVbO/exec", {
      method: "POST",
      // mode: 'no-cors' is only needed in browsers to bypass CORS errors for cross-origin requests.
      // Since this is a Node script, we don't need it.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    
    // Attempt to parse response (may be opaque depending on Google Apps Script)
    const text = await sheetResponse.text();
    console.log("✅ Sent to Google Sheets! Response:", text);
    
    console.log("2. Saving to Firebase...");
    const docRef = await addDoc(collection(db, "bookings"), bookingData);
    console.log("✅ Saved to Firebase! Document ID:", docRef.id);
    
    console.log("Booking Test completed successfully!");
    console.log("Check your Admin Dashboard and Google Sheet.");
    process.exit(0);
  } catch (error) {
    console.error("❌ BOOKING TEST FAILED:");
    console.error(error.message);
    process.exit(1);
  }
}

testBooking();
