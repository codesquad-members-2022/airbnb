import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import fonts from "./fonts";

const GlobalStyles = createGlobalStyle` 
	${reset}
	${fonts}

	body {
		font-family: "Noto Sans KR", sans-serif;
		font-size: ${({ theme }) => theme.fontSize.base};
		color: ${({ theme }) => theme.color.black};
		width: ${({ theme }) => theme.layout.heroImgWidth};
		margin: 0 auto;
	}
	
	div {
		box-sizing: border-box;
	}

	img {
		width: 100%;
		height: 100%;
	}
`;

export default GlobalStyles;
