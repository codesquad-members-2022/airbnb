import styled, { css } from "styled-components";

const CalendarsWrapper = styled.div`
	display: flex;
	width: 800px;
	overflow: hidden;
	z-index: 10;
`;

const StyledCalendars = styled.div<{ sliderState: string }>`
	width: 1600px;
	${({ sliderState }) => css`
		${sliderState === "prev" &&
		css`
			animation: slide-prev 0.5s;
			animation-fill-mode: forwards;
		`}

		${sliderState === "next" &&
		css`
			animation: slide-next 0.5s;
			animation-fill-mode: forwards;
		`}

		display: flex;
		flex-shrink: 0;
		justify-content: space-around;
	`}
`;

export { StyledCalendars, CalendarsWrapper };
