import PriceChart from "Components/PriceChart/PriceChart";
import RangeSlider from "Components/RangeSlider/RangeSlider";
import { usePriceModal } from "Context/PriceProvider";
import { MAX_PRICE_RANGE, MIN_PRICE_RANGE, MODAL_REF_IDX } from "Helpers/constant";
import { getWonTemplate } from "Helpers/utils";
import { useOutsideClick } from "Hook/useOutsideClick";
import { ChangeEvent } from "react";
import {
  PriceChartAddInfo,
  PriceChartInfoArea,
  PriceChartInfo,
  Title,
  PriceModalContainer,
  PriceChartArea,
} from "./PriceModal.styled";

interface PriceModalType {
  priceChartStyle?: string;
  priceModalRef?: React.MutableRefObject<HTMLElement[] | null[]>;
}

const PRICE_RANGE = MAX_PRICE_RANGE - MIN_PRICE_RANGE;

export default function PriceModal({ priceModalRef, priceChartStyle }: PriceModalType) {
  const [priceChartState, dispatchPriceChart] = usePriceModal();
  const { isPriceModalOpen, minPrice, maxPrice } = priceChartState;
  const averagePrice = minPrice + Math.floor((maxPrice - minPrice) / 2);
  const priceRange = `${getWonTemplate(minPrice)} ~ ${
    maxPrice === MAX_PRICE_RANGE ? getWonTemplate(maxPrice) + "+" : getWonTemplate(maxPrice)
  }`;
  const oneDayPriceInfo = `평균 1박 요금은 ${getWonTemplate(averagePrice)} 입니다.`;
  const minValue = getRatio({ value: minPrice, min: MIN_PRICE_RANGE, max: MAX_PRICE_RANGE }) * 100;
  const maxValue = getRatio({ value: maxPrice, min: MIN_PRICE_RANGE, max: MAX_PRICE_RANGE }) * 100;

  const handleOutsideClick = () => {
    dispatchPriceChart({
      type: "CLOSE",
    });
  };

  const handleSetMinRange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const ratio = getRatio({ value: Number(value) });
    const newPrice = PRICE_RANGE * ratio;
    if (newPrice >= maxPrice) {
      return;
    }

    dispatchPriceChart({
      type: "SET_MIN_PRICE",
      minPrice: newPrice,
    });
  };

  const handleSetMaxRange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const ratio = getRatio({ value: Number(value) });
    const newPrice = PRICE_RANGE * ratio;
    if (newPrice <= minPrice) {
      return;
    }

    dispatchPriceChart({
      type: "SET_MAX_PRICE",
      maxPrice: newPrice,
    });
  };

  useOutsideClick(priceModalRef, handleOutsideClick);

  return (
    isPriceModalOpen && (
      <PriceModalContainer
        ref={(el) => priceModalRef && (priceModalRef.current[MODAL_REF_IDX] = el)}
        flex
        direction="column"
      >
        <PriceChartInfoArea>
          <Title>가격 범위</Title>
          <PriceChartInfo>{priceRange}</PriceChartInfo>
          <PriceChartAddInfo>{oneDayPriceInfo}</PriceChartAddInfo>
        </PriceChartInfoArea>
        <PriceChartArea>
          <PriceChart priceChartStyle={priceChartStyle} minRatio={minValue / 100} maxRatio={maxValue / 100} />
          <RangeSlider
            value={minValue}
            minRange={MIN_PRICE_RANGE}
            maxRange={MAX_PRICE_RANGE}
            onChangeHandler={handleSetMinRange}
          />
          <RangeSlider
            value={maxValue}
            minRange={MIN_PRICE_RANGE}
            maxRange={MAX_PRICE_RANGE}
            onChangeHandler={handleSetMaxRange}
          />
        </PriceChartArea>
      </PriceModalContainer>
    )
  );
}

interface RatioType {
  value: number;
  min?: number;
  max?: number;
}

const getRatio = ({ value, min = 0, max = 100 }: RatioType) => (value - min) / (max - min);
