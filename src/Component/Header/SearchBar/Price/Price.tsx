import { useContext } from "react";

import { getPriceType } from "util/util";
import { CheckModalContext, PriceContext, PriceDispatchContext } from "Context";
import { CancelButton } from "util/Icons";
import { StyledPrice, StyledPriceHover } from "./Price.styled";
import { StyledSearchBarChild } from "../SearchBar.styled";

const modalState = "price";
const PRICE = "요금";
const PRICE_SETTING = "금액대 설정";

const Price = () => {
	const checkModal = useContext(CheckModalContext);
	const priceDispatch = useContext(PriceDispatchContext);
	const { max, min } = useContext(PriceContext);
	const isDefault = max === 1000000 && min === 0;

	return (
		<StyledPriceHover onClick={(event) => event.stopPropagation()}>
			<StyledPrice>
				<StyledSearchBarChild onClick={() => checkModal(modalState)} name={modalState}>
					<div>{PRICE}</div>
					<div>{isDefault ? PRICE_SETTING : `${getPriceType(min)}~${getPriceType(max)}`}</div>
				</StyledSearchBarChild>
				{!isDefault && (
					<CancelButton
						onClick={() => priceDispatch({ value: {}, type: "RESET" })}
						colorset="grey3"
						size={20}
						hover="true"
					/>
				)}
			</StyledPrice>
		</StyledPriceHover>
	);
};

export default Price;
