import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const SearchBarContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== "isSearchBarFullSize",
  name: "MyThemeComponent",
  slot: "Root",
})<SearchBarContainerProps>(
  ({ isSearchBarFullSize, theme: { elementSize, palette, style } }) => {
    const containerSize = isSearchBarFullSize
      ? `
      max-width: ${elementSize.searchBar.fullSize.maxWidth};
      height: ${elementSize.searchBar.fullSize.height};
      padding: ${elementSize.searchBar.fullSize.padding};
      `
      : `
        width: ${elementSize.searchBar.miniSize.width};
        min-height: ${elementSize.searchBar.miniSize.height};
        padding: ${elementSize.searchBar.miniSize.padding};
      `;

    return `
      ${containerSize};
      margin: ${style.alignCenter.margin};
      background-color: ${palette.white.main};
      border: 1px solid ${palette.grey4.main};
      border-radius: calc(${elementSize.searchBar.fullSize.maxWidth} / 2);

      button {
        z-index: 1500;
      }

      animation: showSearchBar 0.3s;

      @keyframes showSearchBar {
        from {
            opacity: 0.5;
            margin-bottom: 1rem;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
      }
    `;
  }
);

export default SearchBarContainer;

export interface SearchBarContainerProps {
  isSearchBarFullSize?: boolean;
}
