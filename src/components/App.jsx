import Footer from './Footer';
import Header from './Header';
import Home from './pages/Home';
import Searchbox from './search/Searchbox';
import Characters from './pages/Characters';
// import SearchResults from './components/search/SearchResults';

import { BrowserRouter, Route, Routes } from 'react-router';
import Spells from './pages/Spells';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="spells" element={<Spells />} />
          <Route path="characters" element={<Characters />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
