import React, { useState } from "react"; 
import { packages } from "../../../assets/Data/RiverRafting";
import "./RiverRafting.css";
import Card from "../../../Components/Card/Card";
import { useLocation } from "react-router-dom";


const RiverRafting = () => {
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
  return (
    <div className="riverrafting-container">
      <p className="riverrafting-destination"> Home {newUrl}</p>
      <h1>River Rafting</h1>
      <div className="riverrafting-cards">
        {packages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};

export default RiverRafting;