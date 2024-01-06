import { Router } from 'express'
import { createConversationController } from '../../useCases/CreateConversation'
import { listAllConversationController } from '../../useCases/ListAllConversation'
import { listByIdConversationController } from '../../useCases/ListSingleConversation'
import { updateConversationController } from '../../useCases/UpdateConversation'
import authenticationMiddleware from '../../utils/middlewares/middlewares.authentication'

export default (router: Router): void => {
  // router.route('/conversation').post(authenticationMiddleware,(request, response) => {
  //   createConversationController.handle(request, response)
  // })
  router.route('/conversation').get((request, response) => {
    authenticationMiddleware(request)
    listAllConversationController.handle(request, response)
  })
  // router.route('/conversation/single/:id').get(authenticationMiddleware, (request, response) => {
  //   listByIdConversationController.handle(request, response)
  // })
  // router.route('/conversation/:id').put(authenticationMiddleware,(request, response) => {
  //   updateConversationController.handle(request, response)
  // })
}
