import React from "react";
import styled from "styled-components";
import Modal from "../../../Modal";
import GuestTab from "./GuestTab";
import Boundary from "../../Boundary";
import {getRandomKey} from "../../../util";

const GuestModal = ({isClicked}) => {
    return (
        <GuestModalBox isClicked={isClicked}>
            {guestType
                .map((guest) => <GuestTab key={guest.id} type={guest.type} detail={guest.detail} />)
                .reduce((acc, cur) => {
                    console.log(acc);
                    return acc.length
                        ? [...acc, <Boundary key={getRandomKey()} condition={boundaryCondition} />, cur]
                        : [cur];
                }, [])}
        </GuestModalBox>
    );
};

const guestType = [
    {id: getRandomKey(), type: "성인", detail: "만 13세 이상"},
    {id: getRandomKey(), type: "어린이", detail: "만 2~12세"},
    {id: getRandomKey(), type: "유아", detail: "만 2세 미만"},
    {id: getRandomKey(), type: "반려동물", detail: "보조동물을 동반하시나요?"},
];

const GuestModalBox = styled(Modal)`
    ${({theme}) => theme.layout.flexLayoutMixin("column")};
    display: ${({isClicked}) => (isClicked ? "flex" : "none")};
    width: 365px;
    height: 319px;
    top: 312px;
    left: 70%;
    padding: 64px;
    transform: translate(-50%, -50%);
    gap: 24px;
    box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1);
`;

const boundaryCondition = {
    direction: "horizontal",
    weight: "1px",
    length: "100%",
    backgroundColor: "#C4C4C4",
};

export default GuestModal;
