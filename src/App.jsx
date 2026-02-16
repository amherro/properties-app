import Footer from './components/Footer';
import Header from './components/Header';
import Searchbox from './components/search/Searchbox';
// import SearchResults from './components/search/SearchResults';

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Home</h1>
        <Searchbox url="https://hp-api.onrender.com/api/spells" />
      </main>
      <Footer />
    </>
  );
}

export default App;
