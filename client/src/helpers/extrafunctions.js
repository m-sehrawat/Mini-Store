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

export const gridSize = (n) => {
    switch (n) {
        case 2:
            return { grid: 2, size: 4 };
        case 3:
            return { grid: 3, size: 6 };
        case 4:
            return { grid: 4, size: 8 };
        default:
            return { grid: 3, size: 6 };
    }
}
