import { Conversation } from '../../entities/Conversation'
import { ICreateConversationRepository } from '../IConversationRepository'
import conversationSchema from '../../database/schemas/schemas.conversation'

export class ConversationDBRepository implements ICreateConversationRepository {
  async save(dataUser: Conversation): Promise<boolean> {
    const resultDB = await conversationSchema.create({
      id: dataUser.id,
      sellerId: dataUser.sellerId,
      buyerId: dataUser.buyerId,
      readBySeller: dataUser.readBySeller,
      readByBuyer: dataUser.readByBuyer,
      lastMessage: dataUser.lastMessage
    })

    return !!resultDB
  }
}
