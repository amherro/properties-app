import { ToastContainer, toast } from 'react-toastify';

// const Searchbox = ({searchPosts}) => {
const Searchbox = ({}) => {
  const searchPosts = async () => {
    // const url = process.env.API_URL
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    try {
      const res = await fetch(url);
      if (res.error) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      // setSearchResults(data => [...searchResults, data.body])
      console.log(data);
      return data.body;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  const submitSearch = (formData) => {
    const formSearch = {
      // search: formData.get("search")
      search: searchPosts(),
    };
    if (formSearch.search === '') {
      return toast('Please type something...', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        className: 'error-toast',
      });
    }
    return searchPosts(formSearch);
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
    </div>
  );
};

export default Searchbox;
