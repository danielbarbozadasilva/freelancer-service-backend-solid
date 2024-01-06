import { IGigRepository } from '../../repositories/IGigRepository'

export class ListByIdGigUseCase {
  constructor(private gigRepository: IGigRepository) {}

  async execute(id: string) {
    const gigExists = await this.gigRepository.verifyIdGigExists(id)
    if(!gigExists){
      throw new Error('Não existe!');
    }
    return this.gigRepository.findByIdGig(id)
  }
}
