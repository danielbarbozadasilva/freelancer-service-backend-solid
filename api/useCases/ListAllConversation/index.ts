import { ConversationDBRepository } from '../../repositories/implementations/ConversationDBRepository'
import { ListAllConversationController } from './ListAllConversationController'
import { ListAllConversationUseCase } from './ListAllConversationUseCase'

const mongoUserRepository = new ConversationDBRepository()
const listAllConversationUseCase = new ListAllConversationUseCase(mongoUserRepository)
const listAllConversationController = new ListAllConversationController(listAllConversationUseCase)

export { listAllConversationUseCase, listAllConversationController }
