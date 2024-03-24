import { Router } from 'express'
import { listAllUsersController } from '../../useCases/ListAllUsers'
import { listByIdUserController } from '../../useCases/ListByIdUser'
import { deleteUserController } from '../../useCases/DeleteUser'
import { updateProfileController } from '../../useCases/UpdateProfile'
import { updateSellerController } from '../../useCases/UpdateSeller'
import fileUpload from '../../utils/multer'
import { registerValidation } from '../../validations'
import authorizationMiddleware from '../../utils/middlewares/AuthorizationMiddleware'
import authenticationMiddleware from '../../utils/middlewares/AuthenticationMiddleware'

export default (router: Router): void => {
  router.route('/user').get((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'LIST-USERS')
    listAllUsersController.handle(request, response)
  })
  router.route('/user/:id').get((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'LIST-USER')
    listByIdUserController.handle(request, response)
  })
  router.route('/user/:id').delete((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'DELETE-USER')
    deleteUserController.handle(request, response)
  })
  router.route('/user/:id').put(fileUpload.single('files'),(request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'UPDATE-USER')
    registerValidation.registerValidation(request)
    updateProfileController.handle(request, response)
  })
  router.route('/user/:id/seller').put((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'UPDATE-USER')
    updateSellerController.handle(request, response)
  })
}
