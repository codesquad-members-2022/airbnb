import { BrowserRouter, Route, Routes } from "react-router-dom";

import CalendarProvider from "@contexts/CalendarProvider";
import InputGuestProvider from "@contexts/InputGuestProvider";
import PriceProvider from "@contexts/PriceProvider";
import Main from "@pages/Main";
import NotFound from "@pages/NotFound";
import SearchResult from "@pages/SearchResult";

function App() {
  return (
    <CalendarProvider>
      <PriceProvider>
        <InputGuestProvider>
          <BrowserRouter>
            <Routes basename={process.env.PUBLIC_URL}>
              <Route index element={<Main />} />
              <Route path="/searchResult" element={<SearchResult />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </InputGuestProvider>
      </PriceProvider>
    </CalendarProvider>
  );
}

export default App;
