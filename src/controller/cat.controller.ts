import { CatService } from "../services/cat.service"
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
        const id=Number.parseInt(req.params.id)
        const categoryRegister=req.body
        const ncat=CatService.save(categoryRegister)
        res.status(201).json({message:"Category registered succesfully",ncat})
    }catch(error){
        next(error)
            
    }

   }

   static async del(req:Request,res:Response,next:NextFunction){
           try {
               const id=Number.parseInt(req.params.id)
               const deletedCategory=CatService.delete(id)
               res.status(201).json({message:"Category deleted succesfully",deletedCategory})
               
           } catch (error) {
               next(error)
           }
       }

   static async update(req:Request,res:Response,next:NextFunction){
          try {
                const id=Number.parseInt(req.params.id)
                const catRegister=req.body
                CatService.update(id,catRegister)  
                    
            } catch (error) {
                next(error)
             }
   }

   static async getById(req:Request,res:Response,next:NextFunction){
           try {
               const id=Number.parseInt(req.params.id)
               const cat=await CatService.getById(id)
               res.status(200).json(cat)
               
           } catch (error) {
               next(error)
           }
       }




}

export default CatController