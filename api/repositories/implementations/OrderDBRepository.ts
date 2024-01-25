import { Order } from '../../entities/Order'
import { IOrderRepository } from '../IOrderRepository'
import orderSchema from '../../database/schemas/schemas.order'
import productschemas from '../../database/schemas/schemas.product'
import Stripe from 'stripe'

export interface IListOrder {
  isSeller: boolean
  userId: string
}

export class OrderDBRepository implements IOrderRepository {
  async createPaymentIntent(productId: string, buyerId: string): Promise<string> {
      const stripe = new Stripe(process.env.STRIPE)
      const product = await productschemas.findById(productId)

      const paymentIntent = await stripe.paymentIntents.create({
        amount: product.price * 100,
        currency: 'usd',
        automatic_payment_methods: {
          enabled: true
        }
      })

      await orderSchema.create({
        productId: product._id,
        title: product.title,
        price: product.price,
        userId: product.userId,
        buyerId: buyerId,
        isCompleted: false,
        payment_intent: paymentIntent.id
      })

      return paymentIntent.client_secret
  }

  async listAllOrders(data: IListOrder): Promise<Order[]> {
      const result = await orderSchema.find({
        ...(data.isSeller
          ? { sellerId: data.userId }
          : { buyerId: data.userId }),
        isCompleted: true
      })
      return result
  }

  async updateOrder(dataOrder: Order): Promise<boolean> {
      const orders = await orderSchema.findOneAndUpdate(
        {
          payment_intent: dataOrder.payment_intent
        },
        {
          $set: {
            isCompleted: true
          }
        }
      )
      return !!orders
  }
}
