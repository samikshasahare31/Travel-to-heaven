import React, { useState } from "react"; 
import { packages } from "../../../assets/Data/hiking";
import "./Hiking.css";
import Card from "../../../Components/Card/Card";
import { useLocation } from "react-router-dom";


const Hiking = () => {
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
  return (
    <div className="hiking-container">
      <p className="hiking-destination"> Home {newUrl}</p>
      <h1>Hiking</h1>
      <div className="hiking-cards">
        {packages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} locationURL={locationURL}/>
        ))}
      </div>
    </div>
  );
};

export default Hiking;