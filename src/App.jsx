import React from "react";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ClickedPartProvider from "./ClickedPartProvider";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <ClickedPartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/search" element={<Search />}></Route>
                    </Routes>
                </BrowserRouter>
            </ClickedPartProvider>
        </ThemeProvider>
    );
};

export default App;
