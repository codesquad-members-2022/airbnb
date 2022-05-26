import { Container, ContainerProps } from "@mui/material";
import { styled } from "@mui/material/styles";

import heroImage from "assets/hero-img.png";

// TODO: 검색결과 화면으로 변경시 다른 스타일이 적용되어야 함
const indexHeaderStyle = {
  maxwidth: "1440px",
  height: "640px",
  backgroundImage: `url(${heroImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center bottom",
  backgroundSize: "cover",
};

const HeaderContainer = styled(Container)<ContainerProps>(
  ({ theme: { size, style, whiteSpace } }) => `
  height: ${size.navBarHeight};
  margin: ${style.alignCenter.margin};
  padding: 0 ${whiteSpace.inner} !important;
`
);

export { indexHeaderStyle, HeaderContainer };
