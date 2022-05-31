import { Grid, GridProps, PopoverOrigin, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";

import theme from "styles/theme";

const GridItem = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "divide",
  name: "MyThemeComponent",
  slot: "Root",
})<SelectItemTemplateProps>(
  ({ divide, theme: { palette } }) => `
  border-right: ${divide && `1px solid ${palette.grey5.main}`}};
`
);

const modalStyle = {
  padding: ({ whiteSpace }: Theme) => whiteSpace.searchBarPadding,
};

const modalAnchorDefaultStyle: PopoverOrigin = {
  vertical: theme.elementSize.searchBar.height,
  horizontal: "left",
};

export { GridItem, modalStyle, modalAnchorDefaultStyle };

export interface SelectItemTemplateProps extends GridProps {
  divide?: boolean;
}
