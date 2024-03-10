import { IProductRepository } from '../../repositories/IProductRepository'

export class DeleteProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string) {
    const productExists = await this.productRepository.verifyIdProductExists(id)
    if(!productExists){
      throw new Error('Serviço não existe!');
    }
    return this.productRepository.deleteProduct(id)
  }
}
