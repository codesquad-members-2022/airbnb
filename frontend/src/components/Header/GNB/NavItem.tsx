import { Button } from "@mui/material";

const NavItem = ({ item }: { item: string }): JSX.Element => {
  return (
    <Button
      variant="text"
      component="a"
      href="#"
      color="black"
      disableFocusRipple
      disableRipple
    >
      {item}
    </Button>
  );
};

export default NavItem;
