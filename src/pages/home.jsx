import React from "react";
import Header from "../components/header/Header";
import SearchBar from "../components/header/searchBar/SearchBar";

const Home = () => {
    return (
        <>
            <Header />
            <SearchBar size="big" />;
        </>
    );
};

export default Home;
