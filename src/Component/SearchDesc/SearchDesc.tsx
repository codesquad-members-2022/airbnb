import { useEffect, useState, useMemo } from "react";

import hotelsApi from "Api/hotelsApi";
import SearchLists from "./SearchLists";
import SearchMap from "./SearchMap";
import { SearchDescWrapper } from "./SearchDesc.styled";

declare global {
	interface Window {
		kakao: any;
	}
}

type Thotel = {
	id: number;
	name: string;
	price: number;
	img: string;
	unavailableDate: [];
	rooms: {
		peopleMax: number;
		bedroom: number;
		bed: number;
		bathroom: number;
	};
	options: {
		kitchen: boolean;
		wifi: boolean;
		airConditioner: boolean;
		hairDryer: boolean;
	};
	location: number[];
};

const SearchDesc = () => {
	const [hotels, setHotels] = useState<Thotel[]>([]);
	const [filteredHotels, setFilteredHotels] = useState<Thotel[]>([]);
	const searchListsProps = { hotels, filteredHotels, setFilteredHotels };
	const filteredLocations = useMemo(() => {
		return filteredHotels.map(({ location }) => location);
	}, [filteredHotels]);

	const fetchHotels = async () => {
		const hotelsData = await hotelsApi.getHotels();
		setHotels(hotelsData);
	};

	useEffect(() => {
		fetchHotels();
	}, []);

	return (
		<SearchDescWrapper>
			<SearchLists props={searchListsProps} />
			<SearchMap locations={filteredLocations} />
		</SearchDescWrapper>
	);
};

export default SearchDesc;
export type { Thotel };
