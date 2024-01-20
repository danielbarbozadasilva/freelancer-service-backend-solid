import { ProductDBRepository } from '../../repositories/implementations/ProductDBRepository'
import { ListByIdProductController } from './ListByIdProductController'
import { ListByIdProductUseCase } from './ListByIdProductUseCase'

const mongoUserRepository = new ProductDBRepository()
const listByIdProductUseCase = new ListByIdProductUseCase(mongoUserRepository)
const listByIdProductController = new ListByIdProductController(listByIdProductUseCase)

export { listByIdProductUseCase, listByIdProductController }
