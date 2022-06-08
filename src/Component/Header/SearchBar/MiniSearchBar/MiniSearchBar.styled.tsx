import styled, { css } from "styled-components";

interface IStyledMiniSearchBarChild {
	name: string;
}

interface IStyledMiniSearchBar {
	miniSearchBarIsHidden: boolean;
}

const StyledMiniSearchBar = styled.div<IStyledMiniSearchBar>`
	${({ miniSearchBarIsHidden }) =>
		miniSearchBarIsHidden
			? css`
					visibility: hidden;
			  `
			: css`
					visivility: visible;
			  `}

	width: 410px;
	height: 48px;
	margin: 0 auto;
	position: absolute;
	top: 30px;
	left: 36%;
	text-align: center;
	background: #ffffff;
	border: 1px solid #bdbdbd;
	border-radius: 30px;
	display: flex;
`;

const SearchIcon = styled.div`
	${({ theme: { colors } }) => css`
		border: solid 1px ${colors.primary};
		border-radius: 30px;
		background-color: ${colors.primary};
		width: 32px;
		height: 32px;
		padding: 4px;
	`}
	margin: 7px 8px 8px 0;
`;

const StyledMiniSearchBarChild = styled.div<IStyledMiniSearchBarChild>`
	${({ theme: { fontSize, fontWeight, colors, width }, name }) => css`
		width: ${width[`${name}Child`]};
		cursor: pointer;

		color: ${colors.black};
		font-size: ${fontSize.xSmall};
		line-height: 20px;
		font-weight: ${fontWeight.small};
	`}
`;

export { StyledMiniSearchBar, SearchIcon, StyledMiniSearchBarChild };
