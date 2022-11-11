import { CustomError } from "../error/customError";
import {  user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          nome: user.nome,
          email: user.email,
          senha: user.senha,
        })
        .into("Cookenu_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection("Auth_users")
        .select().where({ email })

      return result[0]
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserById = async (id: string) => {

    try {
      const result = await UserDatabase.connection("Auth_users")
        .select("*")
        .from("Auth_users")
        .where({ id });

      return result[0];

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }

  }

}