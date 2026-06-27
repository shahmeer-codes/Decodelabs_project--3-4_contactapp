import express from "express";
import db from "../models/app-dbtructure.js";
import { home , addcontact , view , edit , post_in_db , post_id ,deletebyid } from "../controller/routes_controller.js"
const app = express.Router();

app.get("/", home);

app.get("/addnewcontact", addcontact);

app.get("/view/:id",view );

app.get("/edit/:id", edit);

// Simulated actions (do nothing, just redirect)
app.post("/addnewcontact", post_in_db);

app.post("/edit/:id", post_id);

app.get("/delete/:id",deletebyid);

export default app;