import { Container, ContainerProps, Avatar, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";

const UserMenuContainer = styled(Container)<ContainerProps>(
  ({ theme: { palette, style } }) => `
  ${style.alignCenter.flex}
  background-color: ${palette.white.main};
  width: 76px;
  height: 40px;
  border-radius: calc(76px / 2);
  border: 1px solid ${palette.grey4.main};
  position: relative;

  &:hover{
    background-color: ${palette.grey5.main};
  }
`
);

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
  color: ({ palette }: Theme) => palette.grey3.main,
  marginRight: ({
    elementSize,
  }: {
    elementSize: { smallRoundButton: { width: string } };
  }) => elementSize.smallRoundButton.width,
};

const UserAvatar = styled(Avatar)(
  ({ theme: { palette, elementSize } }) => `
  background-color: ${palette.grey3.main};
  width: ${elementSize.smallRoundButton.width};
  height: ${elementSize.smallRoundButton.height};
  position: absolute;
  right: 0;
  );`
);

export { userMenuButtonStyle, menuIconStyle, UserMenuContainer, UserAvatar };
