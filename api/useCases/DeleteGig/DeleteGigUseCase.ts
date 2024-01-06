import { IGigRepository } from '../../repositories/IGigRepository'

export class DeleteGigUseCase {
  constructor(private gigRepository: IGigRepository) {}

  async execute(id: string) {
    const gigExists = await this.gigRepository.verifyIdGigExists(id)
    if(!gigExists){
      throw new Error('Apresentação não existe!');
    }
    return this.gigRepository.deleteGig(id)
  }
}
