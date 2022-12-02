import { UserDatabase } from "../data/UserDatabase";
import { user } from "../types/user";


export class UserBusiness {
    public createUser = async (input: any) => {
        try {
            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new Error('Preencha todos os campos')
            }

            const id: string = Date.now().toString()

            const userDatabase = new UserDatabase()

            await userDatabase.insertUser({
                id,
                name,
                email,
                password
            })

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async get(): Promise<user[]> {
        return await new UserDatabase().getUsers();
    }

    async deleteUser(input: { id: string }) {

        if (!input.id) {
            throw new Error("Insira um id!")
        }

        return await new UserDatabase().deleteUser(input.id);
    }
}

