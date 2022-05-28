import { Box, Popover, PopoverProps } from "@mui/material";

import { SelectItemTemplateProps } from "@types";

import { GridItem, modalStyle } from "./SelectItemTemplate.style";

const SelectItemTemplate = ({
  divide,
  ...MUIGridProps
}: SelectItemTemplateProps): JSX.Element => {
  return (
    <GridItem item {...MUIGridProps} divide={divide}>
      {MUIGridProps.children}
    </GridItem>
  );
};

const ModalTemplate = ({ ...props }: PopoverProps): JSX.Element => {
  return (
    <Popover
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box sx={modalStyle}>{props.children}</Box>
    </Popover>
  );
};

export { SelectItemTemplate, ModalTemplate };
