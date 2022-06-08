import styled, { css } from "styled-components";

interface IHeaderBackgroundImgn {
	image: any;
	isLocationSearch: boolean;
}

interface IStyledSearchBarWrapper {
	miniBarIsClicked: boolean;
	isLocationSearch: boolean;
}

const HeaderBackgroundImg = styled.div<IHeaderBackgroundImgn>`
	${({ theme: { height, width }, image, isLocationSearch }) =>
		isLocationSearch === false
			? css`
					background: url(${image}) no-repeat center;
					background-size: cover;
					min-width: ${width.header};
					height: ${height.header1};
			  `
			: css`
					min-width: ${width.header};
					height: ${height.header1};
			  `}
`;

const StyledSearchBarWrapper = styled.div<IStyledSearchBarWrapper>`
	${({ miniBarIsClicked }) =>
		miniBarIsClicked
			? css`
					animation-duration: 1s;
					animation-name: open;
					animation-fill-mode: forwards;
					transition-timing-function: ease-out;
			  `
			: css`
					height: 100px;
					animation-duration: 1s;
					animation-name: close;
					animation-fill-mode: forwards;
					transition-timing-function: ease-out;
			  `}

	${({ isLocationSearch }) =>
		isLocationSearch &&
		css`
			width: 100%;
			box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.25);
			position: absolute;
			top: 0;
		`}
	

	@keyframes open {
		from {
			height: 100px;
		}
		to {
			height: 220px;
		}
	}

	@keyframes close {
		from {
			height: 220px;
		}
		to {
			height: 100px;
		}
	}
`;

export { HeaderBackgroundImg, StyledSearchBarWrapper };
