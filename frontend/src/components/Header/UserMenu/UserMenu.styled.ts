import { Container, ContainerProps, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const userMenuButtonStyle = {
  padding: 0,
  border: 0,
  width: `calc(100% - 4px)`,
  height: `calc(100% - 4px)`,
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: "transparent",
  },
};

const menuIconStyle = {
  color: ({ palette }: { palette: { grey3: { main: string } } }) =>
    palette.grey3.main,
  marginRight: ({ size }: { size: { userMenuButton: { width: string } } }) =>
    size.userMenuButton.width,
};

const UserMenuContainer = styled(Container)<ContainerProps>(
  ({ theme: { palette, style } }) => `
  ${style.alignCenter.flex}
  background-color: ${palette.white.main};
  width: 76px;
  height: 40px;
  border-radius: calc(76px / 2);
  border: 1px solid ${palette.grey4.main};
  position: relative;
`
);

const UserAvatar = styled(Avatar)(
  ({ theme: { palette, size } }) => `
  background-color: ${palette.grey3.main};
  width: ${size.userMenuButton.width};
  height: ${size.userMenuButton.height};
  position: absolute;
  right: 0;
}
  );`
);

export { userMenuButtonStyle, menuIconStyle, UserMenuContainer, UserAvatar };
