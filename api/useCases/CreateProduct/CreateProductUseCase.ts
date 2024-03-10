import { Product } from '../../entities/Product'
import { IProductRepository } from '../../repositories/IProductRepository'
import { ICreateProductRequestDTO } from './CreateProductDTO'

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: ICreateProductRequestDTO) {
    const result = new Product(data)
    const userIsSeller = await this.productRepository.verifyUserIsSeller(data.userId)

    if (!userIsSeller) {
      throw new Error('Apenas vendedores podem criar!')
    }
    return this.productRepository.createProduct(result)
  }
}
