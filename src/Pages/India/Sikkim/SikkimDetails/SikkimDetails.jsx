import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { tourssightPackages } from "../../../../assets/Data/constantsikkim";
import { FaCheckCircle, FaStar, FaStarHalfAlt, FaBusAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";
import "./SikkimDetails.css";

const SikkimDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const { id } = useParams();

  // Find the matching object based on ID
  const sikkimObject = tourssightPackages.find((obj) => obj.id === Number(id));

  // If no object is found, show a fallback message
  if (!sikkimObject) {
    return <div>Package not found</div>;
  }

  // Handlers for image carousel
  const handlePrevImage = (images) => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (images) => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="sikkim-details-container">
      <div className="sikkim-detail-right">
        <div className="sikkim-detail-title">
          <h1>{sikkimObject.title || "Package Title"}</h1>
          <div>
            <div className="sikkim-no-days">
              <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                <h2 className="text-white text-3xl">{sikkimObject.noOfDays}</h2>
              </div>
              <span>Days</span>
            </div>
          </div>
        </div>

        <div className="sikkim-details-images-slider">
          <img
            src={sikkimObject.images[currentImage] || "fallback.jpg"}
            alt={sikkimObject.title || "Image"}
            className="sikkim-details-card-image"
          />
          <button
            className="sikkim-details-arrow left"
            onClick={() => handlePrevImage(sikkimObject.images)}
          >
            ❮
          </button>
          <button
            className="sikkim-details-arrow right"
            onClick={() => handleNextImage(sikkimObject.images)}
          >
            ❯
          </button>
        </div>

        <div className="sikkim-detail-description">
          {sikkimObject.detailDescription && (
            <p>{sikkimObject.detailDescription}</p>
          )}
          {sikkimObject.subDescription && <p>{sikkimObject.subDescription}</p>}
        </div>

        <div className="sikkim-info-details p-4">
          <div className="flex gap-2">
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

        <div className="sikkim-detail-nav-sticky">
          <ul>
            {sikkimObject.overView && (
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
            {/* <li>
              <a href="#Hotels">Hotels</a>
            </li> */}
          </ul>
        </div>

        {sikkimObject.overView && (
          <div id="overView" className="sikkim-detail-overview">
            <h1>OverView</h1>
            <p>{sikkimObject.overView}</p>
          </div>
        )}

        <div id="Itinerary" className="sikkim-detail-itinerary">
          <h1>Itinerary</h1>
          <div className="sikkim-itinerary-container">
            {(sikkimObject.qna || []).map((ele, index) => (
              <div key={index} className="sikkim-qna-container">
                <div
                  className="sikkim-accordion-header"
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
                    className="sikkim-accordion-content"
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

        <div id="Inclusions" className="sikkim-inclusions-container">
          <h1>Inclusion</h1>
          <h2>Package Inclusions</h2>
          <div className="sikkim-inclusions">
            {(sikkimObject.packageInclusion || []).map((inc, index) => (
              <div key={index} className="sikkim-inclusion">
                <p>
                  <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                  {inc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="sikkim-exclusion-container">
          <h2>Package Exclusion</h2>
          <div className="sikkim-inclusions">
            {(sikkimObject.packageExlusion || []).map((exc, index) => (
              <div key={index} className="sikkim-inclusion">
                <p>
                  <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                  {exc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sikkim-detail-left">
        <div className="sikkim-detail-price-container">
          <div className="sikkim-detail-discount">
            <h1>{sikkimObject.discount || "No Discount"}</h1>
          </div>
          <div className="sikkim-originalPrice">
            <span className="sikkim-from">From</span>
            <span>
              <del>{sikkimObject.originalPrice || "N/A"}</del>
            </span>
          </div>
          <div className="sikkim-finalPrice">
            <h1>{sikkimObject.price || "Contact for Price"}</h1>
            <span>/Adult</span>
          </div>
          <div className="sikkim-availableBtn">
            <button>Check Availability</button>
          </div>
        </div>

        <div className="mt-10 text-2xl font-semibold text-center review">
          <h2>Check our reviews on TripAdvisor!</h2>
        </div>
        <div className="sikkim-tripAdvisor-container">
          <div className="sikkim-tripAdvisor-img">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="TripAdvisor"
            />
          </div>
          <div className="sikkim-tripAdvisor-content">
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
              <p>"Very bad experience"</p>
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

export default SikkimDetails;
