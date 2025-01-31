import { useParams } from "react-router-dom";
import {
  maldives,
  maldivesOtherTrips,
  maldivesWaterVilla,
} from "../../../../assets/Data/maldives";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import "./detail.css";

const MaldivesDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const { id } = useParams();

  const allTrips = [...maldives, ...maldivesOtherTrips, ...maldivesWaterVilla];
  const filteredObjects = allTrips.filter((obj) => obj.id === Number(id));

  const handlePrevImage = (images) => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (images) => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!filteredObjects) {
    return <div>Package not found</div>;
  }

  return (
    <>
      {filteredObjects.map((items, index) => (
        <div key={index} className="maldives-details-container">
          <div className="maldives-detail-right">
            <div className="maldives-detail-title">
              <h1>{items.title}</h1>
              <div>
                <div className="maldives-no-days">
                  <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                    <h2 className="text-white text-3xl">{items.noOfDays}</h2>
                  </div>
                  <span>Days</span>
                </div>
              </div>
            </div>
            <div className="maldives-details-images-slider">
              <img
                src={items.images[currentImage]}
                alt={items.title}
                className="maldives-details-card-image"
              />
              <button
                className="details-arrow left"
                onClick={() => handlePrevImage(items.images)}>
                ❮
              </button>
              <button
                className="details-arrow right"
                onClick={() => handleNextImage(items.images)}>
                ❯
              </button>
            </div>
            <div className="maldives-detail-description">
              <h1>
                <strong>{items.details} </strong>
              </h1>
              <p>{items.detailDescription}</p>
              <br />
              <p>{items.subDescription}</p>
            </div>
            <div className="accommodation">
              <h1>ACCOMMODATION: {items.accommodationTitle}</h1>
              <p>{items.accommodation} </p>
            </div>
            {items.AccommodationObj === " " ? (
              " "
            ) : (
              <div className="accommodation">
                {items.AccommodationObj.map((ele, index) => (
                  <div key={index} className="mt-4">
                    <h1 className="mb-2 ml-1">{ele.title} </h1>
                    <lu>
                      <li className="mb-1 ml-4">{ele.text1}</li>
                      <li className="ml-4">{ele.text2} </li>
                    </lu>
                  </div>
                ))}
              </div>
            )}
            <div className="maldives-villas">
              <h1>{items.AdjoiningTitle} </h1>
              <p>{items.Adjoining} </p>
              <br />
              <h1>{items.StandaloneTitle}</h1>
              <p>{items.Standalone} </p>
              <br />
              <h1>{items.JacuzziBeachVillasTitle}</h1>
              <p>{items.JacuzziBeachVillas} </p>
              <br />
              <h1>{items.JacuzziWaterVillasTitle}</h1>
              <p>{items.JacuzziWaterVillas} </p>
              <h1>{items.DuniyeSpaTitle}</h1>
              <p>{items.DuniyeSpa} </p>
            </div>

            <div className="maldives-info-details p-4">
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
            <div className="maldives-detail-nav-sticky">
              <ul>
                {items.overView === " " ? null : (
                  <li>
                    <a href={"#overView"}>OverView</a>
                  </li>
                )}

                {items.Itinerary == " " ? (
                  " "
                ) : (
                  <li>
                    <a href={"#Itinerary"}>Itinerary</a>
                  </li>
                )}
                {items.packageInclusion === " " ? (
                  " "
                ) : (
                  <li>
                    <a href={"#Inclusions"}>Inclusions</a>
                  </li>
                )}
                {items.hotels === " " ? (
                  " "
                ) : (
                  <li>
                    <a href={"#Hotels"}>Hotels</a>
                  </li>
                )}
              </ul>
            </div>
            <div id="overView" className="maldives-detail-overview">
              <h1> {items.overView === " " ? null : "OverView"}</h1>
              <p>{items.overView}</p>
            </div>

            {items.Itinerary === " " ? null : (
              <div id="Itinerary" className="maldives-detail-itinerary">
                <h1>Itinerary</h1>

                <div className="maldives-inclusions-container">
                  {items.qna.map((ele, index) => (
                    <div key={index} className="maldives-qna-container">
                      <div
                        className="maldives-accordion-header"
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
                          className="maldives-accordion-content"
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
            )}

            <div id="Inclusions" className="maldives-inclusions-container">
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
            <div className="maldives-exclusion-container">
              <h2>Package Exclusion</h2>
              <div className="inclusions">
                {items.packageExclusion.map((exc, index) => (
                  <div key={index} className="maldives-inclusion">
                    <p>
                      <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                      {exc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="maldives-detail-left ">
            <div className="maldives-detail-price-container">
              <div className="detail-discount">
                {items.discount === " " ? " " : <h1>{items.discount}</h1>}
              </div>
              <div className="maldives-originalPrice">
                <div className="flex justify-items-start gap-4 items-center">
                  <div className="finalPrice">
                    <h5 className="from">From</h5>
                    <h1>{items.price}</h1>
                    <span>/ Adult</span>
                  </div>

                  {items.child === " " ? (
                    " "
                  ) : (
                    <>
                      <div className="finalPrice">
                        <span className="from">From</span>
                        <h1>{items.child}</h1>
                        <span>/Child 6 - 12 Yrs</span>
                      </div>
                    </>
                  )}
                </div>
                {items.child2 === " " ? (
                  " "
                ) : (
                  <>
                    <span className="from">From</span>
                    <span></span>
                    <div className="finalPrice">
                      <h1>{items.child2}</h1>
                      <span>/ Child below 6 Yrs</span>
                    </div>
                  </>
                )}
              </div>
              <div>
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
              <div className="tripAdvisor-content text-center">
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

export default MaldivesDetails;
