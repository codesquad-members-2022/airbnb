import { SelectItemTemplateProps } from "@types";

import GridItem from "./SelectItemTemplate.style";

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

export default SelectItemTemplate;
