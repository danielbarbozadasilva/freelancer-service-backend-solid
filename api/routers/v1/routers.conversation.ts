import { Router } from 'express'
import { createConversationController } from '../../useCases/CreateConversation'
import { listAllConversationController } from '../../useCases/ListAllConversation'
import { listByIdConversationController } from '../../useCases/ListSingleConversation'
import { updateConversationController } from '../../useCases/UpdateConversation'

export default (router: Router): void => {
  router.route('/conversation').post((request, response) => {
    createConversationController.handle(request, response)
  })
  router.route('/conversation').get((request, response) => {
    listAllConversationController.handle(request, response)
  })
  router.route('/conversation/single/:id').get((request, response) => {
    listByIdConversationController.handle(request, response)
  })
  router.route('/conversation/:id').put((request, response) => {
    updateConversationController.handle(request, response)
  })
}
