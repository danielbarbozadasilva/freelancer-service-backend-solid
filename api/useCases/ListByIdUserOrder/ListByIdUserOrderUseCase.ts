import { IOrderRepository } from '../../repositories/IOrderRepository'
import { IOrderRequestDTO } from './ListByIdUserOrderDTO'

export class ListByIdOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(data: IOrderRequestDTO) {
    return await this.orderRepository.listByIdUserOrders(data)
  }
}
