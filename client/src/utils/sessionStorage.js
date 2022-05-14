export const getItem = (key) => {
    if (sessionStorage.getItem(key)) {
        return JSON.parse(sessionStorage.getItem(key));
    } else {
        return undefined;
    }
};

export const setItem = (key, value) => {
    return sessionStorage.setItem(key, JSON.stringify(value));
};

export const removeItemSession = (key) => {
    return sessionStorage.removeItem(key);
}