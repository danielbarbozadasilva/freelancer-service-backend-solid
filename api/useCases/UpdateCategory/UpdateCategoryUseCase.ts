import { Category } from '../../entities/Category'
import { ICategoryRepository } from '../../repositories/ICategoryRepository'
import { ICategoryRequestDTO } from './UpdateCategoryDTO'

export class UpdateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(data: ICategoryRequestDTO) {
    const categoryCreate = new Category(data)
    const categoryExists = await this.categoryRepository.verifyIdCategoryExists(data._id)
    if(!categoryExists){
      throw new Error('Essa categoria não existe!');
    }
    return this.categoryRepository.updateCategory(categoryCreate)
  }
}
