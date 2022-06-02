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

export const searchBarStyle = `
width: 916px;
height: 76px;
margin-top: 110px;
margin-left: 262px;
background-color: #fff;
border-radius: 30px;
padding: 16px;
`;

export const headCountStyle = `
  width:400px;
  height:355px;
  background-color:#fff;
  border-radius:40px;
  margin-top:16px;
  margin-left:778px;
  padding:64px;
`;
export const calendarStyle = `
background-color:#fff;
width: 916px;
margin-left: 262px;
margin-top: 40px;
padding: 88px;
border-radius: 40px;
`;
