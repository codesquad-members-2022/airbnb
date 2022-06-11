import styled, { css } from "styled-components";

interface IVisibleDay {
	isChecked: boolean;
}
interface IVisibleDayBg {
	isBetween: boolean;
	isLast: boolean;
	isFirst: boolean;
	isCheckin: boolean;
	isCheckout: boolean;
}

const VisibleDayBg = styled.div<IVisibleDayBg>`
	${({ isCheckin, isCheckout, isBetween, isLast, isFirst, theme: { colors, height } }) => css`
		height: ${height.calendarDay};

		${isCheckout &&
		css`
			background: linear-gradient(90deg, ${colors.grey6} 50%, ${colors.white} 50%);
		`}

		${isCheckin &&
		css`
			background: linear-gradient(90deg, ${colors.white} 50%, ${colors.grey6} 50%);
		`}

		${isBetween &&
		css`
			background: ${colors.grey6};
		`}

		${isLast &&
		isBetween &&
		css`
			background: linear-gradient(90deg, ${colors.grey6}, ${colors.white});
		`}
		
		${isFirst &&
		isBetween &&
		css`
			background: linear-gradient(90deg, ${colors.white}, ${colors.grey6});
		`}
	`}
	margin-bottom: 10px;
`;

const VisibleDay = styled.div<IVisibleDay>`
	${({ theme: { width, height, fontSize, fontWeight, colors } }) => css`
		width: ${width.calendarDay};
		height: ${height.calendarDay};
		line-height: ${height.calendarDay};
		font-size: ${fontSize.xSmall};
		font-weight: ${fontWeight.large};
		color: ${colors.grey1};
	`}

	text-align: center;
	cursor: pointer;

	${({ isChecked, theme: { colors } }) => css`
		:hover {
			background: ${colors.grey2};
			border-radius: 30px;
			color: ${colors.white};
		}

		${isChecked &&
		css`
			background: ${colors.grey1};
			border-radius: 30px;
			color: ${colors.white};
		`}
	`}
	margin-bottom: 10px;
`;

const InvisibleDay = styled.div`
	${({ theme: { width, height } }) => css`
		width: ${width.calendarDay};
		height: ${height.calendarDay};
	`}
	margin-bottom : 10px;
`;

const StyledCalendarDayBox = styled.div`
	${({ theme: { width, height } }) => css`
		width: ${width.calendarDayBox};
		height: ${height.calendarDayBox};
	`}
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	justify-content: center;
`;

const StyledCalendarLabel = styled.div`
	${({ theme: { width, height, fontSize, fontWeight, colors } }) => css`
		width: ${width.calendarLabel};
		height: ${height.calendarLabel};
		line-height: ${height.calendarLabel};
		font-size: ${fontSize.xSmall};
		font-weight: ${fontWeight.small};
		color: ${colors.grey3};
	`}
	display: flex;
	align-content: flex-start;
	justify-content: center;
`;

const StyledCalendarTitle = styled.div`
	${({ theme: { width, height, fontSize, fontWeight, colors } }) => css`
		width: ${width.calendarTitle};
		height: ${height.calendarTitle};
		font-size: ${fontSize.medium};
		font-weight: ${fontWeight.medium};
		color: ${colors.black};
	`}
	text-align: center;
	margin: 0 auto;
`;

const StyledCalendar = styled.div`
	${({ theme: { width, height } }) => css`
		width: ${width.calendar};
		height: ${height.calendar};
	`}
	display: flex;
	flex-wrap: wrap;
	align-content: space-around;
`;

export {
	VisibleDay,
	VisibleDayBg,
	InvisibleDay,
	StyledCalendarDayBox,
	StyledCalendarLabel,
	StyledCalendarTitle,
	StyledCalendar,
};
