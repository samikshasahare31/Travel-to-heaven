import React, { useState } from 'react'
import "./Goa.css";
import { tourGoaPackages, tourotherPackages } from '../../../assets/Data/constantgoa';
import Card from '../../../Components/Card/Card';
import { useLocation } from 'react-router-dom';

const Goa = () => {
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
  return (
    <div className='goa'>
      <div className='goa-div'>
      <p> Home {newUrl}</p>

        <h1 className='goa-heading'>Goa</h1>
        <p className='goa-content'>Goa is a globally renowned tourist hotspot, celebrated for its endless stretches of silver beaches kissed by the shimmering blue waters of the Arabian Sea. This vibrant destination blends old-world charm with contemporary sophistication, making it a unique experience for visitors. Its hidden coves provide an exciting opportunity for adventurers to explore uncharted territory.
        Despite being India’s smallest state, Goa ranks first in the nation for quality of life. It is home to two UNESCO World Heritage sites: the Bom Jesus Basilica and the churches and convents of Old Goa. Known for its lively nightlife, ranked sixth globally, Goa showcases its rich Portuguese heritage through its numerous churches, temples, and mansions scattered across the region.
        Must-visit attractions include the Naval Aviation Museum, Fort Aguada, and the Wax Museum, which offer insights into India’s history, heritage, and culture.
</p>          
      </div>

      <div className='Friends-div'>
        <h2 className="Friends-title"><span className='friendfamily-heading'>Friends & Family Tour</span></h2>
      </div>
      {/* card */}
      <div className="GoaContainer1">
        {tourGoaPackages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} locationURL={locationURL} />
        ))}
      </div>


      <div className='other-div'>
        <h2 className="other-title"><span className='otherstrip-heading'>Other Trips</span></h2>
      </div>

     
      <div className="GoaContainer2">
        {tourotherPackages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} />
        ))}
      </div>

    </div>

  )
}

export default Goa;
