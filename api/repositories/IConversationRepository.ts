import { Conversation } from '../entities/Conversation'

export interface ICreateConversationRepository {
  save(conversation: Conversation): Promise<boolean>
}
