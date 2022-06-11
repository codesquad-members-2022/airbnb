import { useRef, useEffect, RefObject } from "react";

import { StyledMap } from "./SearchDesc.styled";

type Tlocations = number[][];

const KakaoMapScript = (mapRef: RefObject<HTMLDivElement>, locations: Tlocations) => {
	const { kakao } = window;
	const container = mapRef.current;
	const [centerLatitude, centerLongitude] = locations[0];
	const options = {
		center: new kakao.maps.LatLng(centerLatitude, centerLongitude),
		level: 8,
	};
	const map = new kakao.maps.Map(container, options);

	locations.forEach(([latitude, longitude]) => {
		const markerPosition = new kakao.maps.LatLng(latitude, longitude);
		const marker = new kakao.maps.Marker({
			position: markerPosition,
		});
		marker.setMap(map);
	});
};

const SearchMap = ({ locations }: { locations: Tlocations }) => {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (locations.length) KakaoMapScript(mapRef, locations);
	}, [locations]);

	return <StyledMap ref={mapRef} />;
};

export default SearchMap;
