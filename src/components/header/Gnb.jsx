import React from "react";
import styled from "styled-components";

const Gnb = () => {
    return (
        <GnbBox>
            <GnbItem>숙소</GnbItem>
            <GnbItem>체험</GnbItem>
            <GnbItem>온라인 체험</GnbItem>
        </GnbBox>
    );
};

const GnbBox = styled.nav`
    ${({theme}) => theme.layout.flexLayoutMixin()}
    gap: 24px;
`;

const GnbItem = styled.span`
    font-size: 1rem;
    cursor: pointer;
    line-height: 23px;
    white-space: nowrap;
    &:hover {
        font-weight: 700;
        text-decoration-line: underline;
    }
`;

export default Gnb;
