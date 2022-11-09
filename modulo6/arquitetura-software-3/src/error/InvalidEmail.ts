//Exercício 3

import { CustomError } from "./CustomError"

export class InvalidEmail extends CustomError {
    constructor() {
        super(400, "E-mail informado é inválido")
    }
}