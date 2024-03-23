import { Router } from 'express'
import { createConversationController } from '../../useCases/CreateConversation'
import { listAllConversationController } from '../../useCases/ListAllConversation'
import { listByIdConversationController } from '../../useCases/ListSingleConversation'
import { updateConversationController } from '../../useCases/UpdateConversation'
import authorizationMiddleware from '../../utils/middlewares/AuthorizationMiddleware'
import { conversationValidation } from '../../validations'
import authenticationMiddleware from '../../utils/middlewares/AuthenticationMiddleware'

export default (router: Router): void => {
  router.route('/conversation').post((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'CREATE-CONVERSATION')
    conversationValidation.conversationValidation(request)
    createConversationController.handle(request, response)
  })
  router.route('/conversation/userid/:userId/isseller/:isSeller').get((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'LIST-CONVERSATION')
    listAllConversationController.handle(request, response)
  })
  router.route('/conversation/userId/:userId/buyerId/:buyerId').get((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'LIST-CONVERSATION')
    listByIdConversationController.handle(request, response)
  })
  router.route('/conversation/:id').put((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'UPDATE-CONVERSATION')
    updateConversationController.handle(request, response)
  })
}
