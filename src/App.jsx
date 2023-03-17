import React from "react";
import pages from "./pages";
import Navbar from "./components/Navbar";


const App = () => {

  return (
    <div className="dark:bg-[#0a0c0f]">
      <Navbar />
      {...pages}
    </div>
  );
};

export default App;
