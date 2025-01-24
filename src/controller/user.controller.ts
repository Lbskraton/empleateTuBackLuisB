import { Request, Response } from "express"
import { UserService } from "@/services/user.service"

export class UserController{

    static async profile(req:Request,res:Response){
        const email=req.body.user.email
        const user=await UserService.getUserByEmail(email)
        
        res.status(200).json(user)
        
    }

    static async listUsers(req:Request,res:Response){
        try{
            const users=await UserService.listAll()

        res.status(200).json(users)
        }catch(error){
            throw new Error('Fallo al listar usuarios')
        }
        

    }
}