import React from "react";
import styled from "styled-components";

const AccomodationHeader = () => {
    return (
        <AccomodationHeaderBox>
            <AccomodationOptions>300개 이상의 숙소∙5월 12일 ⁃ 5월 18일∙₩100,000~₩1,000,000∙게스트 3명</AccomodationOptions>
            <AccomodationTitle>지도에서 선택한 지역의 숙소</AccomodationTitle>
        </AccomodationHeaderBox>
    );
};

const AccomodationHeaderBox = styled.header`
    ${({theme}) => theme.layout.flexLayoutMixin("column")};
    color: ${({theme}) => theme.color.gray1};
    gap: 8px;
`;

const AccomodationOptions = styled.div`
    font-size: 0.75rem;
    line-height: 17px;
`;

const AccomodationTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    line-height: 35px;
`;

export default AccomodationHeader;
