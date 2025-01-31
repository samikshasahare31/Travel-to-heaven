import React, { useState } from "react";
import { Bali as BaliData } from "../../../assets/Data/BaliData";
import Card from "../../../Components/Card/Card";
import "./Bali.css";
import { useLocation } from "react-router-dom";
// import './BaliArticle.css';

export default function Bali() {
  const location = useLocation();
  const [locationURL, setLocationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
  return (
    <>
      <div className="BaliIntro">
        <p>Home {newUrl} </p>
        <h1>Bali</h1>
        {/* BaliArticle Content */}
        <article className="bali-article">
          <div className="article-content">
            <p>
              <strong>The Island of the Gods</strong> is Bali. is, very
              rightfully, Indonesia's most visited tourist attraction. This
              place is the epitome of a tropical paradise. Daily little
              sacrifices of Outside the hotels, there are flowers and sticks of
              burning incense. eateries and pubs on the island. The soft
              gong-like sound marks the end of a procession of white-clad
              Balinese. robes. Tourists have been enthralled by its rich
              culture. people have been visiting the island for the past few
              centuries.
            </p>

            <p>
              Bali is among them. The beaches and cities in Bali's southern
              region are the main destinations for tourists. Where{" "}
              <span className="location">Kuta </span> draws in youthful event
              attendees, Where
              <span className="location">
                There are hipsters in Canggu
              </span>, Where
              <span className="location">
                The yogis congregate in Ubud
              </span>, Where
              <span className="location">
                For the wealthy and young, Seminyak
              </span>
              Additionally, <span className="location">For Nusa Dua,</span> you
              should travel to your five-star all-inclusive resorts. This
              variety is what makes Bali is a great option for a restful
              vacation.
            </p>

            <p>
              As soon as you leave the city, you are encircled by hills that are
              heavily wooded and paddy fields. Small settlements and remote
              shrines situated on the hills' slopes are traversed by the
              roadways. The ideal location for a bike journey. The highlands are
              home to There are several cascading waterfalls where you may swim,
              such lead into the swift-moving rivers where white water rafting
              is practiced. Alternatively, you may spend your time leaping if
              you're feeling daring. on a canyoning day, abseiling and jumping
              down waterfalls.
            </p>

            <p>
              among the Republic of Indonesia's hundreds of islands. This little
              island has maintained its Hindu majority while being the most
              populated Islamic nation in the world. One thousand In Southeast
              Asia, a large number of individuals practiced Hinduism in the
              past. As of right now, Bali is the only location in the area where
              these Traditions that were formerly common are still strong.
            </p>

            <div className="best-month">
              <h4>What is the best month to go to Bali?</h4>
              <p>
                The dry season, which runs from April to October, is the ideal
                time of year to visit Bali. There are only two seasons in Bali:
                the rainy season and the dry season.
              </p>
            </div>
          </div>
        </article>
        <div className="friAndFam">
          <h2>Friends & Family Tour</h2>
        </div>
        <div className="BaliCardsContainer">
          {BaliData.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} locationURL={locationURL} />
          ))}
        </div>
      </div>
    </>
  );
}
