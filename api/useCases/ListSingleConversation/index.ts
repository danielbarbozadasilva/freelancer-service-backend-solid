import { ConversationDBRepository } from '../../repositories/implementations/ConversationDBRepository'
import { ListByIdConversationController } from './ListSingleConversationController'
import { ListByIdConversationUseCase } from './ListSingleConversationUseCase'

const mongoUserRepository = new ConversationDBRepository()
const listByIdConversationUseCase = new ListByIdConversationUseCase(mongoUserRepository)
const listByIdConversationController = new ListByIdConversationController(listByIdConversationUseCase)

export { listByIdConversationUseCase, listByIdConversationController }
