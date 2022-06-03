import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const SelectItemAreaWrapper = styled(Grid)(
  ({ theme: { elementSize } }) => `
  width: ${elementSize.fullSize};
  height: ${elementSize.fullSize};
  `
);

const searchButtonWrapperStyle = {
  display: "flex",
  justifyContent: "flex-end",
};

export { SelectItemAreaWrapper, searchButtonWrapperStyle };
