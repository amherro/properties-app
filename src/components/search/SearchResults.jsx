import { useState } from "react"
import Searchbox from "./Searchbox"

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([])
  const searchPosts = (result) => {
    setSearchResults((searchResults) => [...searchResults, result])
  }
  return (
    <>
      <Searchbox searchPosts={searchPosts} searchResults={searchResults} />
      <div className="results-section">
        <h1>Results</h1>
        {searchResults.map((result, index) => (
            <h2 key={index}>{result.search}</h2>
          )
        )}
      </div>
    </>
  )
}

export default SearchResults