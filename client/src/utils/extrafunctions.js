export const shortString = (text) => {
    return text.slice(0, 15) + (text.length > 15 ? "..." : "");
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

export const notify = (toast, title, status, description) => {
    return toast({
        title,
        status,
        description,
        duration: 3000,
        variant: "top-accent",
        isClosable: true,
    });
};

export const deleteKeyFromObject = (obj, key) => {
    delete obj[key];
    return obj;
}

export const totalMRP = (arr) => {
    let amount = 0;
    let prodCount = 0;
    for (let x of arr) {
        amount += x.price;
        prodCount = x.quantity;
    }
    return { amount, prodCount };
}
