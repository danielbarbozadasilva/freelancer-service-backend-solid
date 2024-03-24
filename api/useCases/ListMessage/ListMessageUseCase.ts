import { IMessageRepository } from '../../repositories/IMessageRepository'

export class ListMessageUseCase {
  constructor(private messageRepository: IMessageRepository) {}

  async execute(id: string) {
    return await this.messageRepository.getMessages(id)
  }
}
