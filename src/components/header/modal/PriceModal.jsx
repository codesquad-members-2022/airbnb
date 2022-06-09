import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Modal from "./Modal";
import PriceGraph from "./PriceGraph";
import {makePriceFormat, fetchData, stopPropagation} from "../../../helper/util";
import RangeSlider from "./RangeSlider";
import {usePriceContext} from "../../../contexts/PriceProvider";

const PriceModal = ({isClicked}) => {
    const {
        priceRange,
        setPriceRange,
        minValue,
        setMinValue,
        maxValue,
        setMaxValue,
        priceMinIdx,
        setPriceMinIdx,
        priceMaxIdx,
        setPriceMaxIdx,
        priceDataLength,
        setPriceDataLength,
    } = usePriceContext();

    const [priceData, setPriceData] = useState(null);
    const [minimumPrice, setMinimumPrice] = useState(0);
    const [maximumPrice, setMaximumPrice] = useState(0);

    useEffect(() => {
        const getPriceData = async () => {
            const result = await fetchData("http://localhost:3000/price");
            const sortedResult = result.map((data) => data.price).sort((a, b) => a - b);
            setPriceData(sortedResult);
            setPriceDataLength(result.length);
            setPriceMinIdx(0);
            setPriceMaxIdx(result.length - 1);
            setMinimumPrice(sortedResult[0]);
            setMaximumPrice(sortedResult[result.length - 1]);
        };
        getPriceData();
    }, []);

    if (!priceData) {
        return (
            <PriceModalBox isClicked={isClicked}>
                <p>데이터를 불러오는 중입니다</p>
            </PriceModalBox>
        );
    }

    const changePriceRange = (type, valueInRangeInput) => {
        const dataLength = priceDataLength;
        switch (type) {
            case "min": {
                const idx = Math.floor((valueInRangeInput * dataLength) / 100);
                setPriceMinIdx(idx);
                setPriceRange({min: priceData[idx], max: priceRange.max || maximumPrice});
                break;
            }
            case "max": {
                const idx = Math.min(Math.floor((valueInRangeInput * dataLength) / 100), 99);
                setPriceMaxIdx(idx);
                setPriceRange({min: priceRange.min || minimumPrice, max: priceData[idx]});
                break;
            }
        }
    };

    const average = getAverage(priceData, priceMinIdx, priceMaxIdx);
    const rangeText = getRangeText(priceData, priceMinIdx, priceMaxIdx, maximumPrice);

    return (
        <PriceModalBox isClicked={isClicked} onClick={stopPropagation}>
            <Title>가격 범위</Title>
            <FlexBox>
                <RangeText>{rangeText}</RangeText>
                <Average>평균 1박 요금은 ₩{makePriceFormat(average)} 입니다.</Average>
            </FlexBox>
            <PriceGraph priceData={priceData} minValue={minValue} maxValue={maxValue} />
            <RangeSlider
                minValue={minValue}
                setMinValue={setMinValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                changePriceRange={changePriceRange}
                setPriceMinIdx={setPriceMinIdx}
                setPriceMaxIdx={setPriceMaxIdx}
                dataLength={priceDataLength}
            />
        </PriceModalBox>
    );
};

const getRangeText = (priceData, minIdx, maxIdx, maximumPrice) => {
    const minimumPriceInRange = makePriceFormat(priceData[minIdx]);
    const maximumPriceInRange = makePriceFormat(priceData[maxIdx]);
    const isMaximumPrice = priceData[maxIdx] === maximumPrice;

    return `₩${minimumPriceInRange} - ₩${maximumPriceInRange}${isMaximumPrice ? "+" : ""}`;
};

const getAverage = (data, minIdx, maxIdx) => {
    const slicedData = data.slice(minIdx, maxIdx + 1);
    const sum = slicedData.reduce((acc, cur) => acc + cur, 0);
    const average = sum / (maxIdx - minIdx + 1);

    return Math.ceil(average);
};

const PriceModalBox = styled(Modal)`
    ${({theme}) => theme.layout.flexLayoutMixin("column")}
    width: 465px;
    height: 260px;
    top: 270px;
    left: 70%;
    padding: 52px 64px;
    gap: 16px;
    transform: translate(-50%, -50%);
    display: ${({isClicked}) => (isClicked ? "flex" : "none")};
`;

const Title = styled.p`
    color: ${({theme}) => theme.color.black};
    line-height: 23px;
    font-weight: 700;
`;

const RangeText = styled.p`
    color: ${({theme}) => theme.color.gray1};
    line-height: 26px;
    font-size: 1.125rem;
`;

const Average = styled.p`
    color: ${({theme}) => theme.color.gray1};
    line-height: 20px;
    font-size: 0.875rem;
`;

const FlexBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("column")}
    gap: 4px;
`;

export default PriceModal;
