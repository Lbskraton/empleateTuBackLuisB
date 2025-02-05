import CatController from "../controller/cat.controller";
import { loginValidation } from "../middlewares/validator.middleware";
import { Router } from "express";



const router=Router()

router.get('/list',loginValidation)
router.put('/:id/',CatController.save)

export default router