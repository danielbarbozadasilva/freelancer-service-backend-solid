import { Router } from 'express'
import { listAllOrdersController } from '../../useCases/ListAllOrders'
import { updateProductController } from '../../useCases/UpdateProduct'
import { createProductController } from '../../useCases/CreateProduct'
import authenticationMiddleware from '../../utils/middlewares/middlewares.authentication'

export default (router: Router): void => {
  router.route('/order/create-payment-intent/:id').post((request, response) => {
    authenticationMiddleware(request)
    createProductController.handle(request, response)
  })
  router.route('/order/:id').put((request, response) => {
    authenticationMiddleware(request)
    updateProductController.handle(request, response)
  })
  router.route('/order').get((request, response) => {
    authenticationMiddleware(request)
    listAllOrdersController.handle(request, response)
  })
}
