// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const {
    name,
    apartmanType,
    apartmanNumber,
    startDate,
    endDate
  } = await req.json();
  const message = `
  Szia Gyöngyi!
  
  Foglalás történt a következő adatokkal:
  Érkezés: ${startDate}
  Távozás: ${endDate}
  Név: ${name}
  `;

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let mailOptions = {};
  // Email options;
  mailOptions = { from: process.env.EMAIL_USERNAME, to: "kismokusvendeghaz@gmail.com", subject: "Új Foglalás", text: message };
    

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
