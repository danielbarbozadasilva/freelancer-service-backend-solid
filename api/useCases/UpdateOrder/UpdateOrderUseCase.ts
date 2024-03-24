import { Order } from '../../entities/Order'
import { IOrderRepository } from '../../repositories/IOrderRepository'
import { IMailProvider } from '../../providers/IMailProvider'
import { salesTemplate } from '../../providers/model/sales'
import { OrderData } from './UpdateOrderIntentDTO'

export class UpdateOrderUseCase {
  constructor(
    private orderRepository: IOrderRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: any) {
    const result = new Order(data)
    const paymentExists: boolean = await this.orderRepository.verifyPaymentIntent(data.payment_intent)
    
    if (!paymentExists) {
      throw new Error('Código de pagamento inexistente!')
    }
    
    const response: OrderData = await this.orderRepository.updateOrder(result)

    const recipients = [
      {
        name: response.userId.name,
        email: response.userId.email
      },
      {
        name: response.buyerId.name,
        email: response.buyerId.email
      }
    ]

    await this.mailProvider.sendMail({
      to: recipients,
      from: {
        name: 'Equipe Freelancer',
        email: 'daniel80barboza@gmail.com'
      },
      subject: `Solicitação de serviço: ${response?.title}`,
      body: salesTemplate(response)
    })
  }
}
