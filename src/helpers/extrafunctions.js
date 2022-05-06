export const shortString = (text) => {
    return text.slice(0, 20) + (text.length > 20 ? "..." : "");
}

