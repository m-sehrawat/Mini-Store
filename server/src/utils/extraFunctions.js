const sortValue = (str) => {
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

const getGender = (isGender) => {
    const x = [{ gender: 'men' }, { gender: 'kids' }, { gender: 'women' }];
    const y = [{ gender: isGender }];
    return isGender === "allProducts" ? x : y;
}

module.exports = { sortValue, getGender };