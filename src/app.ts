import express,{Response} from 'express'

 const app=express()


app.get('/',  (_,res:Response)=>{
    res.send('Bienvenido al backend (api:rest)')
})


export default app