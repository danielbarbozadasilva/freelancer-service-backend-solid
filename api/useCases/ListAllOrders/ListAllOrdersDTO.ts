export interface IOrdersRequestDTO {
  productId?: string
  title?: string
  price?: number
  userId?: string
  buyerId?: string
  isSeller?: boolean
  isCompleted?: boolean
  payment_intent?: string
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
