import React from "react";
// FLAGS
import maroc from "../../assets/morocco.png";
import france from "../../assets/france.png";
import uk from "../../assets/united-kingdom.png";

const Languages = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <span className="h-8 ">
        <img src={maroc} />
      </span>
      <span className="h-8 ">
        <img src={uk} />
      </span>
      <span className="h-8 ">
        <img src={france} />
      </span>
    </div>
  );
};

export default Languages;
