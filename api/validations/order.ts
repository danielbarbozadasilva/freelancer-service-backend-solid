import { Request } from 'express'
import Joi from 'joi'
import ErrorBusinessRule from '../utils/exceptions/ErrorBusinessRule'

export class OrderValidation {
  orderValidation(request: Request) {
    const orderSchema = Joi.object({
      buyerId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
          'any.required': '"user id" é obrigatório',
          'string.empty': '"user id" não pode estar vazio',
          'string.pattern.base': '"user id" não está no padrão esperado'
        }),

      description: Joi.string().min(5).max(200).required().messages({
        'any.required': `"description" é um campo obrigatório.`,
        'string.empty': `"description" não deve ser vazio.`
      })
    })

    const resultValidade = orderSchema.validate(request.body)

    if (resultValidade?.error) {
      throw new ErrorBusinessRule(resultValidade.error.details[0].message)
    }
  }
}
