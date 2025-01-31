import { useLocation } from "react-router-dom";
import Card from "../../../Components/Card/Card";
import { Thailand as ThailandData } from "../../../assets/Data/ThailandData";

import "./Thailand.css";
import { useState } from "react";

const Thailand = () => {
  const location = useLocation();
  const [locationURL, setLocationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
  return (
    <>
      <div className="thailandIntro">
        <p>Home {newUrl} </p>
        <h1>Thailand</h1>
        <div className="friAndFam">
          <h2>Friends & Family Tour</h2>
        </div>
        <div className="thailandCardsContainer">
          {ThailandData.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} locationURL={locationURL} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Thailand;
