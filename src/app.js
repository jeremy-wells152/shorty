import express from "express";
import urlRoutes from "./routes/urlRoutes.js";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use("/", urlRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "public", "index.html"));
});

export default app;