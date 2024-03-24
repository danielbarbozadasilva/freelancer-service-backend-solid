import { ICategoryRepository } from '../../repositories/ICategoryRepository'

export class DeleteCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(id: string) {
    const categoryExists: boolean = await this.categoryRepository.verifyIdCategoryExists(id)
    if(!categoryExists){
      throw new Error('Essa categoria não existe!');
    }
    return await this.categoryRepository.deleteCategory(id)
  }
}
