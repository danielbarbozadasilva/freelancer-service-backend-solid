import { Request, Response } from 'express'
import { CreateProductUseCase } from './CreateProductUseCase'

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      await this.createProductUseCase.execute({
        userId: request.body.userId,
        title: request.body.title,
        description: request.body.description,
        category: request.body.category,
        price: request.body.price,
        images: request.file.originalname,
        deliveryTime: request.body.deliveryTime,
        features: Array.isArray(request.body.features)? request.body.features : request.body.features.split(',')
       })

      return response
        .status(201)
        .send({ message: 'Product successfully created!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
