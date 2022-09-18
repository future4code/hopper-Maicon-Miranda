import { Request, Response } from "express"
import connection from "../connection"

export default async function getAllUsers (req: Request, res: Response): Promise<void> {
    try {
        const {name, email, password} = req.body
    } catch (error) {
        
    }
}
