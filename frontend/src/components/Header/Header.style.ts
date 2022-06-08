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
};

const miniHeaderWithFullSizeSearchBar = {
  ...miniHeaderStyle,
  height: "190px",
};

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
};
