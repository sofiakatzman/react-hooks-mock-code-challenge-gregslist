import React, { useState } from "react";

function ListingCard({listing}) {
  const [favorite, setFavorite] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

  const handleFavorite = () => {
    setFavorite(!favorite) 
   }

     const handleDelete= () => {
    console.log("http://localhost:6001/listings/" + listing.id)
    fetch("http://localhost:6001/listings/" + listing.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }, 
    }
    )}

  return (
    <li className="card" key = {listing.id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite
          }>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={()=>handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
