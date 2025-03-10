import express from "express";
import urlRoutes from "./routes/urlRoutes.js";

const app = express();

app.use(express.json());
app.use("/", urlRoutes);

app.get("/", (req, res) => {
    res.sendFile("./public/index.html");
});

export default app;