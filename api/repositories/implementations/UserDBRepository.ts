import { User } from '../../entities/User'
import { IUserRepository } from '../IUsersRepository'
import clientSchema from '../../database/schemas/schemas.user'

export class UserDBRepository implements IUserRepository {
  async save(dataUser: User): Promise<boolean> {
    const resultDB = await clientSchema.create({
      name: dataUser.name,
      username: dataUser.username,
      email: dataUser.email,
      cpf: dataUser.cpf,
      birthDate: dataUser.birthDate,
      picture: dataUser.picture,
      country: dataUser.country,
      phone: dataUser.phone,
      desc: dataUser.desc,
      hash: dataUser.hash,
      salt: dataUser.salt,
      isSeller: dataUser.isSeller
    })

    return !!resultDB
  }

  async findByEmail(email: string): Promise<boolean> {
    const result = await clientSchema.find({ email })
    return !!result.length
  }

  async findByUsername(username: string): Promise<boolean> {
    const result = await clientSchema.find({ username })
    return !!result.length
  }

  async findByCpf(cpf: string): Promise<boolean> {
    const result = await clientSchema.find({ cpf })
    return !!result.length
  }
}
