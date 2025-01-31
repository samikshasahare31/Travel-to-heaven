import React, { useState } from "react";
import {
    travelPackage as ooty,
} from "../../../../assets/Data/ooty";
import Card from "../../../../Components/Card/Card";
import "./Ooty.css";
import { useLocation } from "react-router-dom";


const Ooty = () => {
    const location = useLocation();
    const [locationURL] = useState(location.pathname);
    const newUrl = locationURL
        .split("")
        .map((ele) => (ele === "/" ? " > " : ele))
        .join("");
    return (
        <>
            <div className="Ooty-intro">
            <p className="Kodaikanal-destination"> Home {newUrl}</p>
                <h1>Ooty</h1>
                <div className="OotyInfo">

                    <p>
                        Ooty, once the summer capital of Madras Presidency under the British, can be safely regarded as “India’s Switzerland”. Popularly referred to as Ooty, this gem among southern hill resorts is covered in eucalyptus and pine trees and coffee and tea plantations. On a clear day, it’s possible to see as far as the Mysore plateau from Dodabetta Peak, the district’s most prominent viewpoint. The Stone House, a landmark 1822 bungalow, and St. Stephen’s Church are remnants of the area’s first British settlement. Also noteworthy: formal botanical gardens, a children’s mini-garden and a contemporary art collection.
                    </p>
                </div>
                <div className="Sightseeing">
                    <h2>Friends & Family Tour</h2>
                </div>
                <div className="OotyCardsContainer">
                    {(ooty || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>

            </div>
        </>
    );
};

export default Ooty;