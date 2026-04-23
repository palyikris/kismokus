// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, code, startDate, endDate } = await req.json();
  const message = `
  Kedves Leendő Vendégünk!

  Köszönjük, hogy minket választottál pihenésed helyszínéül!
  A következő időpontra foglaltál:
  Érkezés: ${startDate}
  Távozás: ${endDate}
  
  Ezúton küldjük visszaigazolásunkat, hogy megkaptuk foglalási kérésedet, viszont az csak a díjbekérő befizetésével válik véglegessé. Ehhez kérjük küldd el nekünk számlázási adataidat (név, cím). Köszönjük!
  
  Marosi Mókus Vendégház
  +36202837500
  
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
