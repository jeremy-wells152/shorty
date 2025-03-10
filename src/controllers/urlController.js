import { createShortUrl, getOriginalUrl } from "../services/urlService.js";

export const shortenUrl = (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }
    const id = createShortUrl(url);
    res.json({ id });
};

export const redirectUrl = (req, res) => {
    const originalUrl = getOriginalUrl(req.params.id);
    if (!originalUrl) {
        return res.status(404).send(`${req.params.id} not found!`);
    }

    res.redirect(originalUrl);
};