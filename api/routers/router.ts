import { Router } from 'express'
import routersV1Auth from './v1/routers.auth'

const router = Router()
routersV1Auth(router)

export { router }
