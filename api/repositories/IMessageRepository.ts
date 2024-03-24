import { Message } from '../entities/Message'

export interface IMessageRepository {
  createMessage(message: Message): Promise<Message>
  getMessages(conversationId: string): Promise<Message[]>
}
