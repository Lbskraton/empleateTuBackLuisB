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
            OfferService.delete(id)
            
            
        } catch (error) {
            next(error)
        }
    }

    static async save(req:Request,res:Response,next:NextFunction){
        try {

            
            
        } catch (error) {
            next(error)
        }
    }

    static async update(req:Request,res:Response,next:NextFunction){
        try {
            
            
        } catch (error) {
            next(error)
        }
    }

    static async rate(req:Request,res:Response,next:NextFunction){

    }

    static async getRate(req:Request,res:Response,next:NextFunction){

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