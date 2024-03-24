import { createProductUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { ICreateProductRequestDTO } from './CreateProductDTO'

describe('Create Product', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Create Product', () => {
    test('Make sure create Product', async () => {
      const data = {
        userId: '65883ab3c89918015e25e532',
        title: 'Desenvolvedor Web',
        description: 'Experiência em Desenvolvedor Web',
        category: '6591ac5bf9877e3170d90c48',
        price: 110,
        images: [ 'files-1709295638097.jpg' ],
        deliveryTime: 7,
        features: [
          'Desenvolvimento web',
          'APIs RESTful',
          'React',
          'Node.js',
          'Express'
        ]
      }

      const result = await createProductUseCase.execute(data as ICreateProductRequestDTO)
      expect(result).toBe(true)
    })
  })
})
