import { GridProps, GridSize, IconButtonProps } from "@mui/material";

export interface SelectItemTemplateProps extends GridProps {
  divide?: boolean;
}

export interface SearchBarContainerProps {
  currentPage?: string;
}

export interface SelectItemProps {
  setAnchorEl: React.Dispatch<
    React.SetStateAction<HTMLDivElement | null | (EventTarget & HTMLElement)>
  >;
  anchorEl?: null | HTMLDivElement | (EventTarget & HTMLElement);
}

export interface SearchBarButtonProps extends IconButtonProps {
  icon: "close" | "search";
  isFocused?: boolean | undefined;
}

interface ButtonAreaProps extends SearchBarButtonProps {
  divide?: boolean;
  xs?: number;
  ariaLabel?: string;
}
