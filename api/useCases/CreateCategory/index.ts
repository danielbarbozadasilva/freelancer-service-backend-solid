import { CategoryDBRepository } from '../../repositories/implementations/CategoryDBRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'
import S3Storage from '../../providers/implementations/S3Storage'

const mongoUserRepository = new CategoryDBRepository()
const s3 = new S3Storage()
const createCategoryUseCase = new CreateCategoryUseCase(mongoUserRepository, s3)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryUseCase, createCategoryController }
