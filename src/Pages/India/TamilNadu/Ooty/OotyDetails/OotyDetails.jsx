import { useParams } from "react-router-dom";
import { travelPackage } from "../../../../../assets/Data/ooty";
import { useState } from "react";
import { FaCheckCircle, FaStar, FaBusAlt, FaStarHalfAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";
import "./OotyDetails.css";

const OotyDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const { id } = useParams();

  const OotyObject = travelPackage.find((obj) => obj.id === Number(id));

  if (!OotyObject) {
    return <div>Package not found</div>;
  }

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? OotyObject.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === OotyObject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="Ooty-details-container">
      <div className="Ooty-detail-right">
        <div className="Ooty-detail-title">
          <h1>{OotyObject.title}</h1>
          <div className="Ooty-no-days">
            <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
              <h2 className="text-white text-3xl">{OotyObject.noOfDays}</h2>
            </div>
            <span>Days</span>
          </div>
        </div>

        <div className="Ooty-details-images-slider">
          <img
            src={OotyObject.images[currentImage]}
            alt={OotyObject.title}
            className="Ooty-details-card-image"
          />
          <button className="Ooty-details-arrow left" onClick={handlePrevImage}>
            ❮
          </button>
          <button
            className="Ooty-details-arrow right"
            onClick={handleNextImage}
          >
            ❯
          </button>
        </div>

        <div className="Ooty-detail-description">
          <p>{OotyObject.detailDescription}</p>
          <br />
          <p>{OotyObject.subDescription}</p>
        </div>

        <div className="Ooty-info-details p-4">
          <div className="flex gap-2 items-center">
            <FaBusAlt className="text-2xl text-green-500" />
            <div className="flex flex-col">
              <span className="text-[1.3rem] font-[500]">Transport</span>
              <span className="text-sm text-[#696d75]">SIC</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <MdRestaurant className="text-2xl text-green-500" />
            <div className="flex flex-col">
              <span className="text-[1.3rem] font-[500]">Meals</span>
              <span className="text-sm text-[#696d75]">Breakfast</span>
            </div>
          </div>
        </div>

        <div className="Ooty-detail-nav-sticky">
          <ul>
            {OotyObject.overView && (
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

        <div id="overView" className="Ooty-detail-overview">
          <h1>{OotyObject.overView ? "OverView" : null}</h1>
          <p>{OotyObject.overView}</p>
        </div>

        <div id="Itinerary" className="Ooty-detail-itinerary">
          <h1>Itinerary</h1>
          <div className="Ooty-itinerary-container">
            {OotyObject.qna.map((ele, index) => (
              <div key={index} className="Ooty-qna-container">
                <div
                  className="Ooty-accordion-header"
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
                    className="Ooty-accordion-content"
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

        <div id="Inclusions" className="Ooty-inclusions-container">
          <h1> Inclusion</h1>
          <h2>Package Inclusions</h2>
          <div className="Ooty-inclusions">
            {OotyObject.packageInclusion.map((inc, index) => (
              <div key={index} className="Ooty-inclusion">
                <p className="flex gap-2 text-lg items-center">
                  <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                  {inc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="Ooty-exclusion-container">
          <h2>Package Exclusion</h2>
          <div className="Ooty-inclusions">
            {OotyObject.packageExclusion.map((exc, index) => (
              <div key={index} className="Ooty-inclusion">
                <p className="flex gap-2 text-lg items-center">
                  <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                  {exc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="Hotels" className="Ooty-hotels-container">
          <h1>Hotels</h1>
          {OotyObject.hotels && OotyObject.hotels.length > 0 ? (
            <table className="hotels-table">
              <thead>
                <tr>
                  <th>Place</th>
                  <th>Hotel</th>
                  <th>Room Type</th>
                </tr>
              </thead>
              <tbody>
                {OotyObject.hotels.map((hotels, index) => (
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

      <div className="Ooty-detail-left">
        <div className="Ooty-detail-price-container">
          <div className="Ooty-detail-discount">
            <h1>{OotyObject.discount}</h1>
          </div>
          <div className="Ooty-originalPrice">
            <span className="Ooty-from">From</span>
            <span>
              <del>{OotyObject.originalPrice}</del>
            </span>
          </div>
          <div className="Ooty-finalPrice">
            <h1>{OotyObject.price}</h1>
            <span>/Adult</span>
          </div>
          <div className="Ooty-availableBtn">
            <button>Check Availability</button>
          </div>
        </div>

        <div className="mt-10 text-2xl font-semibold text-center">
          <h2>Check our reviews on TripAdvisor!</h2>
        </div>
        <div className="Ooty-tripAdvisor-container">
          <div className="Ooty-tripAdvisor-img">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt=""
            />
          </div>
          <div className="Ooty-tripAdvisor-content">
            <h2>Before Holiday |</h2>
            <h2>Online Travel</h2>
            <h2>Agency</h2>
            <div>
              <p>Trip Advisor Traveler Rating</p>
              <span className="flex items-center justify-center gap-1 text-green-500">
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

export default OotyDetails;
