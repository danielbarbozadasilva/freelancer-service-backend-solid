import { User } from '../../entities/User'
import { IUserRepository } from '../IUsersRepository'
import userschemas from '../../database/schemas/schemas.user'

export class UserDBRepository implements IUserRepository {
  async save(dataUser: User): Promise<User> {
    const resultDB = await userschemas.create({
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

    return resultDB
  }

  async updateProfile(id: string, dataUser: User): Promise<boolean> {
    const data = {
        name: dataUser.name,
        username: dataUser.username,
        email: dataUser.email,
        cpf: dataUser.cpf,
        birthDate: dataUser.birthDate,
        picture: dataUser.picture,
        country: dataUser.country,
        phone: dataUser.phone,
        description: dataUser.description,
        permissions: dataUser?.permissions,
        hash: dataUser?.hash,
        salt: dataUser?.salt,
        isSeller: dataUser.isSeller
    }
    
    if (!dataUser?.hash) {
      delete data.hash;
      delete data.salt;
      delete data.permissions;
    }
    const resultDB = await userschemas.updateOne(
      {_id: id },
      { ...data })

    return !!resultDB
  }

  async updateSeller(id: string, isSeller: boolean): Promise<boolean> {
    const resultDB = await userschemas.updateOne(
      {_id: id },
      { isSeller }
    )

    return !!resultDB
  }

  async findByEmail(email: string): Promise<boolean> {
    const result = await userschemas.find({ email })
    return !!result.length
  }

  async findByUsername(username: string): Promise<boolean> {
    const result = await userschemas.find({ username })
    return !!result.length
  }

  async findByCpf(cpf: string): Promise<boolean> {
    const result = await userschemas.find({ cpf })
    return !!result.length
  }

  async listAllUsers(): Promise<User[]> {
    const result = await userschemas.find({})
    return result
  }
  
  async deleteUser(id: string): Promise<boolean> {
    const result = await userschemas.findByIdAndDelete(id)
    return !!result
  }

  async listByIdUser(id: string): Promise<User> {
    const result = await userschemas.findById(id, { hash: 0, salt: 0, recovery: 0 })
    return result
  }
}
