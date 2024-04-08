import { body, check } from 'express-validator';
//body():se utiliza para validar los campos en el cuerpo (body)
//check():se utiliza para validar los campos en el cuerpo (body), los parámetros de la ruta (params)

export const medicamentoValidator = [
    body("nombre")
        .exists()
        .withMessage("Title is required")
        .isString()
        .withMessage("Title should be a string")
        .isLength({ min: 5 })
        .withMessage("Title should be at least 5 characters"),
    body("inicio_envase")
        .exists()
        .withMessage("Year is required")
        .isInt({ min: 1000, max: new Date().getFullYear() })  // Establecer el rango de años válido
        .withMessage("Year should be a valid year")
]

//basadas en bookValidator, se han de adaptar