import { Router } from 'express'
import { createConversationController } from '../../useCases/CreateConversation'
import { listAllConversationController } from '../../useCases/ListAllConversation'
import { listByIdConversationController } from '../../useCases/ListSingleConversation'
import { updateConversationController } from '../../useCases/UpdateConversation'
import authenticationMiddleware from '../../utils/middlewares/middlewares.authentication'

export default (router: Router): void => {
  router.route('/conversation').post((request, response) => {
    authenticationMiddleware(request)
    createConversationController.handle(request, response)
  })
  router.route('/conversation/userid/:userId/isseller/:isSeller').get((request, response) => {
    authenticationMiddleware(request)
    listAllConversationController.handle(request, response)
  })
  router.route('/conversation/userId/:userId/buyerId/:buyerId').get((request, response) => {
    authenticationMiddleware(request)
    listByIdConversationController.handle(request, response)
  })
  router.route('/conversation/:id').put((request, response) => {
    authenticationMiddleware(request)
    updateConversationController.handle(request, response)
  })
}
