import React, { useState } from 'react';
import './International.css'
import singaporeTour from '../International/singapore.avif'; 
import { Link,useLocation } from 'react-router-dom';
import { internationalTrips } from '../../assets/Data/International';

const International = () => {
  const location = useLocation();
    const [locationURL] = useState(location.pathname);
    const newUrl = locationURL
        .split("")
        .map((ele) => (ele === "/" ? " > " : ele))
        .join("");
  return (
    <div className='m-12 internationalMain'>
    <p className="international-destination"> Home {newUrl}</p>
    <h1>Destination</h1>
      <img className='' 
        src={singaporeTour} 
        alt="Singapore Tour" 
        style={{ width: '100%', height: '80vh', }} 
      />
      <div className='International-description mt-9 mb-9'>
      <div className="Main-container">

      <p>Experience the thrill of adventure with our curated activity packages, featuring paragliding, river rafting, and hiking. Soar through the skies with paragliding, enjoying breathtaking views of serene landscapes, or dive into the excitement of river rafting as you tackle rapids with the guidance of experienced professionals. For those seeking to reconnect with nature, our hiking trails offer a mix of peaceful paths and challenging treks through stunning destinations.</p>
                <p>Each activity is carefully designed to ensure your safety and satisfaction, complete with personalized planning and top-notch support. Pair your adventures with our unbeatable flight and hotel deals to create the ultimate travel experience. Whether you're an adrenaline junkie or a nature lover, we have something for everyone.</p>
        
      </div>
   </div>
      <div className="Internationalcard">
  {internationalTrips.map((item) => (
    <div key={item.id} className="campingcard">
      <div className="campingcard-image">
        <img src={item.image} alt={`${item.name} image`} />
        <Link to={item.path}>
          <button className="view-button">View All</button>
        </Link>
      </div>
      <div className="national">
        <Link to={item.path}>
          <h2>{item.name}</h2>
        <p>({item.trips} trips)</p>
        </Link>

      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default International;

  