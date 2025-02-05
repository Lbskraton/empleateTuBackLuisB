import { isAuthenticate } from "@/middlewares/auth.middleware";
import OfferControler from "../controller/offer.controller";
import { Router } from "express";


const router=Router()

//get an offer details

router.get('/:id',OfferControler.getById)

//list offers
router.get('/',OfferControler.getAll)

//add an offer, datos van en el body
router.post('/',isAuthenticate,OfferControler.save)

//Borrar una oferta , el id va como ruta
router.delete('/:id',isAuthenticate,OfferControler.del)

//update localhost:3000/api/offers/id {body:changes}
router.put('/:id',isAuthenticate,OfferControler.update)


router.post('/:id/rate',isAuthenticate,OfferControler.rate)

router.get('/:id/rate',isAuthenticate,OfferControler.getRate)

router.get('/:id/myRate',isAuthenticate,OfferControler.getMyRate)





export default router