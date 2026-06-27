import express from "express";
import contactroutes from "./Routes/contact_route.js"
import { dbconnect } from "./config/database.js";
const app = express();

const port =process.env.PORT;
dbconnect();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");


app.use("/",contactroutes)

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
