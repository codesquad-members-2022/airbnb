import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import { SearchBarContainerProps } from "@types";

const SearchBarContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== "currentPage",
  name: "MyThemeComponent",
  slot: "Root",
})<SearchBarContainerProps>(
  ({ currentPage, theme: { elementSize, palette, style } }) => `
  margin: ${style.alignCenter.margin};
  max-width: ${
    currentPage === "index" && elementSize.searchBar.fullSize.maxWidth
  };
  height: ${currentPage === "index" && elementSize.searchBar.fullSize.height};
  padding: ${currentPage === "index" && elementSize.searchBar.fullSize.padding};
  background-color: ${palette.white.main};
  border: 1px solid ${palette.grey4.main};
  border-radius: calc(${elementSize.searchBar.fullSize.maxWidth} / 2);
  `
);

export default SearchBarContainer;
