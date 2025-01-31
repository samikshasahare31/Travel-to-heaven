import { useParams } from "react-router-dom";
import { dubai } from "../../assets/Data/dubai";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import "./detail.css";

const Details = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { id } = useParams();

  const filteredObjects = dubai.filter((obj) => obj.id === Number(id));

  const handlePrevImage = () => {
    if (filteredObjects?.images) {
      setCurrentImage((prev) =>
        prev === 0 ? filteredObjects.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (filteredObjects?.images) {
      setCurrentImage((prev) =>
        prev === filteredObjects.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  if (!filteredObjects) {
    return <div>Package not found</div>;
  }

  return (
    <>
      {filteredObjects.map((items, index) => (
        <div key={index} className="details-container">
          <div className="detail-right">
            <div className="detail-title">
              <h1>{items.title}</h1>
              <div>
                <div className="no-days">
                  <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                    <h2 className="text-white text-3xl">{items.noOfDays}</h2>
                  </div>
                  <span>Days</span>
                </div>
              </div>
            </div>
            <div className="details-images-slider">
              <img
                src={items.images[currentImage]}
                alt={items.title}
                className="details-card-image"
              />
              <button className="details-arrow left" onClick={handlePrevImage}>
                ❮
              </button>
              <button className="details-arrow right" onClick={handleNextImage}>
                ❯
              </button>
            </div>
            <div className="detail-description">
              <p>{items.detailDescription}</p>
              <br />
              <p>{items.subDescription}</p>
            </div>

            <div className="info-details p-4">
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
            <div>
              <ul className="detail-nav-sticky">
                <li>
                  <a href={"#overView"}>OverView</a>
                </li>
                <li>
                  <a href={"#Itinerary"}>Itinerary</a>
                </li>
                <li>
                  <a href={"#Inclusions"}>Inclusions</a>
                </li>
                <li>
                  <a href={"#Hotels"}>Hotels</a>
                </li>
              </ul>
            </div>
            <div id="overView" className="detail-overview">
              <h1>Overview</h1>
              <p>{items.overView}</p>
            </div>
            <div id="Itinerary" className="detail-itinerary">
              <h1>Itinerary</h1>
              <div className="itinerary-container">
                {items.qna.map((ele, index) => (
                  <div key={index} className="qna-container">
                    <div className="question">
                      <h2>{ele.question1}</h2>
                    </div>
                    <div className="answer">
                      <p>{ele.answer1} </p>
                    </div>
                    <div className="question">
                      <h2>{ele.question2}</h2>
                    </div>
                    <div className="answer">
                      <p>{ele.answer2} </p>
                    </div>
                    <div className="question">
                      <h2>{ele.question3}</h2>
                    </div>
                    <div className="answer">
                      <p>{ele.answer3}</p>
                    </div>
                    <div className="question">
                      <h2>{ele.question4}</h2>
                    </div>
                    <div className="answer">
                      <p>{ele.answer4} </p>
                    </div>
                    <div className="question">
                      <h2>{ele.question5}</h2>
                    </div>
                    <div className="answer">
                      <p>{ele.answer5} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="Inclusions" className="inclusions-container">
              <h1> Inclusion</h1>
              <h2>Package Inclusions</h2>
              <div className="inclusions">
                {items.packageInclusion.map((inc, index) => (
                  <div key={index} className="inclusion">
                    <p>
                      <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                      {inc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="exclusion-container">
              <h2>Package Exclusion</h2>
              <div className="inclusions">
                {items.packageExclusion.map((exc, index) => (
                  <div key={index} className="inclusion">
                    <p>
                      <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                      {exc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="detail-left">
            <div className="detail-price-container">
              <div className="detail-discount">
                <h1>{items.discount}</h1>
              </div>
              <div className="originalPrice">
                <span className="from">From</span>
                <span>
                  <del>{items.originalPrice}</del>
                </span>
              </div>
              <div className="finalPrice">
                <h1>{items.price}</h1>
                <span>/Adult</span>
              </div>
              <div className="availableBtn">
                <button>Check Availability</button>
              </div>
            </div>
            <div className="mt-10 text-2xl font-semibold text-center">
              <h2>Check our reviews on TripAdvisor!</h2>
            </div>
            <div className="tripAdvisor-container">
              <div className="tripAdvisor-img">
                <img
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                  alt=""
                />
              </div>
              <div className="tripAdvisor-content">
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
                  <p>"Comfortable experince"</p>
                  <p>"Nicely planned trip to bali"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;
