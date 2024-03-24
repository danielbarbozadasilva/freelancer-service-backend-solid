import { IOrderRepository } from '../../repositories/IOrderRepository'

export class ListAllOrdersUseCase {
  constructor(private orderRepository: IOrderRepository) {}

    async execute() {
      return await this.orderRepository.listAllOrders()
  }
}
