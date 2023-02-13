import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { userParticipation } from './endpoints/userParticipation'
import { getAllUsers } from './endpoints/getAllUsers'
import { AddressInfo } from 'node:net'


dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())



//Usuários

app.post("/user", userParticipation)

app.get("/user", getAllUsers)


// app.listen(process.env.PORT || 3003, () => {
//   console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
// });


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error("Failure upon starting server.");
  }
});