import { Router } from "express";
import { shortenUrl, redirectUrl } from "../controllers/urlController.js";

const router = Router();

router.post("/shorten", shortenUrl);
router.get("/:id", redirectUrl);

export default router;