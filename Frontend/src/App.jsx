import { useState } from "react";
import DisplayCard from "./Components/DisplayCard";
import Head from "./Sections/Head";

import "./index.css";

function App() {
  return (
    <>
      <Head />
      <DisplayCard />
      <div className="w-4/5 h-2 bg-white mx-auto"></div>
    </>
  );
}

export default App;
