import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const SelectItemAreaWrapper = styled(Grid)(
  ({ theme: { elementSize } }) => `
  width: ${elementSize.fullSize};
  height: ${elementSize.fullSize};
  `
);

export default SelectItemAreaWrapper;
