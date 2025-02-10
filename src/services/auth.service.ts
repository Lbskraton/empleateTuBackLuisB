
import { prisma } from "../database/database";
import  {httpException}  from "../exceptions/httpException";
import { PrismaClient, User } from "@prisma/client";
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken";


const TOKEN_PASSWORD=process.env.TOKEN_PASSWORD || 'pass'

export class AuthService{


    static async register(user:User){
        //ver si el usuario existe

        const findUser= await prisma.user.findUnique(
            {
                where: {email:user.email}
            }
        )
        if(findUser) throw new httpException(409,`User ${user.email} already exists`)

        //encriptar el password

        const passwordEncrypted= await bcrypt.hash(user.password,10)
        user.password=passwordEncrypted //por si escaso

    

        //guardar el usuario en la bd

        return await prisma.user.create({
            data:{...user,password:passwordEncrypted,role:null},
            omit:{password:true} //no devuelva el password
            
        })

    }

    static async login(email:string,password:string){
        //ver si el usuario existe

        /*

        const query=`Select * from user where email='${email}' AND password='${password}'`
        const foundUser2=await prisma.$queryRawUnsafe(query) as User[]
        const foundUser=foundUser2[0]

        if(!foundUser) throw new Error(`Invalid user or password`)
        */


        
        const foundUser=await prisma.user.findUnique(
            {
                where: {email}
            }
        )

        console.log('logeando '+email+' '+password)
        if(!foundUser) throw new httpException(401,`Invalid user or password`)
        
        const isCorrectPassword=await bcrypt.compare(password,foundUser.password)
        console.log(password)
        console.log(foundUser.password)
        if(!isCorrectPassword) throw new httpException(401,`Invalid user or password`)

        

        const token=jwt.sign({id:foundUser.id,name:foundUser.name,email:foundUser.email,rol:foundUser.role},TOKEN_PASSWORD,{expiresIn:"1h"})

        return token
        


    }

    
}