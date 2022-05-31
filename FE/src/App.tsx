import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/layout';
import Home from '@/pages/Home';
import SearchResult from '@/pages/SearchResult';
import NotFound from '@/pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search-result" element={<SearchResult />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
