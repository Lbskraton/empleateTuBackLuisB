import { prisma } from "../database/database"
import { httpException } from "../exceptions/httpException"
import { Category, PrismaClient } from "@prisma/client"




const TOKEN_PASSWORD=process.env.TOKEN_PASSWORD || 'pass'

export class CatService{

    static async  listAll(){
            const foundOffers=await prisma.offer.findMany({})
            if(!foundOffers) throw new httpException(404,'Offers not found')
            return foundOffers
     }

     static async save(cat:Category) {
        const foundCategory=await prisma.offer.findUnique({where:{id:cat.id}})
        if(foundCategory) throw new httpException(404,'Offers alrady exists')
        prisma.category.create( {data: {
                    ...cat
        }})
        
     }
}