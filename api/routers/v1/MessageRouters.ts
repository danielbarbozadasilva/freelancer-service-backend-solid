import { Router } from 'express'
import { createMessageController } from '../../useCases/CreateMessage'
import { listMessageController } from '../../useCases/ListMessage'
import authenticationMiddleware from '../../utils/middlewares/AuthenticationMiddleware'

export default (router: Router): void => {
  router.route('/message').post((request, response) => {
    authenticationMiddleware(request)
    createMessageController.handle(request, response)
  })
  router.route('/message/:id').get((request, response) => {
    authenticationMiddleware(request)
    listMessageController.handle(request, response)
  })
}
