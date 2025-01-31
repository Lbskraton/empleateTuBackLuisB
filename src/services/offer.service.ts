import { httpException } from "../exceptions/httpException"
import { PrismaClient, User } from "@prisma/client"


const prisma=new PrismaClient()
const TOKEN_PASSWORD=process.env.TOKEN_PASSWORD || 'pass'

const checkOffer=async (id:number)=>{
    const foundOffer=await prisma.offer.findUnique({where:{id}})
    if(!foundOffer) throw new httpException(404,'Offer not found')
    return foundOffer

}



export class OfferService{


    static async delete(id: number) {

        const foundOffer=await prisma.offer.findUnique({where:{id}})
        if(!foundOffer) throw new httpException(404,'Offer not found')
        prisma.offer.delete({where:{id}})
        
        
    }


    static async getById(id: number) {
        const foundOffer=await prisma.offer.findUnique({where:{id}})
        if(!foundOffer) throw new httpException(404,'Offer not found')
        return foundOffer
    
        
    }


    static async listAll(){
        const foundOffers=await prisma.offer.findMany({})
        if(!foundOffers) throw new httpException(404,'Offers not found')
        return foundOffers
    }


    static async save(user:User){
        const foundOffer=await prisma.offer.findMany({})
        if(foundOffer) throw new httpException(404,'Offers alrady exists')
        prisma.offer.create(foundOffer)

    }

    static async update(user:User){
        const foundOffer=await prisma.offer.findMany({})
        if(!foundOffer) throw new httpException(404,'Offers not found')
        //prisma.user.update(foundOffer)
    }





    
}