import { Order } from '../../entities/Order'
import { IOrderRepository } from '../../repositories/IOrderRepository'

export class UpdateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(data: any) {
    const result = new Order(data)
    return this.orderRepository.updateOrder(result)
  }
}
