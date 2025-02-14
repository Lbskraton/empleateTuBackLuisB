import { Router } from "express";
import AuthController from "../controller/auth.controller"
import { loginValidation, registerValidation } from "../middlewares/validator.middleware";
import { ValidationMiddleware } from "../middlewares/validation.middleware";

const router=Router()

router.post('/login',loginValidation,ValidationMiddleware,AuthController.login)
router.post('/logout',AuthController.logout)

router.post('/register',registerValidation,ValidationMiddleware,AuthController.register)




export default router