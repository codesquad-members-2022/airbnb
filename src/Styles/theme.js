const colors = {
	white: "#FFFFFF",
	grey6: "#F5F5F7",
	grey5: "#E0E0E0",
	grey4: "#BDBDBD",
	grey3: "#828282",
	grey3dark: "#4A4A4A",
	grey2: "#4F4F4F",
	grey1: "#333333",
	black: "#010101",
	primary: "#E84C60",
	green: "#118917",
};

const width = {
	header: "1200px",
	searchbar: "916px",
	GNBImg: "80px",
	schedule: "360px",
	scheduleChild: "112px",
	checkinModal: "916px",
	checkoutModal: "916px",
	calendar: "340px",
	calendarDayBox: "340px",
	calendarDay: "48px",
	calendarLabel: "48px",
	calendarTitle: "150px",
	price: "256px",
	priceChild: "160px",
	priceModal: "490px",
	guest: "192px",
	guestChild: "114px",
	guestModal: "400px",
	miniScheduleChild: "133px",
	miniPriceChild: "149px",
	miniGuestChild: "86px",
};

const height = {
	GNB: "100px",
	header1: "640px",
	searchbar: "76px",
	checkinModal: "512px",
	checkoutModal: "512px",
	calendar: "390px",
	calendarDayBox: "340px",
	calendarDay: "48px",
	calendarLabel: "24px",
	calendarTitle: "23px",
	guestModal: "355px",
	priceModal: "360px",
};

const fontMain = {
	"font-family": '"IBM Plex Sans KR", sans-serif',
	"font-weight": 500,
};

const fontSize = {
	xSmall: "12px",
	small: "14px",
	medium: "16px",
	large: "18px",
	xLarge: "20px",
};

const fontWeight = {
	small: 400,
	medium: 600,
	large: 700,
};

const transition = {
	main: {
		"transition-property": "width height",
		"transition-duration": "0.3s",
	},
	appear: {
		animation: "fade-in 0.3s",
		"animation-fill-mode": "forwards",
	},
	disappear: {
		animation: "fade-out 0.3s",
		"animation-fill-mode": "forwards",
	},
};

const shadow = {
	main: `5px 5px 25px ${colors.grey2}`,
};

const setFont = (size, weight) => {
	return {
		"font-size": fontSize[size],
		"font-weight": fontWeight[weight],
	};
};

const theme = {
	colors,
	width,
	height,
	fontMain,
	transition,
	fontSize,
	fontWeight,
	shadow,
	setFont,
};

export default theme;
