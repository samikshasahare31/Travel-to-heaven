import React, { useState } from 'react'
import "./AndamanTour.css";
import { andmatour, watertourPackages } from '../../../assets/Data/Andmantour';
import Card from '../../../Components/Card/Card';
import { useLocation } from 'react-router-dom';

const AndamanTour = () => {
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
 
console.log("locationURL={locationURL}",locationURL);

  return (
    <div className='Andaman-tour'>
      {/*Andaman  */}
      <div className='Andaman-div'>
      <p> Home {newUrl}</p>

        <h1 className='andaman-heading'>Andaman Tour</h1>
        <p className='andaman-content'>
  <strong>Andaman and Nicobar Islands,</strong> also referred to as Kalapani, are among the most stunning destinations in India.
  These islands comprise an impressive 572 islands in total, of which only 50 are inhabited, while the rest are either too small,
  classified as forest reserves, or utilized as military bases by the Indian armed forces.
  Exotic, captivating, and deeply tied to India’s colonial history, the <strong>Andaman and Nicobar Islands</strong> are emerging as a popular tourist hotspot.
  This group of islands, formed by the peaks of a submerged mountain range, represents India’s most remote state, situated in the heart of the Bay of Bengal.
  <strong>Weather</strong>
  The islands enjoy a moderate climate throughout the year, differing from mainland India’s weather patterns. While the mainland experiences
  the sweltering heat of summer, the Andamans transition into their monsoon season, offering a refreshing escape from the scorching sun.
</p>
      </div>
      <div className='list-div'>
        <strong>Here is the list of all islands in Andaman you can visit:</strong>
        <div className='list-name'>
          <ul className='no-symbol'>
            <li>Port Blair</li>
            <li>Jolly Buoy</li>
            <li>Baratang</li>
            <li>Mayabunder</li>
          </ul>
          <ul className='no-symbol'>
            <li>Swaraj Dweep (Havelock)</li>
            <li>North Bay</li>
            <li>Diglipur</li>
            <li>Cinque Island</li>
          </ul>
          <ul className='no-symbol'>
            <li>Shaheed Dweep (Neil Island)</li>
            <li>Ross Island</li>
            <li>Red Skin Island</li>
            <li>Barren Island (Active Volcano)</li>
          </ul>
        </div>
      </div>


      <div className='sightseeing-div'>
        <h2 className="sightseeing-title"><span>Sightseeing</span></h2>
      </div>
      {/* card */}




      <div className="AndamanContainer">
        {andmatour.map((pkg) => (
          <Card key={pkg.id} pkg={pkg}  locationURL={locationURL+'/andmatour'} />
        ))}
      </div>



      <div className='Watersports-div'>
        <h2 className="Watersports-title"><span>Watersports</span></h2>
      </div>


      {/* card */}
      <div className="WaterSportContainer" style={{justifyContent:"space-evenly !important"}}>
  {watertourPackages.map((pkg, index) => {
    const isLastTwo = index >= watertourPackages.length - 2;
    return (
      <Card key={pkg.id} pkg={pkg} locationURL={locationURL+'/watercontainer'} className={isLastTwo ? 'last-company' : ''} />
    );
  })}
</div>




    </div>
  )
}

export default AndamanTour;
