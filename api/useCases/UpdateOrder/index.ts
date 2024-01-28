import { OrderDBRepository } from '../../repositories/implementations/OrderDBRepository'
import { UpdateOrderController } from './UpdateOrderController'
import { UpdateOrderUseCase } from './UpdateOrderUseCase'

const mongoUserRepository = new OrderDBRepository()
const updateOrderUseCase = new UpdateOrderUseCase(mongoUserRepository)
const updateOrderController = new UpdateOrderController(updateOrderUseCase)

export { updateOrderUseCase, updateOrderController }
