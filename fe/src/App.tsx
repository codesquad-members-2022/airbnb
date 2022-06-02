import CalendarProvider from "Context/CalendarProvider";
import HeadCountProvider from "Context/HeadCountProvider";
import GlobalStyle from "Helpers/globalStyle";
import { composeProvider } from "Helpers/utils";
import Home from "Pages/Home/Home";
import NotFound from "Pages/NotFound/NotFound";
import SearchResult from "Pages/SearchResult/SearchResult";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const providerList = [CalendarProvider, HeadCountProvider];

const Provider = composeProvider(providerList);

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchResult" element={<SearchResult />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
