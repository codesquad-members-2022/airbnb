import { useState } from "react";

import { Button, GridSize, Popover, Typography } from "@mui/material";

import SelectItemTemplate from "../SelectItemTemplate/SelectItemTemplate";
import styles from "./SelectItem.style";

const SelectItem = ({ ...props }: SelectItemDataProps): JSX.Element => {
  // TODO: 현재 Popover가 열렸는지 확인하는 Boolean으로 버튼 보이기 / 숨기기 (close)

  // TODO: 체크인, 체크아웃 영역 SelecItem 어디를 click하더라도 하나의 popOver가 열려야 함.
  // 👉 popOver를 props로 넘기는 형태로 변경 가능하지 않을까...🤔

  const {
    gridStyle: { xs, pl = undefined },
    buttonId,
    buttonAreaLabel,
    title,
    desc,
    modalAnchorStyle,
    children,
  } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SelectItemTemplate xs={xs} pl={pl}>
      <Button
        id={buttonId}
        aria-controls={open ? buttonId : undefined}
        aria-haspopup="true"
        aria-label={buttonAreaLabel}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={styles.button}
      >
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.desc}>{desc}</Typography>
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={modalAnchorStyle}
      >
        {children}
      </Popover>
    </SelectItemTemplate>
  );
};

export default SelectItem;

interface SelectItemDataProps {
  gridStyle: {
    xs: boolean | GridSize | undefined;
    pl?: number | undefined;
  };
  buttonId: string;
  buttonAreaLabel: string;
  title: string;
  desc: string;
  modalAnchorStyle: {
    horizontal: "center" | "left" | "right" | number;
    vertical: "bottom" | "center" | "top" | number;
  };
  children: React.ReactNode;
}
