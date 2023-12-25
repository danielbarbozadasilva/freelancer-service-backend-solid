import { Conversation } from '../../entities/Conversation'
import { ICreateConversationRepository } from '../../repositories/IConversationRepository'
import { ICreateConversationRequestDTO } from './CreateConversationDTO'

export class CreateConversationUseCase {
  constructor(private createConversationRepository: ICreateConversationRepository) {}

  async execute(data: ICreateConversationRequestDTO) {
    const conversationCreate = new Conversation(data)
    return this.createConversationRepository.save(conversationCreate)
  }
}
