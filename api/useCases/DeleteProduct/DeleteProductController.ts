import { Request, Response } from 'express'
import { DeleteProductUseCase } from './DeleteProductUseCase'

export class DeleteProductController {
  constructor(private deleteProductUseCase: DeleteProductUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id: string = request.params.id
      await this.deleteProductUseCase.execute(id)

      return response
        .status(200)
        .send({ message: 'Service deleted successfully!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
