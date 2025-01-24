import { Request, Response } from "express"
import { AuthService } from "../services/auth.service"

//Se comunica con el cliente
class AuthController{
    
    static async register(req:Request,res:Response){
        try {
            const userData=req.body //vienen por post en el cuerpo de la peticion
           //TODO validar login
            const newUser=await AuthService.register(userData)
            res.status(201).json({message:"User egistered succesfully",newUser})
        } catch (error) {
            res.status(409).json({message:"Fallo al registrar el usuario"})
        }
        
    }

    static async login(req:Request,res:Response) {

        //ver si el usuario existe
        //ver si el password coincide
        //generar token autenticacion
        //devolver el toquen de autenticacion

        try {
            const userData=req.body //vienen por post en el cuerpo de la peticion
            console.log(userData)
            const token=await AuthService.login(userData.email,userData.password)
            //TODO devolver una cookie
            res.cookie('token',token,{
                maxAge: 60*60*1000,
                httpOnly:true, // no accesible por js
                secure: false, //solo se activa si usas hhtps
                sameSite: 'strict' //solo valido si = sitio (= dominio back+front)(seguro csrf)
            })
            res.status(201).json({message:"Login succesfull",token})
            
            
        } catch (error) {
            res.status(409).json({message:"Fail to login (Fallo al logear)",error})
        }
        
    }

    


    static async logout(req:Request,res:Response){}

    



    
    
}

export default AuthController