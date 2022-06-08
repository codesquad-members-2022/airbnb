import { useContext } from "react";

import Box from "@mui/material/Box";

import { SearchBarStateContext } from "contexts/contexts";
// import { LocationContext } from "router/Contexts";
import RouterContext from "router/Contexts";

import ChildNodes from "./ChildNodes";
import {
  indexHeaderStyle,
  HeaderContainer,
  miniHeaderStyle,
  miniHeaderWithFullSizeSearchBar,
} from "./Header.style";

const Header = (): JSX.Element => {
  const { isSearchBarFullSize } = useContext(SearchBarStateContext)!;
  const { page } = useContext(RouterContext)!;

  const fullSizeHeaderStyle =
    page === "index" ? indexHeaderStyle : miniHeaderWithFullSizeSearchBar;
  // pathname === "/" ? indexHeaderStyle : miniHeaderWithFullSizeSearchBar;

  return (
    <Box
      component="header"
      sx={isSearchBarFullSize ? fullSizeHeaderStyle : miniHeaderStyle}
    >
      <HeaderContainer maxWidth="xl">
        <ChildNodes />
      </HeaderContainer>
    </Box>
  );
};

export default Header;
