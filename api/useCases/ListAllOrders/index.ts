import { OrderDBRepository } from '../../repositories/implementations/OrderDBRepository'
import { ListAllOrdersController } from './ListAllOrdersController'
import { ListAllOrdersUseCase } from './ListAllOrdersUseCase'

const mongoUserRepository = new OrderDBRepository()
const listAllOrdersUseCase = new ListAllOrdersUseCase(mongoUserRepository)
const listAllOrdersController = new ListAllOrdersController(listAllOrdersUseCase)

export { listAllOrdersUseCase, listAllOrdersController }
