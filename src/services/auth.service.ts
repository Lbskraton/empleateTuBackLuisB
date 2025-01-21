import { PrismaClient, User } from "@prisma/client";
import bcrypt from 'bcrypt'
const prisma=new PrismaClient()

export class AuthService{

    

    static async register(user:User){
        //ver si el usuario existe

        const findUser= await prisma.user.findUnique(
            {
                where: {email:user.email}
            }
        )
        if(findUser) throw new Error(`User ${user.email} already exists`)

        //encriptar el password

        const passwordEncrypted= await bcrypt.hash(user.password,10)
        user.password=passwordEncrypted //por si escaso

    

        //guardar el usuario en la bd

        return await prisma.user.create({
            data:{...user,password:passwordEncrypted,role:null},
            omit:{password:true} //no devuelva el password
            
        })

    }
}