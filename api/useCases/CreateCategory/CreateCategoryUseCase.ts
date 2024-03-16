import { Category } from '../../entities/Category'
import { ICategoryRepository } from '../../repositories/ICategoryRepository'
import { ICategoryRequestDTO } from './CreateCategoryDTO'

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(data: ICategoryRequestDTO) {
    const categoryCreate = new Category(data)
    return await this.categoryRepository.createCategory(categoryCreate)
  }
}
