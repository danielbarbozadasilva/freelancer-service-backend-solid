import { Request, Response } from 'express'
import { UpdateProductUseCase } from './UpdateProductUseCase'

export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}

  async handle(request: Request, response: Response) {
    try {            
      const image = request.files
      let dataImage: string[] = []
      if (Array.isArray(image)) {
        dataImage = image.map((item) => item.filename)
      }
      
      await this.updateProductUseCase.execute({
        _id: request.params.id,
        userId: request.body.userId,
        title: request.body.title,
        description: request.body.description,
        category: request.body.category,
        price: request.body.price,
        images: dataImage,
        deliveryTime: request.body.deliveryTime,
        features: Array.isArray(request.body.features)? request.body.features : request.body.features.split(','),
      })
      
      return response.status(200).send({ message: 'Serviço atualizado com sucesso!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Ocorreu um erro inesperado!' })
    }
  }
}
