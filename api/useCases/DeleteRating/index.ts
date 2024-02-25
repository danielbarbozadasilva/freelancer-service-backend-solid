import { RatingDBRepository } from '../../repositories/implementations/RatingDBRepository'
import { DeleteRatingController } from './DeleteRatingController'
import { DeleteRatingUseCase } from './DeleteRatingUseCase'

const mongoUserRepository = new RatingDBRepository()
const deleteRatingUseCase = new DeleteRatingUseCase(mongoUserRepository)
const deleteRatingController = new DeleteRatingController(deleteRatingUseCase)

export { deleteRatingUseCase, deleteRatingController }
