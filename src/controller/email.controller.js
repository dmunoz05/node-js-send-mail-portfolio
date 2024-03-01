import nodemailer from "nodemailer";
import { user, password } from "../environments/environments.js";

var user_ = user
var password_ = password

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: `${user_}`,
        pass: `${password_}`
    }
});;

async function main(message, subject, email, user, password) {
    console.log(user);
    console.log(password);
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: `"Contacto portafolio 👉👀" <${email}>`,
        to: "daniel20025febrero29@gmail.com",
        subject: `${subject} ✔`,
        text: message,
        //html: "<b>Hello world?</b>",
    });
    return `Message sent: %s" ${info.messageId}`;
}


export const sendEmail = async (req, res) => {
    const user =  process.env.USER;
    const password = process.env.PASSWORD;
    const { message, subject, email } = req.body;
    const send = await main(message, subject, email, user, password)
    res.send(send)
}
