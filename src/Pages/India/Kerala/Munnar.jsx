import React, { useState } from "react"; 
import {
  munnarOtherTrips,
  munnarsightseeing,
  travelPackage as munnar,
} from "../../../assets/Data/munnar";
import Card from "../../../Components/Card/Card";
import "./Munnar.css";
import { useLocation } from "react-router-dom";


const Munnar = () => {
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
  return (
    <>
      <div className="munnar-intro">
      <p className="munnar-destination"> Home {newUrl}</p>

        <h1>Munnar</h1>
        <div className="munnarInfo">
          <p>
            Munnar is the most happening hill station in Kerala in South India
            located 110 km from the nearest Cochin airport. Situated at 6000
            feet above sea level, Munnar has enchanting weather, tea
            plantations, and scenic views. The serenity spells magic for all who
            visit here. Treehouses in Munnar are popular with tourists. Munnar
            tourism is about celebrating the holidays in the cool green
            environment of the Nilgiri hills of Munnar. The tourists can access
            several sightseeing spots in Munnar, right from National Parks,
            ancient churches, dams, lakes, temples, scenic viewing spots, tea
            plantations & tea museums, cardamom fields, echo spots, waterfalls
            and various other places where you would love to pay a visit. A
            perfect resort town with the full galore of flora & fauna. Just
            perfect for nature lovers who would love to stay in the wonderful
            Treehouses in Munnar. These would give them lots of reasons to
            cherish the memorable time spent here enjoying vacations.
          </p>
        </div>
        <div className="friAndFam">
          <h2>Friends & Family Tour</h2>
        </div>

        <div className="munnarCardsContainer">
          {(munnar || []).map((pkg) => (
            <Card key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <div className="friAndFam">
          <h2>Sightseeing</h2>
        </div>
        <div className="sightseeingCardsContainer">
          {(munnarsightseeing || []).map((pkg) => (
            <Card key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <div className="friAndFam">
          <h2>Other Trips</h2>
        </div>
        <div className="otherCardsContainer">
          {(munnarOtherTrips || []).map((pkg) => (
            <Card key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Munnar;