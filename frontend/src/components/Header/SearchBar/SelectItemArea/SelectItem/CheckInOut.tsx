import { useRef } from "react";

import { Grid } from "@mui/material";

import ButtonArea from "../ButtonArea/ButtonArea";
import { ModalTemplate } from "../SelectItemTemplate/SelectItemTemplate";
import SelectItem, { SelectItemProps, WhiteSpace } from "./SelectItem";

const wrapperId = "check-in-out-wrap";

const CheckInOut = ({
  anchorEl,
  setAnchorEl,
  onClose,
}: SelectItemProps): JSX.Element => {
  const $wrap = useRef<HTMLDivElement>(null);
  const isOpen = anchorEl?.id === wrapperId;

  const handleClick = () => {
    setAnchorEl?.($wrap.current);
  };

  return (
    <Grid item container xs={5} component="div" id={wrapperId} ref={$wrap}>
      <SelectItem
        gridStyle={{
          xs: 5,
        }}
        buttonId="check-in-date-button"
        buttonAreaLabel="체크인 날짜 설정"
        title="안녕하세요"
        desc="호톨비"
        handleClick={handleClick}
        open={isOpen}
      />
      <SelectItem
        gridStyle={{
          xs: 5,
          pl: 1,
        }}
        buttonId="check-out-date-button"
        buttonAreaLabel="체크아웃 날짜 설정"
        title="체크아웃"
        desc="체크아웃 영역"
        handleClick={handleClick}
        open={isOpen}
      />
      <ModalTemplate open={isOpen} anchorEl={anchorEl} onClose={onClose}>
        테스트용
      </ModalTemplate>
      {(isOpen && <ButtonArea icon="close" divide xs={2} />) || (
        <WhiteSpace divide xs={2} />
      )}
    </Grid>
  );
};

export default CheckInOut;
