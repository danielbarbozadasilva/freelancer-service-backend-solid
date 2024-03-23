import { Router } from 'express'
import { createCategoryController } from '../../useCases/CreateCategory'
import { updateCategoryController } from '../../useCases/UpdateCategory'
import { listAllCategoriesController } from '../../useCases/ListAllCategories'
import { listByIdCategoryController } from '../../useCases/ListByIdCategory'
import { deleteCategoryController } from '../../useCases/DeleteCategory'
import fileUpload from '../../utils/multer'
import { categoryValidation } from '../../validations'
import authenticationMiddleware from '../../utils/middlewares/AuthenticationMiddleware'

export default (router: Router): void => {
  router.route('/category').post(fileUpload.single('files'), (request, response) => {
    authenticationMiddleware(request)
    categoryValidation.categoryValidation(request)
    createCategoryController.handle(request, response)
  })
  router.route('/category/:id').put(fileUpload.single('files'), (request, response) => {
    authenticationMiddleware(request)
    categoryValidation.categoryValidation(request)
    updateCategoryController.handle(request, response)
  })
  router.route('/category').get((request, response) => {
    listAllCategoriesController.handle(request, response)
  })
  router.route('/category/:id').get((request, response) => {
    listByIdCategoryController.handle(request, response)
  })
  router.route('/category/:id').delete((request, response) => {
    authenticationMiddleware(request)
    deleteCategoryController.handle(request, response)
  })
}
