import axios from "axios";
import { useState, useEffect } from "react";
import DisplayCard from "../Components/DisplayCard";

const Head = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-virgil">Top Restaurants</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>

          {/*<DisplayCard restaurants={displayedRestuarants} />*/}
          {/*<div className="dropdown dropdown-end">
            ... (dropdown code) ...
          </div>*/}
        </div>
      </div>
    </div>
  );
};

{
  /*
 const [searchTerm, setSearchTerm] = useState("");
  const [displayedRestuarants, setDisplayedRestuarants] = useState([]);

  async function GetRestuarant() {
    try {
      const response = await axios.get(
        `http://localhost:3000/restaurants/search?term=${searchTerm}`
      );

      setDisplayedRestuarants(response.data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  useEffect(() => {
    GetRestuarant();
  }, [searchTerm]);
  
  value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
  
  */
}

export default Head;
