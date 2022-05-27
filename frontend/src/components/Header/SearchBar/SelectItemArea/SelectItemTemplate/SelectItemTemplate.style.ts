import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { SelectItemTemplateProps } from "@types";

const GridItem = styled(Grid)<SelectItemTemplateProps>(
  ({ divide, theme: { palette } }) => `
  border-right: ${divide && `1px solid ${palette.grey5.main}`}};
`
);

export default GridItem;
