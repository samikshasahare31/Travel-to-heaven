import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaHotel } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import {
  andmatour,
  watertourPackages,
} from "../../../../assets/Data/Andmantour";
import "./Detailsandaman.css";

const Detailsandaman = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [detailsData, setDetailsData] = useState([]);
  const [filteredObjects, setFilteredObjects] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  console.log("mmml", locationURL?.split("/"));

  console.log("mmml", locationURL?.split("/")?.[1]);
  useEffect(() => {
    let str = locationURL?.split("/")?.[2];
    switch (str) {
      case "andmatour":
        setDetailsData(andmatour);
        break;
      case "watercontainer":
        setDetailsData(watertourPackages);
        break;
      default:
        setDetailsData([]);
        break;
    }
  }, [locationURL]);

  useEffect(() => {
    const res = detailsData?.filter((obj) => obj.id === Number(id));
    setFilteredObjects(res);
  }, [detailsData, id]);

  if (filteredObjects.length === 0) {
    return <div>Package not found</div>;
  }

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
    <>
      {filteredObjects.map((items, index) => (
        <div key={index} className="andaman-details-container">
          <div className="andamn-detail-right">
            <div className="andamn-detail-title">
              <h1>{items.title}</h1>
              <div>
                <div className="andamn-no-days">
                  <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                    <h2 className="text-white text-3xl">{items.noOfDays}</h2>
                  </div>
                  <span>Days</span>
                </div>
              </div>
            </div>
            {items.images && items.images.length > 0 && (
              <div className="andamn-details-images-slider">
                <img
                  src={items.images[currentImage]}
                  alt={items.title}
                  className="andamn-details-card-image"
                />
                <button
                  className="andamn-details-arrow left"
                  onClick={() => handlePrevImage(items.images)}
                >
                  ❮
                </button>
                <button
                  className="andamn-details-arrow right"
                  onClick={() => handleNextImage(items.images)}
                >
                  ❯
                </button>
              </div>
            )}
            <div className="andamn-detail-description">
              <p>{items.detailDescription}</p>
              <br />
              <p>{items.subDescription}</p>
              <br />
              <p>{items.lastDescription}</p>
            </div>

            <div className="andamn-info-details p-4">
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
            <div className="andamn-detail-nav-sticky">
              <ul>
                {items.overView === " " ? null : (
                  <li>
                    <a href={"#overView"}>OverView</a>
                  </li>
                )}

                <li>
                  <a href={"#Itinerary"}>Itinerary</a>
                </li>
                <li>
                  <a href={"#andamn-Inclusions"}>Inclusions</a>
                </li>
                <li>
                  <a href={"#Hotels"}>Hotels</a>
                </li>
                <li>
                  <a href={"#Optional"}>Optional Services</a>
                </li>
              </ul>
            </div>
            <div id="overView" className="andamn-detail-overview">
              <h1> {items.overView === " " ? null : "OverView"}</h1>
              <p>{items.overView}</p>
            </div>
            <div id="expect" className="andamn-detail-expect">
              <h1>What is Expect</h1>
              {items.Expect.map((inc, index) => (
                <div key={index} className="andamn-expect">
                  <p>
                    <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                    {inc}
                  </p>
                </div>
              ))}
            </div>
            <div id="Itinerary" className="andamn-detail-itinerary">
              <h1>Itinerary</h1>
              <div className="andamn-itinerary-container">
                {items.qna.map((ele, index) => (
                  <div key={index} className="andamn-qna-container">
                    <div
                      className="andamn-accordion-header"
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
                        className="andamn-accordion-content"
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

            <div id="andamn-Inclusions" className="andamn-inclusions-container">
              <h1> Inclusion</h1>
              <h2>The Trip Cost Includes</h2>
              <div className="andamn-inclusions">
                {items.packageInclusion.map((inc, index) => (
                  <div key={index} className="andamn-inclusion">
                    <p>
                      <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                      {inc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="andamn-exclusion-container">
              <h2>The Trip Cost Excludes</h2>
              <div className="andamn-exclusion">
                {items.packageExclusion.map((exc, index) => (
                  <div key={index} className="andamn-exclusion">
                    <p>
                      <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                      {exc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotel */}
            <div id="Hotels">
              <div className="andamn-hotel-container">
                <h1>Hotel Name</h1>
              </div>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Location</th>
                    <th scope="col">Hotel / Resort Name</th>
                    <th scope="col">Room Type</th>
                  </tr>
                </thead>
                <tbody>
                  {items.hotelData.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.location}</td>
                        <td>{data.names}</td>
                        <td>{data.roomType}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* optional */}
            <div id="Optional">
              <div className="optional-container">
                <h1>
                  Available Activities Based on Location: @ Additional Cost
                </h1>
              </div>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Location</th>
                    <th scope="col">AVAILABLE ACTIVITY</th>
                    <th scope="col">ACTIVITY COST</th>
                  </tr>
                </thead>
                <tbody>
                  {items.availableActivities.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.location}</td>
                        <td>{data.activity}</td>
                        <td>{data.cost}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="andamn-detail-left">
            <div className="andaman-detail-price-container">
              <div className="andamn-detail-discount">
                <h1>{items.discount}</h1>
              </div>
              <div className="andamn-originalPrice">
                <span className="andamn-from">From</span>
                <span>
                  <del>{items.originalPrice}</del>
                </span>
              </div>
              <div className="andamn-finalPrice">
                <h1>{items.price}</h1>
                <span>/Adult</span>
              </div>
              <div className="andamn-availableBtn">
                <button>Check Availability</button>
              </div>
            </div>
            <div className="mt-10 text-2xl font-semibold text-center">
              <h2>Check our reviews on TripAdvisor!</h2>
            </div>
            <div className="andamn-tripAdvisor-container">
              <div className="andamn-tripAdvisor-img">
                <img
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                  alt=""
                />
              </div>
              <div className="andamn-tripAdvisor-content">
                <h2>Ten Travel |</h2>
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
                  <p>"Ten Travel Review"</p>
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

export default Detailsandaman;
