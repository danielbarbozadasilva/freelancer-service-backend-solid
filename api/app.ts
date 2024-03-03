import express from 'express'
import 'express-async-errors'
import { createConnection } from './database/client'
import router from './routers/router'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '../docs/swagger.json'
import cors from 'cors'

const app = express()

createConnection()

app.use(express.json())
app.use(cors())
app.use('/static', express.static(`${__dirname}/..` + `/api/utils/files`))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
router(app)

export { app }
