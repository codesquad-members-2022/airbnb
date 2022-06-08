import { useState, useContext, useMemo } from "react";

import { PriceRangeContext, SearchBarStateContext } from "contexts/contexts";
import { LocationContext } from "router/Contexts";
import numToWon from "utils/utils";

import PriceSelectArea from "../../ModalInnerItems/ReservationFeeModal/PriceSelectArea";
import ButtonArea from "../ButtonArea/ButtonArea";
import SelectItem, {
  WhiteSpace,
  SelectItemProps,
  RangeType,
} from "./SelectItem";

const buttonId = "reservation-fee-button";

const INITIAL_PRICE_PERCENTAGE = {
  min: 0,
  max: 100,
};

const ReservationFee = ({
  anchorEl,
  onClick,
  onClose,
  stateData,
  initialPrice,
}: ReservationFeeProps): JSX.Element => {
  const { state: price, setState: setPrice } = stateData as {
    state: RangeType;
    setState: React.Dispatch<React.SetStateAction<RangeType>>;
  };
  const { queryData } = { ...useContext(LocationContext) };
  const { isSearchBarFullSize, setIsSearchBarFullSize } = useContext(
    SearchBarStateContext
  )!;

  const [percentage, setPercentage] = useState({
    min: INITIAL_PRICE_PERCENTAGE.min,
    max: INITIAL_PRICE_PERCENTAGE.max,
  });

  const isQueryDataIncludesPriceRange =
    queryData?.minPrice || queryData?.maxPrice;

  const description =
    !isQueryDataIncludesPriceRange &&
    percentage.min === INITIAL_PRICE_PERCENTAGE.min &&
    percentage.max === INITIAL_PRICE_PERCENTAGE.max
      ? "금액 설정"
      : `${numToWon(price.min)}~${numToWon(price.max)}`;

  const isOpen = anchorEl?.id === buttonId;
  return (
    <PriceRangeContext.Provider
      value={useMemo(
        () => ({
          initialPrice: {
            min: initialPrice?.minPrice!,
            max: initialPrice?.maxPrice!,
          },
          priceRange: { price, percentage },
          setPriceRange: {
            setPrice,
            setPercentage,
          },
        }),
        [price, percentage, setPrice, setPercentage, initialPrice]
      )}
    >
      <SelectItem
        gridStyle={
          isSearchBarFullSize
            ? {
                xs: 2,
                pl: 2,
              }
            : { xs: 3, pl: 1 }
        }
        buttonId={buttonId}
        buttonAreaLabel="숙박요금 설정"
        title="요금"
        desc={description}
        open={isOpen}
        handleClick={
          isSearchBarFullSize
            ? onClick
            : () => {
                setIsSearchBarFullSize(true);
                // reservationFee모달도 open상태로 되면 좋음.
              }
        }
        handleClose={onClose}
        createNewPopup
        anchorEl={anchorEl}
      >
        <PriceSelectArea />
      </SelectItem>
      {(isOpen && <ButtonArea icon="close" divide />) || (
        <WhiteSpace divide xs={1} />
      )}
    </PriceRangeContext.Provider>
  );
};

export default ReservationFee;

interface ReservationFeeProps extends SelectItemProps {
  initialPrice?: {
    minPrice: number;
    maxPrice: number;
  };
}
