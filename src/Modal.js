import styled from "styled-components";

const Modal = styled.div`
    position: absolute;
    background-color: ${({theme}) => theme.color.white};
    border-radius: 40px;
    box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.05);
`;

export default Modal;
