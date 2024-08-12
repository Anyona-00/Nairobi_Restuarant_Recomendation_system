import DisplayCard from "../Components/DisplayCard";
const Body = () => {
  return (
    <div className="flex flex-wrap mx-auto  w-4/5">
      <DisplayCard endpoint={"http://localhost:3000/restaurants"} />
    </div>
  );
};

export default Body;
