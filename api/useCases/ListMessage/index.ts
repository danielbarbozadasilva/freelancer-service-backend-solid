import { MessageDBRepository } from '../../repositories/implementations/MessageDBRepository'
import { ListMessageController } from './ListMessageController'
import { ListMessageUseCase } from './ListMessageUseCase'

const mongoUserRepository = new MessageDBRepository()
const listMessageUseCase = new ListMessageUseCase(mongoUserRepository)
const listMessageController = new ListMessageController(listMessageUseCase)

export { listMessageUseCase, listMessageController }
