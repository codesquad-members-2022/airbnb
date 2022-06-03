import { useContext } from "react";

import numToWon from "utils/utils";

import {
  PriceSelectContext,
  initialPrice,
} from "../../Context/SearchBarContexts";
import PriceSelectArea from "../../ModalInnerItems/PriceSelectArea";
import ButtonArea from "../ButtonArea/ButtonArea";
import SelectItem, { WhiteSpace, SelectItemProps } from "./SelectItem";

const buttonId = "reservation-fee-button";

const ReservationFee = ({
  anchorEl,
  onClick,
  onClose,
}: SelectItemProps): JSX.Element => {
  const isOpen = anchorEl?.id === buttonId;

  const {
    accomodationPrice: { minPrice, maxPrice },
  } = useContext(PriceSelectContext);

  const description =
    minPrice !== initialPrice.minPrice && maxPrice !== initialPrice.maxPrice
      ? `${numToWon(minPrice)}~${numToWon(maxPrice)}`
      : "금액대 설정";

  return (
    <>
      <SelectItem
        gridStyle={{
          xs: 2,
          pl: 2,
        }}
        buttonId={buttonId}
        buttonAreaLabel="숙박요금 설정"
        title="요금"
        desc={description}
        open={isOpen}
        handleClick={onClick}
        handleClose={onClose}
        createNewPopup
        anchorEl={anchorEl}
      >
        <PriceSelectArea />
      </SelectItem>
      {(isOpen && <ButtonArea icon="close" divide />) || (
        <WhiteSpace divide xs={1} />
      )}
    </>
  );
};

export default ReservationFee;
