import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})


//EXERCíCIO 1

/*

app.get("/", (request :Request, response :Response) => {          
    console.log("Tudo ok!")
    response.send("Server is running in http://localhost:3003")
})

*/

//EXERCÍCIO 2 e 3


type users = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}


const arrUsers: users[] = [
    { id: 1, name: "Maicon", phone: 123456789, email: "maicon@miranda.com", website: "www.maiconmiranda.com.br" },
    { id: 2, name: "Gisela", phone: 987654321, email: "gisela@miranda.com", website: "www.giselamiranda.com.br" },
    { id: 3, name: "Catarina", phone: 123498765, email: "catarina@miranda.com", website: "www.catarinamiranda.com.br" },
]

//Exercício 4
app.get("/users", (request: Request, response: Response) => {
    const usuarios = arrUsers.map((user) => {
        return user
    })
    response.status(200).send(usuarios)
})

//Exercício 5

type posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}