import { Request, Response } from "express"
import { AuthService } from "../services/auth.service"

class AuthController{

    static async register(req:Request,res:Response){
        try {
            const userData=req.body //vienen por post en el cuerpo de la peticion
            console.log(userData)
            const newUser=await AuthService.register(userData)
            res.status(201).json({message:"User egistered succesfully",newUser})
        } catch (error) {
            res.status(409).json({message:"Fallo al registrar el usuario"})
        }
        
    }

    static login(req:Request,res:Response) {
        
    }

    
    
}

export default AuthController