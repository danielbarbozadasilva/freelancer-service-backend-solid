import { CategoryDBRepository } from '../../repositories/implementations/CategoryDBRepository'
import { ListByIdCategoryController } from './ListByIdCategoryController'
import { ListByIdCategoryUseCase } from './ListByIdCategoryUseCase'

const mongoUserRepository = new CategoryDBRepository()
const listByIdCategoryUseCase = new ListByIdCategoryUseCase(mongoUserRepository)
const listByIdCategoryController = new ListByIdCategoryController(listByIdCategoryUseCase)

export { listByIdCategoryUseCase, listByIdCategoryController }
