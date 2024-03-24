import { CategoryDBRepository } from '../../repositories/implementations/CategoryDBRepository'
import { UpdateCategoryController } from './UpdateCategoryController'
import { UpdateCategoryUseCase } from './UpdateCategoryUseCase'
import S3Storage from '../../providers/implementations/S3Storage'

const mongoUserRepository = new CategoryDBRepository()
const s3 = new S3Storage()
const updateCategoryUseCase = new UpdateCategoryUseCase(mongoUserRepository, s3)
const updateCategoryController = new UpdateCategoryController(updateCategoryUseCase)

export { updateCategoryUseCase, updateCategoryController }
