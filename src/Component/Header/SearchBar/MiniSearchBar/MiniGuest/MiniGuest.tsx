import { useContext } from "react";
import { GuestsContext } from "Context";
import { StyledMiniSearchBarChild } from "../MiniSearchBar.styled";
import StyledMiniGuest from "./MiniGuest.styled";

const MiniGuest = () => {
	const { adult, child } = useContext(GuestsContext);
	const miniGuestInfo = `게스트 ${adult + child}명`;
	const name = "miniGuest";
	return (
		<StyledMiniGuest>
			<StyledMiniSearchBarChild name={name}>{miniGuestInfo}</StyledMiniSearchBarChild>
		</StyledMiniGuest>
	);
};

export default MiniGuest;
