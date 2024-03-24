import { Router } from 'express'
import { listAllProductsController } from '../../useCases/ListAllProducts'
import { updateProductController } from '../../useCases/UpdateProduct'
import { listByIdProductController } from '../../useCases/ListByIdProduct'
import { createProductController } from '../../useCases/CreateProduct'
import { deleteProductController} from '../../useCases/DeleteProduct'
import fileUpload from '../../utils/multer'
import authorizationMiddleware from '../../utils/middlewares/AuthorizationMiddleware'
import { productValidation } from '../../validations'
import authenticationMiddleware from '../../utils/middlewares/AuthenticationMiddleware'

export default (router: Router): void => {
  router.route('/product').post(fileUpload.array('files', 5), (request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'CREATE-PRODUCT')
    productValidation.productValidation(request)
    createProductController.handle(request, response)
  })
  router.route('/product/:id').put(fileUpload.array('files', 5), (request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'UPDATE-PRODUCT')
    productValidation.productValidation(request)
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
    authorizationMiddleware(request, 'DELETE-PRODUCT')
    deleteProductController.handle(request, response)
  })
}
