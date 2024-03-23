import { Router } from 'express'
import { createMessageController } from '../../useCases/CreateMessage'
import { listMessageController } from '../../useCases/ListMessage'
import authorizationMiddleware from '../../utils/middlewares/AuthorizationMiddleware'
import { messageValidation } from '../../validations'
import authenticationMiddleware from '../../utils/middlewares/AuthenticationMiddleware'

export default (router: Router): void => {
  router.route('/message').post((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'CREATE-MESSAGE')
    messageValidation.messageValidation(request)
    createMessageController.handle(request, response)
  })
  router.route('/message/:id').get((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'LIST-MESSAGE')
    listMessageController.handle(request, response)
  })
}
