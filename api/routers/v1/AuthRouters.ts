import { Router } from 'express'
import { registerController } from '../../useCases/Register'
import { signInController } from '../../useCases/SignIn'
import fileUpload from '../../utils/file'
import { authValidation, registerValidation } from '../../validations'

export default (router: Router): void => {
  router.route('/auth').post((request, response) => {
    authValidation.authValidation(request)
    signInController.handle(request, response)
  })
  router
    .route('/register')
    .post(fileUpload.single('files'), (request, response) => {
      registerValidation.registerValidation(request)
      registerController.handle(request, response)
    })
}
