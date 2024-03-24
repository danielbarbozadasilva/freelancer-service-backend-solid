import { Category } from '../../entities/Category'
import { ICategoryRepository } from '../../repositories/ICategoryRepository'
import { ICategoryRequestDTO } from './CreateCategoryDTO'
import S3Storage from '../../providers/implementations/S3Storage'

export class CreateCategoryUseCase {
  constructor(
    private categoryRepository: ICategoryRepository,
    private s3: S3Storage
  ) {}

  async execute(data: ICategoryRequestDTO) {
    const categoryCreate = new Category(data)
    await this.s3.saveFile(data.picture)

    return await this.categoryRepository.createCategory(categoryCreate)
  }
}
