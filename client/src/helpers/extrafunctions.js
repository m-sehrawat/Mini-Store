export const shortString = (text) => {
    return text.slice(0, 20) + (text.length > 20 ? "..." : "");
}

export const sortValue = (str) => {
    switch (str) {
        case "priceLH":
            return { price: 1 };
        case "priceHL":
            return { price: -1 };
        case "ratingLH":
            return { rating: 1 };
        case "ratingHL":
            return { rating: -1 };
        default:
            return null;
    }
}


export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
