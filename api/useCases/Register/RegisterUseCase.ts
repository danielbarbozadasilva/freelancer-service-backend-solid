import { User } from '../../entities/User'
import { IMailProvider } from '../../providers/IMailProvider'
import { registerTemplate } from '../../providers/model/register'
import { IUserRepository } from '../../repositories/IUsersRepository'
import { IRegisterRequestDTO } from './RegisterDTO'

export class RegisterUseCase {
  constructor(
    private userRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: IRegisterRequestDTO) {
    const emailAlreadyExists = await this.userRepository.findByEmail(data.email)
    const userNameAlreadyExists = await this.userRepository.findByUsername(data.username)
    const userCpfAlreadyExists = await this.userRepository.findByCpf(data.cpf)

    if (userCpfAlreadyExists) {
      throw new Error('Cpf already exists.')
    }
    if (emailAlreadyExists) {
      throw new Error('Email already exists.')
    }
    if (userNameAlreadyExists) {
      throw new Error('Username already exists.')
    }

    const userCreate = new User(data)

    await this.userRepository.save(userCreate)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe Freelancer',
        email: 'daniel80barboza@gmail.com'
      },
      subject: 'Seja bem-vindo à plataforma',
      body: registerTemplate(data.name)
    })
  }
}
