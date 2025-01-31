import React, { useState } from "react";
import "./ActivitiesMain.css";
import { Link, useLocation } from "react-router-dom";

const ActivitiesMain = () => {
    const location = useLocation();
    const [locationURL] = useState(location.pathname);
    const newUrl = locationURL
        .split("")
        .map((ele) => (ele === "/" ? " > " : ele))
        .join("");
    return (
        <div className='ActivitiesMain'>
            <p className="Activities-destination"> Home {newUrl}</p>
            <h1>Activities</h1>
            <div className="Main-container">
                <img src="https://t4.ftcdn.net/jpg/05/49/37/23/360_F_549372383_C0dC4avukEsRJQZWJDDMRggmuekO36z2.jpg" alt="activeimg" />
                <p>Experience the thrill of adventure with our curated activity packages, featuring paragliding, river rafting, and hiking. Soar through the skies with paragliding, enjoying breathtaking views of serene landscapes, or dive into the excitement of river rafting as you tackle rapids with the guidance of experienced professionals. For those seeking to reconnect with nature, our hiking trails offer a mix of peaceful paths and challenging treks through stunning destinations.</p>
                <p>Each activity is carefully designed to ensure your safety and satisfaction, complete with personalized planning and top-notch support. Pair your adventures with our unbeatable flight and hotel deals to create the ultimate travel experience. Whether you're an adrenaline junkie or a nature lover, we have something for everyone.</p>
            </div>
            <div className='Activitiescard'>
                <div className='riverraftingcard'>
                    <div className='riverraftingcard-image'>
                        <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6b/00/3f/caption.jpg?w=500&h=400&s=1' alt='riverrafting' />
                        <Link to="/activities/riverrafting">
                            <button className='view-button'>View All</button>
                        </Link>
                    </div>
                    <div className='riverraft'>
                        <h2>River Rafting</h2>
                        <p>(7 trips)</p>
                    </div>

                </div>
                <div className='riverraftingcard'>
                    <div className='riverraftingcard-image'>
                        <img src='https://wallpapercave.com/wp/wp2158857.jpg' alt='riverrafting' />
                        <Link to="/activities/paragliding">
                            <button className='view-button'>View All</button>
                        </Link>
                    </div>
                    <div className='riverraft'>
                        <h2>Paragliding</h2>
                        <p>(7 trips)</p>
                    </div>
                </div>
                <div className='riverraftingcard'>
                    <div className='riverraftingcard-image'>
                        <img src='https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlraW5nfGVufDB8fDB8fHww' alt='riverrafting' />
                        <Link to="/activities/Hiking">
                            <button className='view-button'>View All</button>
                        </Link>
                    </div>
                    <div className='riverraft'>
                        <h2>Hiking</h2>
                        <p>(7 trips)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivitiesMain;