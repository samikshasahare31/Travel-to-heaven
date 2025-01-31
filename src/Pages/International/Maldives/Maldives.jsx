import { useLocation } from "react-router-dom";
import {
  maldives,
  maldivesOtherTrips,
  maldivesWaterVilla,
} from "../../../assets/Data/maldives";
import Card from "../../../Components/Card/Card";
import "./maldives.css";
import { useState } from "react";
const Maldives = () => {
  const location = useLocation();
  const [locationURL, setLocationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
  return (
    <>
      <div className="maldivesIntro">
        <p>Home {newUrl}</p>
        <h1>Maldives</h1>
        <div className="maldivesInfo">
          <h2>
            An assortment of celestial islands dispersed around the Indian
            Ocean.
          </h2>
          <p>
            Do you want to make all of your friends jealous? Simply introduce
            yourself and say,"I'm vacationing in the Maldives," ideally during
            the dead of winter. The Maldives, a 26-atoll chain of islands with
            white sand beaches, turquoise oceans, and idyllic overwater bungalow
            resorts, epitomizes "paradise." Here are some of the most exquisite
            5-star luxury resorts and hotels where you may treat yourself, from
            magical underwater rooms to stunning overwater villas. The Maldives
            is a well-liked travel destination, particularly for Indian
            travelers. There are many possibilities for leisure and sightseeing
            in the Maldives. Travelers can comfortably explore a variety of
            Maldivian tourist destinations thanks to the extensive selection of{" "}
            <span>Maldives</span> travel packages offered by{" "}
            <span>Before Holiday</span>. Explore Maldives tourist destinations
            and accommodationsat reputable hotels near the major tourist
            destinations in the Maldives.{" "}
            <span>
              The 157 Maldives travel packages offered by Before Holiday
            </span>{" "}
            start at low Rs. 2681.00.
          </p>
          {/* <br /> */}
          <p>
            There is something for every type of traveler in the Maldives:
            whether you are organizing a family vacation or a honeymoon, seeking
            an active vacation or a comfortable resort stay, the Maldives has
            something to offer. Maldivian tourism is also heavily reliant on
            dining and shopping, so feel free to indulge.
          </p>
        </div>
        <div className="friAndFam">
          <h2>Jacuzzi</h2>
        </div>
        <div className="maldivesCardsContainer">
          {maldives.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} locationURL={locationURL} />
          ))}
        </div>
        <div className="friAndFam">
          <h2>Water Villa</h2>
        </div>
        <div className="maldivesCardsContainer">
          {maldivesWaterVilla.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} locationURL={locationURL} />
          ))}
        </div>
        <div className="friAndFam">
          <h2>Other Trips</h2>
        </div>
        <div className="maldivesCardsContainer">
          {maldivesOtherTrips.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} locationURL={locationURL} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Maldives;
