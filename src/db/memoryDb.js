const urlDatabase = {};

export const storeUrl = (id, url) => {
  urlDatabase[id] = url;
};

export const getUrl = (id) => urlDatabase[id];