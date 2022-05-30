import { Box, Popover, PopoverProps } from "@mui/material";

import {
  GridItem,
  modalStyle,
  SelectItemTemplateProps,
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

const ModalTemplate = ({ ...props }: PopoverProps): JSX.Element => {
  return (
    <Popover
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.onClose}
      anchorOrigin={props.anchorOrigin}
    >
      <Box sx={modalStyle}>{props.children}</Box>
    </Popover>
  );
};

export { SelectItemTemplate, ModalTemplate };
