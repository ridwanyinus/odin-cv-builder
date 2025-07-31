export const saveToStorage = (key, value) =>
	localStorage.setItem(key, JSON.stringify(value));

export const loadFromStorage = (key, fallback = null) => {
	const raw = localStorage.getItem(key);
	return raw ? JSON.parse(raw) : fallback;
};

// localStorage.clear();
