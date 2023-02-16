import { Request, Response } from "express"
import connection from "../connection"

export default async function getAllUsers (req: Request, res: Response): Promise<void> {
    try {
        const result = await connection.raw(`SELECT * FROM labecommerce_users;`)

        res.status(200).send(result[0])
    } catch (error) {
        res.status(500).send(error)
    }
}
