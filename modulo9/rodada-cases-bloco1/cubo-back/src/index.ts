import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { userParticipation } from './endpoints/userParticipation'
import { getAllUsers } from './endpoints/getAllUsers'


dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())



//Usuários

app.post("/user", userParticipation)

app.get("/user", getAllUsers)


app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});
