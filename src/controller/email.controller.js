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
        text: `Nombre: ${name} \n Correo: ${email} \n Mensaje: ${message}`,
        //html: "<b>Hello world?</b>",
    });
    return `Message sent: %s" ${info.messageId}`;
}


export const sendEmail = async (req, res) => {
    const { name, email, message } = req.body;
    const send = await main(name, email, message)
    res.send(send)
}
