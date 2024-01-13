export interface ICreateMessageRequestDTO {
  _id?: string
  conversationId: string
  userId: string
  description: string
  readBySeller: boolean
  readByBuyer: boolean
  lastMessage: string
}
