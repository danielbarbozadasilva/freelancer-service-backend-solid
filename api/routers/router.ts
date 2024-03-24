import { Request, Response, Router, NextFunction } from 'express';
import routersV1Auth from './v1/AuthRouters'
import routersV1Conversation from './v1/ConversationRouters'
import routersV1User from './v1/UserRouters'
import routersV1Category from './v1/CategoryRouters'
import routersV1Product from './v1/ProductRouters'
import routersV1Message from './v1/MessageRouters'
import routersV1Orders from './v1/OrderRouters'
import routersV1Rating from './v1/RatingRouters'
import { formatError } from '../utils/exceptions/ErrorHandler'

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
  routersV1Product(routesV1)
  routersV1Message(routesV1)
  routersV1Orders(routesV1)
  routersV1Rating(routesV1)

  app.use('/v1', routesV1)

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    formatError(err, res)
  })
}
