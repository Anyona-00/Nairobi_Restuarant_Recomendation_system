import DisplayCard from "../Components/DisplayCard";

const Recomend = () => {
  return (
    <div className="flex flex-row mx-auto  w-4/5">
      <DisplayCard endpoint={"http://localhost:3000/restaurants/recommended"} />
    </div>
  );
};

export default Recomend;
