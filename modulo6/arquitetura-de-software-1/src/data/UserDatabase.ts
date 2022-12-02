import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/user";

export class UserDatabase extends BaseDatabase {

    public insertUser =async (user: user) => {
        try {
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
               }).into('User_Arq')
        } catch (error: any) {
            throw new Error(error.message)
        }
       
    }

    public getUsers = async () => {
        try {
            const users: user[] = [];
            const result = await UserDatabase.connection().select('*').from('User_Arq')

            for (let user of result) {
                users.push(user);
            }
            return users;
        } catch (error :any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public deleteUser = async(id: string): Promise<void> => {
        try {
          await UserDatabase.connection().delete().from('User_Arq').where({id})
            
        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
}