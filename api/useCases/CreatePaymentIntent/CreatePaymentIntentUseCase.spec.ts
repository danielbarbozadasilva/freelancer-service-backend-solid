// import { createPaymentIntentUseCase } from './index'
// import { createConnection, closeConnection } from '../../database/client'
// import { ICreatePaymentIntentRequestDTO } from './CreatePaymentIntentDTO'

// describe('Create payment intent', () => {
//   beforeAll(() => {
//     createConnection()
//   })

//   afterAll(async () => {
//     await closeConnection()
//   })

//   describe('Create payment intent', () => {
//     test('Make sure create payment intent', async () => {
//       const data = {
//         productId: '659802bcfed9f7066576ca78',
//         buyerId: '65a5002f9d9b340e62d233b4',
//       }
      
//       const result = await createPaymentIntentUseCase.execute(data as ICreatePaymentIntentRequestDTO)
//       expect(result).toBe(true)
//     })
//   })
// })
