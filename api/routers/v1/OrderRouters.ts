import { Router } from 'express'
import { listAllOrdersController } from '../../useCases/ListAllOrders'
import { updateOrderController } from '../../useCases/UpdateOrder'
import { createPaymentIntentController } from '../../useCases/CreatePaymentIntent'
import { listByIdOrderController } from '../../useCases/ListByIdUserOrder'
import authorizationMiddleware from '../../utils/middlewares/AuthorizationMiddleware'
import { orderValidation } from '../../validations'
import authenticationMiddleware from '../../utils/middlewares/AuthenticationMiddleware'

export default (router: Router): void => {
  router.route('/order/create-payment-intent/:id').post((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'CREATE-PAYMENT')
    orderValidation.orderValidation(request)
    createPaymentIntentController.handle(request, response)
  })
  router.route('/order/:id').put((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'UPDATE-ORDER')
    updateOrderController.handle(request, response)
  })
  router.route('/order/:id/isSeller/:isSeller').get((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'LIST-ORDER')
    listByIdOrderController.handle(request, response)
  })
  router.route('/order').get((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'LIST-ORDER')
    listAllOrdersController.handle(request, response)
  })
}
