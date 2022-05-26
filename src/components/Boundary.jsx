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
    size: ${({weight}) => weight};
    width: ${({length}) => length};
    background: ${({backgroundColor}) => backgroundColor};
`;

export default Boundary;
