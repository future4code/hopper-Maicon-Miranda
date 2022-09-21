import app from "./app";
import getAllProducts from "./endpoints/getAllProducts";
import getAllUsers from "./endpoints/getAllusers";
import postProduct from "./endpoints/postProduct";
import postUser from "./endpoints/postUser";

app.post("/users", postUser);
app.get("/users", getAllUsers);
app.post("/products", postProduct);
app.get("/products", getAllProducts)
