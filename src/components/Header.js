import React from "react";
import Search from "./Search";

function Header({listings, handleSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} handleSearch={handleSearch}/>
    </header>
  );
}

export default Header;
