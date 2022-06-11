import styled, { css } from "styled-components";

interface IStyledSearchBarChild {
	name: string;
}

interface IStyledSearchBar {
	selectedSearchBar: string;
	miniBarIsClicked: boolean;
	isLocationSearch: boolean;
}

const SearchBarWrapper = styled.div`
	width: 100%;
	margin: 0 auto;
`;

const StyledSearchBar = styled.div<IStyledSearchBar>`
	${({ selectedSearchBar }) =>
		selectedSearchBar === "miniSearchBar"
			? css`
					visibility: hidden;
			  `
			: css`
					visibility: visible;
			  `}
	${({ theme: { width, height, colors } }) => css`
		display: flex;
		align-items: center;
		margin: 0 auto;
		margin-top: 16px;

		width: ${width.searchbar};
		height: ${height.searchbar};
		border: 1px solid ${colors.grey4};
		border-radius: 60px;
		background-color: ${colors.white};
	`}

	${({ miniBarIsClicked, isLocationSearch }) =>
		miniBarIsClicked &&
		isLocationSearch &&
		css`
			margin: 0 auto;
			margin-top: 130px;
			animation-duration: 1s;
			animation-name: slide-out;
			animation-fill-mode: forwards;
			transition-timing-function: ease-out;
		`}

		${({ miniBarIsClicked, isLocationSearch }) =>
		!miniBarIsClicked &&
		isLocationSearch &&
		css`
			margin: 0 auto;
			margin-top: 130px;
			animation-duration: 0.6s;
			animation-name: slide-in;
			animation-fill-mode: forwards;
			transition-timing-function: ease-out;
		`}

		@keyframes slide-out {
		from {
			margin-top: 23px;
			transform: scale(0.5);
		}
		to {
			margin-top: 90px;
			transform: scale(1);
		}
	}

	@keyframes slide-in {
		from {
			margin-top: 90px;
			transform: scale(1);
		}
		to {
			margin-top: 17px;
			transform: scale(0.5);
		}
	}

	z-index: 10;
`;

const StyledSearchBarChild = styled.div<IStyledSearchBarChild>`
	${({ theme: { fontSize, fontWeight, colors, width }, name }) => css`
		width: ${width[`${name}Child`]};
		cursor: pointer;

		> :first-child {
			font-size: ${fontSize.xSmall};
			font-weight: ${fontWeight.large};
			line-height: 17px;
		}

		> :last-child {
			margin-top: 5px;
			font-size: ${fontSize.medium};
			font-weight: ${fontWeight.small};
			line-height: 23px;
			color: ${colors.grey2};

			display: block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`}
`;

const SearchIcon = styled.div`
	${({ theme: { colors } }) => css`
		border: solid 1px ${colors.primary};
		border-radius: 30px;
		padding: 4px;
		padding-right: 15px;
		background-color: ${colors.primary};
		width: 90px;
		height: 40px;
		line-height: 30px;
		text-align: center;
		display: flex;
		justify-content: space-evenly;
		color: ${colors.white};
	`}
	position: relative;
	z-index: 10;
`;

export { StyledSearchBar, StyledSearchBarChild, SearchIcon, SearchBarWrapper };
