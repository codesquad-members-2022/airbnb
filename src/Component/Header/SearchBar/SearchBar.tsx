import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ModalContext, CheckModalContext } from "Context";
import { SearchButton } from "util/Icons";
import Schedule from "./Schedule/Schedule";
import { StyledSearchBar, SearchIcon, SearchBarWrapper } from "./SearchBar.styled";
import Price from "./Price/Price";
import Guest from "./Guest/Guest";

interface ISearchBarProps {
	miniBarIsClicked: boolean;
	isLocationSearch: boolean;
	selectedSearchBar: string;
	setSelectedSearchBar: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({
	miniBarIsClicked,
	isLocationSearch,
	selectedSearchBar,
	setSelectedSearchBar,
}: ISearchBarProps) => {
	const modal = useContext(ModalContext);
	const checkModal = useContext(CheckModalContext);

	const handleModalPopup = () => {
		if (modal !== "empty") checkModal("empty");
	};

	const handleOnAnimationEnd = () => {
		if (!miniBarIsClicked) {
			setSelectedSearchBar("miniSearchBar");
		}
	};

	return (
		<SearchBarWrapper>
			<StyledSearchBar
				isLocationSearch={isLocationSearch}
				selectedSearchBar={selectedSearchBar}
				miniBarIsClicked={miniBarIsClicked}
				onAnimationEnd={handleOnAnimationEnd}
			>
				<Schedule />
				<Price />
				<Guest />
				<Link to="search">
					<SearchIcon onClick={handleModalPopup}>
						<SearchButton colorset="white" size={30} />
						<div>검색</div>
					</SearchIcon>
				</Link>
			</StyledSearchBar>
		</SearchBarWrapper>
	);
};

export default SearchBar;
