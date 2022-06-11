import emotionStyled from "@emotion/styled";
import { Container, ContainerProps, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";

import heroImage from "assets/hero-img.png";
import theme from "styles/theme";

const defaultHeaderStyle = {
  maxwidth: "1440px",
};

const indexHeaderStyle = {
  ...defaultHeaderStyle,
  height: theme.elementSize.header.index.height,
  backgroundImage: `url(${heroImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center bottom",
  backgroundSize: "cover",
};

const miniHeaderStyle = {
  ...defaultHeaderStyle,
  height: theme.elementSize.header.others.height,
  backgroundColor: ({ palette }: Theme) => palette.white.main,
  boxShadow: `0px 9px 15px -3px rgba(0,0,0,0.1)`,
};

const miniHeaderWithFullSizeSearchBar = {
  ...miniHeaderStyle,
  height: "190px",
};

const HeaderLayer = emotionStyled.div`
  position: absolute;
  top: ${theme.elementSize.header.others.height};
  width: 100vw;
  height: calc(100vh - ${theme.elementSize.header.others.height});
`;

const HeaderContainer = styled(Container)<ContainerProps>(
  ({ theme: { elementSize, style, whiteSpace } }) => `
  height: ${elementSize.header.others.height};
  margin: ${style.alignCenter.margin};
padding: 0 ${whiteSpace.inner} !important;
`
);

export {
  indexHeaderStyle,
  HeaderContainer,
  miniHeaderStyle,
  miniHeaderWithFullSizeSearchBar,
  HeaderLayer,
};
