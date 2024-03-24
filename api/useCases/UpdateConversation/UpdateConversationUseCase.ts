import { IConversationRepository } from '../../repositories/IConversationRepository'

export class UpdateConversationUseCase {
  constructor(private conversationRepository: IConversationRepository) {}

  async execute(id: string, isSeller: boolean) {
    return this.conversationRepository.updateConversation(id, isSeller)
  }
}
