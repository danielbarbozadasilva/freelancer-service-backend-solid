import { Router } from 'express'
import { createConversationController } from '../../useCases/CreateConversation'

export default (router: Router): void => {
  router.route('/conversation').post((request, response) => {
    createConversationController.handle(request, response)
  })
}
