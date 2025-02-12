import { isAuthenticate } from "../middlewares/auth.middleware";
import CatController from "../controller/cat.controller";
import { categoryValidation, loginValidation } from "../middlewares/validator.middleware";
import { Router } from "express";
import { isAdmin } from "@/middlewares/isAdmin.middleware";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";



const router=Router()

router.get('/',isAuthenticate,CatController.getAll)
router.put('/:id/',isAuthenticate,isAdmin,categoryValidation,ValidationMiddleware,CatController.update)

//add an offer, datos van en el body
router.post('/',isAuthenticate,isAdmin,categoryValidation,ValidationMiddleware,CatController.save)

//Borrar una oferta , el id va como ruta
router.delete('/:id',isAuthenticate,isAdmin,CatController.del)

//update localhost:3000/api/offers/id {body:changes}




export default router