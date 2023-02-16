import { Request, Response } from "express"
import connection from "../connection"

export default async function getAllProducts (req: Request, res: Response): Promise<void> {
    try {
        const result = await connection.raw(`SELECT * FROM labecommerce_products;`)

        res.status(200).send(result[0])
    } catch (error) {
        res.status(500).send(error)
    }
}
