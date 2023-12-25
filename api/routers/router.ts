import { Router } from 'express'
import routersV1Auth from './v1/routers.auth'
import routersV1Conversation from './v1/routers.conversation'

const router = Router()
routersV1Auth(router)
routersV1Conversation(router)

export { router }
