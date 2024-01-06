import { GigDBRepository } from '../../repositories/implementations/GigDBRepository'
import { DeleteGigController } from './DeleteGigController'
import { DeleteGigUseCase } from './DeleteGigUseCase'

const mongoUserRepository = new GigDBRepository()
const deleteGigUseCase = new DeleteGigUseCase(mongoUserRepository)
const deleteGigController = new DeleteGigController(deleteGigUseCase)

export { deleteGigUseCase, deleteGigController }
