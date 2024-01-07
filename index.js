import express from "express";
import { conn } from "./models/conn.js"
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { PRouter } from "./routes/patientRoute.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve();
console.log(__dirname)
dotenv.config();

const app = express();
const port =process.env.PORT  || 3000;
await conn();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.json());
app.use("/patient", PRouter);
app.use(cors());
app.use(express.static(path.join(__dirname,'/client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,'/client/dist/index.html'))
});
