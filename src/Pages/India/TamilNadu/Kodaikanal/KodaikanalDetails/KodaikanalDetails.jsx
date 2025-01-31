import { useParams } from "react-router-dom";
import { travelPackage } from "../../../../../assets/Data/kodaikanal";

import { useState } from "react";
import { FaCheckCircle, FaStar, FaBusAlt, FaStarHalfAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";
import "./KodaikanalDetails.css";

const KodaikanalDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const { id } = useParams();

  const KodaikanalObject = travelPackage.find((obj) => obj.id === Number(id));

  if (!KodaikanalObject) {
    return <div>Package not found</div>;
  }

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? KodaikanalObject.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === KodaikanalObject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="Kodaikanal-details-container">
      <div className="Kodaikanal-detail-right">
        <div className="Kodaikanal-detail-title">
          <h1>{KodaikanalObject.title}</h1>
          <div className="Kodaikanal-no-days">
            <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
              <h2 className="text-white text-3xl">
                {KodaikanalObject.noOfDays}
              </h2>
            </div>
            <span>Days</span>
          </div>
        </div>

        <div className="Kodaikanal-details-images-slider">
          <img
            src={KodaikanalObject.images[currentImage]}
            alt={KodaikanalObject.title}
            className="Kodaikanal-details-card-image"
          />
          <button
            className="Kodaikanal-details-arrow left"
            onClick={handlePrevImage}
          >
            ❮
          </button>
          <button
            className="Kodaikanal-details-arrow right"
            onClick={handleNextImage}
          >
            ❯
          </button>
        </div>

        <div className="Kodaikanal-detail-description">
          <p>{KodaikanalObject.detailDescription}</p>
          <br />
          <p>{KodaikanalObject.subDescription}</p>
        </div>

        <div className="Kodaikanal-info-details p-4">
          <div className="flex gap-2 ">
            <FaBusAlt className="text-2xl text-green-500" />
            <div>
              <p>Transport</p>
              <h1>SIC</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <MdRestaurant className="text-2xl text-green-500" />
            <div>
              <p>Meals</p>
              <h1>Breakfast</h1>
            </div>
          </div>
        </div>

        <div className="Kodaikanal-detail-nav-sticky">
          <ul>
            {KodaikanalObject.overView && (
              <li>
                <a href="#overView">OverView</a>
              </li>
            )}
            <li>
              <a href="#Itinerary">Itinerary</a>
            </li>
            <li>
              <a href="#Inclusions">Inclusions</a>
            </li>
            <li>
              <a href="#Hotels">Hotels</a>
            </li>
          </ul>
        </div>

        <div id="overView" className="Kodaikanal-detail-overview">
          <h1>{KodaikanalObject.overView ? "OverView" : null}</h1>
          <p>{KodaikanalObject.overView}</p>
        </div>

        <div id="Itinerary" className="Kodaikanal-detail-itinerary">
          <h1>Itinerary</h1>
          <div className="Kodaikanal-itinerary-container">
            {KodaikanalObject.qna.map((ele, index) => (
              <div key={index} className="Kodaikanal-qna-container">
                <div
                  className="Kodaikanal-accordion-header"
                  onClick={() => toggleAccordion(index)}
                  style={{
                    cursor: "pointer",
                    background: "#f0f0f0",
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2>{ele.question}</h2>
                  <span>{openIndex === index ? "-" : "+"}</span>
                </div>
                {openIndex === index && (
                  <div
                    className="Kodaikanal-accordion-content"
                    style={{
                      padding: "10px",
                      background: "#fff",
                      border: "1px solid #ccc",
                    }}
                  >
                    <p>{ele.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div id="Inclusions" className="Kodaikanal-inclusions-container">
          <h1> Inclusion</h1>
          <h2>Package Inclusions</h2>
          <div className="Kodaikanal-inclusions">
            {KodaikanalObject.packageInclusion.map((inc, index) => (
              <div key={index} className="Kodaikanal-inclusion">
                <p>
                  <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                  {inc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="Kodaikanal-exclusion-container">
          <h2>Package Exclusion</h2>
          <div className="Kodaikanal-inclusions">
            {KodaikanalObject.packageExclusion.map((exc, index) => (
              <div key={index} className="Kodaikanal-inclusion">
                <p>
                  <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                  {exc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="Hotels" className="Kodaikanal-hotels-container">
          <h1>Hotels</h1>
          {KodaikanalObject.hotels && KodaikanalObject.hotels.length > 0 ? (
            <table className="hotels-table">
              <thead>
                <tr>
                  <th>Place</th>
                  <th>Hotel</th>
                  <th>Room Type</th>
                </tr>
              </thead>
              <tbody>
                {KodaikanalObject.hotels.map((hotels, index) => (
                  <tr key={index}>
                    <td>{hotels.place}</td>
                    <td>{hotels.hotelName}</td>
                    <td>{hotels.roomType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hotels available</p>
          )}
        </div>
      </div>

      <div className="Kodaikanal-detail-left">
        <div className="Kodaikanal-detail-price-container">
          <div className="Kodaikanal-detail-discount">
            <h1>{KodaikanalObject.discount}</h1>
          </div>
          <div className="Kodaikanal-originalPrice">
            <span className="Kodaikanal-from">From</span>
            <span>
              <del>{KodaikanalObject.originalPrice}</del>
            </span>
          </div>
          <div className="Kodaikanal-finalPrice">
            <h1>{KodaikanalObject.price}</h1>
            <span>/Adult</span>
          </div>
          <div className="Kodaikanal-availableBtn">
            <button>Check Availability</button>
          </div>
        </div>

        <div className="mt-10 text-2xl font-semibold text-center">
          <h2>Check our reviews on TripAdvisor!</h2>
        </div>
        <div className="Kodaikanal-tripAdvisor-container">
          <div className="Kodaikanal-tripAdvisor-img">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt=""
            />
          </div>
          <div className="Kodaikanal-tripAdvisor-content">
            <h2>Before Holiday |</h2>
            <h2>Online Travel</h2>
            <h2>Agency</h2>
            <div>
              <p>Trip Advisor Traveler Rating</p>
              <span className="flex gap-1 justify-center items-center text-green-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KodaikanalDetails;
