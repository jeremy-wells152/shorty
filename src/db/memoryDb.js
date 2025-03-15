const urlDatabase = {};

export const storeUrl = (id, url, expirationTimeSeconds = null) => {
	urlDatabase[id] = url;
	if (expirationTimeSeconds) {
		setTimeout(() => {
			delete urlDatabase[id];
		}, expirationTimeSeconds * 1000);
	}
};

export const getUrl = (id) => urlDatabase[id];