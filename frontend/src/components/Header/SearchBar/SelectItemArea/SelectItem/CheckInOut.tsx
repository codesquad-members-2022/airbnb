import { useRef } from "react";

import { Grid } from "@mui/material";

import { SelectItemProps } from "@types";

import ButtonArea from "../ButtonArea/ButtonArea";
import { ModalTemplate } from "../SelectItemTemplate/SelectItemTemplate";
import SelectItem, { WhiteSpaceCloseButtonSize } from "./SelectItem";

const wrapperId = "check-in-out-wrap";

const CheckInOut = ({
  setAnchorEl,
  anchorEl,
}: SelectItemProps): JSX.Element => {
  const $wrap = useRef<HTMLDivElement>(null);
  const isOpen = Boolean(anchorEl?.id === wrapperId);

  const handleClick = () => {
    setAnchorEl($wrap.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
      <ModalTemplate
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        테스트용
      </ModalTemplate>
      {(isOpen && <ButtonArea icon="close" divide xs={2} />) || (
        <WhiteSpaceCloseButtonSize divide xs={2} />
      )}
    </Grid>
  );
};

export default CheckInOut;
