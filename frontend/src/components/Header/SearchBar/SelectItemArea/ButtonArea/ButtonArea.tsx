import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import { ButtonAreaProps } from "@types";

import { SelectItemTemplate } from "../SelectItemTemplate/SelectItemTemplate";
import RoundButton from "./ButtonArea.style";

const icons = {
  close: <CloseIcon />,
  search: <SearchIcon />,
};

const ButtonArea = ({
  isFocused,
  icon,
  divide,
  onClick,
  ariaLabel,
  xs = 1,
}: ButtonAreaProps): JSX.Element => {
  return (
    <SelectItemTemplate
      divide={divide}
      container
      xs={xs}
      justifyContent="center"
      direction="column"
      alignItems="flex-end"
    >
      <RoundButton
        icon={icon}
        isFocused={isFocused}
        sx={{
          zIndex: 1500,
        }}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {icons[icon]}
        {isFocused && "검색"}
      </RoundButton>
    </SelectItemTemplate>
  );
};

export default ButtonArea;
