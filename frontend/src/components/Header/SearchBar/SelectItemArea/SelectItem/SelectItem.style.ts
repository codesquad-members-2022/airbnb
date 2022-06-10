import { Theme } from "@mui/material";

import { getEllipisisStyle } from "utils/utils";

const SelectItemStyle = {
  button: {
    flexDirection: "column",
    padding: 0,
    width: ({ elementSize }: Theme) => elementSize.fullSize,
    height: ({ elementSize }: Theme) => elementSize.fullSize,
    alignItems: "flex-start",

    "&:hover": {
      textDecoration: "none",
      background: "rgba(0,0,0, 0.12)",
    },
  },
  title: {
    color: ({ palette }: Theme) => palette.black.main,
  },
  desc: {
    color: ({ palette }: Theme) => palette.grey2.main,
    fontSize: "16px",
  },
  miniSizeDesc: {
    color: ({ palette }: Theme) => palette.grey3.main,
    fontSize: ({ style }: Theme) => style.miniSearchButton.fontSize,
    fontWeight: ({ style }: Theme) => style.miniSearchButton.fontWeight,
    whiteSpace: "pre-line",
    ...getEllipisisStyle(2),
  },
  border: {
    borderRight: ({ palette }: { palette: { grey5: { main: string } } }) =>
      `1px solid ${palette.grey5.main}`,
  },
};

export default SelectItemStyle;
