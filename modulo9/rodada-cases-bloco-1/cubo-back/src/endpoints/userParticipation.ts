import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User"; 

export const userParticipation = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let{ name, lastname, participation} = req.body
        

        if( !name|| !lastname || !participation ){
            ("Invalid")
        }

        if(isNaN(participation)) {
            throw new Error("The data informed is not a number");
        }
        

        const userDatabase = new UserDatabase()

        const newUser = new User(
            Date.now().toString(),
            name,
            lastname,
            participation,
        )
        
        const response = await userDatabase.userParticipation(newUser)

        res.status(201).send({message: "Registered participation", newUser: newUser})
        
    } catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }
}