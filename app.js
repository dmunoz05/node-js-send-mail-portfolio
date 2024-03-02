import routes from './src/routes/router.js'
import express from 'express'
import dotenv from './config.js'
import cors from 'cors'

dotenv.config()

const optionCors = {
    origin: '*',
    optionsSuccessStatus: 200,
}

const app = express()

app.use(cors(optionCors))

app.use(express.json())

app.use(routes)

export default app