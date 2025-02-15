// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");

export function sendMail(subject, to, text) {
  sgMail.setApiKey(
    "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"
  );
  const msg = {
    to: "palyi.kristof@gmail.com",
    from: "dreamcomplex.noreply@gmail.com",
    subject: subject,
    text: text,
    html: text
  }; // Change to your recipient // Change to your verified sender
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch(error => {
      console.log(error);
    });
}
