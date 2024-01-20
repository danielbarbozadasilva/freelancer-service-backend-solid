import { IProductRepository } from '../../repositories/IProductRepository'

export class ListAllProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: object) {
    return this.productRepository.listAllProducts(data)
  }
}
