import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-CbxtHMdS.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const sendBookingEmail_createServerFn_handler = createServerRpc({
  id: "77ce64d8aa127d09b51dce01a8c92cd2f93aebcdeed597807415f9f441518052",
  name: "sendBookingEmail",
  filename: "src/routes/cart.tsx"
}, (opts) => sendBookingEmail.__executeServer(opts));
const sendBookingEmail = createServerFn({
  method: "POST"
}).handler(sendBookingEmail_createServerFn_handler, async ({
  data: payload
}) => {
  try {
    const nodemailer = await import("../_libs/nodemailer.mjs").then(function(n) {
      return n.n;
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tekzio2026@gmail.com",
        pass: process.env.EMAIL_PASSWORD
        // Must be set in .env
      }
    });
    const servicesList = payload.services.map((s) => `<li>${s.title} (x${s.quantity})</li>`).join("");
    const mailOptions = {
      from: '"Vendor99 Automations" <tekzio2026@gmail.com>',
      to: "tekzio2026@gmail.com",
      subject: `New Booking Request from ${payload.userName}`,
      html: `
        <h2>New Booking Confirmed!</h2>
        <p><strong>Customer Name:</strong> ${payload.userName}</p>
        <p><strong>Customer Email:</strong> ${payload.userEmail}</p>
        <h3>Services Requested:</h3>
        <ul>
          ${servicesList}
        </ul>
        <p>Please contact the customer to finalize the contract.</p>
      `
    };
    await transporter.sendMail(mailOptions);
    return {
      success: true
    };
  } catch (error) {
    console.error("Email send error:", error);
    throw new Error("Failed to send email automation: " + error.message);
  }
});
export {
  sendBookingEmail_createServerFn_handler
};
