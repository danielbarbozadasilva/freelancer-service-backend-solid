import { Request, Response } from 'express'
import { UpdateProductUseCase } from './UpdateProductUseCase'

export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      await this.updateProductUseCase.execute({
        _id: request.params.id,
        userId: request.body.userId,
        title: request.body.title,
        description: request.body.description,
        category: request.body.category,
        price: request.body.price,
        promotion: request.body.promotion,
        images: request.file.originalname,
        deliveryTime: request.body.deliveryTime,
        features: Array.isArray(request.body.features)? request.body.features : request.body.features.split(','),
        sales: request.body.sales,
        rating: request.body.rating,
      })
      return response.status(200).send({ message: 'Product successfully updated!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
