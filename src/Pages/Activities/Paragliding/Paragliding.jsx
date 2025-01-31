import React, { useState } from "react"; 
import { packages } from "../../../assets/Data/paragliding";
import Card from "../../../Components/Card/Card";
import "./Paragliding.css";
import { useLocation } from "react-router-dom";

const Paragliding = () => {
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
  return (
    <div className="paragliding-container">
      <p className="paragliding-destination"> Home {newUrl}</p>
      <h1>Paragliding</h1>
      <div className="paragliding-cards">
        {packages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} locationURL={locationURL}/>
        ))}
      </div>
    </div>
  );
};

export default Paragliding;