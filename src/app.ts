import express,{Response} from 'express'
import AuthRouter from './routes/auth.routes'
import UserRouter from './routes/user.routes'

 const app=express()

 app.use(express.json())


app.get('/',  (_,res:Response)=>{
    res.send('Bienvenido al backend (api:rest)')
})

app.use('/api/auth/',AuthRouter)
app.use('/api/users/',UserRouter)


export default app