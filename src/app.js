import express from "express";
import urlRoutes from "./routes/urlRoutes.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use("/", urlRoutes);

export default app;