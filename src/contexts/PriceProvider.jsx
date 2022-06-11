import React, {useContext, useState} from "react";

const PriceContext = React.createContext();

export const usePriceContext = () => useContext(PriceContext);

const PriceProvider = ({children}) => {
    const min = 0;
    const max = 100;

    const [priceRange, setPriceRange] = useState({min: 0, max: 0});
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);
    const [leftPointerPercent, setLeftPointerPercent] = useState(0);
    const [rightPointerPercent, setRightPointerPercent] = useState(3);
    const [priceMinIdx, setPriceMinIdx] = useState(0);
    const [priceMaxIdx, setPriceMaxIdx] = useState(0);
    const [priceDataLength, setPriceDataLength] = useState(0);

    const priceProps = {
        priceRange,
        setPriceRange,
        minValue,
        setMinValue,
        maxValue,
        setMaxValue,
        leftPointerPercent,
        setLeftPointerPercent,
        rightPointerPercent,
        setRightPointerPercent,
        priceMinIdx,
        setPriceMinIdx,
        priceMaxIdx,
        setPriceMaxIdx,
        priceDataLength,
        setPriceDataLength,
    };

    return <PriceContext.Provider value={priceProps}>{children}</PriceContext.Provider>;
};

export default PriceProvider;
