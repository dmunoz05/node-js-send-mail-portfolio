import nodemailer from "nodemailer";
import { user, password, host } from "../environments/environments.js";

var user_ = user
var password_ = password
var host_ = host

const transporter = nodemailer.createTransport({
    host: host_,
    port: 587,
    auth: {
        user: `${user_}`,
        pass: `${password_}`
    }
});;

async function main(name, email, message) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: `"Contacto portafolio 👉👀" <${email}>`,
        to: "daniel20025febrero29@gmail.com",
        subject: "Mi Portafolio ✔",
        html: `"<h1>Hola</h1><br/><h1><strong>Nombre: </strong>${name}</h1><br/><h1><strong>Correo: </strong>${email}</h1><br/><h1><strong>nMensaje: </strong>${message}</h1>"`,
        //text: `"Nombre: ${name} \nCorreo: ${email} \nMensaje: ${message}"`,
    });
    return `Message sent: %s" ${info.messageId}`;
}


export const sendEmail = async (req, res) => {
    const { name, email, message } = req.body;
    const send = await main(name, email, message)
    res.send(send)
}
