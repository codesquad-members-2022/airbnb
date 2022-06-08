import { useContext } from "react";
import { ScheduleContext } from "Context";
import { StyledMiniSearchBarChild } from "../MiniSearchBar.styled";
import StyledMiniSchedule from "./MiniSchedule.styled";

const MiniSchedule = () => {
	const { checkin, checkout } = useContext(ScheduleContext);
	const miniScheduleInfo = `${checkin.month + 1}월 ${checkin.date}일 ~ ${checkout.month + 1}월 ${
		checkout.date
	}일`;

	const name = "miniSchedule";

	return (
		<StyledMiniSchedule>
			<StyledMiniSearchBarChild name={name}>{miniScheduleInfo}</StyledMiniSearchBarChild>
		</StyledMiniSchedule>
	);
};

export default MiniSchedule;
