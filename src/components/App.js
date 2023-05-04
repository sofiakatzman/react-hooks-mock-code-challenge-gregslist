import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setLisitings] = useState([])
  const [filterValue, setFilterValue] = useState("")
    
  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => setLisitings(data))
  }, [])

  const handleSearch = (filterValue) => {
    const filteredListings = listings.filter(
        (listing) =>
          listing.description.toLowerCase().includes(filterValue.toLowerCase()) ||
          listing.location.toLowerCase().includes(filterValue.toLowerCase())
      );
      setLisitings(filteredListings);
      console.log("searched...")
  }

  return (
    <div className="app">
      <Header listings={listings} handleSearch={handleSearch} />
      <ListingsContainer listings={listings}/>
    </div>
  );
}

export default App;