import React from "react";
import Header from "../components/header/Header";
import SearchBar from "../components/header/searchBar/SearchBar";
import {size} from "../constants";

const Home = () => {
    return (
        <>
            <Header />
            <SearchBar searchBarState={size.MAXI} />;
        </>
    );
};

export default Home;
