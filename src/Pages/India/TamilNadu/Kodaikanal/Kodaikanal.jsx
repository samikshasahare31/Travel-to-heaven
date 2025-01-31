import React, { useState } from "react";
import {
    travelPackage as kodaikanal,
} from "../../../../assets/Data/kodaikanal";
import Card from "../../../../Components/Card/Card";
import "./Kodaikanal.css";
import { useLocation } from "react-router-dom";


const Kodaikanal = () => {
    const location = useLocation();
    const [locationURL] = useState(location.pathname);
    const newUrl = locationURL
        .split("")
        .map((ele) => (ele === "/" ? " > " : ele))
        .join("");
    return (
        <>
            <div className="Kodaikanal-intro">
            <p className="Kodaikanal-destination"> Home {newUrl}</p>
                <h1>Kodaikanal</h1>
                <div className="KodaikanalInfo">

                    <p>
                        Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway. Kodaikanal means ‘the gift of the forests’.

                        Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above sea level, and once you visit this hill station, you will find that every bit of what you have imagined it to be is real. Kodaikanal is a place you can go to take a break from the rigours of daily city life.
                    </p>
                </div>
                <div className="Sightseeing">
                    <h2>Sightseeing</h2>
                </div>
                <div className="KodaikanalCardsContainer">
                    {(kodaikanal || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>

            </div>
        </>
    );
};

export default Kodaikanal;
