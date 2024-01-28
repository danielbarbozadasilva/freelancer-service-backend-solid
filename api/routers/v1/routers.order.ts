import { Router } from 'express'
import { listAllOrdersController } from '../../useCases/ListAllOrders'
import { updateOrderController } from '../../useCases/UpdateOrder'
import { createPaymentIntentController } from '../../useCases/CreatePaymentIntent'
import authenticationMiddleware from '../../utils/middlewares/middlewares.authentication'

export default (router: Router): void => {
  router.route('/order/create-payment-intent/:id').post((request, response) => {
    authenticationMiddleware(request)
    createPaymentIntentController.handle(request, response)
  })
  router.route('/order/:id').put((request, response) => {
    authenticationMiddleware(request)
    updateOrderController.handle(request, response)
  })
  router.route('/order').get((request, response) => {
    authenticationMiddleware(request)
    listAllOrdersController.handle(request, response)
  })
}
