import { ChangeEvent } from "react";
import { StyledRange } from "./RangeSlider.styled";

interface RangeSliderType {
  value: number;
  minRange?: number;
  maxRange?: number;
  onChangeHandler: (element: ChangeEvent<HTMLInputElement>) => void;
}

export default function RangeSlider({ value, onChangeHandler }: RangeSliderType) {
  return <StyledRange type="range" value={value} onChange={onChangeHandler} />;
}
