import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    image_Url: "",
    name: "",
    rating: "",
    location: "",
    website: "",
    description: "",
  });

  const postRestaurant = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (formData.image_Url.trim() === "") {
      setError("Image URL is required");
      setLoading(false);
      return;
    }

    if (formData.name.trim() === "") {
      setError("Restaurant name is required");
      setLoading(false);
      return;
    }

    if (formData.rating <= 0 || formData.rating > 5) {
      setError("Invalid rating. Rating must be between 1 and 5");
      setLoading(false);
      return;
    }

    if (formData.location.trim() === "") {
      setError("Location is required");
      setLoading(false);
      return;
    }

    if (formData.website.trim() === "") {
      setError("Website URL is required");
      setLoading(false);
      return;
    }

    if (formData.description.trim() === "") {
      setError("Description is required");
      setLoading(false);
      return;
    }

    try {
      const request = await axios.post("http://localhost:3000/restaurants", {
        image_Url: formData.image_Url,
        name: formData.name,
        rating: formData.rating,
        location: formData.location,
        website: formData.website,
        description: formData.description,
      });

      setSuccess("Restaurant created successfully!");

      setFormData({
        image_Url: "",
        name: "",
        rating: "",
        location: "",
        website: "",
        description: "",
      });
    } catch (err) {
      setError(`Error creating restaurant: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={postRestaurant}
      className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-2 gap-6">
        <div className="mb-4">
          <label
            className="block text-gray-700  text-sm font-bold mb-2"
            htmlFor="imageUrl"
          >
            Restaurant Image URL
          </label>
          <input
            value={formData.image_Url}
            onChange={(e) =>
              setFormData({ ...formData, image_Url: e.target.value })
            }
            type="text"
            id="imageUrl"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white input-bordered"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Restaurant Name
          </label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            type="text"
            id="name"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white input-bordered"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rating"
          >
            Restaurant Rating
          </label>
          <input
            value={formData.rating}
            onChange={(e) =>
              setFormData({ ...formData, rating: e.target.value })
            }
            type="number"
            id="rating"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white input-bordered"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Restaurant Location
          </label>
          <input
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            required
            type="text"
            id="location"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white input-bordered"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="website"
          >
            Restaurant Website URL
          </label>
          <input
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
            required
            type="text"
            id="website"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white input-bordered"
          />
        </div>

        <div className="mb-4 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Restaurant Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
            id="description"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 bg-white input-bordered"
          ></textarea>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4 mt-6">
        <button
          onClick={postRestaurant}
          type="button"
          className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline "
        >
          {loading ? "Loading..." : "Add Restaurant"}
        </button>
        <button
          type="submit"
          className="bg-pink-200 hover:bg-red-700 text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Remove Restaurant
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </form>
  );
};

export default Form;
