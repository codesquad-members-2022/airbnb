import styled, { css } from "styled-components";

const StyledCheckin = styled.div`
	${({ theme: { colors, height, shadow } }) => css`
		width: 180px;
		display: flex;
		align-items: center;
		padding-left: 35px;
		svg {
			margin-right: 10px;
		}

		:hover {
			height: ${height.searchbar};
			border: 1px solid ${colors.white};
			border-radius: 60px;
			box-shadow: ${shadow.main};
		}
	`}
	z-index: 10;
`;

const StyledCheckout = styled.div`
	${({ theme: { colors, height, shadow } }) => css`
		width: 180px;
		display: flex;
		align-items: center;
		padding-left: 30px;

		:hover {
			height: ${height.searchbar};
			border: 1px solid ${colors.white};
			border-radius: 60px;
			box-shadow: ${shadow.main};
			+ :nth-child(3) {
				border-left: solid 1px transparent;
			}
		}
	`}
	z-index: 10;
`;

export { StyledCheckout, StyledCheckin };
