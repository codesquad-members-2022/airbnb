import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import PriceGraph from "./PriceGraph";

const PriceModal = ({isClicked}) => {
    return (
        <PriceModalBox isClicked={isClicked}>
            <Title>가격 범위</Title>
            <FlexBox>
                <Range>₩100,000 - ₩1,000,000+</Range>
                <Average>평균 1박 요금은 ₩165,556 입니다.</Average>
            </FlexBox>
            <PriceGraph />
        </PriceModalBox>
    );
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

const Range = styled.p`
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
