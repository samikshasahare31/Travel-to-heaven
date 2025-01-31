import React, { useState } from 'react'
import './India.css'
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'
import img4 from './Images/img4.jpg'
import img5 from './Images/img5.jpg'

import { images } from '../../assets/Data/india'
import { useLocation, useNavigate } from 'react-router-dom'

const India = () => {
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const newUrl = locationURL
      .split("")
      .map((ele) => (ele === "/" ? " > " : ele))
      .join("");
  const navigate = useNavigate();
  const handleViewDeatils = (path) => {
    navigate(path)
  }

    // Initialize the carousel with a faster interval
var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
    interval: 2000 // Set interval to 2 seconds (2000 ms)
  });
  
    return (
        <div className='m-12 indiaMain'>
            <p className="india-destination"> Home {newUrl}</p>
            <h1>India</h1>
        <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel" data-bs-interval="2000">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img5} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 

<div className='india-description mt-9 mb-9'>
        <p>India is a country of diverse landscapes, cultures, and experiences, making it a fascinating destination for travelers. In the north, visitors can explore the bustling capital of Delhi, with its iconic landmarks such as the Red Fort and India Gate, or journey to Agra to witness the timeless beauty of the Taj Mahal. Rajasthan enchants with its royal heritage, offering palaces and forts in cities like Jaipur, Udaipur, and Jodhpur.</p>
        <p>In the south, Kerala is known for its serene backwaters, lush green hill stations like Munnar, and tranquil houseboat experiences in Alleppey.</p>
        <p>The best time to visit India depends on the region. Winter, from October to March, is ideal for most areas, while summer months are perfect for exploring cooler hill stations. </p>
      </div>

      <div className='india-container'>

        {images.map((item) => (
          <div key={item.id} className="india-image-container">
            <img src={item.images} alt={`Tour image ${item.id}`} className="tour-image" />
            <div className="india-card-body d-flex justify-content-center">
              <h5 className="india-card-title">{item.name}</h5>
              <div className='caption'>
                <button className='button-view' onClick={() => handleViewDeatils(item.path)}>View All</button>
              </div>
            </div>

          </div>
        ))}
      </div>



        </div>
    )
}

export default India
