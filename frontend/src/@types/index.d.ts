import { GridProps, GridSize, IconButtonProps } from "@mui/material";

export interface RoundButtonProps extends IconButtonProps {
  icon: "close" | "search";
}

export interface ButtonAreaProps extends RoundButtonProps {
  divide?: boolean;
}
export interface SelectItemTemplateProps extends GridProps {
  divide?: string;
}

export interface SearchBarContainerProps {
  currentPage?: string;
}
