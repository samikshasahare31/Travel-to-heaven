import React, { useState } from "react";
import { packages } from "../../../assets/Data/kasol";
import Card from "../../../Components/Card/Card";
import "./Kasol.css";
import { useLocation } from "react-router-dom";

const Kasol = () => {
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
  return (
    <div className="kasol-container">
      <p className="kasol-destination"> Home {newUrl}</p>
      <h1>Kasol</h1>
      <div className="kasol-hiking">
        <h2>Hiking</h2>
      </div>
      <div className="kasol-cards">
        {packages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} locationURL={locationURL} />
        ))}
      </div>
    </div>
  );
};

export default Kasol;
