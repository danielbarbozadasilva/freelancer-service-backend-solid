import { ProductDBRepository } from '../../repositories/implementations/ProductDBRepository'
import { UpdateProductController } from './UpdateProductController'
import { UpdateProductUseCase } from './UpdateProductUseCase'

const mongoUserRepository = new ProductDBRepository()
const updateProductUseCase = new UpdateProductUseCase(mongoUserRepository)
const updateProductController = new UpdateProductController(updateProductUseCase)

export { updateProductUseCase, updateProductController }
