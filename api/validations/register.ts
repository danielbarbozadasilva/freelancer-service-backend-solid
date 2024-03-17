import { Request } from 'express'
import Joi from 'joi'
import ErrorBusinessRule from '../utils/exceptions/ErrorBusinessRule'

export class RegisterValidation {
  registerValidation(request: Request) {
    const registerSchema = Joi.object({
      name: Joi.string().min(5).max(30).required().messages({
        'any.required': `"name" é um campo obrigatório.`,
        'string.empty': `"name" não deve ser vazio.`,
        'string.min': `"name" não deve ter menos que "{#limit}" caracteres.`,
        'string.max': `"name" não deve ter mais que "{#limit}" caracteres.`
      }),
      username: Joi.string().min(5).max(30).required().messages({
        'any.required': `"username" é um campo obrigatório.`,
        'string.empty': `"username" não deve ser vazio.`,
        'string.min': `"username" não deve ter menos que "{#limit}" caracteres.`,
        'string.max': `"username" não deve ter mais que "{#limit}" caracteres.`
      }),
      email: Joi.string().email().required().messages({
        'any.required': `"email" é um campo obrigatório.`,
        'string.empty': `"email" não deve ser vazio.`
      }),
      cpf: Joi.string()
        .regex(
          /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
        )
        .required()
        .messages({
          'any.required': '"cpf" is a required field',
          'string.empty': '"cpf" can not be empty',
          'string.pattern.base': '"cpf" out of the expected format'
        }),
      birthDate: Joi.string().required().messages({
        'any.required': `"birthDate" é um campo obrigatório.`,
        'string.empty': `"birthDate" não deve ser vazio.`
      }),
      country: Joi.string().required().messages({
        'any.required': `"country" é um campo obrigatório.`,
        'string.empty': `"country" não deve ser vazio.`
      }),
      phone: Joi.string().required().messages({
        'any.required': `"phone" é um campo obrigatório.`,
        'string.empty': `"phone" não deve ser vazio.`
      }),
      description: Joi.string().min(5).max(50).required().messages({
        'any.required': `"description" é um campo obrigatório.`,
        'string.empty': `"description" não deve ser vazio.`
      }),
      isSeller: Joi.boolean().required().messages({
        'any.required': `"isSeller" é um campo obrigatório.`,
        'boolean.empty': `"isSeller" não deve ser vazio.`
      }),
      password: Joi.any().optional(),
      files: Joi.any().optional()
    })

    const resultValidade = registerSchema.validate(request.body)

    if (resultValidade?.error) {
      throw new ErrorBusinessRule(resultValidade.error.details[0].message)
    }
  }
}
