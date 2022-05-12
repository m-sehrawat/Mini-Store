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
        case "nameAZ":
            return { name: 1 };
        case "nameZA":
            return { name: -1 };
        default:
            return null;
    }
}

const getGender = (isGender) => {
    const x = [{ gender: 'men' }, { gender: 'kids' }, { gender: 'women' }];
    const y = [{ gender: isGender }];
    return isGender === "allProducts" ? x : y;
}

const getCategory = (category) => {
    const x = [{ category: 'cloths' }, { category: 'shoes' }];
    const y = [{ category: category }];
    return category === "allCategory" ? x : y;
}

const renameObjectKey = (obj, newKey, oldKey) => {
    delete Object.assign(obj, { [newKey]: obj[oldKey] })[oldKey];
    return obj;
};

module.exports = { sortValue, getGender, getCategory, renameObjectKey };