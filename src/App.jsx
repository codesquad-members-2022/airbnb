import React from "react";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/search" element={<Search />}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
