import { Gig } from '../../entities/Gig'
import { IGigRepository } from '../../repositories/IGigRepository'
import { IGigRequestDTO } from './UpdateGigDTO'

export class UpdateGigUseCase {
  constructor(private gigRepository: IGigRepository) {}

  async execute(data: IGigRequestDTO) {
    const gigCreate = new Gig(data)
    const gigExists = await this.gigRepository.verifyIdGigExists(data._id)
    const userIsSeller = await this.gigRepository.verifyUserIsSeller(data.userId)
    
    if(!gigExists){
      throw new Error('Não existe!');
    }

    if(userIsSeller){
      throw new Error('Apenas vendedores podem atualizar!');
    }

    return this.gigRepository.updateGig(gigCreate)
  }
}
