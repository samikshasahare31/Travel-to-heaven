import { useLocation } from "react-router-dom";
import { malaysia } from "../../../assets/Data/malaysia";
import Card from "../../../Components/Card/Card";
import "./malaysia.css";
import { useState } from "react";
const Malaysia = () => {
  const location = useLocation();
  const [locationURL, setLocationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
  return (
    <>
      <div className="malaysiaIntro">
        <p> Home {newUrl}</p>
        <h1>Malaysia</h1>
        <div className="friAndFam">
          <h2>Friends & Family Tour</h2>
        </div>
        <div className="malaysiaCardsContainer">
          {malaysia.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} locationURL={locationURL} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Malaysia;
