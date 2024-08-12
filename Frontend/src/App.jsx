import Body from "./Sections/Body";
import Head from "./Sections/Head";
import Recomend from "./Sections/Recomend";

import "./index.css";

function App() {
  return (
    <>
      <div className="w-full bg-purple-300">
        <Head />

        <p className="px-4 py-4 m-8 font-semibold text-xl  bg-slate-500 w-1/5 rounded-xl">
          Top picks for the day
        </p>

        <Recomend />
        <div className="w-4/5 h-2 bg-white mx-auto"></div>
        <p className="px-4 py-4 m-8 font-semibold text-xl  bg-slate-500 w-1/5 rounded-xl">
          Top picks for the day
        </p>

        <Body />
      </div>
    </>
  );
}

export default App;
