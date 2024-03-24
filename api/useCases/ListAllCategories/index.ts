import { CategoryDBRepository } from '../../repositories/implementations/CategoryDBRepository'
import { ListAllCategoriesController } from './ListAllCategoriesController'
import { ListAllCategoriesUseCase } from './ListAllCategoriesUseCase'

const mongoUserRepository = new CategoryDBRepository()
const listAllCategoriesUseCase = new ListAllCategoriesUseCase(mongoUserRepository)
const listAllCategoriesController = new ListAllCategoriesController(listAllCategoriesUseCase)

export { listAllCategoriesUseCase, listAllCategoriesController }
