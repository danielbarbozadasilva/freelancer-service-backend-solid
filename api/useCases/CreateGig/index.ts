import { GigDBRepository } from '../../repositories/implementations/GigDBRepository'
import { CreateGigController } from './CreateGigController'
import { CreateGigUseCase } from './CreateGigUseCase'

const mongoUserRepository = new GigDBRepository()
const createGigUseCase = new CreateGigUseCase(mongoUserRepository)
const createGigController = new CreateGigController(createGigUseCase)

export { createGigUseCase, createGigController }
