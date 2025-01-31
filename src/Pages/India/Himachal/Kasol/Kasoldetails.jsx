import { useParams } from "react-router-dom";
import { packages } from "../../../../assets/Data/kasol";
import { useState } from "react";
import {
  FaCheckCircle,
  FaStar,
  FaBusAlt,
  FaStarHalfAlt,
  FaHotel,
} from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";
import "./kasoldetailsPage.css";

const KasolDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const { id } = useParams();

  const kasolObjects = packages.find((obj) => obj.id === Number(id));

  if (!kasolObjects) {
    return <div>Package not found</div>;
  }

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? kasolObjects.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === kasolObjects.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="kasol-details-container">
      <div className="kasol-detail-right">
        <div className="kasol-detail-title">
          <h1>{kasolObjects.title}</h1>
          <div className="kasol-no-days">
            <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
              <h2 className="text-white text-3xl">{kasolObjects.noOfDays}</h2>
            </div>
            <span>Days</span>
          </div>
        </div>

        <div className="kasol-details-images-slider">
          <img
            src={kasolObjects.images[currentImage]}
            alt={kasolObjects.title}
            className="kasol-details-card-image"
          />
          <button
            className="kasol-details-arrow left"
            onClick={handlePrevImage}
          >
            ❮
          </button>
          <button
            className="kasol-details-arrow right"
            onClick={handleNextImage}
          >
            ❯
          </button>
        </div>

        <div className="kasol-detail-description">
          <p>{kasolObjects.detailDescription}</p>
          <br />
          <p>{kasolObjects.subDescription}</p>
        </div>

        <div className="kasol-info-details p-4">
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
          <div className="flex gap-2 items-center">
            <FaHotel className="text-2xl text-green-500" />
            <div className="flex flex-col">
              <span className="text-[1.3rem] font-[500]">Accomodation</span>
              <span className="text-sm text-[#696d75]">3 Star</span>
            </div>
          </div>
        </div>

        <div className="kasol-detail-nav-sticky">
          <ul>
            {kasolObjects.overview && (
              <li>
                <a href="#overview">Overview</a>
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

        <div id="overview" className="kasol-detail-overview">
          <h1>{kasolObjects.overview ? "Overview" : null}</h1>
          <p>{kasolObjects.overview}</p>
        </div>

        <div id="Itinerary" className="kasol-detail-itinerary">
          <h1>Itinerary</h1>
          <div className="itinerary-container">
            {kasolObjects.qna.map((ele, index) => (
              <div key={index} className="kasol-qna-container">
                <div
                  className="kasol-accordion-header"
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
                    className="kasol-accordion-content"
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

        <div id="Inclusions" className="kasol-inclusions-container">
          <h1> Inclusion</h1>
          <h2>Package Inclusions</h2>
          <div className="kasol-inclusions">
            {kasolObjects.packageInclusion.map((inc, index) => (
              <div key={index} className="kasol-inclusion">
                <p>
                  <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                  {inc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="kasol-exclusion-container">
          <h2>Package Exclusion</h2>
          <div className="kasol-inclusions">
            {kasolObjects.packageExclusion.map((exc, index) => (
              <div key={index} className="kasol-inclusion">
                <p>
                  <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                  {exc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="Hotels" className="kasol-hotels-container">
          <h1>Hotels</h1>
          <table className="hotels-table">
            <thead>
              <tr>
                <th>Place</th>
                <th>Hotel</th>
                <th>Room Type</th>
              </tr>
            </thead>
            <tbody>
              {kasolObjects.hotels.map((hotel, index) => (
                <tr key={index}>
                  <td>{hotel.place}</td>
                  <td>{hotel.hotelName}</td>
                  <td>{hotel.roomType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="kasol-detail-left">
        <div className="kasol-detail-price-container">
          <div className="kasol-detail-discount">
            <h1>{kasolObjects.discount}</h1>
          </div>
          <div className="kasol-originalPrice">
            <span className="kasol-from">From</span>
            <span>
              <del>{kasolObjects.originalPrice}</del>
            </span>
          </div>
          <div className="kasol-finalPrice">
            <h1>{kasolObjects.price}</h1>
            <span>/Adult</span>
          </div>
          <div className="kasol-availableBtn">
            <button>Check Availability</button>
          </div>
        </div>

        <div className="mt-10 text-2xl font-semibold text-center">
          <h2>Check our reviews on TripAdvisor!</h2>
        </div>
        <div className="kasol-tripAdvisor-container">
          <div className="tripAdvisor-img">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="TripAdvisor"
            />
          </div>
          <div className="kasol-tripAdvisor-content">
            <h2>Before Holiday |</h2>
            <h2>Online Travel</h2>
            <h2>Agency</h2>
            <div>
              <p>Trip Advisor Traveler Rating</p>
              <span className="flex gap-1 text-green-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span>
            </div>
            <div>
              <span>Trip Advisor Reviews</span>
              {[
                "Before Holiday Review",
                "Very bad experience",
                "Trip to Bali and Singapore",
                "Comfortable experience",
                "Nicely planned trip to Bali",
              ].map((review, index) => (
                <p key={index}>{review}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KasolDetails;
