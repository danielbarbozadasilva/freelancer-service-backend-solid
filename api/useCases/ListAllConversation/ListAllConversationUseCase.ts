import { IConversationRepository } from '../../repositories/IConversationRepository'

export class ListAllConversationUseCase {
  constructor(private conversationRepository: IConversationRepository) {}

  async execute() {
    return this.conversationRepository.listAllConversation()
  }
}
