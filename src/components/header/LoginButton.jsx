import React from "react";
import styled from "styled-components";
import {ReactComponent as MenuIcon} from "../../assets/menuIcon.svg";
import {ReactComponent as UserIcon} from "../../assets/userIcon.svg";

const LoginButton = () => {
    return (
        <LoginButtonBox>
            <IconBox>
                <MenuIcon />
            </IconBox>
            <UserIconBox>
                <UserIcon />
            </UserIconBox>
        </LoginButtonBox>
    );
};

const LoginButtonBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "center", "center")}
    width: 76px;
    height: 40px;
    border: 1px solid ${({theme}) => theme.color.gray4};
    background-color: ${({theme}) => theme.color.white};
    gap: 10px;
    padding: 0px 0px 0px 4px;
    cursor: pointer;
    border-radius: 999px;
    &:hover {
        box-shadow: 0px 2px 2px ${({theme}) => theme.transparentColor.gray2};
        transition: 0.3s;
    }
`;

const IconBox = styled.div`
    color: ${({theme}) => theme.color.gray2};
    width: 18px;
`;

const UserIconBox = styled(IconBox)`
    background-color: ${({theme}) => theme.color.gray3};
    border-radius: 50%;
    color: ${({theme}) => theme.color.white};
    padding: 8px;
`;

export default LoginButton;
