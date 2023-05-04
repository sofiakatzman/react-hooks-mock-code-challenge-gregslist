import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
        setFilteredListings(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteListing = (listingId) => {
    const updatedListings = filteredListings.filter(
      (listing) => listing.id !== listingId
    );
    setFilteredListings(updatedListings);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    const filteredListings = listings.filter(
      (listing) =>
        listing.description.toLowerCase().includes(value.toLowerCase()) ||
        listing.location.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredListings(filteredListings);
  };

  return (
    <main>
      <div className="search">
        <input type="text" placeholder="Search..." onChange={handleSearch} />
      </div>
      <ul className="cards">
        {filteredListings.map((listing) => {
          return (
            <div key={listing.id}>
              <ListingCard
                listing={listing}
                onDelete={handleDeleteListing}
              />
            </div>
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;