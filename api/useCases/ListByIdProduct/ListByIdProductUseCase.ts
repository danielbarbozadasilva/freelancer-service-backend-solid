import { IProductRepository } from '../../repositories/IProductRepository'

export class ListByIdProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string) {
    const productExists = await this.productRepository.verifyIdProductExists(id)
    if(!productExists){
      throw new Error('Serviço não existe!');
    }
    return this.productRepository.findByIdProduct(id)
  }
}
