import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import { RoundButtonProps } from "@types";

type ButtonName = "closeButton" | "searchButton";
const closeButton: ButtonName = "closeButton";
const searchButton: ButtonName = "searchButton";

type ColorName = "grey4" | "primary" | "grey1" | "white";
const grey1: ColorName = "grey1";
const grey4: ColorName = "grey4";
const primary: ColorName = "primary";
const white: ColorName = "white";

const RoundButton = styled(IconButton)<RoundButtonProps>(
  ({ icon, theme: { palette, size } }) => {
    const isCloseIcon = icon === "close";
    const buttonKeyName = isCloseIcon ? closeButton : searchButton;
    const bgColor = isCloseIcon ? grey4 : primary;
    const svgColor = isCloseIcon ? grey1 : white;

    return `  
    width: ${size.searchBar[buttonKeyName].width};
    height: ${size.searchBar[buttonKeyName].height};
    background-color: ${palette[bgColor].main};
    margin-right: ${isCloseIcon && size.searchBar.closeButton.width};

    svg {
      width: ${size.searchBar[buttonKeyName].icon.width};
      height: ${size.searchBar[buttonKeyName].icon.height};
      color: ${palette[svgColor].main};
    };
  `;
  }
);

export default RoundButton;
