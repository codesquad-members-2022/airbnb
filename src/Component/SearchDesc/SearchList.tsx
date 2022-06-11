import { useEffect, useState } from "react";

import imgApi from "Api/imgApi";
import { getPriceType } from "util/util";
import type { Thotel } from "./SearchLists";
import {
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
} from "./SearchList.styled";

type TSearchListProps = {
	hotel: Thotel;
	dateDiff: number;
};

type TShowedValueParams = {
	value: number | boolean;
	mention: string;
};

const DAY_UNIT = "\n/\n박";
const TOTAL_MONEY = "총액";

const getShowedValue = (array: TShowedValueParams[]) => {
	return array
		.map(({ value, mention }) => (value ? mention : ""))
		.filter((info) => info.length)
		.join("∙");
};

const SearchList = ({
	hotel: {
		name,
		price,
		img,
		rooms: { peopleMax, bedroom, bed, bathroom },
		options: { kitchen, wifi, airConditioner, hairDryer },
	},
	dateDiff,
}: TSearchListProps) => {
	const [image, setImage] = useState();
	const roomsArray = [
		{ value: peopleMax, mention: `최대 인원 ${peopleMax}명` },
		{ value: bedroom, mention: `침실 ${bedroom}개` },
		{ value: bed, mention: `침대 ${bed}개` },
		{ value: bathroom, mention: `욕실 ${bathroom}개` },
	];
	const optionsArray = [
		{ value: kitchen, mention: "주방" },
		{ value: wifi, mention: "무선 인터넷" },
		{ value: airConditioner, mention: "에어컨" },
		{ value: hairDryer, mention: "헤어드라이어" },
	];

	const showedRooms = getShowedValue(roomsArray);
	const showedOptions = getShowedValue(optionsArray);
	const showedPrice = getPriceType(price, true);
	const showedPriceSum = getPriceType(price * dateDiff, true);

	const fetchImg = async () => {
		const imageData = await imgApi.getImg(img);
		setImage(imageData);
	};

	useEffect(() => {
		fetchImg();
	}, []);

	return (
		<StyledSearchList>
			<StyleImageWrapper>
				<StyledImage src={image} />
			</StyleImageWrapper>
			<StyledSearchListInfo>
				<StyledHotelInfo>
					<StyledHotelName>{name}</StyledHotelName>
					<StyledHotelDetails>{showedRooms}</StyledHotelDetails>
					<StyledHotelDetails>{showedOptions}</StyledHotelDetails>
				</StyledHotelInfo>
				<StyledHotelPriceInfo>
					<StyledHotelPrice>
						<div>{showedPrice}</div>
						<div>{DAY_UNIT}</div>
					</StyledHotelPrice>
					<StyledHotelPriceSum>{TOTAL_MONEY + showedPriceSum}</StyledHotelPriceSum>
				</StyledHotelPriceInfo>
			</StyledSearchListInfo>
		</StyledSearchList>
	);
};

export default SearchList;
