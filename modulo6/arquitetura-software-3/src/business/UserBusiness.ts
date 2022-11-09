import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { User } from "../model/User"
import { createUserDTO } from "../model/UserDTO"
import { CustomError } from "../error/CustomError"
import { InvalidRequest } from "../error/InvalidRequest"
import { InvalidEmail } from "../error/InvalidEmail"
import { ShortRequest } from "../error/ShortRequest"

export class UserBusiness {
  async create({ email, name, password }: createUserDTO): Promise<void> {
    try {
      if (!email || !name || !password) {
        throw new InvalidRequest()
      }

      //Exercício 2

      if (!email.includes("@")) {
        throw new InvalidEmail()
      }

      if (name.length < 3) {
        throw new ShortRequest()
      }

      

      const id = generateId()

      const userDatabase = new UserDatabase()
      await userDatabase.create({
        id,
        name,
        email,
        password
      })

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message || error.sqlMessage)
    }

  }

  async get(): Promise<User[]> {
    return await new UserDatabase().get();
  }

}
