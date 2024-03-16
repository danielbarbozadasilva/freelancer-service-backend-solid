import { Request } from 'express'
import Joi from 'joi'
import ErrorBusinessRule from '../utils/exceptions/ErrorBusinessRule'

export class ConversationValidation {
  conversationValidation(request: Request) {
    const conversationSchema = Joi.object({
      userId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
          'any.required': '"user id" é obrigatório',
          'string.empty': '"user id" não pode estar vazio',
          'string.pattern.base': '"user id" não está no padrão esperado'
        }),
      to: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
          'any.required': '"to" é obrigatório',
          'string.empty': '"to" não pode estar vazio',
          'string.pattern.base': '"to" não está no padrão esperado'
        }),
      isSeller: Joi.boolean().required().messages({
        'any.required': `"isSeller" é um campo obrigatório.`,
        'boolean.empty': `"isSeller" não deve ser vazio.`
      }),
    })

    const resultValidade = conversationSchema.validate(request.body)

    if (resultValidade?.error) {
      throw new ErrorBusinessRule(resultValidade.error.details[0].message)
    }
  }
}
