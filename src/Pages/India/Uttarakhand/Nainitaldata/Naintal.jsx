import React, { useState } from "react"; 
import {

    travelPackage as naintal,
} from "../../../../assets/Data/naintal";
import Card from "../../../../Components/Card/Card";
import "./Naintal.css";
import { useLocation } from "react-router-dom";


const Nainital = () => {
    const location = useLocation();
    const [locationURL] = useState(location.pathname);
    const newUrl = locationURL
        .split("")
        .map((ele) => (ele === "/" ? " > " : ele))
        .join("");
    return (
        <>
            
            
       <div className='nani'>
      <div className='nani_divi'>
      <p className="nainital-destination"> Home {newUrl}</p>
        <h1 className='nani-heading'>Nainital</h1>
        <p className='nani-content'> Nestled at an elevation of 1,938 meters in the Kumaon foothills of the Himalayas, Nainital is one of India's most charming hill stations. "Lake Paradise" is a fitting nickname for its captivating landscape, which is dotted with multicolored coppices and glittering lakes in the shape of diamonds. 
        Travel enthusiasts, wildlife lovers, and day trippers from all across India are drawn to the area by its landscaped beauty. Particularly for people from North India, Nainital has a distinct charm and is the ideal escape from the bustle and gloom of the city. 
        Nainital, a brilliant gem in the Himalayan chain, is endowed with a variety of natural riches and breathtaking scenery. In Uttarakhand, Nainital is referred to as the "lake district of India" by many.Nainital takes its name from the words "Naini," which means "the eye," and "Tal," which means "the Lake." 
            In the past, Nainital was once the British summer headquarters. It is a well-known tourist destination because of its natural beauty and Naini Lake. Families, honeymooners, authors and poets, adventurers, and those who enjoy the outdoors will all find Nainital to be a perfect location.</p>
      </div>


                <div className="friAndFam">
                    <h2>Friends & Family Tour</h2>
                </div>
                <div className="naniCardsContainer">
                    {(naintal || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} locationURL={locationURL} />
                    ))}
                </div>
               
            </div>
        </>
    );
};

export default Nainital;

