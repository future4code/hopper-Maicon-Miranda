import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";

export const getAllUsers =async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userDatabase = new UserDatabase()
        const resultado = await userDatabase.getAllUsers()

        res.status(200).send({users: resultado[0]})
        
    } catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }
}