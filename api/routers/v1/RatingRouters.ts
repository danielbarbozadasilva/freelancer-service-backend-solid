import { Router } from 'express'
import { deleteRatingController } from '../../useCases/DeleteRating'
import { updateRatingController } from '../../useCases/UpdateRating'
import { createRatingController } from '../../useCases/CreateRating'
import { listByIdRatingController} from '../../useCases/ListByIdRating'
import { ratingValidation } from '../../validations'
import authorizationMiddleware from '../../utils/middlewares/AuthorizationMiddleware'
import authenticationMiddleware from '../../utils/middlewares/AuthenticationMiddleware'

export default (router: Router): void => {
  router.route('/rating/product/:productid').get((request, response) => {
    listByIdRatingController.handle(request, response)
  })
  router.route('/rating/:id').put((request, response) => {
    ratingValidation.ratingValidation(request)
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'UPDATE-RATING')
    updateRatingController.handle(request, response)
  })
  router.route('/rating/:id').delete((request, response) => {
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'DELETE-RATING')
    deleteRatingController.handle(request, response)
  })
  router.route('/rating').post((request, response) => {
    ratingValidation.ratingValidation(request)
    authenticationMiddleware(request)
    authorizationMiddleware(request, 'CREATE-RATING')
    createRatingController.handle(request, response)
  })
}
