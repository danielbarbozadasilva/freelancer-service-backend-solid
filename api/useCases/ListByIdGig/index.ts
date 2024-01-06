import { GigDBRepository } from '../../repositories/implementations/GigDBRepository'
import { ListByIdGigController } from './ListByIdGigController'
import { ListByIdGigUseCase } from './ListByIdGigUseCase'

const mongoUserRepository = new GigDBRepository()
const listByIdGigUseCase = new ListByIdGigUseCase(mongoUserRepository)
const listByIdGigController = new ListByIdGigController(listByIdGigUseCase)

export { listByIdGigUseCase, listByIdGigController }
