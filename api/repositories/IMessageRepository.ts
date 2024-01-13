import { Message } from '../entities/Message'

export interface IMessageRepository {
  createMessage(message: Message): Promise<boolean>
  getMessages(conversationId: string): Promise<Message[]>
}
