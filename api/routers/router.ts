import { Router } from 'express'
import routersV1Auth from './v1/routers.auth'
import routersV1Conversation from './v1/routers.conversation'
import routersV1User from './v1/routers.user'
import routersV1Category from './v1/routers.category'

const router = Router()
routersV1Auth(router)
routersV1Conversation(router)
routersV1User(router)
routersV1Category(router)

export { router }
