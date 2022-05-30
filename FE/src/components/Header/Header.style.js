import styled from 'styled-components';

import HeroImage from '@assets/images/hero-img.jpg'

export const Container = styled.section`
  width: 100%;
  min-width: 1280px;
  height: 100vh;
  padding-top: 110px;
  display: flex;
  justify-content: center;
  background-image: url(${HeroImage});
  background-position: center;
  background-size: cover;
`;
