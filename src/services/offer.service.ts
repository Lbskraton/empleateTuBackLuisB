import { PrismaClient } from "@prisma/client"


const prisma=new PrismaClient()
const TOKEN_PASSWORD=process.env.TOKEN_PASSWORD || 'pass'

export class OfferService{
    static async listAll(){
        return await prisma.offer.findMany({})

    }

    
}