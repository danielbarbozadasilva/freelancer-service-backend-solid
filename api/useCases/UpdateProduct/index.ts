import { ProductDBRepository } from '../../repositories/implementations/ProductDBRepository'
import { UpdateProductController } from './UpdateProductController'
import { UpdateProductUseCase } from './UpdateProductUseCase'
import S3Storage from '../../providers/implementations/S3Storage'

const mongoUserRepository = new ProductDBRepository()
const s3 = new S3Storage()
const updateProductUseCase = new UpdateProductUseCase(mongoUserRepository, s3)
const updateProductController = new UpdateProductController(updateProductUseCase)

export { updateProductUseCase, updateProductController }
