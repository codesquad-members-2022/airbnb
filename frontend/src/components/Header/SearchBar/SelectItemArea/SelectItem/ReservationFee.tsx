import { useState, useContext, useMemo } from "react";

import { PriceRangeContext, SearchBarStateContext } from "contexts/contexts";
import RouterContext from "router/Contexts";
import { numToWon } from "utils/utils";

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
  const { queryData, page } = { ...useContext(RouterContext) };
  const { isSearchBarFullSize, setIsSearchBarFullSize } = useContext(
    SearchBarStateContext
  )!;

  const [percentage, setPercentage] = useState({
    min: INITIAL_PRICE_PERCENTAGE.min,
    max: INITIAL_PRICE_PERCENTAGE.max,
  });

  const { state: price, setState: setPrice } = stateData as {
    state: RangeType;
    setState: React.Dispatch<React.SetStateAction<RangeType>>;
  };

  const isQueryDataIncludesPriceRange =
    !!queryData?.minPrice || !!queryData?.maxPrice;

  const isReservationFeeFiltered =
    percentage.min !== INITIAL_PRICE_PERCENTAGE.min ||
    percentage.max !== INITIAL_PRICE_PERCENTAGE.max;

  const isDiscriptionFiltered =
    !!isQueryDataIncludesPriceRange || !!isReservationFeeFiltered;

  const description =
    isDiscriptionFiltered && page !== "index"
      ? `₩${numToWon(Number(queryData?.minPrice) || price.min)} - ₩${numToWon(
          Number(queryData?.maxPrice) || price.max
        )}`
      : "금액 설정";

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
          isSearchBarFullSize || page === "index"
            ? {
                xs: 2,
                pl: 2,
              }
            : { xs: 3, pl: 1 }
        }
        isDiscriptionFiltered={isDiscriptionFiltered}
        buttonId={buttonId}
        buttonAreaLabel="숙박요금 설정"
        title="요금"
        desc={description}
        open={isOpen}
        handleClick={
          isSearchBarFullSize || page === "index"
            ? onClick
            : () => {
                setIsSearchBarFullSize(true);
                // NOTE: reservationFee모달도 open상태로 되면 좋음.
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
