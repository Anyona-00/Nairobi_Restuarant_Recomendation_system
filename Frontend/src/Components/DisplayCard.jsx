import { useState } from "react";
import { brokenImg, instagram, star, twitter } from "../assets";
import { useEffect } from "react";
import axios from "axios";

const DisplayCard = () => {
  const [restuarantData, setrestuarantData] = useState([]);
  useEffect(() => {
    async function GetRestuarant() {
      const response = await axios.get(
        "http://localhost:3000/restaurants/recommended"
      );
      setrestuarantData(response.data);

      console.log(response);
    }
    GetRestuarant();
  });

  return (
    <div className="flex flex-row mx-auto  w-4/5">
      {restuarantData.map((restuarant) => {
        return (
          <div className="card bg-base-100 w-64 m-4 shadow-md">
            <figure>
              <img
                src={brokenImg}
                alt="img"
                className="h-32 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-bold">
                {restuarant.name}
                <div className="badge badge-secondary">{restuarant.rating}</div>
              </h2>
              <p className="text-sm truncate-2">{restuarant.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline ">
                  {restuarant.location}
                </div>
                <div className="badge badge-outline">Visit</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayCard;
