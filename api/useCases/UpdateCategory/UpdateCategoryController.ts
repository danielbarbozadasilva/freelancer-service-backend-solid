import { Request, Response } from 'express'
import { UpdateCategoryUseCase } from './UpdateCategoryUseCase'

export class UpdateCategoryController {
  constructor(private updateCategoryUseCase: UpdateCategoryUseCase) {}

  async handle(request: Request, response: Response) {
    try {      
      
      await this.updateCategoryUseCase.execute({
        _id: request.params.id,
        name: request.body.name,
        description: request.body.description,
        picture: request?.file?.filename,
       })

      return response
        .status(200)
        .send({ message: 'Categoria atualizada com sucesso!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
