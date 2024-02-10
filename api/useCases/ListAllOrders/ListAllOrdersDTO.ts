import { ObjectId } from "mongoose"

export interface IOrdersRequestDTO {
  _id: ObjectId
  productId: string
  title: string
  price: number
  userId: any
  buyerId: string
  isSeller: any
  isCompleted: boolean
  payment_intent: string
  createdAt: Date
  updatedAt: Date
}

export const ordersDTO = (data: IOrdersRequestDTO[]) => {
  return data.map((item) => {
    return {
      productId: item.productId,
      title: item.title,
      price: item.price,
      userId: item.userId,
      buyerId: item.buyerId,
      isCompleted: item.isCompleted,
      isSeller: item.isSeller,
      payment_intent: item.payment_intent
    }
  })
}