import { IProductRepository } from '../../repositories/IProductRepository'

export class DeleteProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string) {
    const productExists: boolean = await this.productRepository.verifyIdProductExists(id)
    if(!productExists){
      throw new Error('Produto não existe!');
    }
    return await this.productRepository.deleteProduct(id)
  }
}
