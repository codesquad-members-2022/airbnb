import styled from "styled-components";

interface homeType {
  width: string;
  height: string;
}

interface backgroundType {
  url: string;
}

export const BackgroundImg = styled.div`
  ${({ url }: backgroundType) => {
    return `background: url(${url}); background-size:cover; background-position:bottom`;
  }};
`;

export const HomeContainer = styled.div`
  ${({ width, height }: homeType) => {
    return `
    width:${width}; height:${height}`;
  }};
  margin: 0 auto;
`;
