import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router';
import ResultsContainer from './ResultsContainer';

const Searchbox = ({ url, pageName }) => {
  const [searchResults, setSearchResults] = useState();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);


  const searchPosts = async (query) => {
    setLoading(true);
    try {
      // Fetch data
      const res = await fetch(`${url}`);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();

      // Set first letter to be capitalized
      let str = query
      let capital = str[0]?.toUpperCase() + str.slice(1)

      // Filter based on the search
      const filteredData = data.filter((searchItem) => {
        return searchItem.name.startsWith(capital);
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
    const currentQuery = query
    await searchPosts(currentQuery);
    setQuery('');
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
        <ResultsContainer results={searchResults} loading={loading} />
      )}
    </div>
  );
};

export default Searchbox;
