import { useContext } from "react";

import { Grid } from "@mui/material";

import { SearchBarStateContext } from "contexts/contexts";
import MENUS from "mockData/menus";
import RouterContext from "router/Contexts";
import Link from "router/Link";

import GNB from "./GNB/GNB";
import SearchBar from "./SearchBar/SearchBar";
import UserMenu from "./UserMenu/UserMenu";

const LogoArea = () => {
  return (
    <Grid container item xs={2} justifyContent="left">
      <h1 style={{ margin: "auto 0" }}>
        <Link to="index">LOGO</Link>
      </h1>
    </Grid>
  );
};

const GNBArea = () => {
  return (
    <GNB
      menuData={MENUS}
      container
      rowSpacing={2}
      item
      xs={8}
      justifyContent="center"
    />
  );
};

const headerMiddleItem = {
  fullSize: <GNBArea />,
  miniSize: (
    <Grid item container xs={8} justifyContent="center" alignItems="center">
      <SearchBar />
    </Grid>
  ),
};

const ChildNodes = () => {
  const { isSearchBarFullSize } = { ...useContext(SearchBarStateContext) };
  const { page } = { ...useContext(RouterContext) };

  return (
    <>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ height: ({ elementSize }) => elementSize.fullSize }}
      >
        <LogoArea />
        {isSearchBarFullSize || page === "index"
          ? headerMiddleItem.fullSize
          : headerMiddleItem.miniSize}
        <UserMenu />
      </Grid>
      {(isSearchBarFullSize || page === "index") && <SearchBar />}
    </>
  );
};

export default ChildNodes;
