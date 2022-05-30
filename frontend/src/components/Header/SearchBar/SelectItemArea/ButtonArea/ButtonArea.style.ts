import { IconButton, IconButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const RoundButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "icon" && prop !== "isFocused",
  name: "MyThemeComponent",
  slot: "Root",
})<RoundButtonProps>((props) => {
  const {
    icon,
    isFocused,
    theme: { palette, elementSize },
  } = props;

  const isCloseIcon = icon === "close";

  const buttonKeyName = isCloseIcon ? "closeButton" : "searchButton";
  const bgColor = isCloseIcon ? "grey4" : "primary";
  const svgColor = isCloseIcon ? "grey1" : "white";

  const buttonSize = `
    width: ${elementSize.searchBar[buttonKeyName].width};
    height: ${elementSize.searchBar[buttonKeyName].height};
    `;

  const focusedButtonStyle = `
    width: ${elementSize.searchBar.focusedButton.width};
    height: ${elementSize.searchBar.focusedButton.height};
    border-radius: ${
      parseInt(elementSize.searchBar.focusedButton.height, 10) / 2
    }px;
    white-space: nowrap;
    overflow: hidden;
    `;

  return `
    ${isFocused ? focusedButtonStyle : buttonSize};
    transition: all ease-out 0.2s 0s;
    font-size: 18px;
    font-weight: 700;
    color: ${palette.white.main};
    background-color: ${palette[bgColor].main};
    margin-right: ${isCloseIcon && elementSize.searchBar.closeButton.width};

    .MuiSvgIcon-root {
      width: ${elementSize.searchBar[buttonKeyName].icon.width};
      height: ${elementSize.searchBar[buttonKeyName].icon.height};
      color: ${palette[svgColor].main};
    };
  `;
});

export default RoundButton;

export interface RoundButtonProps extends IconButtonProps {
  icon: "close" | "search";
  isFocused?: boolean | undefined;
}
