import { Message } from '../../entities/Message'
import { IMessageRepository } from '../IMessageRepository'
import messageSchema from '../../database/schemas/schemas.message'

export class MessageDBRepository implements IMessageRepository {
  async createMessage(dataProduct: Message): Promise<boolean> {
    const resultDB = await messageSchema.create({
        conversationId: dataProduct.conversationId,
        userId: dataProduct.userId,
        description: dataProduct.description,
        readBySeller: dataProduct.readBySeller,
        readByBuyer: dataProduct.readByBuyer,
        lastMessage: dataProduct.lastMessage,
    })

    return !!resultDB
  }

  async getMessages(id: string): Promise<Message[]> {
    const result = await messageSchema.find({ conversationId: id })
    return result
  }
}