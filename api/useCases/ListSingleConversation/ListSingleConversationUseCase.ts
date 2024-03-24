import { IConversationRepository } from '../../repositories/IConversationRepository'

export class ListByIdConversationUseCase {
  constructor(private conversationRepository: IConversationRepository) {}

  async execute(data: { userId: string, buyerId: string }) {
    return await this.conversationRepository.getSingleConversation(data)
  }
}
