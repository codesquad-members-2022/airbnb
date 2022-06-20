import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GNB from '@components/GNB';
import Main from '@pages/Main';
import NotFound from '@pages/NotFound';
import SearchResult from '@pages/SearchResult';

function App() {
  return (
    <BrowserRouter>
      <GNB />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/result" element={<SearchResult />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
