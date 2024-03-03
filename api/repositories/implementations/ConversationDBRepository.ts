import { Conversation } from '../../entities/Conversation'
import { IConversationRepository } from '../IConversationRepository'
import conversationSchema from '../../database/schemas/schemas.conversation'

export class ConversationDBRepository implements IConversationRepository {
  async save(dataUser: Conversation): Promise<Conversation> {
    const resultDB = await conversationSchema.create({
      id: dataUser.id,
      sellerId: dataUser.sellerId,
      buyerId: dataUser.buyerId,
      readBySeller: dataUser.readBySeller,
      readByBuyer: dataUser.readByBuyer,
      lastMessage: dataUser.lastMessage
    })

    return resultDB
  }

  async listAllConversation(data: { userId: string, isSeller: boolean }): Promise<Conversation[]> {
    let filter = {};
    
    if (data.isSeller) {
      filter = { sellerId: data.userId }
    } else {
      filter = { buyerId: data.userId }
    }

    const resultDB = await conversationSchema.find(filter)
                                             .populate('sellerId', '-hash -salt')
                                             .populate('buyerId', '-hash -salt')
    return resultDB    

  }

  async getSingleConversation(data: { userId: string, buyerId: string }): Promise<Conversation[]> {
    const resultDB = await conversationSchema.find({ sellerId: data.userId, buyerId: data.buyerId })
    return resultDB
  }

  async updateConversation(id: string, isSaller: boolean): Promise<Conversation> {
    const resultDB = await conversationSchema.findOneAndUpdate(
      { id: id },
      {
        ...(isSaller ? { readBySeller: true } : { readByBuyer: true })
      },
      { new: true }
    )

    return resultDB
  }
}
