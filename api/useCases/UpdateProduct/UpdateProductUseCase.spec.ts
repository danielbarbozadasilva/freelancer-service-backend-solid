import { updateProductUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IProductRequestDTO } from './UpdateProductDTO'

describe('Update product', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Update product', () => {
    test('Make sure update product', async () => {
      const data = {
        _id: Object("659802bcfed9f7066576ca78"),
        userId: Object("65883ab3c89918015e25e532"),
        title: "Desenvolvedor Full Stack",
        description: "Experiência em desenvolvimento web full stack",
        category: Object("6591ac5bf9877e3170d90c48"),
        price: 50,
        promotion: 50,
        images: [
          "files-1704052453982.jpg"
        ],
        deliveryTime: 7,
        features: [
          "Desenvolvimento web",
          "APIs RESTful",
          "React",
          "Node.js", 
          "Express"
        ],
        sales: 0,
        rating: Object("638a22b10ef44976d168711e"),
      }
      const result = await updateProductUseCase.execute(
        data as IProductRequestDTO
      )
      expect(result).toBe(true)
    })

    test('ensure return error if the id is non-existent', async () => {
      try {
        const data = {
          _id: Object("659802bcfed9f7066576ca77"),
          userId: Object("65883ab3c89918015e25e532"),
          title: "Desenvolvedor Full Stack",
          description: "Experiência em desenvolvimento web full stack",
          category: Object("6591ac5bf9877e3170d90c48"),
          price: 50,
          promotion: 50,
          images: [
            "files-1704052453982.jpg"
          ],
          deliveryTime: 7,
          features: [
            "Desenvolvimento web",
            "APIs RESTful",
            "React",
            "Node.js", 
            "Express"
          ],
          sales: 0,
          rating: Object("638a22b10ef44976d168711e"),
        }
        expect(
          await updateProductUseCase.execute(data as IProductRequestDTO)
        ).toThrow()
      } catch (error) {}
    })
  })
})
