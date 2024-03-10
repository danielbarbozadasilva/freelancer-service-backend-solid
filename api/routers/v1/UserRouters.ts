import { Router } from 'express'
import { listAllUsersController } from '../../useCases/ListAllUsers'
import { listByIdUserController } from '../../useCases/ListByIdUser'
import { deleteUserController } from '../../useCases/DeleteUser'
import { updateProfileController } from '../../useCases/UpdateProfile'
import { updateSellerController } from '../../useCases/UpdateSeller'
import fileUpload from '../../utils/file'

export default (router: Router): void => {
  router.route('/user').get((request, response) => {
    listAllUsersController.handle(request, response)
  })
  router.route('/user/:id').get((request, response) => {
    listByIdUserController.handle(request, response)
  })
  router.route('/user/:id').delete((request, response) => {
    deleteUserController.handle(request, response)
  })
  router.route('/user/:id').put(fileUpload.single('files'),(request, response) => {
    updateProfileController.handle(request, response)
  })
  router.route('/user/:id/seller').put((request, response) => {
    updateSellerController.handle(request, response)
  })
}
