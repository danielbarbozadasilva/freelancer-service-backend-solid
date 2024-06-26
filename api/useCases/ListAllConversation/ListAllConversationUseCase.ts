import { IConversationRepository } from '../../repositories/IConversationRepository'

interface IParamsConversation {
  userId: string
  isSeller: boolean
}

export class ListAllConversationUseCase {
  constructor(private conversationRepository: IConversationRepository) {}

  async execute(data: IParamsConversation) {
    return await this.conversationRepository.listAllConversation(data)
  }
}
