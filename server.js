import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import urlroutes from "./routes/urlroutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", urlroutes);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "SERVER RUNNING SUCCESSFULLY"
    });
});

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});