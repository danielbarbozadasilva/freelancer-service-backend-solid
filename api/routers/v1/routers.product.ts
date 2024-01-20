import { Router } from 'express'
import { listAllProductsController } from '../../useCases/ListAllProducts'
import { updateProductController } from '../../useCases/UpdateProduct'
import { listByIdProductController } from '../../useCases/ListByIdProduct'
import { createProductController } from '../../useCases/CreateProduct'
import { deleteProductController} from '../../useCases/DeleteProduct'
import fileUpload from '../../utils/utils.file'
import authenticationMiddleware from '../../utils/middlewares/middlewares.authentication'

export default (router: Router): void => {
  router.route('/product').post(fileUpload.single('files'), (request, response) => {
    authenticationMiddleware(request)
    createProductController.handle(request, response)
  })
  router.route('/product/:id').put(fileUpload.single('files'), (request, response) => {
    authenticationMiddleware(request)
    updateProductController.handle(request, response)
  })
  router.route('/product').get((request, response) => {
    listAllProductsController.handle(request, response)
  })
  router.route('/product/:id').get((request, response) => {
    listByIdProductController.handle(request, response)
  })
  router.route('/product/:id').delete((request, response) => {
    authenticationMiddleware(request)
    deleteProductController.handle(request, response)
  })
}