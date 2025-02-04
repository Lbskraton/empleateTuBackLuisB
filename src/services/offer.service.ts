import { prisma } from "../database/database"
import { httpException } from "../exceptions/httpException"
import { Offer, PrismaClient, Rate, User } from "@prisma/client"


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


    static async getRate(idOffer: number) {
        const ratingStats=await prisma.rate.aggregate({where:{idOffer},_avg: {value:true},_count: {value:true}})

        return{
            totalRatings:ratingStats._count.value,
            averageRatings:ratingStats._avg.value?.toFixed(2)
        }

    }


    static async rate(idUser: any, idOffer: number, value: any) {
        const foundOffer=await prisma.offer.findUnique({where:{id:idOffer}})
        if(!foundOffer) throw new httpException(404,'Offer not found')

        prisma.rate.upsert({
            where:{
                idUser_idOffer:{idUser,idOffer}

            },update:{
                value

            },create:{
                idUser,
                idOffer,
                value

        }})


    }

    static async getMyRate(idUser:number,idOffer:number){
        const foundOffer=await prisma.offer.findUnique({where:{id:idOffer}})
        if(!foundOffer) throw new httpException(404,'Offer not found')
        return await prisma.rate.findUnique({
            where:{
                idUser_idOffer:{idUser,idOffer}
            },select:{ value:true } //solo nos traemos el valor
        })
    }

    
}