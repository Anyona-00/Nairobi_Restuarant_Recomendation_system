import axios from "axios";
import { useState, useEffect } from "react";
import DisplayCard from "../Components/DisplayCard";

const Head = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedRestuarants, setDisplayedRestuarants] = useState([]);

  useEffect(() => {
    async function GetRestuarant() {
      const response = await axios.get(
        `http://localhost:3000/restaurants/search?term=${searchTerm}`
      );

      setDisplayedRestuarants(response.data);
    }
    GetRestuarant();
  }, [searchTerm]);

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
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>

          {/*<DisplayCard
            endpoint={
              "http://localhost:3000/restaurants/search?term=${searchTerm}"
            }
          />*/}

          {/* <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Head;
