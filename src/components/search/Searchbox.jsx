import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ResultsContainer from './ResultsContainer';

const Searchbox = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchPosts = async () => {
    // const url = process.env.API_URL
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    setLoading(!loading);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      setSearchResults(() => [...searchResults, data.body]);
      setLoading(false);
      return searchResults;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };
  console.log(searchResults);

  const submitSearch = async () => {
    const formSearch = {
      // search: formData.get("search")
      search: await searchPosts(),
    };
    if (formSearch.search === '') {
      console.log(formSearch.search);
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
    // console.log(formSearch.search);
    return formSearch.search;
  };

  return (
    <div className="searchbox">
      <form action={submitSearch} className="search-form">
        <label htmlFor="search" className="search-title">
          Find Properties
        </label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          className="search-input"
          maxLength={50}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <ToastContainer />
      {searchResults && (
        <ResultsContainer searchResults={searchResults} loading={loading} />
      )}
    </div>
  );
};

export default Searchbox;
