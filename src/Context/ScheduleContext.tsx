import { createContext, ReactNode, Dispatch, useReducer } from "react";
import { getLateDay } from "util/util";
import type { dayType } from "util/util";

type scheduleType = {
	checkin: dayType;
	checkout: dayType;
};

type scheduleDispatchValueType = {
	year: number;
	month: number;
	date: number;
};

type scheduleDispatchAction = {
	dayInfo: scheduleDispatchValueType;
	type: "ENROLL" | "RESET" | "RESET_CHECKOUT";
};

type scheduleDispatchType = Dispatch<scheduleDispatchAction>;

const defaultDay = { year: 0, month: 0, date: 0 };
const defaultSchedule = {
	checkin: defaultDay,
	checkout: defaultDay,
};
const ScheduleContext = createContext<scheduleType>(defaultSchedule);
const ScheduleDispatchContext = createContext<scheduleDispatchType>(() => null);

const getNewSchedule = (dayInfo: scheduleDispatchValueType, schedule: scheduleType) => {
	const { checkin, checkout } = schedule;
	const isCheckin = checkin.year !== 0;
	const isCheckout = checkout.year !== 0;

	if (!isCheckin) return { checkin: dayInfo };
	if (isCheckin && !isCheckout) {
		const lateDay = getLateDay(checkin, dayInfo);
		const newSchedule =
			lateDay === checkin
				? { checkin: dayInfo, checkout: checkin }
				: { checkin, checkout: dayInfo };
		return newSchedule;
	}
	if (isCheckin && isCheckout) {
		const isEarlierThanCheckin = getLateDay(checkin, dayInfo) === checkin;
		const isLaterThanCheckout = getLateDay(checkout, dayInfo) === dayInfo;
		if (isEarlierThanCheckin) return { checkin: dayInfo, checkout: defaultDay };
		if (isLaterThanCheckout) return { checkin, checkout: dayInfo };
		return { checkin, checkout: dayInfo };
	}
	return { ...schedule };
};

const scheduleReducer = (schedule: scheduleType, action: scheduleDispatchAction) => {
	const { dayInfo, type } = action;

	switch (type) {
		case "ENROLL": {
			const newSchedule = getNewSchedule(dayInfo, schedule);
			return { ...schedule, ...newSchedule }; // newSchedule = {checkout:{0,0,0}}
		}
		case "RESET":
			return defaultSchedule;
		case "RESET_CHECKOUT":
			return { ...schedule, ...{ checkout: defaultDay } };
		default:
			return { ...schedule };
	}
};

const ScheduleProvider = ({ children }: { children: ReactNode }) => {
	const [schedule, scheduleDispatch] = useReducer(scheduleReducer, defaultSchedule);

	return (
		<ScheduleContext.Provider value={schedule}>
			<ScheduleDispatchContext.Provider value={scheduleDispatch}>
				{children}
			</ScheduleDispatchContext.Provider>
		</ScheduleContext.Provider>
	);
};

export { ScheduleProvider, ScheduleContext, ScheduleDispatchContext };
export type { scheduleType };
