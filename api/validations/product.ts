import { Request } from 'express'
import Joi from 'joi'
import ErrorBusinessRule from '../utils/exceptions/ErrorBusinessRule'

export class ProductValidation {
  productValidation(request: Request) {    
    const productSchema = Joi.object({
      userId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
          'any.required': '"user id" é obrigatório',
          'string.empty': '"user id" não pode estar vazio',
          'string.pattern.base': '"user id" não está no padrão esperado'
        }),
      title: Joi.string().min(5).max(40).required().messages({
        'any.required': `"title" é um campo obrigatório.`,
        'string.empty': `"title" não deve ser vazio.`,
        'string.min': `"title" não deve ter menos que "{#limit}" caracteres.`,
        'string.max': `"title" não deve ter mais que "{#limit}" caracteres.`
      }),
      description: Joi.string().min(5).max(90).required().messages({
        'any.required': `"description" é um campo obrigatório.`,
        'string.empty': `"description" não deve ser vazio.`,
        'string.min': `"description" não deve ter menos que "{#limit}" caracteres.`,
        'string.max': `"description" não deve ter mais que "{#limit}" caracteres.`
      }),
      category: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
          'any.required': '"category id" é obrigatório',
          'string.empty': '"category id" não pode estar vazio',
          'string.pattern.base': '"category id" não está no padrão esperado'
        }),
      price: Joi.number().required().messages({
        'any.required': `"price" é um campo obrigatório.`,
        'number.empty': `"price" não deve ser vazio.`
      }),
      deliveryTime: Joi.number().required().messages({
        'any.required': `"deliveryTime" é um campo obrigatório.`,
        'number.empty': `"deliveryTime" não deve ser vazio.`
      }),
      features: Joi.string().required().messages({
        'any.required': `"features" é um campo obrigatório.`,
        'string.empty': `"features" não deve ser vazio.`
      }),
      files: Joi.any().optional()
    })

    const resultValidade = productSchema.validate(request.body)

    if (resultValidade?.error) {
      throw new ErrorBusinessRule(resultValidade.error.details[0].message)
    }
  }
}
