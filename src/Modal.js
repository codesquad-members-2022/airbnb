import styled from "styled-components";

const Modal = styled.div`
    position: absolute;
    background-color: ${({theme}) => theme.color.white};
    border-radius: 40px;
`;

export default Modal;
