import styled from "styled-components";

const Cylindrical = styled.div`
    width: ${({style}) => style.width};
    height: ${({style}) => style.height};
    border: ${({style}) => style.border};
    border-radius: 999px;
`;

export default Cylindrical;
