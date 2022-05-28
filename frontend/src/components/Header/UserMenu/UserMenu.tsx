import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { Grid, Menu, MenuItem, Button } from "@mui/material";

import {
  UserAvatar,
  UserMenuContainer,
  userMenuButtonStyle,
  menuIconStyle,
} from "./UserMenu.style";

const UserMenu = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(menuAnchor);

  const handleMenuClick = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(currentTarget);
  };

  const handleClose = () => {
    setMenuAnchor(null);
  };

  return (
    <Grid
      container
      item
      xs={2}
      justifyContent="center"
      direction="column"
      alignItems="flex-end"
    >
      <UserMenuContainer>
        <Button
          disableFocusRipple
          disableRipple
          aria-label="마이페이지 버튼"
          id="user-menu-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleMenuClick}
          sx={userMenuButtonStyle}
        >
          <MenuIcon sx={menuIconStyle} />
          <UserAvatar>
            <PersonIcon />
          </UserAvatar>
        </Button>
        <Menu
          id="user-menu"
          anchorEl={menuAnchor}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "user-menu-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{ zIndex: 1600 }}
        >
          <MenuItem onClick={handleClose}>로그인</MenuItem>
        </Menu>
      </UserMenuContainer>
    </Grid>
  );
};

export default UserMenu;
