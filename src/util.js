const makePriceFormat = (priceString) => {
    return priceString ? Number(priceString).toLocaleString() : "";
};

export {makePriceFormat};
