import express from "express";
import "dotenv/config";
import { router } from "./controller/employeeController.js";
import { connectDB } from "./repository/dbConnection.js";
import cors from "cors";

connectDB();
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/emp", router);
app.listen(port);
