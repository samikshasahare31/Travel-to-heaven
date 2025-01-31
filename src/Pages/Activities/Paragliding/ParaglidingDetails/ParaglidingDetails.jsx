import { useParams } from "react-router-dom";
import { packages } from "../../../../assets/Data/paragliding";
import { useState } from "react";
import { FaCheckCircle, FaStar, FaBusAlt, FaStarHalfAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";
import "./ParaglidingDetails.css";

const ParaglidingDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const { id } = useParams();

  const paraglidingObject = packages.find((obj) => obj.id === Number(id));

  if (!paraglidingObject) {
    return <div>Package not found</div>;
  }

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? paraglidingObject.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === paraglidingObject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="paragliding-details-container">
      <div className="paragliding-detail-right">
        <div className="paragliding-detail-title">
          <h1>{paraglidingObject.title}</h1>
          <div className="paragliding-no-days">
            <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
              <h2 className="text-white text-3xl">
                {paraglidingObject.noOfDays}
              </h2>
            </div>
            <span>Days</span>
          </div>
        </div>

        <div className="paragliding-details-images-slider">
          <img
            src={paraglidingObject.images[currentImage]}
            alt={paraglidingObject.title}
            className="paragliding-details-card-image"
          />
          <button
            className="paragliding-details-arrow left"
            onClick={handlePrevImage}>
            ❮
          </button>
          <button
            className="paragliding-details-arrow right"
            onClick={handleNextImage}>
            ❯
          </button>
        </div>

        <div className="paragliding-detail-description">
          <p>{paraglidingObject.detailDescription}</p>
          <br />
          <p>{paraglidingObject.subDescription}</p>
        </div>

        <div className="paragliding-info-details p-4">
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

        <div className="paragliding-detail-nav-sticky">
          <ul>
            {paraglidingObject.overView && (
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

        <div id="overView" className="paragliding-detail-overview">
          <h1>{paraglidingObject.overView ? "OverView" : null}</h1>
          <p>{paraglidingObject.overView}</p>
        </div>

        <div id="Itinerary" className="paragliding-detail-itinerary">
          <h1>Itinerary</h1>
          <div className="paragliding-itinerary-container">
            {paraglidingObject.qna.map((ele, index) => (
              <div key={index} className="paragliding-qna-container">
                <div
                  className="paragliding-accordion-header"
                  onClick={() => toggleAccordion(index)}
                  style={{
                    cursor: "pointer",
                    background: "#f0f0f0",
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <h2>{ele.question}</h2>
                  <span>{openIndex === index ? "-" : "+"}</span>
                </div>
                {openIndex === index && (
                  <div
                    className="paragliding-accordion-content"
                    style={{
                      padding: "10px",
                      background: "#fff",
                      border: "1px solid #ccc",
                    }}>
                    <p>{ele.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div id="Inclusions" className="paragliding-inclusions-container">
          <h1> Inclusion</h1>
          <h2>Package Inclusions</h2>
          <div className="paragliding-inclusions">
            {paraglidingObject.packageInclusion.map((inc, index) => (
              <div key={index} className="paragliding-inclusion">
                <p>
                  <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                  {inc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="paragliding-exclusion-container">
          <h2>Package Exclusion</h2>
          <div className="paragliding-inclusions">
            {paraglidingObject.packageExclusion.map((exc, index) => (
              <div key={index} className="paragliding-inclusion">
                <p>
                  <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                  {exc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="Hotels" className="paragliding-hotels-container">
          <h1>Hotels</h1>
          {paraglidingObject.hotels && paraglidingObject.hotels.length > 0 ? (
            <table className="hotels-table">
              <thead>
                <tr>
                  <th>Place</th>
                  <th>Hotel</th>
                  <th>Room Type</th>
                </tr>
              </thead>
              <tbody>
                {paraglidingObject.hotels.map((hotels, index) => (
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

      <div className="paragliding-detail-left">
        <div className="paragliding-detail-price-container">
          <div className="paragliding-detail-discount">
            <h1>{paraglidingObject.discount}</h1>
          </div>
          <div className="paragliding-originalPrice">
            <span className="paragliding-from">From</span>
            <span>
              <del>{paraglidingObject.originalPrice}</del>
            </span>
          </div>
          <div className="paragliding-finalPrice">
            <h1>{paraglidingObject.price}</h1>
            <span>/Adult</span>
          </div>
          <div className="paragliding-availableBtn">
            <button>Check Availability</button>
          </div>
        </div>

        <div className="mt-10 text-2xl font-semibold text-center">
          <h2>Check our reviews on TripAdvisor!</h2>
        </div>
        <div className="paragliding-tripAdvisor-container">
          <div className="paragliding-tripAdvisor-img">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt=""
            />
          </div>
          <div className="paragliding-tripAdvisor-content text-center">
            <h2>Ten Travels</h2>

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

export default ParaglidingDetails;
