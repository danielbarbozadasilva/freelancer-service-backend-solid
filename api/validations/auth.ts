import { Request } from 'express'
import Joi from 'joi'
import ErrorBusinessRule from '../utils/exceptions/ErrorBusinessRule'

export class AuthValidation {
  authValidation(request: Request) {
    const authSchema = Joi.object({
      email: Joi.string().email().required().messages({
        'any.required': `"email" é um campo obrigatório.`,
        'string.empty': `"email" não deve ser vazio.`
      }),
      password: Joi.string().min(5).max(20).required().messages({
        'any.required': `"password" é um campo obrigatório.`,
        'string.empty': `"password" não deve ser vazio.`,
        'string.min': `"password" não deve ter menos que "{#limit}" caracteres.`,
        'string.max': `"password" não deve ter mais que "{#limit}" caracteres.`
      })
    })

    const resultValidade = authSchema.validate(request.body)

    if (resultValidade?.error) {
      throw new ErrorBusinessRule(resultValidade.error.details[0].message)
    }
  }
}
