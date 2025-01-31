import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import "./detailsKashmirPage.css";
import { kashmirPackages } from "../../../../assets/Data/data";

const DetailsKashmir = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const { id } = useParams();

  const filteredObjects = kashmirPackages.filter(
    (obj) => obj.id === Number(id)
  );
  console.log(",.,.dsmfewisufuew", kashmirPackages);
  console.log("0000", filteredObjects);

  console.log(filteredObjects);

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
        <div key={index} className="Kashmir-details-container">
          <div className="Kashmir-detail-right">
            <div className="Kashmir-detail-title">
              <h1>{items.title}</h1>
              <div>
                <div className="Kashmir-no-days">
                  <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                    <h2 className="text-white text-3xl">{items.noOfDays}</h2>
                  </div>
                  <span>Days</span>
                </div>
              </div>
            </div>
            <div className="Kashmir-details-images-slider">
              <img
                src={items.images[currentImage]}
                alt={items.title}
                className="Kashmir-details-card-image"
              />
              <button
                className="Kashmir-details-arrow left"
                onClick={() => handlePrevImage(items.images)}>
                ❮
              </button>
              <button
                className="Kashmir-details-arrow right"
                onClick={() => handleNextImage(items.images)}>
                ❯
              </button>
            </div>

            <div className="Kashmir-info-details p-4">
              <div className="flex gap-2 ">
                <FaBusAlt className="text-2xl text-green-500" />
                <div>
                  <p>Transport</p>
                  <h1>Non Ac Car / SUV </h1>
                </div>
              </div>
              <div className="flex gap-2">
                <MdRestaurant className="text-2xl text-green-500" />
                <div>
                  <p>Meals</p>
                  <h1>Breakfast & Dinner</h1>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="icon-holder text-2xl text-green-500">
                  <svg
                    fill="currentColor"
                    data-prefix="fas"
                    data-icon="hotel"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-inline--fa"
                    viewBox="0 0 512 512"
                    height="24"
                    width="24">
                    <path d="M480 0C497.7 0 512 14.33 512 32C512 49.67 497.7 64 480 64V448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512H304V448H208V512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V64C14.33 64 0 49.67 0 32C0 14.33 14.33 0 32 0H480zM112 96C103.2 96 96 103.2 96 112V144C96 152.8 103.2 160 112 160H144C152.8 160 160 152.8 160 144V112C160 103.2 152.8 96 144 96H112zM224 144C224 152.8 231.2 160 240 160H272C280.8 160 288 152.8 288 144V112C288 103.2 280.8 96 272 96H240C231.2 96 224 103.2 224 112V144zM368 96C359.2 96 352 103.2 352 112V144C352 152.8 359.2 160 368 160H400C408.8 160 416 152.8 416 144V112C416 103.2 408.8 96 400 96H368zM96 240C96 248.8 103.2 256 112 256H144C152.8 256 160 248.8 160 240V208C160 199.2 152.8 192 144 192H112C103.2 192 96 199.2 96 208V240zM240 192C231.2 192 224 199.2 224 208V240C224 248.8 231.2 256 240 256H272C280.8 256 288 248.8 288 240V208C288 199.2 280.8 192 272 192H240zM352 240C352 248.8 359.2 256 368 256H400C408.8 256 416 248.8 416 240V208C416 199.2 408.8 192 400 192H368C359.2 192 352 199.2 352 208V240zM256 288C211.2 288 173.5 318.7 162.1 360.2C159.7 373.1 170.7 384 184 384H328C341.3 384 352.3 373.1 349 360.2C338.5 318.7 300.8 288 256 288z"></path>
                  </svg>
                </span>
                <div>
                  <p>Accomodation</p>
                  <h1>3 Star Category Hotels</h1>
                </div>
              </div>
            </div>
            <div className="Kashmir-detail-nav-sticky">
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
                  <a href={"#Kashmir-Inclusions"}>Inclusions</a>
                </li>
                <li>
                  <a href={"#Hotels"}>Hotels</a>
                </li>
                <li>
                  <a href={"#OptionalServices"}>Optional Services</a>
                </li>
              </ul>
            </div>
            <div id="overView" className="Kashmir-detail-overview">
              <h1>OverView</h1>
              <p>KASHMIR TOUR (04 NIGHTS AND 05 DAYS)</p>
              <div className="d-flex ">
                <div className="mr-5">
                  <p>
                    <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                  </p>
                  <p>
                    <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                  </p>
                  <p>
                    <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                  </p>
                </div>
                <div className="text">
                  <p>(02 Nights Srinagar in Hotel)</p>
                  <p>(01 Night Pahalgam in Hotel)</p>
                  <p>(01 Night Srinagar in Houseboat) </p>
                </div>
              </div>
              <p>
                Srinagar | Local Sightseeing | Gulmarg | Pahalgam | Sonamarg |
                Srinagar | Shikara Ride
              </p>
              <p>
                All transfers and Local Sightseeing by Innova including all toll
                taxes, driver allowance, /MAPAI Plan
              </p>
            </div>

            <div id="Itinerary" className="Kashmir-detail-itinerary">
              <h1>Itinerary</h1>
              <div className="Kashmir-itinerary-container">
                {items.qna.map((ele, index) => (
                  <div key={index} className="Kashmir-qna-container">
                    <div
                      className="Kashmir-accordion-header"
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
                        className="Kashmir-accordion-content"
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

            <div
              id="Kashmir-Inclusions"
              className="Kashmir-inclusions-container">
              <h1> Inclusion</h1>
              <h2>The Trip Cost Includes</h2>
              <div className="Kashmir-inclusions">
                {items.packageInclusion.map((inc, index) => (
                  <div key={index} className="Kashmir-inclusion">
                    <p>
                      <FaCheckCircle className="text-green-500 overflow-hidden text-xl" />{" "}
                      {inc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="Kashmir-exclusion-container">
              <h2>The Trip Cost Excludes</h2>
              <div className="Kashmir-exclusion">
                {items.packageExclusion.map((exc, index) => (
                  <div key={index} className="Kashmir-exclusion">
                    <p>
                      <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />{" "}
                      {exc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/*  hotel*/}
            <div id="Hotels">
              <div className="Kashmir-hotel-container">
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
            {/*optional  */}

            <div id="OptionalServices">
              <div className="optional-container">
                <h1>
                  Supplement Cost for other Services which is not Included:
                </h1>
                <div>
                  <p>
                    Note: As per Taxi-Union Restriction, our vehicle wouldn’t be
                    allowed to do Sightseeing of Gulmarg, Pahalgam & Sonmarg;
                    Guest has to take union vehicle on a direct payment basis.
                    Either we can arrange as mentioned in the below supplement
                    cost Column.
                  </p>
                </div>
              </div>
              <div>
                <li>Gardens and Monument Entry Fee @ Rs 150 / Person</li>
                <li>
                  Fish Point, Zero Point, Zojila Pass & Baltal Sightseeing @ Rs
                  5500/ 8-Seater Cab
                </li>
                <li>
                  Kargil War Memorial ( Drass ), Zero Point & Zojila Pass @ Rs
                  8000/ 8-Seater Cab{" "}
                </li>
                <li>
                  Thajiwas Glacier Sightseeing at Sonmarg (By Pony Ride) @ Rs
                  800/ Person
                </li>
                <li>Gondola ride ticket up to First Phase @ Rs 800/ Person</li>
                <li>
                  Gondola ride ticket both First & Second Phase @ Rs 1800/
                  Person
                </li>
                <li>River Rafting at Pahalgam @ Rs 500/ Person</li>
                <li>
                  Aru Valley, Betaab valley & Chandanwari Sightseeing @ Rs 2500/
                  8-Seater Cab
                </li>
              </div>
            </div>
          </div>
          <div className="Kashmir-detail-left">
            <div className="Kashmir-detail-price-container">
              <div className="Kashmir-detail-discount">
                <h1>{items.discount}</h1>
              </div>
              <div className="Kashmir-originalPrice">
                <span className="Kashmir-from">From</span>
                <span>
                  <del>{items.originalPrice}</del>
                </span>
              </div>
              <div className="Kashmir-finalPrice">
                <h1>{items.price}</h1>
                <span>/Adult</span>
              </div>
              <div className="Kashmir-availableBtn">
                <button>Check Availability</button>
              </div>
            </div>
            <div className="mt-10 text-2xl font-semibold text-center">
              <h2>Check our reviews on TripAdvisor!</h2>
            </div>
            <div className="Kashmir-tripAdvisor-container">
              <div className="Kashmir-tripAdvisor-img">
                <img
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                  alt=""
                />
              </div>
              <div className="Kashmir-tripAdvisor-content">
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
                  <p>"Trip to Kashmir"</p>
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

export default DetailsKashmir;
