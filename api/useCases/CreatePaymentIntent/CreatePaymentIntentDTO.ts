export interface ICreatePaymentIntentRequestDTO {
   productId?: string
   title?: string
   price?: number
   userId?: string
   buyerId?: string
   isCompleted?: boolean
   isSeller?: boolean
   payment_intent?: string
}
