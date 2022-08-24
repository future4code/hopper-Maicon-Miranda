import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

//Exercício 1

app.get("/ping", (request :Request, response :Response) => {          
    response.send("Pong! 🏓")
})

//Exercício 2

type toDos = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

//Exercício 3

const toDosArray: toDos[] = [
    { userId: 1, id: 1, title: "atualizar o GitHub", completed: false },
    { userId: 2, id: 2, title: "marcar as consultas", completed: false },
    { userId: 3, id: 2, title: "atualizar o currículo", completed: true },
]

//Exercício 4

app.get('/todos', (request:Request, response:Response) => {
    const assignments = toDosArray.filter((assignment) => {
      return assignment.completed == true
    })
    response.status(200).send(assignments)
  })

//Exercício 5

app.post('/todos/create', (request: Request, response: Response) =>{
    
    
})























app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})