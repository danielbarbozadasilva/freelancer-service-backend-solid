import { GigDBRepository } from '../../repositories/implementations/GigDBRepository'
import { UpdateGigController } from './UpdateGigController'
import { UpdateGigUseCase } from './UpdateGigUseCase'

const mongoUserRepository = new GigDBRepository()
const updateGigUseCase = new UpdateGigUseCase(mongoUserRepository)
const updateGigController = new UpdateGigController(updateGigUseCase)

export { updateGigUseCase, updateGigController }
