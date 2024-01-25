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
      description: dataUser.description,
      permissions: dataUser.permissions,
      hash: dataUser.hash,
      salt: dataUser.salt,
      isSeller: dataUser.isSeller
    })

    return !!resultDB
  }

  async updateProfile(id: string, dataUser: User): Promise<boolean> {
    const resultDB = await clientSchema.updateOne(
      {_id: id },
      {
      name: dataUser.name,
      username: dataUser.username,
      email: dataUser.email,
      cpf: dataUser.cpf,
      birthDate: dataUser.birthDate,
      picture: dataUser.picture,
      country: dataUser.country,
      phone: dataUser.phone,
      description: dataUser.description,
      permissions: dataUser.permissions,
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

  async listAllUsers(): Promise<User[]> {
    const result = await clientSchema.find({})
    return result
  }
  
  async deleteUser(id: string): Promise<boolean> {
    const result = await clientSchema.findByIdAndDelete(id)
    return !!result
  }

  async listByIdUser(id: string): Promise<User> {
    const result = await clientSchema.findById(id, { hash: 0, salt: 0, recovery: 0 })
    return result
  }
}
