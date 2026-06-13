import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";
import { z } from "zod";

export const sendWelcomeEmailFn = createServerFn({ method: "POST" })
  .inputValidator(z.object({
    email: z.string(),
    dealerId: z.string(),
    planName: z.string(),
    ownerName: z.string(),
  }))
  .handler(async ({ data }) => {
    const { email, dealerId, planName, ownerName } = data;

    const emailUser = process.env.EMAIL_USER || "kh2kgaming@gmail.com";
    const emailPass = process.env.EMAIL_PASSWORD || "vpjk yupf hqqw jvhn";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"Vendor99" <${emailUser}>`,
      to: email,
      subject: `Welcome to Vendor99 — Your Dealer ID: ${dealerId}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; padding: 12px; background-color: #fff7ed; border-radius: 50%; border: 2px solid #ffedd5;">
              <span style="font-size: 28px; font-weight: bold; color: #f97316;">V</span>
            </div>
            <h1 style="color: #0f172a; margin-top: 15px; margin-bottom: 5px; font-size: 24px; font-weight: 800; letter-spacing: -0.025em;">Welcome to Vendor99 Network!</h1>
            <p style="color: #64748b; font-size: 14px; margin: 0;">Empowering your B2B services business</p>
          </div>
          
          <p style="color: #334155; font-size: 16px; line-height: 1.6;">Dear <strong>${ownerName}</strong>,</p>
          <p style="color: #334155; font-size: 16px; line-height: 1.6;">Thank you for partnering with Vendor99. Your subscription to the <strong style="color: #f97316;">${planName}</strong> has been processed successfully, and your partner account is now fully active.</p>
          
          <div style="background: linear-gradient(135deg, #fef3c7 0%, #fff7ed 100%); padding: 24px; border-radius: 12px; margin: 28px 0; text-align: center; border: 1px solid #fed7aa;">
            <p style="margin: 0 0 8px 0; font-size: 12px; color: #b45309; text-transform: uppercase; font-weight: bold; letter-spacing: 0.1em;">Your Official Dealer ID</p>
            <p style="margin: 0; font-size: 36px; font-weight: 900; color: #ea580c; letter-spacing: 0.05em; font-family: monospace;">${dealerId}</p>
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #78350f;">Keep this ID safe. You will need it to log in to your dashboard.</p>
          </div>
          
          <p style="color: #334155; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">To access your leads, manage active customer requests, and view subscription details, log in to the Dealer Portal using your Dealer ID.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://homequik-clone.vercel.app/login" style="background-color: #f97316; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px -1px rgba(249, 115, 22, 0.2);">Log In to Dealer Portal</a>
          </div>
          
          <div style="background-color: #f8fafc; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-top: 30px;">
            <h3 style="margin-top: 0; margin-bottom: 10px; font-size: 14px; color: #0f172a; font-weight: 700;">Next Steps:</h3>
            <ul style="margin: 0; padding-left: 20px; color: #475569; font-size: 14px; line-height: 1.5;">
              <li style="margin-bottom: 8px;">Complete your service profile with your pricing and locations.</li>
              <li style="margin-bottom: 8px;">Set up notifications for real-time customer lead alerts.</li>
              <li>Reach out to our support channel for onboarding assistance.</li>
            </ul>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center; line-height: 1.5; margin: 0;">This is an automated system notification from Vendor99.<br />For support, please contact <a href="mailto:santhoshmarketing.com@gmail.com" style="color: #f97316; text-decoration: none;">santhoshmarketing.com@gmail.com</a>.</p>
        </div>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Welcome email sent successfully:", info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error: any) {
      console.error("Failed to send welcome email:", error);
      throw new Error(error.message || "Failed to send email");
    }
  });
