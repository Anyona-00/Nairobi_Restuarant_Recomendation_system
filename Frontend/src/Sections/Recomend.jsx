import DisplayCard from "../Components/DisplayCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Recomend = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getRestaurants() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "http://localhost:3000/restaurants/recommended"
        );
        setRestaurantData(response.data);
        //console.log(response);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getRestaurants();
  }, []);
  return (
    <div className="flex flex-row mx-auto  w-4/5">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DisplayCard restaurants={restaurantData} />
      )}
    </div>
  );
};

export default Recomend;
