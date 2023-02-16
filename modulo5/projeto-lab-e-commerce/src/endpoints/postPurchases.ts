import { Request, Response } from "express"
import connection from "../connection"
import getAllProducts from "./getAllProducts"

export default async function postPurchases(req: Request, res: Response): Promise<void> {

    /*
    try {
        const {user_id, product_id, quantity} = req.body

        let total_price

        const purchases = {
            id: Date.now(),
            total_price
        }

        await connection.raw(`
            INSERT INTO labecommerce_purchases(id, user_id, product_id, quantity)
            VALUES("${purchases.id}", "${purchases.user_id}", "${purchases.product_id}", "${purchases.quantity}")
        `)
        
        res.status(201).send("Product Created")

    } catch (error) {
        res.status(500).send("error")
    }
    */
}
