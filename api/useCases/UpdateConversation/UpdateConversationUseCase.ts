import { Conversation } from '../../entities/Conversation'
import { IConversationRepository } from '../../repositories/IConversationRepository'
import { IUpdateConversationRequestDTO } from './UpdateConversationDTO'

export class UpdateConversationUseCase {
  constructor(private conversationRepository: IConversationRepository) {}

  async execute(id: string, data: IUpdateConversationRequestDTO) {
    const conversationCreate = new Conversation(data)
    return this.conversationRepository.updateConversation(id, conversationCreate)
  }
}
