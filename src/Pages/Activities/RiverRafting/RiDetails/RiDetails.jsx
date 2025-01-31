import { useParams } from "react-router-dom";
import { packages } from "../../../../assets/Data/RiverRafting";
import { useState } from "react";
import { FaCheckCircle, FaStar, FaBusAlt, FaStarHalfAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";
import "./RiDetails.css";

const RiverRaftingDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const { id } = useParams();

  const riverraftingObjects = packages.find((obj) => obj.id === Number(id));

  if (!riverraftingObjects) {
    return <div>Package not found</div>;
  }

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? riverraftingObjects.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === riverraftingObjects.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="riverrafting-details-container">
      <div className="riverrafting-detail-right">
        <div className="riverrafting-detail-title">
          <h1>{riverraftingObjects.title}</h1>
          <div className="riverrafting-no-days">
            <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
              <h2 className="text-white text-3xl">
                {riverraftingObjects.noOfDays}
              </h2>
            </div>
            <span>Days</span>
          </div>
        </div>

        <div className="riverrafting-details-images-slider">
          <img
            src={riverraftingObjects.images[currentImage]}
            alt={riverraftingObjects.title}
            className="riverrafting-details-card-image"
          />
          <button
            className="riverrafting-details-arrow left"
            onClick={handlePrevImage}>
            ❮
          </button>
          <button
            className="riverrafting-details-arrow right"
            onClick={handleNextImage}>
            ❯
          </button>
        </div>

        <div className="riverrafting-detail-description">
          <p>{riverraftingObjects.detailDescription}</p>
          <br />
          <p>{riverraftingObjects.subDescription}</p>
        </div>

        <div className="riverrafting-info-details p-4">
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

        <div className="riverrafting-detail-nav-sticky">
          <ul>
            {riverraftingObjects.overview && (
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

        <div id="overView" className="riverrafting-detail-overview">
          <h1>{riverraftingObjects.overview ? "OverView" : null}</h1>
          <p>{riverraftingObjects.overview}</p>
        </div>

        <div id="Itinerary" className="riverrafting-detail-itinerary">
          <h1>Itinerary</h1>
          <div className="itinerary-container">
            {riverraftingObjects.qna.map((ele, index) => (
              <div key={index} className="riverrafting-qna-container">
                <div
                  className="riverrafting-accordion-header"
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
                    className="riverrafting-accordion-content"
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

        <div id="Inclusions" className="riverrafting-inclusions-container">
          <h1> Inclusion</h1>
          <h2>Package Inclusions</h2>
          <div className="riverrafting-inclusions">
            {riverraftingObjects.packageInclusion.map((inc, index) => (
              <div key={index} className="riverrafting-inclusion">
                <p>
                  <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                  {inc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="riverrafting-exclusion-container">
          <h2>Package Exclusion</h2>
          <div className="riverrafting-inclusions">
            {riverraftingObjects.packageExclusion.map((exc, index) => (
              <div key={index} className="riverrafting-inclusion">
                <p>
                  <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                  {exc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="Hotels" className="riverrafting-hotels-container">
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
              {riverraftingObjects.hotels.map((hotel, index) => (
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

      <div className="riverrafting-detail-left">
        <div className="riverrafting-detail-price-container">
          <div className="riverrafting-detail-discount">
            <h1>{riverraftingObjects.discount}</h1>
          </div>
          <div className="riverrafting-originalPrice">
            <span className="riverrafting-from">From</span>
            <span>
              <del>{riverraftingObjects.originalPrice}</del>
            </span>
          </div>
          <div className="riverrafting-finalPrice">
            <h1>{riverraftingObjects.price}</h1>
            <span>/Adult</span>
          </div>
          <div className="riverrafting-availableBtn">
            <button>Check Availability</button>
          </div>
        </div>

        <div className="mt-10 text-2xl font-semibold text-center">
          <h2>Check our reviews on TripAdvisor!</h2>
        </div>
        <div className="riverrafting-tripAdvisor-container">
          <div className="tripAdvisor-img">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="TripAdvisor"
            />
          </div>
          <div className="riverrafting-tripAdvisor-content text-center">
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

export default RiverRaftingDetails;
