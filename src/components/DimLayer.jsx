import React from "react";
import styled from "styled-components";

const DimLayer = ({closeModal}) => {
    return <DimLayerBox onClick={() => closeModal(null)} />;
};

const DimLayerBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.transparentColor.gray2};
`;

export default DimLayer;
