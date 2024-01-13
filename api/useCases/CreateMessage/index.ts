import { MessageDBRepository} from '../../repositories/implementations/MessageDBRepository'
import { CreateMessageController } from './CreateMessageController'
import { CreateMessageUseCase } from './CreateMessageUseCase'

const mongoUserRepository = new MessageDBRepository()
const createMessageUseCase = new CreateMessageUseCase(mongoUserRepository)
const createMessageController = new CreateMessageController(createMessageUseCase)

export { createMessageUseCase, createMessageController }
