import { Router } from 'express'
import { registerController } from '../../useCases/Register'
import { signInController } from '../../useCases/SignIn'
import fileUpload from '../../utils/utils.file'

export default (router: Router): void => {
  router.route('/auth').post((request, response) => {
    signInController.handle(request, response)
  })

  router.route('/register').post(fileUpload.single('files'),(request, response) => {
    registerController.handle(request, response)
  })
}
