import { User } from "../model/User";
import {BaseDatabase} from  "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    TABLE_NAME = "CUBO"


    public async userParticipation (user: User){
        await BaseDatabase.connection.raw(`INSERT INTO ${this.TABLE_NAME} 
        (id, name, lastname, participation) VALUES(
            '${user.getId()}', 
            '${user.getName()}', 
            '${user.getLastName()}', 
            '${user.getParticipation()}');`)    
    }

    public async getAllUsers(){
        const resultado = await BaseDatabase.connection.raw(`SELECT * FROM ${this.TABLE_NAME};`)
        return resultado
    }
}
