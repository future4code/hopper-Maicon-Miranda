import { v4 } from "uuid"

//Exercício 1. b)

export class IdGenerator {
    public generateId = () => {
        return v4()
    }
}
