import { Conversation } from '../../entities/Conversation'
import { IConversationRepository } from '../../repositories/IConversationRepository'
import { IUpdateConversationRequestDTO } from './UpdateConversationDTO'

export class UpdateConversationUseCase {
  constructor(private conversationRepository: IConversationRepository) {}

  async execute(id: string, isSeller: boolean) {
    return this.conversationRepository.updateConversation(id, isSeller)
  }
}
