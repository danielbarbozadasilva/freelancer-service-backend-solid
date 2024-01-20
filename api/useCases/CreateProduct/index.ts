import { ProductDBRepository } from '../../repositories/implementations/ProductDBRepository'
import { CreateProductController } from './CreateProductController'
import { CreateProductUseCase } from './CreateProductUseCase'

const mongoUserRepository = new ProductDBRepository()
const createProductUseCase = new CreateProductUseCase(mongoUserRepository)
const createProductController = new CreateProductController(createProductUseCase)

export { createProductUseCase, createProductController }
