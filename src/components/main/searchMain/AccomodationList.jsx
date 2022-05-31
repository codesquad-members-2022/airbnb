import React from "react";
import styled from "styled-components";
import Boundary from "../../Boundary";
import AccomodationListItem from "./AccomodationListItem";

const AccomodationList = () => {
    const data = [
        {
            img: "https://placeimg.com/330/200/any",
            location: "서초구의 아파트 전체",
            relation: "Spacious and Comfortable cozy house #4",
            option1: "최대 인원 3명 ∙ 원룸 ∙ 침대 1개 ∙ 욕실 1개",
            option2: "주방 ∙ 무선 인터넷 ∙ 에어컨 ∙ 헤어드라이어",
            price: 82953,
            grade: 4.8,
            review: 127,
            id: "99",
        },
        {
            img: "https://placeimg.com/330/199/any",
            location: "서초구의 아파트 전체",
            relation: "Spacious and Comfortable cozy house #4",
            option1: "최대 인원 3명 ∙ 원룸 ∙ 침대 1개 ∙ 욕실 1개",
            option2: "주방 ∙ 무선 인터넷 ∙ 에어컨 ∙ 헤어드라이어",
            price: 82953,
            grade: 4.8,
            review: 127,
            id: "98",
        },
        {
            img: "https://placeimg.com/330/198/any",
            location: "서초구의 아파트 전체",
            relation: "Spacious and Comfortable cozy house #4",
            option1: "최대 인원 3명 ∙ 원룸 ∙ 침대 1개 ∙ 욕실 1개",
            option2: "주방 ∙ 무선 인터넷 ∙ 에어컨 ∙ 헤어드라이어",
            price: 82953,
            grade: 4.8,
            review: 127,
            id: "97",
        },
        {
            img: "https://placeimg.com/330/197/any",
            location: "서초구의 아파트 전체",
            relation: "Spacious and Comfortable cozy house #4",
            option1: "최대 인원 3명 ∙ 원룸 ∙ 침대 1개 ∙ 욕실 1개",
            option2: "주방 ∙ 무선 인터넷 ∙ 에어컨 ∙ 헤어드라이어",
            price: 82953,
            grade: 4.8,
            review: 127,
            id: "96",
        },
    ];

    const condition = {
        backgroundColor: "#e0e0e0",
        direction: "horizontal",
        weight: "1px",
        length: "100%",
    };

    return (
        <AccomodationListBox>
            {data.map((d, ind) => {
                return ind === data.length - 1 ? (
                    <li key={d.id}>
                        <AccomodationListItem key={d.id} {...d} />
                    </li>
                ) : (
                    <li key={d.id}>
                        <AccomodationListItem key={d.id} {...d} />
                        <Boundary key={ind} condition={condition} />
                    </li>
                );
            })}
        </AccomodationListBox>
    );
};

const AccomodationListBox = styled.ul`
    ${({theme}) => theme.layout.flexLayoutMixin("column")};
`;

export default AccomodationList;
