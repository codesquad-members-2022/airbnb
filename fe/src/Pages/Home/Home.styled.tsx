import styled from "styled-components";

interface HomeType {
  width: string;
  height: string;
}

interface BackgroundType {
  url: string;
}

export const BackgroundImg = styled.div`
  ${({ url }: BackgroundType) => {
    return `background: url(${url}); background-size:cover; background-position:bottom`;
  }};
`;

export const HomeContainer = styled.div`
  ${({ width, height }: HomeType) => {
    return `
    width:${width}; height:${height}`;
  }};
  margin: 0 auto;
`;

export const NearbyTravel = styled.div``;

export const WhereverTravel = styled.div``;
