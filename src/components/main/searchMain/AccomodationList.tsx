import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Boundary from "../../Boundary";
import AccomodationListItem from "./AccomodationListItem";
import {fetchData, getRandomKey} from "@Helper/util";

type Accomodation = {
    img: string;
    location: string;
    relation: string;
    option1: string;
    option2: string;
    price: number;
    grade: number;
    review: number;
    id: string;
};

const AccomodationList = () => {
    const [accomodationList, setAccomodationList] = useState<Accomodation[]>([]);
    useEffect(() => {
        const getAccomodationList = async () => {
            const result = await fetchData("http://localhost:3000/accomodationList");
            setAccomodationList(result);
        };
        getAccomodationList();
    }, []);

    return (
        <AccomodationListBox>
            {accomodationList
                ?.map((accomodationData) => (
                    <li key={accomodationData.id}>
                        <AccomodationListItem key={accomodationData.id} {...accomodationData} />
                    </li>
                ))
                .reduce((acc: JSX.Element[], cur: JSX.Element) => {
                    return acc.length ? [...acc, <Boundary key={getRandomKey()} condition={condition} />, cur] : [cur];
                }, [])}
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
