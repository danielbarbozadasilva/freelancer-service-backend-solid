import express from 'express'
import { createConnection } from './database/client'
import { router } from './routers/router'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '../docs/swagger.json'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

createConnection()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use('/static', express.static(`${__dirname}/..` + `/api/utils/files`))
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

export { app }
