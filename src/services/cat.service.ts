import { prisma } from "../database/database"
import { httpException } from "../exceptions/httpException"
import { Category, PrismaClient } from "@prisma/client"




const TOKEN_PASSWORD=process.env.TOKEN_PASSWORD || 'pass'


const checkCategory=async (id:number)=>{
   const foundCategory=await prisma.category.findUnique({where:{id}})
   if(!foundCategory) throw new httpException(404,'Offer not found')
   return foundCategory

}

export class CatService{

    static async  listAll(){
            const foundCategorys=await prisma.category.findMany({})
            if(!foundCategorys) throw new httpException(404,'Categorys not found')
            return foundCategorys
     }

     static async save(cat:Category) {
      return await prisma.category.create( {data: {
         ...cat
       }})

     }
     
     static async update(id:number,cat:Category){
         const foundCategory=checkCategory(id)
         return await prisma.category.update({where:{id},data:{...cat}})       

     }

     static async delete(id:number) {
      const foundCategory=checkCategory(id)
      return await prisma.category.delete({where:{id}})
      
      }

      static async getById(id: number) {
         return checkCategory(id)
     
         
     }

      
}