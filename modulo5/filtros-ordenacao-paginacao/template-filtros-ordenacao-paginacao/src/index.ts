import { app } from "./app";
import { getAllUsers, getUserName, getUserType, getUserOrder, getUserPage} from "./endpoints/getAllUsers";

app.get("/users", getAllUsers);

app.get("/users/search", getUserName);

app.get("/users/:type", getUserType);

app.get("/users/order", getUserOrder);

app.get("/users/page", getUserPage);