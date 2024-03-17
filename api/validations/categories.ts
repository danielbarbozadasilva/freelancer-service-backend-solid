import { Request } from 'express'
import Joi from 'joi'
import ErrorBusinessRule from '../utils/exceptions/ErrorBusinessRule'

export class CategoryValidation {
  categoryValidation(request: Request) {    
    // if (!request?.file) {
    //     throw new Error('Imagem é obrigatória!')
    // }
    
    const categorySchema = Joi.object({
      name: Joi.string().min(5).max(20).required().messages({
        'any.required': `"name" é um campo obrigatório.`,
        'string.empty': `"name" não deve ser vazio.`,
        'string.min': `"name" não deve ter menos que "{#limit}" caracteres.`,
        'string.max': `"name" não deve ter mais que "{#limit}" caracteres.`,
      }),
      description: Joi.string().min(5).max(50).required().messages({
        'any.required': `"description" é um campo obrigatório.`,
        'string.empty': `"description" não deve ser vazio.`,
        'string.min': `"description" não deve ter menos que "{#limit}" caracteres.`,
        'string.max': `"description" não deve ter mais que "{#limit}" caracteres.`,
      }),
    })

    const resultValidade = categorySchema.validate(request.body)

    if (resultValidade?.error) {
        throw new ErrorBusinessRule(resultValidade.error.details[0].message);
    }
  }
}


