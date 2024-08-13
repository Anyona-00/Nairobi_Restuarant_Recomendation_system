import DisplayCard from "../Components/DisplayCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getRestaurants() {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3000/restaurants");
        setRestaurantData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getRestaurants();
  }, []);

  return (
    <div className="flex flex-wrap justify-center w-full scale-75 origin-top">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DisplayCard restaurants={restaurantData} />
      )}
    </div>
  );
};

export default Body;
