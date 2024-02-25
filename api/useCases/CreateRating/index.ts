import { RatingDBRepository } from '../../repositories/implementations/RatingDBRepository'
import { CreateRatingController } from './CreateRatingController'
import { CreateRatingUseCase } from './CreateRatingUseCase'

const mongoUserRepository = new RatingDBRepository()
const createRatingUseCase = new CreateRatingUseCase(mongoUserRepository)
const createRatingController = new CreateRatingController(createRatingUseCase)

export { createRatingUseCase, createRatingController }
