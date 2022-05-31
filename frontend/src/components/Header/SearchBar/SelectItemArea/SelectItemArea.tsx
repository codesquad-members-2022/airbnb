import { useState } from "react";

import ButtonArea from "./ButtonArea/ButtonArea";
import { CheckInOut, ReservationFee, PeopleCount } from "./SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";

// TODO:
// 스크린리더가 읽을 수 있도록 - tab으로 탐색가능하도록

// NOTE:
// ButtonArea, ButtonArea.style props전달 문제(소문자로 임시 변환)
// z-index로 모달 떴을때 버튼 누를수있도록 조정.. 다른 모달도 z-index로 해야했음

const SelectItemArea = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<AnchorEl>(null);

  return (
    <SelectItemAreaWrapper container columns={12}>
      <CheckInOut setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
      <ReservationFee setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
      <PeopleCount setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
      <ButtonArea
        icon="search"
        isFocused={Boolean(anchorEl)}
        onClick={() => setAnchorEl(null)}
        ariaLabel="설정한 정보로 검색하기"
      />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;

type AnchorEl = null | HTMLDivElement | (EventTarget & HTMLElement);
