import { ProductDBRepository } from '../../repositories/implementations/ProductDBRepository'
import { CreateProductController } from './CreateProductController'
import { CreateProductUseCase } from './CreateProductUseCase'
import S3Storage from '../../providers/implementations/S3Storage'

const mongoUserRepository = new ProductDBRepository()
const s3 = new S3Storage()
const createProductUseCase = new CreateProductUseCase(mongoUserRepository, s3)
const createProductController = new CreateProductController(createProductUseCase)

export { createProductUseCase, createProductController }
