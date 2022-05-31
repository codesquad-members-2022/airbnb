import { Box, Popover, PopoverProps } from "@mui/material";

import {
  GridItem,
  modalStyle,
  SelectItemTemplateProps,
  modalAnchorDefaultStyle,
} from "./SelectItemTemplate.style";

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

const ModalTemplate = ({
  open,
  anchorEl,
  onClose,
  anchorOrigin = modalAnchorDefaultStyle,
  children,
}: PopoverProps): JSX.Element => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      <Box sx={modalStyle}>{children}</Box>
    </Popover>
  );
};

export { SelectItemTemplate, ModalTemplate };
