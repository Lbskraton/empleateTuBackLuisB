import express,{Response} from 'express'
import AuthRouter from './routes/auth.routes'
import UserRouter from './routes/user.routes'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import compression from 'compression'
import cookieParser from 'cookie-parser'

const app=express()
app.use(helmet())

app.use(compression())

 app.use(express.json())


app.use(cookieParser())


 const limiter=rateLimit({ //baneo el usuario si intento mucho
    max: 100,
    windowMs: 1000*15*60 
 })

 app.use(limiter)


app.get('/',  (_,res:Response)=>{
    res.send('Bienvenido al backend (api:rest)')
})

app.use('/api/auth/',AuthRouter)
app.use('/api/users/',UserRouter)


export default app