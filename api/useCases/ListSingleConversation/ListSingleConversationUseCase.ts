import { IConversationRepository } from '../../repositories/IConversationRepository'

export class ListByIdConversationUseCase {
  constructor(private conversationRepository: IConversationRepository) {}

  async execute(id: string) {
    return this.conversationRepository.getSingleConversation(id)
  }
}
