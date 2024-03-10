import { Request } from 'express'
import Joi from 'joi'
import ErrorBusinessRule from '../utils/exceptions/ErrorBusinessRule'

export class CategoryValidation {
  createCategoryValidation(request: Request) {    
    if (!request?.file) {
        throw new Error('Imagem é obrigatória!')
    }
    
    const categorySchema = Joi.object({
      name: Joi.string().alphanum().min(5).max(20).required(),
      description: Joi.string().alphanum().min(5).max(50).required(),
    })

    const resultValidade = categorySchema.validate(request.body)

    if (resultValidade?.error) {
        throw new ErrorBusinessRule(resultValidade.error.details[0].message);
    }
  }

  idCategoryValidation(request: Request) {    
    const categorySchema = Joi.object({
      id: Joi
      .string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({
        'any.required': '"category id" é obrigatório',
        'string.empty': '"category id" não pode estar vazio',
        'string.pattern.base': '"category id" não está no padrão esperado'
      })
    })

    const resultValidade = categorySchema.validate(request.params)

    if (resultValidade?.error) {
        throw new ErrorBusinessRule(resultValidade.error.details[0].message);
    }
  }
}


