import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      await this.createCategoryUseCase.execute({
        name: request.body.name,
        description: request.body.description,
        picture: request?.file?.filename,
       })
       
      return response
        .status(201)
        .send({ message: 'Categoria criada com sucesso!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
