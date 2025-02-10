import { isAuthenticate } from "@/middlewares/auth.middleware";
import CatController from "../controller/cat.controller";
import { loginValidation } from "../middlewares/validator.middleware";
import { Router } from "express";



const router=Router()

router.get('/list',loginValidation,CatController.getAll)
router.put('/:id/',CatController.save)

//add an offer, datos van en el body
router.post('/',isAuthenticate,CatController.save)

//Borrar una oferta , el id va como ruta
router.delete('/:id',isAuthenticate,CatController.del)

//update localhost:3000/api/offers/id {body:changes}
router.put('/:id',isAuthenticate,CatController.update)



export default router