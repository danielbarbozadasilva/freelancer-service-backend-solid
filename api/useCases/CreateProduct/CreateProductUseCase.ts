import { Product } from '../../entities/Product'
import { IProductRepository } from '../../repositories/IProductRepository'
import { ICreateProductRequestDTO } from './CreateProductDTO'
import S3Storage from '../../providers/implementations/S3Storage'

export class CreateProductUseCase {
  constructor(
    private productRepository: IProductRepository,
    private s3: S3Storage
  ) {}

  async execute(data: ICreateProductRequestDTO) {
    const result = new Product(data)
    
    await Promise.all(
      data.images.map(async (item: string)=>{
        await this.s3.saveFile(item)
      })
    )
    

    return await this.productRepository.createProduct(result)
  }
}
