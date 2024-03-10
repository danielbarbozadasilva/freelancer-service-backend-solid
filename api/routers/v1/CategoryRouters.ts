import { Router } from 'express'
import { createCategoryController } from '../../useCases/CreateCategory'
import { updateCategoryController } from '../../useCases/UpdateCategory'
import { listAllCategoriesController } from '../../useCases/ListAllCategories'
import { listByIdCategoryController } from '../../useCases/ListByIdCategory'
import { deleteCategoryController } from '../../useCases/DeleteCategory'
import fileUpload from '../../utils/file'
import { categoryValidation } from '../../validations'

export default (router: Router): void => {
  router.route('/category').post(fileUpload.single('files'), (request, response) => {
    categoryValidation.createCategoryValidation(request)
    createCategoryController.handle(request, response)
  })
  router.route('/category/:id').put(fileUpload.single('files'), (request, response) => {
    categoryValidation.idCategoryValidation(request)
    updateCategoryController.handle(request, response)
  })
  router.route('/category').get((request, response) => {
    listAllCategoriesController.handle(request, response)
  })
  router.route('/category/:id').get((request, response) => {
    categoryValidation.idCategoryValidation(request)
    listByIdCategoryController.handle(request, response)
  })
  router.route('/category/:id').delete((request, response) => {
    categoryValidation.idCategoryValidation(request)
    deleteCategoryController.handle(request, response)
  })
}
