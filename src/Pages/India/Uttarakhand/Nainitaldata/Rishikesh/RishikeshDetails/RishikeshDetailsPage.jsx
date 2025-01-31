import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { rishikeshcamping } from "../../../../../../assets/Data/risihikesh";
import { FaCheckCircle, FaStar, FaStarHalfAlt, FaBusAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";
import "./RishikeshDetailsPage.css";

const RishikeshDetailsPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const { id } = useParams();

  // Find the matching object based on ID
  const RishikeshObject = rishikeshcamping.find((obj) => obj.id === Number(id));

  // If no object is found, show a fallback message
  if (!RishikeshObject) {
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
    <div className="Rishikesh-details-container">
      <div className="Rishikesh-detail-right">
        <div className="Rishikesh-detail-title">
          <h1>{RishikeshObject.title || "Package Title"}</h1>
          <div>
            <div className="Rishikesh-no-days">
              <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                <h2 className="text-white text-3xl">
                  {RishikeshObject.noOfDays}
                </h2>
              </div>
              <span>Days</span>
            </div>
          </div>
        </div>

        <div className="Rishikesh-details-images-slider">
          <img
            src={RishikeshObject.images[currentImage] || "fallback.jpg"}
            alt={RishikeshObject.title || "Image"}
            className="Rishikesh-details-card-image"
          />
          <button
            className="Rishikesh-details-arrow left"
            onClick={() => handlePrevImage(RishikeshObject.images)}
          >
            ❮
          </button>
          <button
            className="Rishikesh-details-arrow right"
            onClick={() => handleNextImage(RishikeshObject.images)}
          >
            ❯
          </button>
        </div>

        <div className="Rishikesh-detail-description">
          {RishikeshObject.detailDescription && (
            <p>{RishikeshObject.detailDescription}</p>
          )}
          {RishikeshObject.subDescription && (
            <p>{RishikeshObject.subDescription}</p>
          )}
        </div>

        <div className="Rishikesh-info-details p-4">
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

        <div className="Rishikesh-detail-nav-sticky">
          <ul>
            {RishikeshObject.overView && (
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

        {RishikeshObject.overView && (
          <div id="overView" className="Rishikesh-detail-overview">
            <h1>OverView</h1>
            <p>{RishikeshObject.overView}</p>
          </div>
        )}

        <div id="Itinerary" className="Rishikesh-detail-itinerary">
          <h1>Itinerary</h1>
          <div className="Rishikesh-itinerary-container">
            {(RishikeshObject.qna || []).map((ele, index) => (
              <div key={index} className="Rishikesh-qna-container">
                <div
                  className="Rishikesh-accordion-header"
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
                    className="Rishikesh-accordion-content"
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

        <div id="Inclusions" className="Rishikesh-inclusions-container">
          <h1>Inclusion</h1>
          <h2>Package Inclusions</h2>
          <div className="Rishikesh-inclusions">
            {(RishikeshObject.packageInclusion || []).map((inc, index) => (
              <div key={index} className="Rishikesh-inclusion">
                <p>
                  <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                  {inc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="Rishikesh-exclusion-container">
          <h2>Package Exclusion</h2>
          <div className="Rishikesh-inclusions">
            {(RishikeshObject.PackageExclusion || []).map((exc, index) => (
              <div key={index} className="Rishikesh-inclusion">
                <p>
                  <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                  {exc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Rishikesh-detail-left">
        <div className="Rishikesh-detail-price-container">
          <div className="Rishikesh-detail-discount">
            <h1>{RishikeshObject.discount || "No Discount"}</h1>
          </div>
          <div className="Rishikesh-originalPrice">
            <span className="Rishikesh-from">From</span>
            <span>
              <del>{RishikeshObject.originalPrice || "N/A"}</del>
            </span>
          </div>
          <div className="Rishikesh-finalPrice">
            <h1>{RishikeshObject.price || "Contact for Price"}</h1>
            <span>/Adult</span>
          </div>
          <div className="Rishikesh-availableBtn">
            <button>Check Availability</button>
          </div>
        </div>

        <div className="mt-10 text-2xl font-semibold text-center">
          <h2>Check our reviews on TripAdvisor!</h2>
        </div>
        <div className="Rishikesh-tripAdvisor-container">
          <div className="Rishikesh-tripAdvisor-img">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="TripAdvisor"
            />
          </div>
          <div className="Rishikesh-tripAdvisor-content">
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

export default RishikeshDetailsPage;
