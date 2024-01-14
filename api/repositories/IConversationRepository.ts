import { Conversation } from '../entities/Conversation'

export interface IConversationRepository {
  save(conversation: Conversation): Promise<boolean>
  listAllConversation(): Promise<Conversation[]>
  getSingleConversation(id: string): Promise<Conversation>
  updateConversation(id: string, isSeller: boolean): Promise<Conversation>
}
