import { Request, Response } from "express"
import connection from "../connection"

export default async function postProduct(req: Request, res: Response): Promise<void> {

    try {
        const {name, price, image_url} = req.body

        const newUser = {
            id: Date.now(),
            name, 
            price, 
            image_url
        }

        await connection.raw(`
            INSERT INTO labecommerce_products(id, name, price, image_url)
            VALUES("${newUser.id}", "${newUser.name}", "${newUser.price}", "${newUser.image_url}")
        `)

        res.status(201).send("Product Created")

    } catch (error) {
        res.status(500).send("error")
    }
}
