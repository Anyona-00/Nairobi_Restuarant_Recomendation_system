import { brokenImg } from "../assets";

const DisplayCard = ({ restaurants }) => {
  if (restaurants.length === 0) {
    return <p>No restaurants found.</p>;
  }
  return (
    <>
      {restaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          className="card bg-base-100 w-64 m-4 shadow-md"
        >
          <figure>
            <img
              src={restaurant.image_url || brokenImg}
              alt="img"
              className="h-32 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">
              {restaurant.name}
              <div className="badge badge-secondary">{restaurant.rating}</div>
            </h2>
            <p className="text-sm truncate-2">{restaurant.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{restaurant.location}</div>
              <div className="badge badge-outline">Visit</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplayCard;
