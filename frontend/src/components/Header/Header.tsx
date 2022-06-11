import { useContext } from "react";

import Box from "@mui/material/Box";

import { SearchBarStateContext } from "contexts/contexts";
import RouterContext from "router/Contexts";

import ChildNodes from "./ChildNodes";
import {
  indexHeaderStyle,
  HeaderContainer,
  miniHeaderStyle,
  miniHeaderWithFullSizeSearchBar,
  HeaderLayer,
} from "./Header.style";

const Header = (): JSX.Element => {
  const { isSearchBarFullSize, setIsSearchBarFullSize } = useContext(
    SearchBarStateContext
  )!;
  const { page } = useContext(RouterContext)!;

  const fullSizeHeaderStyle =
    page === "index" ? indexHeaderStyle : miniHeaderWithFullSizeSearchBar;

  return (
    <Box
      component="header"
      sx={
        isSearchBarFullSize || page === "index"
          ? fullSizeHeaderStyle
          : miniHeaderStyle
      }
    >
      {page !== "index" && isSearchBarFullSize && (
        <HeaderLayer
          onClick={() => setIsSearchBarFullSize(false)}
          onKeyUp={() => setIsSearchBarFullSize(false)}
          aria-hidden
        />
      )}
      <HeaderContainer maxWidth="xl">
        <ChildNodes />
      </HeaderContainer>
    </Box>
  );
};

export default Header;
