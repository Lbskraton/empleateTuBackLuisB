import { Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken";


export function isAdmin(req:Request,res:Response,next:NextFunction){
    const token=req.cookies.token
    //const token=req.headers.authorization?.split(" ")[1]
    if(!token) return res.status(401).json({error:'Access denied'})
        
     try {
        const role=token.role

        if(role!='admin') return res.status(401).json({error:'You not have permission to see this'})
            
        
        next()
    } catch (error) {
            res.status(401).json({error})
    }
    

}