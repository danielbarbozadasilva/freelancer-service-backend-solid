import { ProductDBRepository } from '../../repositories/implementations/ProductDBRepository'
import { DeleteProductController } from './DeleteProductController'
import { DeleteProductUseCase } from './DeleteProductUseCase'

const mongoUserRepository = new ProductDBRepository()
const deleteProductUseCase = new DeleteProductUseCase(mongoUserRepository)
const deleteProductController = new DeleteProductController(deleteProductUseCase)

export { deleteProductUseCase, deleteProductController }
