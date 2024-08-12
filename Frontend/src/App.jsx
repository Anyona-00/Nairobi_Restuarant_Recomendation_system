import Body from "./Sections/Body";
import Head from "./Sections/Head";
import Recomend from "./Sections/Recomend";

import "./index.css";

function App() {
  return (
    <>
      <Head />

      <Recomend />
      <div className="w-4/5 h-2 bg-white mx-auto"></div>

      <Body />
    </>
  );
}

export default App;
