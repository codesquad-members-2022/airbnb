import DongleRegular from "./Dongle-Regular.woff";
import NotoSansKR from "./notosanskr-regular-webfont.woff";

const fonts = `
	@font-face {
		font-family: "Noto Sans KR", sans-serif;
		src:url(${NotoSansKR}) format("woff");
		font-weight: ${({ theme }) => theme.fontWeight.base}
	}

	@font-face{
		font-family: "Dongle";
		src: url(${DongleRegular}) format("woff");
		font-weight: ${({ theme }) => theme.fontWeight.base}
	}

`;

export default fonts;
