import { useContext } from "react";

import { CancelButton } from "util/Icons";
import { getShowedMonth } from "util/util";
import { CheckModalContext, ScheduleContext, ScheduleDispatchContext } from "Context";
import { StyledCheckin, StyledCheckout } from "./Schedule.styled";
import { StyledSearchBarChild } from "../SearchBar.styled";

const modalStateCheckin = "checkin";
const modalStateCheckout = "checkout";
const name = "schedule";

const Schedule = () => {
	const checkModal = useContext(CheckModalContext);
	const { checkin, checkout } = useContext(ScheduleContext);
	const scheduleDispatch = useContext(ScheduleDispatchContext);
	const isCheckin = !!checkin.year;
	const isCheckout = !!checkout.year;

	return (
		<>
			<StyledCheckin onClick={(event) => event.stopPropagation()}>
				<StyledSearchBarChild onClick={() => checkModal(modalStateCheckin)} name={name}>
					<div>체크인</div>
					<div>
						{checkin.year ? `${getShowedMonth(checkin.month)}월${checkin.date}일` : "날짜 입력"}
					</div>
				</StyledSearchBarChild>
				{isCheckin && (
					<CancelButton
						colorset="grey3"
						size={20}
						onClick={() =>
							scheduleDispatch({ dayInfo: { year: 0, month: 0, date: 0 }, type: "RESET" })
						}
						hover="true"
					/>
				)}
			</StyledCheckin>
			<StyledCheckout onClick={(event) => event.stopPropagation()}>
				<StyledSearchBarChild onClick={() => checkModal(modalStateCheckout)} name={name}>
					<div>체크아웃</div>
					<div>
						{checkout.year ? `${getShowedMonth(checkout.month)}월${checkout.date}일` : "날짜 입력"}
					</div>
				</StyledSearchBarChild>
				{isCheckout && (
					<CancelButton
						colorset="grey3"
						size={20}
						onClick={() =>
							scheduleDispatch({ dayInfo: { year: 0, month: 0, date: 0 }, type: "RESET_CHECKOUT" })
						}
						hover="true"
					/>
				)}
			</StyledCheckout>
		</>
	);
};

export default Schedule;
