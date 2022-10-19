import express, { Request, Response } from 'express';
import cors from 'cors';
import { Produto, produtos } from './data';
import { request } from 'http';

const app = express()


app.use(express.json())
app.use(cors())

//Exercício 1

app.get("/test", (request: Request, response: Response) => {
    response.status(200).send("API funcionando normalmente")
})

//Exercício 3 e 7

app.post("/produtos/add", (request: Request, response: Response) => {
    let errorCode = 400
    try {
        let { id, name, price } = request.body

        if(!id || !name || !price) {
            errorCode = 422
            throw new Error ("Ausência de parâmetro")
        }

        const novoProduto :Produto = {
            id: id,
            name: name,
            price: price,
        } 

        produtos.push(novoProduto)

        response.status(200).send({ message: "Produto adicionado!", produtos})
    } catch (error: any) {
        response.status(errorCode).send(error.message)
    }

})

//Exercício 4

app.get("/produtos", (request: Request, response: Response) => {
    response.status(200).send(produtos)
})

//Exercício 5













app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})