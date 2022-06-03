import {v4 as uuid} from "uuid";

const makePriceFormat = (priceString) => {
    return priceString ? Number(priceString).toLocaleString() : "";
};

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.status);
    } catch (e) {
        console.log(e);
    }
};

const getRandomKey = () => {
    return uuid();
};

export {makePriceFormat, fetchData, getRandomKey};
