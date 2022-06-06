import React from "react";
import {ThemeProvider} from "styled-components";
import theme from "./helper/theme";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchBarClickedTabProvider from "./contexts/SearchBarClickedTabProvider";
import OptionProvider from "./contexts/OptionProvider";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <SearchBarClickedTabProvider>
                <OptionProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/search" element={<Search />}></Route>
                        </Routes>
                    </BrowserRouter>
                </OptionProvider>
            </SearchBarClickedTabProvider>
        </ThemeProvider>
    );
};

export default App;
