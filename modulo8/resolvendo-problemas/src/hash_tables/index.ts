import { type } from "os"

type Character = {
   [key:string]: string
}

const homer: Character = {
   name: "Homer Simpson",
   cartoon: "The Simpsons"
}

homer.phrase = "Moe, me vê mais uma Duff Beer!"

console.log(homer);