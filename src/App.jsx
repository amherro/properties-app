import Footer from './components/Footer';
import Header from './components/Header';
import Searchbox from './components/search/Searchbox';
// import SearchResults from './components/search/SearchResults';

function App() {
  return (
    <>
      <Header />
      <main>
        <Searchbox />
      </main>
      <Footer />
    </>
  );
}

export default App;
