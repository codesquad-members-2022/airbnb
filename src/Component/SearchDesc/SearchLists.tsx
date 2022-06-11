import { useContext, useEffect, useMemo, Dispatch, SetStateAction } from "react";
import { ScheduleContext, GuestsContext, PriceContext } from "Context";
import { MIN_PRICE, MAX_PRICE, getPriceType, getDateDiff } from "util/util";
import SearchList from "./SearchList";
import { StyledSearchLists, StyledResultSummary, StyledListMention } from "./SearchDesc.styled";
import type { Thotel } from "./SearchDesc";

type TSearchListsProps = {
	props: {
		hotels: Thotel[];
		filteredHotels: Thotel[];
		setFilteredHotels: Dispatch<SetStateAction<Thotel[]>>;
	};
};

const LIST_MENTION = "지도에서 선택한 지역의 숙소";
const HOTELS_PER_PAGE = 10;

const SearchLists = ({
	props: { hotels, filteredHotels, setFilteredHotels },
}: TSearchListsProps) => {
	const { checkin, checkout } = useContext(ScheduleContext);
	const { adult, child, baby } = useContext(GuestsContext);
	const { min, max } = useContext(PriceContext);

	const isPriceDefault = min === MIN_PRICE && max === MAX_PRICE;
	const dateDiff = getDateDiff(checkin, checkout);
	const showedSchedule =
		checkin.year && checkout.year
			? ` ∙ ${checkin.month}월 ${checkin.date}일 - ${checkout.month}월 ${checkout.date}일`
			: "";
	const showedPrice = !isPriceDefault
		? `∙ ${getPriceType(min, true)} ~ ${getPriceType(max, true)}`
		: "";
	const showedGuests = adult + child !== 0 ? ` ∙ 게스트 ${adult + child}명 ` : "";
	const showedBaby = baby ? ` ∙ 유아 ${baby}명 ` : "";
	const showedHotelsNum = useMemo(() => `${filteredHotels.length}개의 숙소`, [filteredHotels]);
	const showedInfo = showedHotelsNum + showedSchedule + showedPrice + showedGuests + showedBaby;

	const resetFilteredHotels = (hotelsData: Thotel[]) => {
		if (isPriceDefault) {
			const filteredHotelData = hotelsData.slice(0, HOTELS_PER_PAGE);
			setFilteredHotels(filteredHotelData);
		} else {
			const filteredHotelsData = hotelsData
				.filter(({ price }) => price > min && price <= max)
				.slice(0, HOTELS_PER_PAGE);
			setFilteredHotels(filteredHotelsData);
		}
	};

	const filteredLists = filteredHotels.map((hotel) => {
		return <SearchList hotel={hotel} dateDiff={dateDiff} />;
	});

	useEffect(() => {
		resetFilteredHotels(hotels);
	}, [hotels]);

	useEffect(() => {
		resetFilteredHotels(hotels);
	}, [min, max, checkin, checkout, adult, child, baby]);

	return (
		<StyledSearchLists>
			<StyledResultSummary>{showedInfo}</StyledResultSummary>
			<StyledListMention>{LIST_MENTION}</StyledListMention>
			{filteredLists}
		</StyledSearchLists>
	);
};

export default SearchLists;
export type { Thotel };
