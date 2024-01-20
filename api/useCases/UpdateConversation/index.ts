import { ConversationDBRepository } from '../../repositories/implementations/ConversationDBRepository'
import { UpdateConversationController } from './UpdateConversationController'
import { UpdateConversationUseCase } from './UpdateConversationUseCase'

const mongoUserRepository = new ConversationDBRepository()
const updateConversationUseCase = new UpdateConversationUseCase(mongoUserRepository)
const updateConversationController = new UpdateConversationController(updateConversationUseCase)

export { updateConversationUseCase, updateConversationController }
