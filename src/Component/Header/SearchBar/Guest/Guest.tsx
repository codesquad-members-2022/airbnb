import { useContext } from "react";

import { CancelButton } from "util/Icons";
import { GuestsContext, GuestsDispatchContext, CheckModalContext } from "Context";
import { StyledGuest, StyledGuestHover } from "./Guest.styled";
import { StyledSearchBarChild } from "../SearchBar.styled";

const modalState = "guest";

const Guest = () => {
	const guests = useContext(GuestsContext);
	const checkModal = useContext(CheckModalContext);
	const guestsDispatch = useContext(GuestsDispatchContext);
	const { adult, child, baby } = guests;
	const sum = adult + child + baby;
	const mention = `게스트 ${adult + child}명, 유아 ${baby}명`;
	const reset = () => guestsDispatch({ guest: "adult", type: "reset" });

	return (
		<StyledGuestHover onClick={(event) => event.stopPropagation()}>
			<StyledGuest>
				<StyledSearchBarChild onClick={() => checkModal(modalState)} name={modalState}>
					<div>인원</div>
					<div>{sum ? mention : "게스트 추가"}</div>
				</StyledSearchBarChild>
				{!!sum && <CancelButton onClick={reset} colorset="grey3" size={20} hover="true" />}
			</StyledGuest>
		</StyledGuestHover>
	);
};

export default Guest;
