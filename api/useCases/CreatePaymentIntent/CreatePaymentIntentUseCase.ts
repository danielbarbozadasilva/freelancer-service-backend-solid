import { Order } from '../../entities/Order'
import { IOrderRepository } from '../../repositories/IOrderRepository'
import { ICreatePaymentIntentRequestDTO } from './CreatePaymentIntentDTO'

export class CreatePaymentIntentUseCase {
  constructor(private categoryRepository: IOrderRepository) {}

  async execute(data: ICreatePaymentIntentRequestDTO) {
    const result = new Order(data)
    return this.categoryRepository.createPaymentIntent(result.productId, result.buyerId)
  }
}
