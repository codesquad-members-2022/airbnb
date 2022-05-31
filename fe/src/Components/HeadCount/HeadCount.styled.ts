import styled from "styled-components";

interface styleType {
  containerStyle?: string;
}

export const HeadCountContainer = styled.div<styleType>`
  ${({ containerStyle }) => {
    return containerStyle ? containerStyle : "";
  }};
`;
