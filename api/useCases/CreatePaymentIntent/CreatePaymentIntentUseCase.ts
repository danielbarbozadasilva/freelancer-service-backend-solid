import { IOrderRepository } from '../../repositories/IOrderRepository'
import { ICreatePaymentIntentRequestDTO } from './CreatePaymentIntentDTO'

export class CreatePaymentIntentUseCase {
  constructor(private categoryRepository: IOrderRepository) {}

  async execute(data: ICreatePaymentIntentRequestDTO) {
    return await this.categoryRepository.createPaymentIntent(data.productId, data.buyerId, data.description)
  }
}
