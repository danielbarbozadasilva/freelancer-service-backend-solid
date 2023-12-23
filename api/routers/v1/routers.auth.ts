import { Router } from 'express'
import { registerController } from '../../useCases/Register'
import { signInController } from '../../useCases/SignIn'

export default (router: Router): void => {
  router.route('/auth').post((request, response) => {
    signInController.handle(request, response)
  })

  router.route('/register').post((request, response) => {
    registerController.handle(request, response)
  })
}
