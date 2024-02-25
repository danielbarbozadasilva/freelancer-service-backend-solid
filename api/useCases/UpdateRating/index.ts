import { RatingDBRepository } from '../../repositories/implementations/RatingDBRepository'
import { UpdateRatingController } from './UpdateRatingController'
import { UpdateRatingUseCase } from './UpdateRatingUseCase'

const mongoUserRepository = new RatingDBRepository()
const updateRatingUseCase = new UpdateRatingUseCase(mongoUserRepository)
const updateRatingController = new UpdateRatingController(updateRatingUseCase)

export { updateRatingUseCase, updateRatingController }
