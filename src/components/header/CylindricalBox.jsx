import React from "react";
import styled from "styled-components";
import Cylindrical from "../../cylindrical";
import {ReactComponent as CrossIcon} from "../../assets/crossIcon.svg";
import {ReactComponent as SearchIcon} from "../../assets/searchIcon.svg";

// eslint-disable-next-line react/prop-types
const CylindricalBox = ({title, placeHolder, style, partId, clickedPart, setClickedPart, hasSearchButton}) => {
    const isClicked = partId === clickedPart;
    const cylindricalSearchButtonStyle = {
        width: "60px",
        height: "42px",
    };
    const changeClickedPart = () => {
        if (partId === clickedPart) {
            setClickedPart(null);
        } else {
            setClickedPart(partId);
        }
    };

    return (
        <CylindricalButton isClicked={isClicked} style={style} onClick={changeClickedPart}>
            <TextBox>
                <Title>{title}</Title>
                <PlaceHolder>{placeHolder}</PlaceHolder>
            </TextBox>
            {isClicked && (
                <Icon>
                    <CrossIcon />
                </Icon>
            )}
            {hasSearchButton &&
                (isClicked ? (
                    <CylindricalSearchButton style={cylindricalSearchButtonStyle}>
                        <SearchIcon />
                        <span>검색</span>
                    </CylindricalSearchButton>
                ) : (
                    <CircleSearchButton>
                        <SearchIcon />
                    </CircleSearchButton>
                ))}
        </CylindricalButton>
    );
};

const CylindricalButton = styled(Cylindrical)`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "space-between", "center")}
    box-sizing: border-box;
    padding: 0 20px 0 30px;
    cursor: pointer;
    box-shadow: ${({isClicked}) => (isClicked ? "0px 10px 20px rgba(0, 0, 0, 0.2)" : "")};
    &:hover {
        background-color: ${({isClicked}) => (isClicked ? "#fff" : "rgba(0, 0, 0, 0.1)")};
    }
`;

const TextBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("column")}
    gap: 4px;
`;

const Title = styled.div`
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 16px;
`;

const PlaceHolder = styled.div`
    font-size: 1rem;
    line-height: 24px;
    color: ${({theme}) => theme.color.gray2};
`;

const Icon = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("", "center", "center")}
    background-color: ${({theme}) => theme.color.gray6};
    width: 20px;
    height: 20px;
    border-radius: 999px;
    &:hover {
        background-color: ${({theme}) => theme.color.gray5};
    }
    svg {
        width: 15px;
        height: 15px;
    }
`;

const CircleSearchButton = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("", "center", "center")}
    background-color: ${({theme}) => theme.color.pointColorRed};
    color: ${({theme}) => theme.color.white};
    border-radius: 999px;
    width: 40px;
    height: 40px;
    &:hover {
        background-color: rgb(175, 21, 42);
    }
    svg {
        width: 25px;
        height: 25px;
    }
`;

const CylindricalSearchButton = styled(Cylindrical)`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "space-around", "center")}
    background-color: ${({theme}) => theme.color.pointColorRed};
    color: ${({theme}) => theme.color.white};
    padding: 0 10px;
    &:hover {
        background-color: rgb(175, 21, 42);
    }
    svg {
        width: 25px;
        height: 25px;
    }
    span {
        line-height: 25px;
    }
`;
export default CylindricalBox;
