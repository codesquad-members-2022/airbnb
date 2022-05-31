import React from "react";
import Boundary from "../../Boundary";
import styled from "styled-components";
import {CircleSearchButton} from "../../header/searchBar/CylindricalBox";
import {ReactComponent as SearchIcon} from "../../../assets/searchIcon.svg";

const MiniSearchBar = ({clickedState, setClickedState}) => {
    return (
        <>
            <MiniSearchBarBox onClick={() => setClickedState(!clickedState)}>
                <MiniDateBox>언제든 일주일</MiniDateBox>
                <Boundary condition={boundaryCondition} />
                <MiniPriceBox>placeHolder</MiniPriceBox>
                <Boundary condition={boundaryCondition} />
                <MiniGuestBox>
                    <span>게스트 추가</span>
                    <MiniCircleSearchButton>
                        <SearchIcon />
                    </MiniCircleSearchButton>
                </MiniGuestBox>
            </MiniSearchBarBox>
        </>
    );
};

const MiniSearchBarBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "space-between", "center")}
    background-color: ${({theme}) => theme.color.white};
    position: absolute;
    top: 50px;
    left: 50%;
    height: 48px;
    width: 410px;
    transform: translate(-50%, -50%);
    border: 1px solid ${({theme}) => theme.color.gray4};
    border-radius: 999px;
`;

const MiniDateBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "center", "center")}
    width: 133px;
    height: 48px;
    font-size: 0.75rem;
    line-height: 17px;
`;

const MiniPriceBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "center", "center")}
    width: 149px;
    height: 48px;
    font-size: 0.75rem;
    line-height: 17px;
`;

const MiniGuestBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "space-between", "center")}
    width: 126px;
    height: 48px;
    padding: 0px 8px 0px 16px;
    font-size: 0.75rem;
    line-height: 17px;
`;

const MiniCircleSearchButton = styled(CircleSearchButton)`
    width: 32px;
    height: 32px;
    svg {
        width: 20px;
        height: 20px;
    }
`;

const boundaryCondition = {
    direction: "vertical",
    weight: "1px",
    length: "20px",
    backgroundColor: "#E0E0E0",
};

export default MiniSearchBar;
