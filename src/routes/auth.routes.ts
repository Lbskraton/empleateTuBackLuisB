import { Router } from "express";
import AuthController from "../controller/auth.controller"
import { isAuthenticate } from "../middlewares/auth.middleware";

const router=Router()

router.post('/login',AuthController.login)
router.post('/login',AuthController.logout)
router.post('/register',AuthController.register)




export default router