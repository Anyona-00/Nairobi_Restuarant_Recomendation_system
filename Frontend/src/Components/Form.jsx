const Form = () => {
  return (
    <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-6">
        <div className="mb-4">
          <label
            className="block text-gray-700  text-sm font-bold mb-2"
            htmlFor="imageUrl"
          >
            Restaurant Image URL
          </label>
          <input
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
            type="text"
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
            id="description"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 bg-white input-bordered"
          ></textarea>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4 mt-6">
        <button
          type="button"
          className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline "
        >
          Add Restaurant
        </button>
        <button
          type="button"
          className="bg-pink-200 hover:bg-red-700 text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Remove Restaurant
        </button>
      </div>
    </form>
  );
};

export default Form;
