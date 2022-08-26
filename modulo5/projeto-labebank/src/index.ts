import express, { Request, Response} from 'express';
import cors from 'cors'
import { Usuario } from './data';

const app = express()

app.use(express.json())
app.use(cors())


app.post("/usuarios", (request: Request, response: Response) => {
    try {
        
    } catch (error) {
        
    }
})

app.get("/usuarios", (request: Request, response: Response) => {
    try {
        
    } catch (error) {
        
    }
})

app.get("/saldo", (request: Request, response: Response) => {
    try {
        
    } catch (error) {
        
    }
})

app.patch("/saldo", (request: Request, response: Response) => {
    try {
        
    } catch (error) {
        
    }
})














app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003')
})