import { CategoryDBRepository } from '../../repositories/implementations/CategoryDBRepository'
import { DeleteCategoryController } from './DeleteCategoryController'
import { DeleteCategoryUseCase } from './DeleteCategoryUseCase'

const mongoUserRepository = new CategoryDBRepository()
const deleteCategoryUseCase = new DeleteCategoryUseCase(mongoUserRepository)
const deleteCategoryController = new DeleteCategoryController(deleteCategoryUseCase)

export { deleteCategoryUseCase, deleteCategoryController }
