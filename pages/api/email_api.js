import { sendMail } from "../../service/mailService";
export default async function handler(req, res) {
  try {
    const { method, body } = req;
    switch (method) {
      case "POST": {
        sendMail(
          "Foglalás",
          body.email,
          `Helóka belóka!<br>

Új foglalás történt a DreamComplex-ben. Csekkold le a felületen!<br>
A foglaló adatai:

Email: ${body.email}<br>
Név: ${body.name}<br>
Telefonszám: ${body.phone}<br>
Érkezés: ${body.arr}<br>
Távozás: ${body.dep}<br>
Felnőttek: ${body.adult}<br>
Gyerekek: ${body.children}<br>
Ház: ${body.type}<br>
Apartman: ${body.number}<br>
Megjegyzés: ${body.note}<br>
Ne felejtsd el kipipálni a foglalást a felületen!
`
        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message
    });
  }
}
