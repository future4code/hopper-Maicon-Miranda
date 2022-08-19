import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})


//Exercício 1

app.get("/", (request :Request, response :Response) => {          
    console.log("Tudo ok!")
    response.send("Server is running in http://localhost:3003")
})


//Exercício 2


type users = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

//Exercício 3


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

type postsType = {
    id: number,
    title: string,
    body: string,
    userId: number
}

//Exercício 6

const postsArray :postsType[] = [
    { id: 1, title: "Post 1", body: "Olá", userId: 1},
    { id: 2, title: "Post 2", body: "Oi", userId: 2},
    { id: 3, title: "Post 3", body: "Iae", userId: 3}
]

//Prefiro fazer o array fora do array usuários. Para mim, fica menos confuso.

//Exercício 7

app.get("/posts", (request: Request, response: Response) => {
    const posts = postsArray.map((post) => {
        return post
    })

    response.status(200).send(posts)
})

//Exercício 8

app.get("/users/posts", (request: Request, response: Response) => {
    const userId = request.query.id

    if (!userId) {
        response.status(400).send("Id obrigatório")
    }

})