import { nanoid } from "nanoid";
import * as db from "../db/memoryDb.js";

export const createShortUrl = (url, expirationTimeSeconds = null) => {
    const id = nanoid(6);
    db.storeUrl(id, url, expirationTimeSeconds);
    return id;
};

export const getOriginalUrl = (id) => db.getUrl(id);