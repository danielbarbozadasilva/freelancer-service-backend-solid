import { Product } from '../../entities/Product'
import { IProductRepository } from '../../repositories/IProductRepository'
import { IProductRequestDTO } from './UpdateProductDTO'

export class UpdateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: IProductRequestDTO) {
    const productCreate = new Product(data)
    const productExists = await this.productRepository.verifyIdProductExists(data._id)
    const userIsSeller = await this.productRepository.verifyUserIsSeller(data.userId)
    
    if(!productExists){
      throw new Error('Produto não existe!');
    }

    if(!userIsSeller){
      throw new Error('Apenas Freelancers podem atualizar!');
    }

    return await this.productRepository.updateProduct(productCreate)
  }
}
