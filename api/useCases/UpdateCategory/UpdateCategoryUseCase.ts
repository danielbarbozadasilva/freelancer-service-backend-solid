import { Category } from '../../entities/Category'
import { ICategoryRepository } from '../../repositories/ICategoryRepository'
import { ICategoryRequestDTO } from './UpdateCategoryDTO'
import S3Storage from '../../providers/implementations/S3Storage'

export class UpdateCategoryUseCase {
  constructor(
    private categoryRepository: ICategoryRepository,
    private s3: S3Storage
    ) {}

  async execute(data: ICategoryRequestDTO) {
    const categoryCreate = new Category(data)
    const categoryExists = await this.categoryRepository.verifyIdCategoryExists(data._id)
    if(!categoryExists){
      throw new Error('Essa categoria não existe!');
    }
    
    await this.categoryRepository.updateCategory(categoryCreate)
    
    await this.s3.saveFile(data.picture)
  }
}
