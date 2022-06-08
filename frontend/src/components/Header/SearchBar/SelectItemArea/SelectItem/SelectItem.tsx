import { SetStateAction, useContext } from "react";

import {
  Button,
  Grid,
  GridSize,
  PopoverProps,
  Typography,
} from "@mui/material";

import { SearchBarStateContext } from "contexts/contexts";
import RouterContext from "router/Contexts";
// import { LocationContext } from "router/Contexts";

import {
  ModalTemplate,
  SelectItemTemplate,
} from "../SelectItemTemplate/SelectItemTemplate";
import { SelectItemTemplateProps } from "../SelectItemTemplate/SelectItemTemplate.style";
import itemStyles from "./SelectItem.style";

const SelectItem = ({ ...props }: SelectItemDataProps): JSX.Element => {
  const {
    gridStyle: { xs, pl = undefined },
    buttonId,
    buttonAreaLabel,
    title,
    desc,
    modalAnchorStyle,
    open,
    handleClick,
    handleClose,
    anchorEl,
    children,
    createNewPopup,
  } = props;

  // const { queryData } = useContext(LocationContext)!;
  // const { state: params } = window.history;

  const { queryData } = { ...useContext(RouterContext) };
  const { isSearchBarFullSize } = { ...useContext(SearchBarStateContext) };

  return (
    <SelectItemTemplate xs={xs} pl={pl}>
      <Button
        id={buttonId}
        aria-controls={open ? buttonId : undefined}
        aria-haspopup="true"
        aria-label={buttonAreaLabel}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={itemStyles.button}
      >
        {isSearchBarFullSize && (
          <Typography sx={itemStyles.title}>{title}</Typography>
        )}
        {/* 쿼리데이터가 없는 경우 표시 */}
        {!queryData && (
          <Typography
            sx={isSearchBarFullSize ? itemStyles.desc : itemStyles.miniSizeDesc}
          >
            {desc}
          </Typography>
        )}
      </Button>
      {(createNewPopup && (
        <ModalTemplate
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={modalAnchorStyle}
        >
          {children}
        </ModalTemplate>
      )) ||
        children}
    </SelectItemTemplate>
  );
};

export const WhiteSpace = ({
  divide,
  xs = 1,
}: SelectItemTemplateProps): JSX.Element => {
  return <Grid item sx={(divide && itemStyles.border) || {}} xs={xs} />;
};

export default SelectItem;

export interface SelectItemDataProps extends PopoverProps {
  gridStyle: {
    xs: boolean | GridSize | undefined;
    pl?: number | undefined;
  };
  buttonId: string;
  buttonAreaLabel: string;
  title?: string;
  desc: string;
  modalAnchorStyle?: {
    horizontal: "center" | "left" | "right" | number;
    vertical: "bottom" | "center" | "top" | number;
  };
  children?: React.ReactNode;
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose?: () => void;
  createNewPopup?: boolean;
}

export interface SelectItemProps {
  setAnchorEl?: React.Dispatch<SetStateAction<AnchorEl>>;
  anchorEl?: null | HTMLDivElement | (EventTarget & HTMLElement);
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  stateData?: {
    state: RangeType;
    setState: React.Dispatch<React.SetStateAction<RangeType>>;
  };
}

export type AnchorEl = null | HTMLDivElement | (EventTarget & HTMLElement);

export interface RangeType {
  min: number;
  max: number;
}
