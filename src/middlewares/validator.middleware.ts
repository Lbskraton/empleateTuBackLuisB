import { body } from "express-validator";


export const registerValidation=[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:4}).withMessage("Password too short"),
    body('name').notEmpty().withMessage('Name required')
]

export const loginValidation=[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:4}).withMessage("Password too short")
]

export const offerValidation=[
    body('title')
        .isLength({min:4,max:40}).withMessage('Titulo Obligatorio de min 4 characters maximo 40'),
    body('description').optional().isLength({max:2000}),
    body('contactEmail').optional().isEmail().withMessage('Invalid email'),
    body('published').optional().isISO8601().toDate().withMessage('Formato de fecha de publicacion Incorrecto'),
    body('expired').isISO8601().toDate().withMessage('Formato de fecha de expiracion Incorrecto'),
]

export const categoryValidation=[
    body('name').notEmpty().withMessage('Name required')
]

export const rateValidation=[
    body('value').isInt({min:0,max:5}).toInt().withMessage('Value is required')
]