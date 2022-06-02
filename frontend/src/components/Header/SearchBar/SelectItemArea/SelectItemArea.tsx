import { useState } from "react";

import ButtonArea from "./ButtonArea/ButtonArea";
import { CheckInOut, ReservationFee, PeopleCount } from "./SelectItem";
import { AnchorEl } from "./SelectItem/SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";

// TODO:
// 스크린리더가 읽을 수 있도록 - tab으로 탐색가능하도록

// sx={{ zIndex: 1600 }}

const SelectItemArea = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<AnchorEl>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SelectItemAreaWrapper container columns={12}>
      <CheckInOut
        setAnchorEl={setAnchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
      />
      <ReservationFee
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClick}
      />
      <PeopleCount
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClick}
      />
      <ButtonArea
        icon="search"
        isFocused={Boolean(anchorEl)}
        onClick={handleClose}
        ariaLabel="설정한 정보로 검색하기"
      />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
