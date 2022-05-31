import customStyled from '@/custom-styled-component/customStyled';

function MainBanner() {
  return (
    <Container>
      <Banner>
        <StyledImg
          src="https://s3-alpha-sig.figma.com/img/7197/3c13/5882a37ecf9a1d0a40a9d0ab7837c66f?Expires=1654473600&Signature=alJLZ3edAkCL1hqf4s6FWWu8l0WMjMzMuWGnubiQwp7j4VSITgLS4dSLbkvUrH~ClJFKCnyhgKv-RN86UhPHM~5xcfZOthf7k5ICmhZKI6Hvzaj3oiYx8r4rJ6869hhY9SSDMGteZ63MxRqzYrS3AIAOxYsN7faHXdY6P6~1xF-2WzhM1yuV2i-RRp495w4A8LSezSt-4wLaB9aDpjGy38t~M8lhoantdiPa3-4Jf0NIfifU8BU5tFHHN3j9xelYT9Jabc8BRxW52lSYGYtUgg3IjVGw2wQF6EdAWadA5SpYGLex7iUmfqIWsE9wp1s3vYw2JUPYFE8OqNMGYhQcsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="메인배경"
        />
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
