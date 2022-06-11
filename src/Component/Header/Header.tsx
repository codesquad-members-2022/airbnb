import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ModalContext, CheckModalContext } from "Context";
import { HeaderBackgroundImg, StyledSearchBarWrapper, HeaderBackground } from "./Header.styled";
import GNB from "./GNB/GNB";
import SearchBar from "./SearchBar/SearchBar";
import Modal from "./Modal/Modal";
import coverSrc from "../../img/airbnb.png";

const Header = () => {
	const [bgImage, setBgImage] = useState(null);
	const [miniBarIsClicked, setMiniBarIsClicked] = useState(false);
	const [selectedSearchBar, setSelectedSearchBar] = useState("searchBar");

	const modal = useContext(ModalContext);
	const checkModal = useContext(CheckModalContext);

	const { pathname } = useLocation();
	const isLocationSearch = pathname === "/search";

	useEffect(() => {
		setBgImage(coverSrc);
	}, []);

	useEffect(() => {
		if (isLocationSearch) {
			setSelectedSearchBar("miniSearchBar");
		} else {
			setSelectedSearchBar("searchBar");
		}
	}, [pathname]);

	useEffect(() => {
		if (miniBarIsClicked) {
			setSelectedSearchBar("searchBar");
		}
	}, [miniBarIsClicked]);

	const handleModalMiniBar = () => {
		if (modal !== "empty") checkModal("empty");
		if (miniBarIsClicked) {
			setMiniBarIsClicked(false);
		}
	};

	return (
		<HeaderBackground onClick={handleModalMiniBar} isLocationSearch={isLocationSearch}>
			<HeaderBackgroundImg image={bgImage} isLocationSearch={isLocationSearch}>
				<GNB
					isLocationSearch={isLocationSearch}
					miniBarIsClicked={miniBarIsClicked}
					selectedSearchBar={selectedSearchBar}
					setMiniBarIsClicked={setMiniBarIsClicked}
				/>
				<StyledSearchBarWrapper
					isLocationSearch={isLocationSearch}
					miniBarIsClicked={miniBarIsClicked}
				>
					<SearchBar
						isLocationSearch={isLocationSearch}
						miniBarIsClicked={miniBarIsClicked}
						selectedSearchBar={selectedSearchBar}
						setSelectedSearchBar={setSelectedSearchBar}
					/>
				</StyledSearchBarWrapper>
				<Modal />
			</HeaderBackgroundImg>
		</HeaderBackground>
	);
};

export default Header;
