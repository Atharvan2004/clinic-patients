import express from "express";
import { conn } from "./models/conn.js"
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { PRouter } from "./routes/patientRoute.js";
dotenv.config();

const app = express();

await conn();
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use("/patient",PRouter);