import { Order } from '../entities/Order'

export interface IListOrder{
  isSeller?: boolean
  userId?: string
}

export interface IOrderRepository {
  createPaymentIntent(productId: string, buyerId: string): Promise<string>
  listAllOrders(data: IListOrder): Promise<Order[]>
  updateOrder(order: Order): Promise<boolean>
}
