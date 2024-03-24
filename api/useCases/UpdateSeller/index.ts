import { UserDBRepository } from '../../repositories/implementations/UserDBRepository'
import { UpdateSellerController } from './UpdateSellerController'
import { UpdateSellerUseCase } from './UpdateSellerUseCase'

const mongoUserRepository = new UserDBRepository()
const updateSellerUseCase = new UpdateSellerUseCase(mongoUserRepository)
const updateSellerController = new UpdateSellerController(updateSellerUseCase)

export { updateSellerUseCase, updateSellerController }
