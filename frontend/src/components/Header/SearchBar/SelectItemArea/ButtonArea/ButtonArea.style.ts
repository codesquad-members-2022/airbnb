import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import { SearchBarButtonProps } from "@types";

const RoundButton = styled(IconButton)<SearchBarButtonProps>((props) => {
  const {
    icon,
    isfocused,
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
    color: ${palette.white.main};
    white-space: nowrap;
    overflow: hidden;
    `;
  return `
    ${isfocused === "true" ? focusedButtonStyle : buttonSize};
    transition: all ease-out 0.2s 0s;
    font-family: "Noto Sans KR", "sans-serif";
    font-size: 18px;
    font-weight: 700;
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
