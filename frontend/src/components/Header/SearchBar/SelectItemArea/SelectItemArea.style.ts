import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const SelectItemAreaWrapper = styled(Grid)(
  ({ theme: { size } }) => `
  width: ${size.fullSize};
  height: ${size.fullSize};
  `
);

export default SelectItemAreaWrapper;
