import { ToastContainer, toast } from "react-toastify"

const Searchbox = ({searchPosts}) => {
    const submitSearch = (formData) => {

        const formSearch = {
            search: formData.get("search")
        }
        if(formSearch.search === '') {
            return(
                toast("Please type something...", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    className: "error-toast"
                })
            )
        }
        return(
            searchPosts(formSearch)
        )
    }
    
  return (
    <div className="searchbox">
        <form action={submitSearch} className='search-form'>
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
        <ToastContainer />
    </div>
  )
}

export default Searchbox