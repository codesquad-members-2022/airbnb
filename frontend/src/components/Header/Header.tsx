import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

import MENUS from "mockData/menus";

import GNB from "./GNB/GNB";
import { indexHeaderStyle, HeaderContainer } from "./Header.styled";
import UserMenu from "./UserMenu/UserMenu";

const LogoArea = () => {
  return (
    <Grid container item xs={2} justifyContent="left">
      <h1 style={{ margin: "auto 0" }}>
        <a href="/" title="첫 화면으로 이동">
          LOGO
        </a>
      </h1>
    </Grid>
  );
};

const Header = () => {
  return (
    <Box component="header" sx={indexHeaderStyle}>
      <HeaderContainer maxWidth="xl">
        <Grid
          container
          spacing={2}
          columns={12}
          sx={{ height: ({ size }) => size.fullSize }}
        >
          <LogoArea />
          <GNB
            menuData={MENUS}
            container
            rowSpacing={2}
            item
            xs={8}
            justifyContent="center"
          />
          <UserMenu />
        </Grid>
        {/* TODO: SearchBar */}
      </HeaderContainer>
    </Box>
  );
};

export default Header;
