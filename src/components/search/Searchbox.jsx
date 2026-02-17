import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ResultsContainer from './ResultsContainer';

const Searchbox = ({ url, pageName }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const searchPosts = async () => {
    // const url = process.env.API_URL
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      const filteredData = data.filter((spell) => {
        return spell.name.toLowerCase().includes(query.toLowerCase());
      });
      setSearchResults(filteredData);
      return filteredData;
    } catch (error) {
      toast('Something went wrong...', { className: 'error-toast' });
      throw new Error(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const submitSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      return toast('Please type something...', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        className: 'error-toast',
      });
    }
    setQuery('');
    await searchPosts();
  };

  return (
    <div className="searchbox">
      <form onSubmit={submitSearch} className="search-form">
        <label htmlFor="search" className="search-title">
          {`Find ${pageName}`}
        </label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          className="search-input"
          value={query}
          maxLength={50}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <ToastContainer />
      {searchResults && (
        <ResultsContainer
          searchResults={searchResults}
          loading={loading}
          pageName={pageName}
        />
      )}
    </div>
  );
};

export default Searchbox;
