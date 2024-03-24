import { Request } from 'express'
import Joi from 'joi'
import ErrorBusinessRule from '../utils/exceptions/ErrorBusinessRule'

export class RatingValidation {
  ratingValidation(request: Request) {
    const ratingSchema = Joi.object({
      productId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
          'any.required': '"product id" é obrigatório',
          'string.empty': '"product id" não pode estar vazio',
          'string.pattern.base': '"product id" não está no padrão esperado'
        }),
      userId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
          'any.required': '"user id" é obrigatório',
          'string.empty': '"user id" não pode estar vazio',
          'string.pattern.base': '"user id" não está no padrão esperado'
        }),
      name: Joi.string().min(5).max(20).required().messages({
        'any.required': `"name" é um campo obrigatório.`,
        'string.empty': `"name" não deve ser vazio.`,
        'string.min': `"name" não deve ter menos que "{#limit}" caracteres.`,
        'string.max': `"name" não deve ter mais que "{#limit}" caracteres.`
      }),
      text: Joi.string().min(5).max(50).required().messages({
        'any.required': `"text" é um campo obrigatório.`,
        'string.empty': `"text" não deve ser vazio.`,
        'string.min': `"text" não deve ter menos que "{#limit}" caracteres.`,
        'string.max': `"text" não deve ter mais que "{#limit}" caracteres.`
      }),
      score: Joi.number().required().messages({
        'any.required': `"score" é um campo obrigatório.`,
        'number.empty': `"score" não deve ser vazio.`
      })
    })

    const resultValidade = ratingSchema.validate(request.body)

    if (resultValidade?.error) {
      throw new ErrorBusinessRule(resultValidade.error.details[0].message)
    }
  }
}
