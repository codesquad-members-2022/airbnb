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

export {makePriceFormat, fetchData};
