import { Request, Response } from "express"
import connection from "../connection"

export default async function postUser(req: Request, res: Response): Promise<void> {

    try {
        const {name, email, password} = req.body

        const newUser = {
            id: Date.now(),
            name, 
            email, 
            password
        }

        await connection.raw(`
            INSERT INTO labecommerce_users(id, name, email, password)
            VALUES("${newUser.id}", "${newUser.name}", "${newUser.email}", "${newUser.password}")
        `)

        res.status(201).send("User created")

    } catch (error) {
        res.status(500).send("error")
    }
}
