// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, code, startDate, endDate } = await req.json();
  const message = `
  Kedves Vendégünk!
  
  Köszönjük, hogy a DreamKomplexumokat választotta. Foglalását sikeresen rögzítettük.
  Visszaigazolásig várjon kérjük türelemmel, amíg fel nem vesszük Önnel a kapcsolatot.
  A következő időpontra foglalt:
  Érkezés: ${startDate}
  Távozás: ${endDate}
  
  Az oldalunkon a következő kóddal tudja ellenőrizni a foglalását: ${code}
  Kérjük, ne válaszoljon erre az email-re!
  Kellemes és pihentető nyaralást kívánunk!

  Üdvözlettel,
  Kerekesné Tollár Anikó
  +36 70 373 3772
  
  `;

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Email options
  let mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Foglalás",
    text: message
  };

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
