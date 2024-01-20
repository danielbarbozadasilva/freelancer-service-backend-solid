import { CategoryDBRepository } from '../../repositories/implementations/CategoryDBRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

const mongoUserRepository = new CategoryDBRepository()
const createCategoryUseCase = new CreateCategoryUseCase(mongoUserRepository)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryUseCase, createCategoryController }
