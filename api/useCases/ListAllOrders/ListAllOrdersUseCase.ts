import { Order } from '../../entities/Order'
import { IOrderRepository } from '../../repositories/IOrderRepository'
import { IOrdersRequestDTO } from './ListAllOrdersDTO'

export class ListAllOrdersUseCase {
  constructor(private orderRepository: IOrderRepository) {}

    async execute(data: IOrdersRequestDTO) {
      const result = new Order(data)
      return this.orderRepository.listAllOrders(result)
  }
}
