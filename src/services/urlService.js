import { nanoid } from "nanoid";
import * as db from "../db/memoryDb.js";

export const createShortUrl = (url) => {
    const id = nanoid(6);
    db.storeUrl(id, url);
    return id;
};

export const getOriginalUrl = (id) => db.getUrl(id);