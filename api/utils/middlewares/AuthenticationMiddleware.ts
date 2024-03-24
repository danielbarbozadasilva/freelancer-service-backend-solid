import { Request } from 'express'
import cryptography from '../cryptography/index'

const authenticationMiddleware = (request: Request) => {
  const { token } = request.headers as { token: string }
  cryptography.tokenIsValid(token)
}

export default authenticationMiddleware
