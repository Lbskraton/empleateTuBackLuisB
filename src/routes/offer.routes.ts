import OfferControler from "@/controller/offer.controller";
import { Router } from "express";


const router=Router()

//get an offer details

router.get('/:id',OfferControler.getById)

//list offers
router.get('/',OfferControler.getAll)

//add an offer, datos van en el body
router.post('/',OfferControler.save)

//Borrar una oferta , el id va como ruta
router.delete('/:id',OfferControler.del)

//update localhost:3000/api/offers/id {body:changes}
router.put('/:id',OfferControler.update)


router.post('/:id/rate',OfferControler.rate)

router.get('/:id/rate',OfferControler.getRate)





export default router