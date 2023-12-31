import { CategoryDBRepository } from '../../repositories/implementations/CategoryDBRepository'
import { UpdateCategoryController } from './UpdateCategoryController'
import { UpdateCategoryUseCase } from './UpdateCategoryUseCase'

const mongoUserRepository = new CategoryDBRepository()
const updateCategoryUseCase = new UpdateCategoryUseCase(mongoUserRepository)
const updateCategoryController = new UpdateCategoryController(updateCategoryUseCase)

export { updateCategoryUseCase, updateCategoryController }
