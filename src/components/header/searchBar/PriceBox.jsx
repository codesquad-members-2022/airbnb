import React from "react";
import CylindricalBox from "./CylindricalBox";
import styled from "styled-components";

const PriceBox = ({size}) => {
    const priceBoxStyle = {
        width: "256px",
        height: "76px",
        border: "",
    };

    switch (size) {
        case "big": {
            return (
                <CylindricalBox
                    title="요금"
                    placeHolder="금액대 설정"
                    style={priceBoxStyle}
                    partId="PriceBox"
                />
            );
        }
        case "small": {
            return <SmallPriceBox>placeHolder</SmallPriceBox>;
        }
        default: {
            return <div>잘못된 사이즈입니다!</div>;
        }
    }
};

const SmallPriceBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "center", "center")}
    width: 149px;
    height: 48px;
    font-size: 0.75rem;
    line-height: 17px;
`;

export default PriceBox;
