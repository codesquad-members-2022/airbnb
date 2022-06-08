import React from "react";
import styled from "styled-components";
import Boundary from "../../Boundary";
import AccomodationListItem from "./AccomodationListItem";
import accomodationList from "../../../helper/mockData";

const AccomodationList = () => {
    const condition = {
        backgroundColor: "#e0e0e0",
        direction: "horizontal",
        weight: "1px",
        length: "100%",
    };

    return (
        <AccomodationListBox>
            {accomodationList.map((data, idx) => {
                return idx === data.length - 1 ? (
                    <li key={data.id}>
                        <AccomodationListItem key={data.id} {...data} />
                    </li>
                ) : (
                    <li key={data.id}>
                        <AccomodationListItem key={data.id} {...data} />
                        <Boundary key={idx} condition={condition} />
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
