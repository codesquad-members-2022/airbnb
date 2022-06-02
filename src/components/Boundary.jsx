import React from "react";
import styled from "styled-components";

const Boundary = ({condition}) => {
    return condition.direction === "vertical" ? <VerticalLine {...condition} /> : <HorizontalLine {...condition} />;
};

const VerticalLine = styled.div`
    width: ${({weight}) => weight};
    height: ${({length}) => length};
    background: ${({backgroundColor}) => backgroundColor};
`;

const HorizontalLine = styled.hr`
    border: none;
    border-top: ${({weight, backgroundColor}) => `${weight} solid ${backgroundColor}`};
    margin: 0;
`;

export default Boundary;
