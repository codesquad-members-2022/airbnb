import { Grid, GridProps, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";

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

export { GridItem, modalStyle };

export interface SelectItemTemplateProps extends GridProps {
  divide?: boolean;
}
