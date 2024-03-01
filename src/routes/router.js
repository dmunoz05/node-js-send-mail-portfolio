import express from 'express'
import { sendEmail } from '../controller/email.controller.js'

const routes = express.Router()

routes.post('/send/mail', sendEmail)

export default routes