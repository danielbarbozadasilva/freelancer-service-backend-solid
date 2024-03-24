export interface ICreateConversationRequestDTO {
  id?: string
  sellerId?: string
  buyerId?: string
  readBySeller?: boolean
  readByBuyer?: boolean
  lastMessage?: string
  isSeller?: boolean
  userId?: string
  to?: string
}
