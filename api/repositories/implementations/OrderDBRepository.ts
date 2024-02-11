import { Order } from '../../entities/Order'
import { IOrderRepository } from '../IOrderRepository'
import orderSchema from '../../database/schemas/schemas.order'
import productschemas from '../../database/schemas/schemas.product'
import Stripe from 'stripe'
import { IOrderResultDTO } from '../../useCases/ListByIdUserOrder/ListByIdUserOrderDTO'

export interface IListOrder {
  isSeller: boolean
  userId: string
}

export class OrderDBRepository implements IOrderRepository {
  async createPaymentIntent(productId: string, buyerId: string): Promise<any> {
    const stripe = new Stripe(process.env.STRIPE)
    const product = await productschemas.findById(productId)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: product.price * 100,
      currency: 'brl',
      automatic_payment_methods: {
        enabled: true
      }
    })

    await orderSchema.create({
      productId: product._id,
      title: product.title,
      description: 'Em andamento',
      price: product.price,
      userId: product.userId,
      buyerId: buyerId,
      isCompleted: false,
      payment_intent: paymentIntent.id
    })
   
    return paymentIntent.client_secret
  }

  async listAllOrders(): Promise<Order[]> {
    const result = await orderSchema.find({})
    return result
  }

  async listByIdUserOrders(data: IListOrder): Promise<any> {
    const result = await orderSchema
      .find({
        ...(data.isSeller
          ? { sellerId: data.userId }
          : { buyerId: data.userId }),
        isCompleted: true
      })
      .populate('userId', '-hash -salt')
      .populate('buyerId', '-hash -salt')
      .populate('productId')

    return result
  }

  async updateOrder(dataOrder: Order): Promise<boolean> {
    const orders = await orderSchema.findOneAndUpdate(
      {
        payment_intent: dataOrder.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
          description: 'Finalizada'
        }
      }
    )
    return !!orders
  }
}
