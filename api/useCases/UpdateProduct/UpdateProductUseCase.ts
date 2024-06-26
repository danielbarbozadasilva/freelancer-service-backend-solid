import { Product } from '../../entities/Product'
import { IProductRepository } from '../../repositories/IProductRepository'
import { IProductRequestDTO } from './UpdateProductDTO'
import S3Storage from '../../providers/implementations/S3Storage'

export class UpdateProductUseCase {
  constructor(
    private productRepository: IProductRepository,
    private s3: S3Storage
  ) {}

  async execute(data: IProductRequestDTO) {
    const productCreate = new Product(data)
    const productExists = await this.productRepository.verifyIdProductExists(data._id)
    
    if(!productExists){
      throw new Error('Produto não existe!');
    }
 
    await Promise.all(
      data.images.map(async (item: string)=>{
        await this.s3.saveFile(item)
      })
    )

    return await this.productRepository.updateProduct(productCreate)
  }
}
