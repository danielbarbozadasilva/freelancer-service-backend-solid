import { Order } from '../../entities/Order'
import { IOrderRepository } from '../IOrderRepository'
import orderSchema from '../../database/schemas/schemas.order'
import productschemas from '../../database/schemas/schemas.product'
import Stripe from 'stripe'
import mongoose from 'mongoose'

interface IListOrder {
  isSeller: boolean
  userId: string
}

export class OrderDBRepository implements IOrderRepository {
  async createPaymentIntent(
    productId: string,
    buyerId: string,
    description: string
  ): Promise<any> {
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
      description: description,
      status: 'Em andamento',
      price: product.price,
      userId: product.userId,
      buyerId: buyerId,
      isCompleted: false,
      payment_intent: paymentIntent.id
    })

    return paymentIntent.client_secret
  }

  async listAllOrders(): Promise<Order[]> {
    const result = await orderSchema.aggregate([
      {
        $lookup: {
          from: 'productschemas',
          localField: 'productId',
          foreignField: '_id',
          as: 'product'
        }
      },
      {
        $lookup: {
          from: 'userschemas',
          localField: 'buyerId',
          foreignField: '_id',
          as: 'buyer'
        }
      },
      {
        $lookup: {
          from: 'userschemas',
          localField: 'userId',
          foreignField: '_id',
          as: 'user'
        }
      },
      { $unwind: { path: '$product', preserveNullAndEmptyArrays: true } },
      { $unwind: { path: '$buyer', preserveNullAndEmptyArrays: true } },
      { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
      {
        $project: {
          'user.hash': 0,
          'user.salt': 0,
          'buyer.hash': 0,
          'buyer.salt': 0
        }
      }
    ])
    
    return result
  }

  async listByIdUserOrders(data: IListOrder): Promise<any> {
    const { userId, isSeller } = data

    let query: any = { isCompleted: true }
    if (isSeller == true) {
      query.userId = new mongoose.Types.ObjectId(userId)
    } else {
      query.buyerId = new mongoose.Types.ObjectId(userId)
    }

    const result = await orderSchema
      .find(query)
      .populate('userId', '-hash -salt')
      .populate('buyerId', '-hash -salt')
      .populate('productId')

    return result
  }

  async updateOrder(dataOrder: Order): Promise<any> {
    const resultOrder = await orderSchema.findOneAndUpdate(
      {
        payment_intent: dataOrder.payment_intent
      },
      {
        $set: {
          isCompleted: true,
          status: 'Finalizada'
        }
      }
    )
    const dataProduct = await productschemas.findOne({ _id: resultOrder.productId })
    await productschemas.updateOne(
      {
        _id: resultOrder.productId
      },
      {
        $set: {
          sales: dataProduct.sales + 1,
        }
      }
    )

    const result = await orderSchema
      .find({ payment_intent: dataOrder.payment_intent })
      .populate('userId', '-hash -salt')
      .populate('buyerId', '-hash -salt')
      .populate('productId')

    return result?.length ? result[0] : result
  }
}
