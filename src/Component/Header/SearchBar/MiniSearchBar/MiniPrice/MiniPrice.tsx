import { useContext } from "react";
import { PriceContext } from "Context";
import { getPriceType } from "util/util";
import { StyledMiniSearchBarChild } from "../MiniSearchBar.styled";
import StyledMiniPrice from "./MiniPrice.styled";

const MiniPrice = () => {
	const { min, max } = useContext(PriceContext);
	const minMoney = getPriceType(min, true);
	const maxMoney = getPriceType(max, true);
	const miniPriceInfo = `${minMoney} - ${maxMoney}`;
	const name = "miniPrice";

	return (
		<StyledMiniPrice>
			<StyledMiniSearchBarChild name={name}>{miniPriceInfo}</StyledMiniSearchBarChild>{" "}
		</StyledMiniPrice>
	);
};

export default MiniPrice;
