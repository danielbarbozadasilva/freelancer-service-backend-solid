import { Message } from '../../entities/Message'
import { IMessageRepository } from '../../repositories/IMessageRepository'
import { ICreateMessageRequestDTO } from './CreateMessageDTO'

export class CreateMessageUseCase {
  constructor(private messageRepository: IMessageRepository) {}

  async execute(data: ICreateMessageRequestDTO) {
    const result = new Message(data)
    return await this.messageRepository.createMessage(result)
  }
}
