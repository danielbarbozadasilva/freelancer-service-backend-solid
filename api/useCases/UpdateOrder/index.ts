import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider'
import { OrderDBRepository } from '../../repositories/implementations/OrderDBRepository'
import { UpdateOrderController } from './UpdateOrderController'
import { UpdateOrderUseCase } from './UpdateOrderUseCase'

const mailtrapMailProvider = new MailtrapMailProvider()
const mongoUserRepository = new OrderDBRepository()
const updateOrderUseCase = new UpdateOrderUseCase(mongoUserRepository, mailtrapMailProvider)
const updateOrderController = new UpdateOrderController(updateOrderUseCase)

export { updateOrderUseCase, updateOrderController }
