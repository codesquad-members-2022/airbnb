import styled, { css } from "styled-components";
import logoSrc from "img/logo.png";

interface IStyledGNBNav {
	isLocationSearch: boolean;
	miniBarIsClicked: boolean;
}

const StyledGNB = styled.div`
	${({ theme: { width, height } }) => css`
		margin: 0 auto;
		width: ${width.header};
		height: ${height.GNB};
	`}
	align-items: center;
	justify-content: space-between;
	display: flex;
	padding: 10px;
	position: relative;
	z-index: 10;
`;

const StyledNavList = styled.ul`
	${({ theme: { fontSize, fontWeight } }) =>
		css`
			display: flex;
			> li {
				cursor: pointer;
				font-size: ${fontSize.medium};
				font-weight: ${fontWeight.small};
				padding-bottom: 2px;
				border-bottom: 1px solid transparent;

				:not(:last-child) {
					margin-right: 24px;
				}
				:hover {
					padding-bottom: 2px;
					border-bottom: 1px solid;
				}
			}
		`}
`;

const StyledGNBNav = styled.div<IStyledGNBNav>`
	${({ isLocationSearch, miniBarIsClicked }) =>
		isLocationSearch && !miniBarIsClicked
			? css`
					display: none;
			  `
			: css`
					visivility: visible;
			  `}
`;

const GNBImg = styled.img.attrs({
	src: `${logoSrc}`,
})`
	${({ theme: { width } }) => css`
		alt: "logo";
		width: ${width.GNBImg};
		padding: 10px;
	`}
`;

const GNBAccountMenu = styled.div`
	${({ theme: { colors } }) => css`
		border: solid 1px ${colors.grey4};
		border-radius: 30px;
		padding: 4px;
		background-color: ${colors.white};
		width: 76px;
		height: 40px;
		line-height: 35px;
		text-align: center;
		> :first-child {
			margin-right: 15px;
		}
	`}
`;

export { StyledGNB, GNBImg, StyledNavList, GNBAccountMenu, StyledGNBNav };
