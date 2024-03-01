import routes from './src/routes/router.js'
import express from 'express'
import dotenv from './config.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use(routes)

export default app