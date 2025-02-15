// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {

  const {email, type, token} = await req.json();
  const apartmanType = type === "apartman" ? "Dream Apartman" : "Dream Tópart Apartman";

  const message = `
  Kedves Vendégünk!<br><br>
  
  Reméljük, kellemesen telt az időtöltés a ${apartmanType}ban.<br>Kérjük, hogy értékeld/értékelje szállásunkat az alábbi linken:<br>
  <a href="https://www.dreamkomplexum.com/reviews/${type}/${token}">Kattintson az értékeléshez!</a>
  <br>Várjuk visszajelzésedet/visszajelzését! Köszönjük szépen!<br><br>

  Üdvözlettel,<br>
  Kerekesné Tollár Anikó
  `;

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Email options;
  let mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Hogy telt a nyaralás Lellén?",
    html: message
  }

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error }),
      { status: 500 }
    );
  }
}
