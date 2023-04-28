import express, { Request, Response } from 'express';
import cors from 'cors'
import { Usuario, usuarios } from './data';

const app = express()

app.use(express.json())
app.use(cors())

//Exercício 5 e 7

app.post("/usuarios", (request: Request, response: Response) => {
    let errorCode = 400
    try {
        const { nome, cpf, idade } = request.body

        if (!nome || !cpf || !idade) {
            errorCode = 422
            throw new Error("Ausência de parâmetros no body.")
        }

        const novoUsuario: Usuario = {
            nome: nome,
            cpf: cpf,
            idade: idade
        }

        if (idade < 18) {
            errorCode = 418
            throw new Error("A idade mínima exigida é de 18 anos.");
        }

        //Desafio 1
        for (let usuario of usuarios)
        if (cpf === usuario.cpf) {
            errorCode = 422
            throw new Error("CPF já foi cadastrado.");
        }


        usuarios.push(novoUsuario)

        response.status(200).send({ message: 'Usuário criado com sucesso!', usuarios })

    } catch (error: any) {
        response.status(errorCode).send(error.message)
    }
})

//Exercício 6

app.get("/usuarios", (request: Request, response: Response) => {
    response.status(200).send(usuarios)
})








app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003')
})