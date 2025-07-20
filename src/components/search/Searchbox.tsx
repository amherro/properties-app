const Searchbox = () => {
  return (
    <div className="searchbox">
        <form action="" className='search-form'>
            <label htmlFor="search" className="search-title">Find Properties</label>
            <input
                type="text"
                id="search"
                name="search"
                placeholder="Search..."
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    </div>
  )
}

export default Searchbox