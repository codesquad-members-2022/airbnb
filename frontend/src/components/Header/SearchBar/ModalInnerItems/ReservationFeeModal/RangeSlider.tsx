import { useContext, useRef } from "react";

import { PriceRangeContext } from "contexts/contexts";

import { RangeSliderWrapper } from "./ReservationFeeModal.style";

const INITIAL_PRICE_PERCENTAGE = {
  min: 0,
  max: 100,
};

const RangeSlider = () => {
  const {
    initialPrice,
    priceRange: { price, percentage },
    setPriceRange: { setPrice, setPercentage },
  } = useContext(PriceRangeContext)!;

  const computePriceByPercentage = (percent: number): number => {
    return (
      initialPrice.min +
      (initialPrice.max - initialPrice.min) * (percent * 0.01)
    );
  };

  const $leftInputRange = useRef<HTMLInputElement>(null);
  const $rightInputRange = useRef<HTMLInputElement>(null);

  const $leftThumb = useRef<HTMLDivElement>(null);
  const $rightThumb = useRef<HTMLDivElement>(null);

  const handleLeftRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentLeftPercent = Math.min(
      Math.floor(Number(e.target.value)),
      Math.floor(Number($rightInputRange.current?.value)) - 5
    );

    if ($leftThumb.current) {
      $leftThumb.current.style.left = `${currentLeftPercent}%`;
    }

    setPrice({ ...price, min: computePriceByPercentage(currentLeftPercent) });

    setPercentage({
      ...percentage,
      min: currentLeftPercent,
    });
  };

  const handleRightRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentRightPercent = Math.max(
      Math.floor(Number(e.target.value)),
      Math.floor(Number($leftInputRange.current?.value)) + 5
    );

    if ($rightThumb.current) {
      $rightThumb.current.style.right = `${100 - currentRightPercent}%`;
    }

    setPrice({ ...price, max: computePriceByPercentage(currentRightPercent) });

    setPercentage({
      ...percentage,
      max: currentRightPercent,
    });
  };

  return (
    <RangeSliderWrapper>
      <input
        type="range"
        id="input-left"
        min={INITIAL_PRICE_PERCENTAGE.min}
        max={INITIAL_PRICE_PERCENTAGE.max}
        value={percentage.min}
        onChange={handleLeftRangeChange}
        ref={$leftInputRange}
      />
      <input
        type="range"
        id="input-right"
        min={INITIAL_PRICE_PERCENTAGE.min}
        max={INITIAL_PRICE_PERCENTAGE.max}
        value={percentage.max}
        onChange={handleRightRangeChange}
        ref={$rightInputRange}
      />
    </RangeSliderWrapper>
  );
};

export default RangeSlider;
