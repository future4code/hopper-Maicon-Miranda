import { performPurchase } from "../src";
import { User } from "../src/model/user";

//Exercício 2 a)

describe("teste da função performPurchase", () => {

    const result = 1

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }

        const result = performPurchase(user, 40)

        expect(result).toEqual({
            name: "Astrodev",
            balance: 60

        })
    })

})

//Exercício 2 b)

describe("teste da função performPurchase", () => {

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 50
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

})

//Exercício 2 c)

describe("teste da função performPurchase", () => {

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 30
        }

        const result = performPurchase(user, 50)

        expect(result).not.toBeDefined()
    })

})