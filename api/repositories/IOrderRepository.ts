import { Order } from '../entities/Order'

export interface IListOrder{
  isSeller?: boolean
  userId?: string
}

export interface IOrderRepository {
  createPaymentIntent(productId: string, buyerId: string, description: string): Promise<string>
  listAllOrders(): Promise<Order[]>
  listByIdUserOrders(data: IListOrder): Promise<any>
  updateOrder(order: Order): Promise<any>
}
