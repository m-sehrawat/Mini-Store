export const getItemFromLocal = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    } else {
        return undefined;
    }
}

export const setItemToLocal = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
}

export const removeItemToLocal = (key) => {
    return localStorage.removeItem(key);
}