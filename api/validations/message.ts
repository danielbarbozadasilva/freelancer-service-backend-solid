import { Request } from 'express'
import Joi from 'joi'
import ErrorBusinessRule from '../utils/exceptions/ErrorBusinessRule'

export class MessageValidation {
  messageValidation(request: Request) {
    const messageSchema = Joi.object({
      conversationId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
          'any.required': '"conversation id" é obrigatório',
          'string.empty': '"conversation id" não pode estar vazio',
          'string.pattern.base': '"conversation id" não está no padrão esperado'
        }),
      userId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
          'any.required': '"userId" é obrigatório',
          'string.empty': '"userId" não pode estar vazio',
          'string.pattern.base': '"userId" não está no padrão esperado'
        }),
      description: Joi.string().required().messages({
        'any.required': `"description" é um campo obrigatório.`,
        'string.empty': `"description" não deve ser vazio.`
      }),
      isSeller: Joi.any().optional()
    })

    const resultValidade = messageSchema.validate(request.body)

    if (resultValidade?.error) {
      throw new ErrorBusinessRule(resultValidade.error.details[0].message)
    }
  }
}
