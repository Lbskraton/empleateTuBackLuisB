import { PrismaClient } from "@prisma/client"

const prisma=new PrismaClient()

export class UserService{
    static async getUserByEmail(email:string){
        const foundUser= await prisma.user.findUnique({where:{email}, omit:{password:true}})
        if(!foundUser) throw new Error('User not found')
        return foundUser
    }

    static async getUserByID(id:number){
        const foundUser= await prisma.user.findUnique({where:{id}})
        if(!foundUser) throw new Error('User not found')
        return foundUser
    }


    static async listUsers(){
        return await prisma.user.findMany({omit:{password:true}})
    }
}