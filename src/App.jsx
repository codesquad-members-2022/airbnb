import React from "react";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import Header from "./components/header/Header";
import SearchBar from "./components/header/searchBar/SearchBar";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <SearchBar />
        </ThemeProvider>
    );
};

export default App;
