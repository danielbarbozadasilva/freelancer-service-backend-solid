import { RatingDBRepository } from '../../repositories/implementations/RatingDBRepository'
import { ListByIdRatingController } from './ListByIdRatingController'
import { ListByIdRatingUseCase } from './ListByIdRatingUseCase'

const mongoUserRepository = new RatingDBRepository()
const listByIdRatingUseCase = new ListByIdRatingUseCase(mongoUserRepository)
const listByIdRatingController = new ListByIdRatingController(listByIdRatingUseCase)

export { listByIdRatingUseCase, listByIdRatingController }
