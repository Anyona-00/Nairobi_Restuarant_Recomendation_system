/*import axios from "axios";
import { useState, useEffect } from "react";
import Form from "../Components/Form";

const AddRestaurant = () => {
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    image_Url: "",
    name: "",
    rating: "",
    location: "",
    website: "",
    description: "",
  });

  useEffect(() => {
    async function postRestaurant() {
      setError("");
      if (formData.rating <= 0 || formData.rating > 5) {
        setError("Invalid Rating");
      }

      const request = await axios.post("http://localhost:3000/restaurants", {
        image_Url: formData.image_Url,
        name: formData.name,
        rating: formData.rating,
        location: formData.location,
        website: formData.website,
        description: formData.description,
      });
    }

    postRestaurant();
    setFormData({
      image_Url: "",
      name: "",
      rating: "",
      location: "",
      website: "",
      description: "",
    });
  }, []);

  return (
    <div>
      <Form />
      <p>{error}</p>
    </div>
  );
};

export default AddRestaurant;*/
