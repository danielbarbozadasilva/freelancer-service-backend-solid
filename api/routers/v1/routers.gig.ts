import { Router } from 'express'
import { listAllGigsController } from '../../useCases/ListAllGigs'
import { updateGigController } from '../../useCases/UpdateGig'
import { listByIdGigController } from '../../useCases/ListByIdGig'
import { createGigController } from '../../useCases/CreateGig'
import { deleteGigController} from '../../useCases/DeleteGig'
import fileUpload from '../../utils/utils.file'
import authenticationMiddleware from '../../utils/middlewares/middlewares.authentication'

export default (router: Router): void => {
  router.route('/gig').post(fileUpload.single('files'), (request, response) => {
    authenticationMiddleware(request)
    createGigController.handle(request, response)
  })
  router.route('/gig/:id').put(fileUpload.single('files'), (request, response) => {
    authenticationMiddleware(request)
    updateGigController.handle(request, response)
  })
  router.route('/gig').get((request, response) => {
    authenticationMiddleware(request)
    listAllGigsController.handle(request, response)
  })
  router.route('/gig/:id').get((request, response) => {
    authenticationMiddleware(request)
    listByIdGigController.handle(request, response)
  })
  router.route('/gig/:id').delete((request, response) => {
    authenticationMiddleware(request)
    deleteGigController.handle(request, response)
  })
}
