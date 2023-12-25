import { ConversationDBRepository } from '../../repositories/implementations/ConversationDBRepository'
import { CreateConversationController } from './CreateConversationController'
import { CreateConversationUseCase } from './CreateConversationUseCase'

const mongoUserRepository = new ConversationDBRepository()
const createConversationUseCase = new CreateConversationUseCase(mongoUserRepository)
const createConversationController = new CreateConversationController(createConversationUseCase)

export { createConversationUseCase, createConversationController }
