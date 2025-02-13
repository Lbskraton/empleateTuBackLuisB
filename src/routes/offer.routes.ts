import { isAuthenticate } from "../middlewares/auth.middleware";
import OfferControler from "../controller/offer.controller";
import { offerValidation, rateValidation } from "../middlewares/validator.middleware";
import { Router } from "express";
import { isAdmin } from "../middlewares/isAdmin.middleware";


const router=Router()

//get an offer details

router.get('/:id',OfferControler.getById)

//list offers
router.get('/',OfferControler.getAll)

//add an offer, datos van en el body
router.post('/',isAuthenticate,isAdmin,offerValidation,OfferControler.save)

//Borrar una oferta , el id va como ruta
router.delete('/:id',isAuthenticate,isAdmin,OfferControler.del)

//update localhost:3000/api/offers/id {body:changes}
router.put('/:id',isAuthenticate,isAdmin,offerValidation,OfferControler.update)


router.post('/:id/rate',isAuthenticate,rateValidation,OfferControler.rate)

router.get('/:id/rate',isAuthenticate,OfferControler.getRate)

router.get('/:id/myRate',isAuthenticate,OfferControler.getMyRate)





export default router