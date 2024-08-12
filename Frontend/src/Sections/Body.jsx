import DisplayCard from "../Components/DisplayCard";
const Body = () => {
  return (
    <div className="flex flex-wrap justify-center w-full scale-75 origin-top">
      <DisplayCard endpoint={"http://localhost:3000/restaurants"} />
    </div>
  );
};

export default Body;
