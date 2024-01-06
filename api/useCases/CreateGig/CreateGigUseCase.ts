import { Gig } from '../../entities/Gig'
import { IGigRepository } from '../../repositories/IGigRepository'
import { ICreateGigRequestDTO } from './CreateGigDTO'

export class CreateGigUseCase {
  constructor(private gigRepository: IGigRepository) {}

  async execute(data: ICreateGigRequestDTO) {
    const result = new Gig(data)
    const userIsSeller = await this.gigRepository.verifyUserIsSeller(data.userId)
    if(userIsSeller){
      throw new Error('Apenas vendedores podem criar!');
    }
    return this.gigRepository.createGig(result)
  }
}
