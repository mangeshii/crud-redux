const SearchBar = (props) => {

    const handleSearch=(e)=>{
        e.preventDefault()
        props.setSearchName(e.target.value)
    }

    return (
        <div className="search-cont " >
            <div className="search-input " >
                <input className="input-area " type="text" placeholder="Search user" onChange={handleSearch} />
            </div>
        </div>
    )
}

export default SearchBar