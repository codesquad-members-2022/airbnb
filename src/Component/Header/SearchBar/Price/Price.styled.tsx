import styled, { css } from "styled-components";

const StyledPriceHover = styled.div`
	${({ theme: { colors, width, height, shadow } }) => css`
		width: ${width.price};
		display: flex;
		border-left: solid 1px ${colors.grey5};

		:hover {
			height: ${height.searchbar};
			border: 1px solid ${colors.white};
			border-radius: 60px;
			box-shadow: ${shadow.main};
			+ :nth-child(4) {
				border-left: solid 1px transparent;
			}
		}
	`}
	z-index: 10;
`;

const StyledPrice = styled.div`
	${({ theme: { width } }) => css`
		display: flex;
		align-items: center;
		width: ${width.price};

		> :first-child {
			margin-left: 24px;
		}

		svg {
			margin-left: 20px;
		}
	`}
`;
export { StyledPrice, StyledPriceHover };
