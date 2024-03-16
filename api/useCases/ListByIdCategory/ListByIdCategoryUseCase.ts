import { ICategoryRepository } from '../../repositories/ICategoryRepository'

export class ListByIdCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(id: string) {
    const categoryExists = await this.categoryRepository.verifyIdCategoryExists(id)
    if(!categoryExists){
      throw new Error('Essa categoria não existe!');
    }
    return await this.categoryRepository.findByIdCategory(id)
  }
}
