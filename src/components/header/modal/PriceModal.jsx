import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Modal from "./Modal";
import PriceGraph from "./PriceGraph";
import {makePriceFormat, fetchData} from "../../../helper/util";
import RangeSlider from "./RangeSlider";

const PriceModal = ({isClicked}) => {
    const [priceData, setPriceData] = useState(null);
    const [range, setRange] = useState({min: 0, max: 0});

    useEffect(() => {
        const getPriceData = async () => {
            const result = await fetchData("http://localhost:3000/price");
            const sortedReuslt = result.sort();
            setPriceData(sortedReuslt.map((data) => data.price));
            setRange({min: 0, max: result.length - 1});
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

    const average = getAverage(priceData, range);
    return (
        <PriceModalBox isClicked={isClicked}>
            <Title>가격 범위</Title>
            <FlexBox>
                <RangeText>
                    ₩{makePriceFormat(priceData[range.min])} - ₩{makePriceFormat(priceData[range.max])}
                </RangeText>
                <Average>평균 1박 요금은 ₩{makePriceFormat(average)} 입니다.</Average>
            </FlexBox>
            <PriceGraph priceData={priceData} />
            <RangeSlider />
        </PriceModalBox>
    );
};

const getAverage = (data, range) => {
    const slicedData = data.slice(range.min, range.max + 1);
    const sum = slicedData.reduce((acc, cur) => acc + cur, 0);
    const average = sum / (range.max - range.min + 1);

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
