import { httpException } from "../exceptions/httpException"
import { Offer, PrismaClient, Rate, User } from "@prisma/client"


const prisma=new PrismaClient()
const TOKEN_PASSWORD=process.env.TOKEN_PASSWORD || 'pass'

const checkOffer=async (id:number)=>{
    const foundOffer=await prisma.offer.findUnique({where:{id}})
    if(!foundOffer) throw new httpException(404,'Offer not found')
    return foundOffer

}



export class OfferService{


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


    static async save(offer:Offer){
        const foundOffer=await prisma.offer.findUnique({where:{id:offer.id}})
        if(foundOffer) throw new httpException(404,'Offers alrady exists')
        prisma.offer.create( {data: {
            ...offer
          }})

    }

    static async update(offer:Offer){
        const foundOffer=await prisma.offer.findUnique({where:{id:offer.id}})
        if(!foundOffer) throw new httpException(404,'Offers not found')
        prisma.user.update({where:{id:offer.id},data:{...offer}})
        //prisma.user.update(foundOffer)
    }

    static async delete(id:number) {

        const foundOffer=await prisma.offer.findUnique({where:{id}})
        if(!foundOffer) throw new httpException(404,'Offer not found')
        prisma.offer.delete({where:{id}})
        
        
    }

    static async rate(rate:Number,user:User,offer:Offer){
        const foundOffer=await prisma.offer.findUnique({where:{id:offer.id}})
        if(!foundOffer) throw new httpException(404,'Offers not found')
        const foundUser=await prisma.user.findUnique({where:{id:user.id}})
        if(!foundUser) throw new httpException(404,'User not found')

        
        
    }





    
}