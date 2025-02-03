import { CatService } from "@/services/cat.service"
import { NextFunction,Response,Request } from "express"

class CatController{

    static async getAll(req:Request,res:Response,next:NextFunction){
        try{
               const users=await CatService.listAll()
       
               res.status(200).json(users)
       }catch(error){
               next(error)
                   
       }

   }


   static async save(req:Request,res:Response,next:NextFunction){

    try{
        const users=await CatService.listAll()

        res.status(200).json(users)
    }catch(error){
        next(error)
            
    }

   }


}

export default CatController