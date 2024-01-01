import { Conversation } from '../../entities/Conversation'
import { IConversationRepository } from '../IConversationRepository'
import conversationSchema from '../../database/schemas/schemas.conversation'

export class ConversationDBRepository implements IConversationRepository {
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

  async listAllConversation(): Promise<Conversation[]>{
    const resultDB = await conversationSchema.find()
    return resultDB
  }

  async getSingleConversation(id: string): Promise<Conversation>{
    const resultDB = await conversationSchema.findById(id)
    return resultDB
  }

  async updateConversation(id: string, dataUser: Conversation): Promise<Conversation>{
    const resultDB = await conversationSchema.findOneAndUpdate({ _id: id },{
      ...(dataUser.isSeller ? { readBySeller: true } : { readByBuyer: true })
    },
    { new: true })
    
    return resultDB
  }


}
