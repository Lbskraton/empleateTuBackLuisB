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


    static async listAll(title:string=''){
        const foundOffers=await prisma.offer.findMany({
            where: title ?{  //meto una ternaria para filtrar
                title: {
                    contains: title
                }
            }:{},
            orderBy:{
                createdAt: "desc"
                
            }
        })
        if(!foundOffers) throw new httpException(404,'Offers not found')
        return foundOffers
    }


    static async save(userId:number,offer:Offer){
        
        return await prisma.offer.create( {data: {
            ...offer,
            idUserCreator:userId
          }})

    }

    static async update(id:number,offer:Offer){
        const foundOffer=await prisma.offer.findUnique({where:{id}})
        if(!foundOffer) throw new httpException(404,'Offers not found')
        return await prisma.user.update({where:{id},data:{...offer}})
        //prisma.user.update(foundOffer)
    }

    static async delete(id:number) {

        const foundOffer=await prisma.offer.findUnique({where:{id}})
        if(!foundOffer) throw new httpException(404,'Offer not found')
        return await prisma.offer.delete({where:{id}})
        
        
    }


    static getRate(id: number) {
        throw new Error("Method not implemented.")
    }


    static rate(userId: any, id: number, value: any) {
        throw new Error("Method not implemented.")
    }

   





    
}