import { Router } from 'express'
import { listAllUsersController } from '../../useCases/ListAllUsers'

export default (router: Router): void => {
  router.route('/users').get((request, response) => {
    listAllUsersController.handle(request, response)
  })
}
