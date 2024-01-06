import {  GigDBRepository } from '../../repositories/implementations/GigDBRepository'
import { ListAllGigsController } from './ListAllGigsController'
import { ListAllGigsUseCase } from './ListAllGigsUseCase'

const mongoUserRepository = new GigDBRepository()
const listAllGigsUseCase = new ListAllGigsUseCase(mongoUserRepository)
const listAllGigsController = new ListAllGigsController(listAllGigsUseCase)

export { listAllGigsUseCase, listAllGigsController }
