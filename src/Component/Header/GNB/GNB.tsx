import React from "react";
import { Link } from "react-router-dom";
import { AccountButton, MenuButton } from "util/Icons";
import { StyledGNB, StyledNavList, GNBImg, GNBAccountMenu, StyledGNBNav } from "./GNB.styled";
import MiniSearchBar from "../SearchBar/MiniSearchBar/MiniSearchBar";

type listItem = {
	id: number;
	name: string;
};

type GNBNavPropsType = {
	listItems: listItem[];
};

const navListItems: listItem[] = [
	{ id: 1, name: "숙소" },
	{ id: 2, name: "체험" },
	{ id: 3, name: "온라인 체험" },
];

const GNBNavLists = ({ listItems }: GNBNavPropsType) => {
	const navList = listItems.map((item: listItem) => <li key={item.id}>{item.name}</li>);
	return <StyledNavList>{navList}</StyledNavList>;
};

interface IGNBProps {
	isLocationSearch: boolean;
	miniBarIsClicked: boolean;
	selectedSearchBar: string;
	setMiniBarIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const GNB = ({
	isLocationSearch,
	miniBarIsClicked,
	selectedSearchBar,
	setMiniBarIsClicked,
}: IGNBProps) => {
	const GNBNav = (
		<StyledGNBNav isLocationSearch={isLocationSearch} miniBarIsClicked={miniBarIsClicked}>
			<GNBNavLists listItems={navListItems} />
		</StyledGNBNav>
	);
	const MiniBar = (
		<MiniSearchBar
			selectedSearchBar={selectedSearchBar}
			miniBarIsClicked={miniBarIsClicked}
			setMiniBarIsClicked={setMiniBarIsClicked}
		/>
	);

	const GNBNavOrMiniBar = isLocationSearch && !miniBarIsClicked ? MiniBar : GNBNav;

	return (
		<StyledGNB>
			<Link to="/">
				<GNBImg />
			</Link>
			{GNBNavOrMiniBar}
			<GNBAccountMenu>
				<MenuButton colorset="grey2" size={16} />
				<AccountButton colorset="grey2" size={16} />
			</GNBAccountMenu>
		</StyledGNB>
	);
};

export default GNB;
