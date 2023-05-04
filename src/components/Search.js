import React, { useState } from "react";

function Search({ handleSearch }) {
  const [search, setSearch] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(search)
    console.log(search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => {
          handleSearch(e.target.value)
          setSearch(e.target.value)}}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;