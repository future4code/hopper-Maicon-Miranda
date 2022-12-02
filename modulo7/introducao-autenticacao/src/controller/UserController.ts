import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { EditUserInputDTO, GetUserDTO, LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {

  public signup = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email, password } = req.body;

      const input: UserInputDTO = {
        name,
        nickname,
        email,
        password,
      };

      const userBusiness = new UserBusiness()
      const token = await userBusiness.signup(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: LoginInputDTO = {
        email,
        password,
      };
      const userBusiness = new UserBusiness()
      const token = await userBusiness.login(input);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };


  public editUser = async (req: Request, res: Response) => {
    try {

      const input: EditUserInputDTO = {
        name: req.body.name,
        nickname: req.body.nickname,
        token: req.headers.authorization as string
      };

      const userBusiness = new UserBusiness()
      await userBusiness.editUser(input);

      res.status(201).send({ message: "Usuário alterado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getUser = async (req: Request, res: Response) => {
    try {

      const input: GetUserDTO = {
        token: req.headers.authorization as string
      }

      const userBusiness = new UserBusiness()
      const user = await userBusiness.getUser(input)

      const userData = {
        id: user.id,
        email: user.email
      }


      res.status(200).send({
        id: user.id,
        email: user.email,
      });


    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

}
function getTokenData(token: string) {
  throw new Error("Function not implemented.");
}

function getUserById(id: any) {
  throw new Error("Function not implemented.");
}

