import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async (request: Request, response: Response): Promise<void> => {
   try {
      const users = await selectAllUsers()


      if (!users.length) {
         response.statusCode = 404
         throw new Error("User not found")
      }

      response.status(200).send(users)

   } catch (error: any) {
      console.log(error)
      response.send(error.message || error.sqlMessage)
   }
};



export default async function selectAllUsers(): Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}