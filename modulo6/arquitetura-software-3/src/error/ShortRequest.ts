//Exercício 3

import { CustomError } from "./CustomError"

export class ShortRequest extends CustomError {
    constructor() {
        super(411, "O nome precisa de no mínimo 3 caracteres")
    }
}