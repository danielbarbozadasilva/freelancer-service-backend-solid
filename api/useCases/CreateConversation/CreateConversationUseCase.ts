import { Conversation } from '../../entities/Conversation'
import { IConversationRepository } from '../../repositories/IConversationRepository'
import { ICreateConversationRequestDTO } from './CreateConversationDTO'

export class CreateConversationUseCase {
  constructor(private createConversationRepository: IConversationRepository) {}

  async execute(data: ICreateConversationRequestDTO) {
    const conversationCreate = new Conversation(data)
    return await this.createConversationRepository.save(conversationCreate)
  }
}
