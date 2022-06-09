import customStyled from '@/utils/custom-styled-component/customStyled';

function MainBanner() {
  return (
    <Container>
      <Banner>
        <StyledImg src={`${process.env.PUBLIC_URL}/assets/hero-img.png`} alt="메인배경" />
      </Banner>
    </Container>
  );
}

const Container = customStyled.div`
  background: rgba(215,237,166,.8);
`;

const Banner = customStyled.div`
  max-width: 1440px;
  min-width: 900px;
  margin: 0 auto;
`;

const StyledImg = customStyled.img`
  max-width: 100%;
  height: auto;
`;

export default MainBanner;
