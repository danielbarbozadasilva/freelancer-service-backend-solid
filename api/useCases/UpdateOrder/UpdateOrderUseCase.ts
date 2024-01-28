import { Order } from '../../entities/Order'
import { IOrderRepository } from '../../repositories/IOrderRepository'
import { IUpdateOrderUseCaseDTO } from './UpdateOrderIntentDTO'

export class UpdateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(data: IUpdateOrderUseCaseDTO) {
    const result = new Order(data)
    return this.orderRepository.updateOrder(result)
  }
}
