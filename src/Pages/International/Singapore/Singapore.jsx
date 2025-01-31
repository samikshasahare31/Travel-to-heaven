import { useLocation } from "react-router-dom";
import Card from "../../../Components/Card/Card";
import { Singapore as SingaporeData } from "../../../assets/Data/SingaporeData";

import "./Singapore.css";
import { useState } from "react";

const Singapore = () => {
  const location = useLocation();
  const [locationURL, setLocationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
  return (
    <>
      <div className="singaporeIntro">
        <p>Home {newUrl}</p>
        <h1>Singapore</h1>
        <div className="friAndFam">
          <h2>Friends & Family Tour</h2>
        </div>
        <div className="singaporeCardsContainer">
          {SingaporeData.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} locationURL={locationURL} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Singapore;
