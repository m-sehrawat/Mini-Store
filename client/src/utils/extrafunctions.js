export const shortString = (text, limit = 15) => {
    return text.slice(0, limit) + (text.length > limit ? "..." : "");
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

export const cartTotalAmount = (arr, coupon) => {

    let discount = 0;
    let productCount = 0;
    let shippingCharges = 0;
    let totalMRP = 0;
    let payableAmount = 0;

    for (let x of arr) {
        totalMRP += x.price;
        productCount += x.quantity;
    }
    discount = Math.floor(totalMRP * coupon / 100);
    shippingCharges = totalMRP > 0 && totalMRP < 999 ? 100 : 0;
    payableAmount = totalMRP - discount + shippingCharges;

    return { discount, productCount, shippingCharges, totalMRP, payableAmount };
}

export const addressValidator = (obj, toast) => {

    const { fullName, mobile, streetAddress, city, state, pincode } = obj;

    if (fullName.length < 3) {
        notify(toast, "Please add a valid name", "error");
        return false;

    } else if (mobile.length !== 10) {
        notify(toast, "Please add 10 digit mobile number", "error");
        return false;

    } else if (streetAddress.length < 3) {
        notify(toast, "Please add a valid Street Address", "error");
        return false;

    } else if (city.length < 3) {
        notify(toast, "Please add a valid city", "error");
        return false;

    } else if (state.length < 3) {
        notify(toast, "Please add a valid state", "error");
        return false;

    } else if (pincode.length !== 6) {
        notify(toast, "Please add a valid 6 digit pincode", "error");
        return false;

    } else {
        return true;
    }
}

export const signupValidator = (obj, toast) => {
    const { name, mobile, email, password } = obj;
    let isEmail = email.split("").lastIndexOf("@");
    let isEmailDot = email.split("").lastIndexOf(".");

    if (name.length <= 3) {
        notify(toast, "Name length should be greater then 3 alphabets ", "error");
        return false;

    } else if (mobile.length !== 10) {
        notify(toast, "Please add 10 digit mobile number", "error");
        return false;

    } else if (email.length < 3) {
        notify(toast, "Please add a valid email id", "error");
        return false;

    } else if (isEmail === -1) {
        notify(toast, "Invalid email id, '@' is missing", "error");
        return false;

    } else if (isEmailDot === -1) {
        notify(toast, "Invalid email id, '.' is missing", "error");
        return false;

    } else if (isEmail === email.length - 1) {
        notify(toast, "'@' shouldn't be at the end", "error");
        return false;

    } else if (isEmailDot === email.length - 1) {
        notify(toast, "'.' shouldn't be at the end", "error");
        return false;

    } else if (password.length < 6) {
        notify(toast, "Password length should be greater then 5 characters", "error");
        return false;

    } else {
        return true;
    }
}

export const productRequiredData = (arr) => {
    let newArray = [];
    for (let x of arr) {
        let { img, name, price, quantity, productId } = x;
        newArray.push({ img: img[0], name, price, quantity, productId });
    }
    return newArray;
}

export const dateFormat = (dt) => {
    const rawDate = new Date(dt);
    const time = rawDate.toLocaleTimeString();
    const dateFormatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const date = dateFormatter.format(rawDate);
    return { date, time };
}

export const getFirstName = (str) => {
    return str.split(" ")[0];
}
