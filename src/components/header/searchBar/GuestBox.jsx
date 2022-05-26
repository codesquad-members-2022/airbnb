import React from "react";
import styled from "styled-components";
import CylindricalBox, {CircleSearchButton} from "./CylindricalBox";
import {ReactComponent as SearchIcon} from "../../../assets/searchIcon.svg";

const GuestBox = ({size}) => {
    const guestBoxStyle = {
        width: "298px",
        height: "76px",
        border: "",
    };

    switch (size) {
        case "big": {
            return (
                <CylindricalBox
                    title="인원"
                    placeHolder="게스트 추가"
                    style={guestBoxStyle}
                    partId="GuestBox"
                    hasSearchButton={true}
                />
            );
        }
        case "small": {
            return (
                <SmallGuestBox>
                    <span>게스트 추가</span>
                    <SmallCircleSearchButton>
                        <SearchIcon />
                    </SmallCircleSearchButton>
                </SmallGuestBox>
            );
        }
        default: {
            return <div>잘못된 사이즈입니다!</div>;
        }
    }
};

const SmallGuestBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "space-between", "center")}
    width: 126px;
    height: 48px;
    padding: 0px 8px 0px 16px;
    font-size: 0.75rem;
    line-height: 17px;
`;

const SmallCircleSearchButton = styled(CircleSearchButton)`
    width: 32px;
    height: 32px;
    svg {
        width: 20px;
        height: 20px;
    }
`;

export default GuestBox;
