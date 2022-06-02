import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Boundary from "../../Boundary";
import AccomodationListItem from "./AccomodationListItem";
import {fetchData} from "../../../helper/util";

const AccomodationList = () => {
    const [accomodationList, setAccomodationList] = useState([]);
    useEffect(() => {
        const getAccomodationList = async () => {
            const result = await fetchData("http://localhost:3000/accomodationList");
            setAccomodationList(result);
        };
        getAccomodationList();
    }, []);

    return (
        <AccomodationListBox>
            {accomodationList?.map((data, idx) => {
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

const condition = {
    backgroundColor: "#e0e0e0",
    direction: "horizontal",
    weight: "1px",
    length: "100%",
};

export default AccomodationList;
