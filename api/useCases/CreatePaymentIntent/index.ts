import { OrderDBRepository } from '../../repositories/implementations/OrderDBRepository'
import { CreatePaymentIntentController } from './CreatePaymentIntentController'
import { CreatePaymentIntentUseCase } from './CreatePaymentIntentUseCase'

const mongoUserRepository = new OrderDBRepository()
const createPaymentIntentUseCase = new CreatePaymentIntentUseCase(mongoUserRepository)
const createPaymentIntentController = new CreatePaymentIntentController(createPaymentIntentUseCase)

export { createPaymentIntentUseCase, createPaymentIntentController }
