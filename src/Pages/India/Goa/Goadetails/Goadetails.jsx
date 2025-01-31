import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle, FaStar, FaBusAlt, FaStarHalfAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";
import {
  tourGoaPackages,
  tourotherPackages,
} from "../../../../assets/Data/constantgoa";
import "./goaDetailsPage.css";

const GoaDetails = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const goaTrips = [...tourGoaPackages, ...tourotherPackages];
  const filteredObjects = goaTrips.filter((obj) => obj.id === Number(id));

  // Ensure we have a valid package to display
  const selectedPackage = filteredObjects[0];

  const handlePrevImage = (images) => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (images) => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // If no packages match the ID, show an error message
  if (!selectedPackage) {
    return <div className="error-message">Package not found</div>;
  }

  return (
    <div className="goa-details-container">
      {/* Right Section */}
      <div className="goa-detail-right">
        <div className="goa-detail-title">
          <h1>{selectedPackage.title}</h1>
          <div className="goa-no-days">
            <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
              <h2 className="text-white text-3xl">
                {selectedPackage.noOfDays}
              </h2>
            </div>
            <span>Days</span>
          </div>
        </div>

        {/* Image Slider */}
        <div className="goa-details-images-slider">
          <img
            src={selectedPackage.images[currentImage]}
            alt={selectedPackage.title}
            className="goa-details-card-image"
          />
          <button
            className="goa-details-arrow left"
            onClick={() => handlePrevImage(selectedPackage.images)}
          >
            ❮
          </button>
          <button
            className="goa-details-arrow right"
            onClick={() => handleNextImage(selectedPackage.images)}
          >
            ❯
          </button>
        </div>

        {/* Description */}
        <div className="goa-detail-description">
          <p>{selectedPackage.detailDescription}</p>
          <br />
          <p>{selectedPackage.subDescription}</p>
        </div>

        {/* Information Details */}
        <div className="goa-info-details p-4">
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

        {/* Sticky Navigation */}
        <div className="goa-detail-nav-sticky">
          <ul>
            {selectedPackage.overview && (
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

        {/* Overview Section */}
        {selectedPackage.overview && (
          <div id="overview" className="goa-detail-overview">
            <h1>Overview</h1>
            <p>{selectedPackage.overview}</p>
          </div>
        )}

        {/* Itinerary Section */}
        <div id="Itinerary" className="goa-detail-itinerary">
          <h1>Itinerary</h1>
          <div className="itinerary-container">
            {selectedPackage.qna.map((item, index) => (
              <div key={index} className="goa-qna-container">
                <div
                  className="goa-accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2>{item.question}</h2>
                  <span>{openIndex === index ? "-" : "+"}</span>
                </div>
                {openIndex === index && (
                  <div className="goa-accordion-content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Inclusion Section */}
        <div id="Inclusions" className="goa-inclusions-container">
          <h1>Package Inclusions</h1>
          <div className="goa-inclusions">
            {selectedPackage.packageInclusion.map((inc, index) => (
              <div key={index} className="goa-inclusion">
                <p>
                  <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                  {inc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusion Section */}
        <div className="goa-exclusion-container">
          <h2>Package Exclusions</h2>
          <div className="goa-inclusions">
            {selectedPackage.packageExclusion.map((exc, index) => (
              <div key={index} className="goa-inclusion">
                <p>
                  <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                  {exc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hotels Section */}
        <div id="Hotels" className="goa-hotels-container">
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
              {selectedPackage.hotels.map((hotel, index) => (
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

      {/* Left Section */}
      <div className="goa-detail-left">
        <div className="goa-detail-price-container">
          <div className="goa-detail-discount">
            <h1>{selectedPackage.discount}</h1>
          </div>
          <div className="goa-originalPrice">
            <span className="goa-from">From</span>
            <span>
              <del>{selectedPackage.originalPrice}</del>
            </span>
          </div>
          <div className="goa-finalPrice">
            <h1>{selectedPackage.price}</h1>
            <span>/Adult</span>
          </div>
          <div className="goa-availableBtn">
            <button>Check Availability</button>
          </div>
        </div>

        <div className="mt-10 text-2xl font-semibold text-center">
          <h2>Check our reviews on TripAdvisor!</h2>
        </div>
        <div className="goa-tripAdvisor-container">
          <div className="goa-tripAdvisor-img">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt=""
            />
          </div>
          <div className="goa-tripAdvisor-content">
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
              <span>Trip Advisor Review</span>
              <p>"Before Holiday Review"</p>
              <p>"very bad experience"</p>
              <p>"Trip to Bali and Singapore"</p>
              <p>"Comfortable experience"</p>
              <p>"Nicely planned trip to Bali"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoaDetails;
