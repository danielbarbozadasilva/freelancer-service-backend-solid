import { OrderDBRepository } from '../../repositories/implementations/OrderDBRepository'
import { ListByIdOrderController } from './ListByIdUserOrderController'
import { ListByIdOrderUseCase } from './ListByIdUserOrderUseCase'

const mongoUserRepository = new OrderDBRepository()
const listByIdOrderUseCase = new ListByIdOrderUseCase(mongoUserRepository)
const listByIdOrderController = new ListByIdOrderController(listByIdOrderUseCase)

export { listByIdOrderUseCase, listByIdOrderController }
