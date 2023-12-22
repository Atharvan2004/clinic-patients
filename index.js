import express from "express";
import { conn } from "./models/conn.js"
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { PRouter } from "./routes/patientRoute.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(dirname(__filename), "client");
console.log(__dirname)
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

app.get("*",(req,res)=>{
    res.sendFile("index.html",{root:__dirname})
});

app.use("/patient",PRouter);