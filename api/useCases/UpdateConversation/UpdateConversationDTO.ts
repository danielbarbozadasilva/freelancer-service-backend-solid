export interface IUpdateConversationRequestDTO {
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
