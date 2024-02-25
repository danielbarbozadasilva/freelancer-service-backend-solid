import { Router } from 'express'
import { deleteRatingController } from '../../useCases/DeleteRating'
import { updateRatingController } from '../../useCases/UpdateRating'
import { createRatingController } from '../../useCases/CreateRating'
import { listByIdRatingController} from '../../useCases/ListByIdRating'

export default (router: Router): void => {
  router.route('/rating/product/:productid').get((request, response) => {
    listByIdRatingController.handle(request, response)
  })
  router.route('/rating/:id').put((request, response) => {
    updateRatingController.handle(request, response)
  })
  router.route('/rating/:id').delete((request, response) => {
    deleteRatingController.handle(request, response)
  })
  router.route('/rating').post((request, response) => {
    createRatingController.handle(request, response)
  })
}
