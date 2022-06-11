import styled, { css } from "styled-components";

const StyledSearchList = styled.div`
	${({ theme: { height, colors } }) => css`
		height: ${height.searchList};
		display: flex;
		justify-content: space-between;
		border-bottom: ;
		padding: 20px 0;
		border-bottom: solid 1px ${colors.grey4};
	`}
`;

const StyleImageWrapper = styled.div`
	${({ theme: { width } }) => css`
		width: ${width.searchListChild};
		border-radius: 10px;
		overflow: hidden;
	`}
`;

const StyledImage = styled.img`
	${({ theme: { width } }) => css`
		alt: "image";
		width: ${width.searchListChild};
	`}
`;

const StyledSearchListInfo = styled.div`
	${({ theme: { width } }) => css`
		width: ${width.searchListChild};
		position: relative;
	`}
`;

const StyledHotelInfo = styled.div`
	${({ theme: { width } }) => css`
		width: ${width.hotelInfo};
	`}
`;

const StyledHotelName = styled.div`
	${({ theme: { fontSize, fontWeight, colors } }) => css`
		font-size: ${fontSize.small};
		font-weight: ${fontWeight.small};
		color: ${colors.black};
		margin-bottom: 8px;
	`}
`;

const StyledHotelDetails = styled.div`
	${({ theme: { fontSize, fontWeight, colors } }) => css`
		font-size: ${fontSize.xSmall};
		font-weight: ${fontWeight.small};
		color: ${colors.grey2};
		line-height: 18px;
	`}
`;

const StyledHotelPriceInfo = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	text-align: right;
`;

const StyledHotelPrice = styled.div`
	display: flex;
	margin-bottom: 5px;
	${({ theme: { fontSize, fontWeight, colors } }) => css`
		color: ${colors.black};
		> :nth-child(1) {
			font-size: ${fontSize.small};
			font-weight: ${fontWeight.large};
		}

		> :nth-child(2) {
			font-size: ${fontSize.small};
			font-weight: ${fontWeight.small};
		}
	`}
`;

const StyledHotelPriceSum = styled.div`
	${({ theme: { fontSize, fontWeight, colors } }) => css`
		color: ${colors.grey2};
		font-size: ${fontSize.xSmall};
		font-weight: ${fontWeight.small};
		text-decoration: underline;
	`}
`;

export {
	StyledSearchList,
	StyledSearchListInfo,
	StyleImageWrapper,
	StyledImage,
	StyledHotelInfo,
	StyledHotelName,
	StyledHotelDetails,
	StyledHotelPriceInfo,
	StyledHotelPrice,
	StyledHotelPriceSum,
};
