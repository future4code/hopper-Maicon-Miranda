import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/customError";
import {
  UserInputDTO,
  user,
  LoginInputDTO,
  GetUserDTO,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const authenticator = new Authenticator()


export class UserBusiness {
  public signup = async (input: UserInputDTO) => {
    try {
      const { nome, email, senha } = input;

      if (!nome || !email || !senha) {
        throw new CustomError(400,
        'Preencha os campos "nome", "email" e "senha"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = idGenerator.generateId();

      const user: user = {
        id,
        nome,
        email,
        senha,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const token = authenticator.generateToken({id})

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  //Exercício 5 a)

  public login = async (input: LoginInputDTO) => {
    try {
      const { email, senha } = input;

      if (!senha) {
        throw new InvalidPassword()
      }

      //Exercício 5 b)

      if (!email.includes("@") || !email) {
        throw new InvalidEmail();
      }

      const userDatabase = new UserDatabase();
      const user = await userDatabase.getUserByEmail(email);

      if(!user) {
        throw new UserNotFound()
      }

      if(user.password !== senha) {
        throw new InvalidPassword()
      }

      const token = authenticator.generateToken({id: user.id})

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };


  public getUser = async (input :GetUserDTO) => {
    try {

      const { token } = input
      const { id } = authenticator.getTokenData(token)

      const userDatabase = new UserDatabase();
      const user = await userDatabase.getUserById(id)

      return user

    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }
}
