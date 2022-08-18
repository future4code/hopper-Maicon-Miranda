import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})


//EXERCíCIO 1

/*

app.get("/", (request :Request, response :Response) => {          
    console.log("Tudo ok!")
    response.send("Server is running in http://localhost:3003")
})

*/