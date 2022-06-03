import {css} from "styled-components";

const flexLayoutMixin = (direction = "row", justify = "flex-start", align = "stretch") => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
`;

const layout = {flexLayoutMixin};

const color = {
    black: "#010101",
    gray1: "#333333",
    gray2: "#4F4F4F",
    gray3: "#828282",
    gray4: "#BDBDBD",
    gray5: "#E0E0E0",
    gray6: "#F5F5F7",
    white: "#FFFFFF",
    pointColorRed: "#E84C60",
    pointColorGreen: "#118917",
};

const transparentColor = {
    gray1: "rgba(0, 0, 0, 0.05)",
    gray2: "rgba(0, 0, 0, 0.15)",
};

const borderRadius = {
    circle: "999px",
};

const theme = {
    layout,
    color,
    transparentColor,
    borderRadius,
};

export default theme;
