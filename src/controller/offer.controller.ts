import { OfferService } from "@/services/offer.service"
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

    static async del(){}

    static async save(){}

    static async update(){}

    static async rate(){}

    static async getRate(){}
}

export default OfferControler