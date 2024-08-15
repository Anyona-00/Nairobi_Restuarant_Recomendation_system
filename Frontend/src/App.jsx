import Form from "./Components/Form";
import Body from "./Sections/Body";
import Head from "./Sections/Head";
import Recomend from "./Sections/Recomend";

import "./index.css";

function App() {
  return (
    <>
      <div className="w-full bg-lightGray">
        <Head />

        <p className="px-4 py-4 m-8 font-semibold text-4xl text-black italic  w-1/5 rounded-xl">
          Top picks for the day
        </p>

        <Recomend />
        <div className="w-4/5 h-2 bg-gray-600 mx-auto"></div>
        <p className="px-4 py-4 m-8 font-semibold text-4xl text-black italic  rounded-xl">
          Others you might like
        </p>

        <Body />

        <Form />
      </div>
    </>
  );
}

export default App;
