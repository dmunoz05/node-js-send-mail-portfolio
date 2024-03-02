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

async function main(firstname, secondname, email, message) {
    // send mail with defined transport object
    const my = await transporter.sendMail({
        from: `Desde 👉 ${email} <${email}`,
        to: "daniel20025febrero29@gmail.com",
        subject: "Mi Portafolio ✅",
        html: `<h3>Interesado desde el portafolio</h3>
                <span><strong>Nombre: </strong>${firstname} ${secondname}</span>
                <br/>
                <span><strong>Correo: </strong>${email}</span>
                <br/>
                <span><strong>Mensaje: </strong> ${message}</span>`,
        //text: `"Nombre: ${name} \nCorreo: ${email} \nMensaje: ${message}"`,
    });

    await transporter.sendMail({
        from: `"Daniel Desarrollador Web" <daniel20025febrero29@gmail.com>`,
        to: `"${email}"`,
        subject: "Gracias por contactarme 😉",
        html: ` <h4> Hola ${firstname}, espero estes bien.</h4>
                <h4> Gracias por contactarme desde mi portafolio, te responderé lo antes posible. 🫡</h4>`,
        //text: `"Nombre: ${name} \nCorreo: ${email} \nMensaje: ${message}"`,
    });

    return `Message sent: %s" ${my.messageId}`;
}


export const sendEmail = async (req, res) => {
    const { firstname, secondname, email, message } = req.body;
    const send = await main(firstname, secondname, email, message)
    res.send(send)
}
