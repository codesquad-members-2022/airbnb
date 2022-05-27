import { ButtonAreaProps } from "@types";

import SelectItemTemplate from "../SelectItemTemplate/SelectItemTemplate";
import RoundIconButton from "./Buttons/Buttons";

const ButtonArea = ({ icon, divide }: ButtonAreaProps): JSX.Element => {
  return (
    <SelectItemTemplate
      divide={divide ? divide.toString() : undefined}
      container
      xs={1}
      justifyContent="center"
      direction="column"
      alignItems="flex-end"
    >
      <RoundIconButton icon={icon} />
    </SelectItemTemplate>
  );
};

export default ButtonArea;
