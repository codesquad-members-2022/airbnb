import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import { SearchBarContainerProps } from "@types";

const SearchBarContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== "currentPage",
  name: "MyThemeComponent",
  slot: "Root",
})<SearchBarContainerProps>(
  ({ currentPage, theme: { size, palette, style } }) => `
  margin: ${style.alignCenter.margin};
  max-width: ${currentPage === "index" && size.searchBar.fullSize.maxWidth};
  height: ${currentPage === "index" && size.searchBar.fullSize.height};
  padding: ${currentPage === "index" && size.searchBar.fullSize.padding};
  background-color: ${palette.white.main};
  border: 1px solid ${palette.grey4.main};
  border-radius: calc(${size.searchBar.fullSize.maxWidth} / 2);
  `
);

export default SearchBarContainer;
