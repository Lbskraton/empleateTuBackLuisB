import { OfferService } from "../services/offer.service"
import { NextFunction,Response,Request } from "express"


class OfferControler{

    static async getAll(req:Request,res:Response,next:NextFunction){
         try{
                const users=await OfferService.listAll()
        
                res.status(200).json(users)
        }catch(error){
                next(error)
                    
        }

    }

    static async del(req:Request,res:Response,next:NextFunction){
        try {
            const id=Number.parseInt(req.params.id)
            const deletedOffer=OfferService.delete(id)
            res.status(201).json({message:"Offer deleted succesfully",deletedOffer})
            
        } catch (error) {
            next(error)
        }
    }

    static async save(req:Request,res:Response,next:NextFunction){
        try {

            const offerData=req.body
            const userId=req.body.user.id
            const noffer=OfferService.save(userId,offerData)

            res.status(201).json({message:"Offer egistered succesfully",noffer})
            
        } catch (error) {
            next(error)
        }
    }

    static async update(req:Request,res:Response,next:NextFunction){
        try {
            const id=Number.parseInt(req.params.id)
            const offerRegister=req.body
            OfferService.update(id,offerRegister)
            
            
        } catch (error) {
            next(error)
        }
    }

    static async rate(req:Request,res:Response,next:NextFunction){

        try {
            const id=Number.parseInt(req.params.id)
            const {value}=req.body
            const userId=req.body.user.id

            const rated=await OfferService.rate(userId,id,value)

            res.status(200).json({message:"Offer Rated succesfully"})
            
            
        } catch (error) {
            next(error)
        }
        

        

    }

    static async getRate(req:Request,res:Response,next:NextFunction){
        
        try {
            const id=Number.parseInt(req.params.id)

            const rateMedia=await OfferService.getRate(id)

            res.status(200).json({message:"Rating received succesfully",rateMedia})
            
            
        } catch (error) {
            next(error)
        }
        

        


    }

    static async getById(req:Request,res:Response,next:NextFunction){
        try {
            const id=Number.parseInt(req.params.id)
            const offer=await OfferService.getById(id)
            res.status(200).json(offer)
            
        } catch (error) {
            next(error)
        }
    }
}

export default OfferControler