import { Request, Response, Router, NextFunction } from 'express';
import routersV1Auth from './v1/routers.auth'
import routersV1Conversation from './v1/routers.conversation'
import routersV1User from './v1/routers.user'
import routersV1Category from './v1/routers.category'
import routersV1Gig from './v1/routers.gig'
import { formatError } from '../utils/exceptions/errors.handler'

const version = '1.0'
const name = 'Freelance'

export = (app: Router): void => {
    app.get('/', (res: Response) => {
    res.send({ name, version })
  })

  const routesV1 = Router()

  routersV1Auth(routesV1)
  routersV1Conversation(routesV1)
  routersV1User(routesV1)
  routersV1Category(routesV1)
  routersV1Gig(routesV1)

  app.use('/v1', routesV1)

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    formatError(err, res)
  })
}
