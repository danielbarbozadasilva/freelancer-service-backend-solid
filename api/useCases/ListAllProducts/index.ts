import {  ProductDBRepository } from '../../repositories/implementations/ProductDBRepository'
import { ListAllProductController } from './ListAllProductsController'
import { ListAllProductUseCase } from './ListAllProductsUseCase'

const mongoUserRepository = new ProductDBRepository()
const listAllProductsUseCase = new ListAllProductUseCase(mongoUserRepository)
const listAllProductsController = new ListAllProductController(listAllProductsUseCase)

export { listAllProductsUseCase, listAllProductsController }
