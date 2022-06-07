import { BrowserRouter, Route, Routes } from "react-router-dom";

import CalendarProvider from "@contexts/CalendarProvider";
import Main from "@pages/Main";
import NotFound from "@pages/NotFound";
import SearchResult from "@pages/SearchResult";

function App() {
  return (
    <CalendarProvider>
      <BrowserRouter>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route index element={<Main />} />
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CalendarProvider>
  );
}

export default App;
