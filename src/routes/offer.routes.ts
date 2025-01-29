import { Router } from "express";
import AuthController from "../controller/auth.controller"
import { isAuthenticate } from "../middlewares/auth.middleware";
import { loginValidation, registerValidation } from "@/middlewares/validator.middleware";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";

const router=Router()

//list offers
router.get('/',OfferControler.getAll)

//add an offer, datos van en el body
router.post('/',OfferControler.save)

//Borrar una oferta , el id va como ruta
router.delete('/:id',OfferControler.delete)

//update localhost:3000/api/offers/id {body:changes}
router.put()





export default router