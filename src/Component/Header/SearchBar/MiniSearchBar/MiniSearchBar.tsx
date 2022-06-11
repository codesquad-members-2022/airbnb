import React from "react";
import { SearchButton } from "util/Icons";
import { StyledMiniSearchBar, SearchIcon } from "./MiniSearchBar.styled";
import MiniSchedule from "./MiniSchedule/MiniSchedule";
import MiniPrice from "./MiniPrice/MiniPrice";
import MiniGuest from "./MiniGuest/MiniGuest";

interface IMiniSearchBarProps {
	selectedSearchBar: string;
	miniBarIsClicked: boolean;
	setMiniBarIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const MiniSearchBar = ({
	selectedSearchBar,
	miniBarIsClicked,
	setMiniBarIsClicked,
}: IMiniSearchBarProps) => {
	const handleMiniBarIsClicked = () => {
		setMiniBarIsClicked(!miniBarIsClicked);
	};

	return (
		<StyledMiniSearchBar selectedSearchBar={selectedSearchBar} onClick={handleMiniBarIsClicked}>
			<MiniSchedule />
			<MiniPrice />
			<MiniGuest />
			<SearchIcon>
				<SearchButton colorset="white" size={23} />
			</SearchIcon>
		</StyledMiniSearchBar>
	);
};

export default MiniSearchBar;
