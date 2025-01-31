import React, { Fragment, useEffect, useState } from "react";
import {
  munnarOtherTrips,
  munnarsightseeing,
  travelPackage,
} from "../../../../assets/Data/munnar";
import { useLocation, useParams } from "react-router-dom";
import styles from "./munnarDetails.module.css";
import {
  FaBusAlt,
  FaCheckCircle,
  FaHotel,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

const MunnarDetailsPage = () => {
  const { id } = useParams();
  const [currentImages, setCurrentImages] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const [detailsData, setDetailsData] = useState([]);
  const [filteredObjects, setFilteredObjects] = useState([]);

  console.log(locationURL?.split("/")?.[2]);

  useEffect(() => {
    let str = locationURL?.split("/")?.[2];
    switch (str) {
      case "trip":
        setDetailsData(travelPackage);
        break;
      case "munnarsightseeing":
        setDetailsData(munnarsightseeing);
        break;
      case "munnarothertrips":
        setDetailsData(munnarOtherTrips);
        break;
      default:
        setDetailsData([]);
    }
  }, [locationURL]);

  useEffect(() => {
    const res = detailsData.filter((obj) => obj.id === Number(id));
    setFilteredObjects(res);
  }, [detailsData, id]);

  console.log(filteredObjects);

  const handleNextImage = (images) => {
    setCurrentImages((prevImg) =>
      prevImg === images.length - 1 ? 0 : prevImg + 1
    );
  };

  const handlePrevImages = (images) => {
    setCurrentImages((prevImg) =>
      prevImg === 0 ? images.length - 1 : prevImg - 1
    );
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!filteredObjects) {
    return <div>Package not found</div>;
  }

  return (
    <>
      {filteredObjects.map((items) => (
        <div key={items.id} className={styles["details-container"]}>
          {/* Right Side */}
          <div className={styles["detail-right"]}>
            <div className={styles["detail-title"]}>
              <h1>{items.title}</h1>
              <div>
                <div className={styles["no-days"]}>
                  <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                    <h2 className="text-white text-3xl">{items.noOfDays}</h2>
                  </div>
                  <span>Days</span>
                </div>
              </div>
            </div>
            <div className={styles["details-images-slider"]}>
              <img
                src={items.images[currentImages]}
                alt={items.title}
                className={styles["details-card-image"]}
              />
              <button
                className={`${styles["details-arrow"]} ${styles["left"]}`}
                onClick={() => handlePrevImages(items.images)}
              >
                ❮
              </button>
              <button
                className={`${styles["details-arrow"]} ${styles["right"]}`}
                onClick={() => handleNextImage(items.images)}
              >
                ❯
              </button>
            </div>

            <div
              className={
                items.detailDescription === " "
                  ? "m-0"
                  : styles["detail-description"]
              }
            >
              <p>
                {items.detailDescription === " "
                  ? null
                  : items.detailDescription}
              </p>
              <div>
                {items.subDetailDescription === " "
                  ? null
                  : items.subDetailDescription.map((desc, index) => (
                      <div index={index}>
                        {typeof desc === "string" && <p>{desc}</p>}
                        {typeof desc === "object" && (
                          <div className="mb-2">
                            <h1 className="text-2xl font-semibold mb-1 max-sm:text-[1.1rem]">
                              {desc.listTitle}
                            </h1>
                            <ul>
                              {desc.listDesc.map((item, index) => (
                                <li key={index} className="pt-1 max-sm:text-sm">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
              </div>
            </div>

            {items.tripDetails === "" ? null : (
              <div className="max-w-xl mx-auto mt-10">
                <table className="table-auto w-full border border-gray-200">
                  <tbody>
                    {Object.entries(items.tripDetails).map(
                      ([key, value], index) => (
                        <tr key={index} className="even:bg-gray-100">
                          <td className="px-4 py-2 font-bold text-gray-700 capitalize border border-gray-200">
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </td>
                          <td className="px-4 py-2 text-gray-600 border border-gray-200">
                            {value}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}

            <div className={styles["info-details"]}>
              <div className="flex gap-2 items-center">
                <FaBusAlt className="text-2xl max-sm:text-xl text-green-500" />
                <div className="flex flex-col">
                  <span className="text-[1.3rem] font-[500] max-sm:text-lg">
                    Transport
                  </span>
                  <span className="text-sm text-[#696d75] max-sm:text-sm">
                    AC Sedan Car
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <MdRestaurant className="text-2xl max-sm:text-xl text-green-500" />
                <div className="flex flex-col">
                  <span className="text-[1.3rem] max-sm:text-lg font-[500]">
                    Meals
                  </span>
                  <span className="text-sm max-sm:text-sm text-[#696d75]">
                    BreakFast
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <FaHotel className="text-2xl max-sm:text-xl text-green-500" />
                <div className="flex flex-col">
                  <span className="text-[1.3rem] max-sm:text-lg font-[500]">
                    Accomodation
                  </span>
                  <span className="text-sm max-sm:text-sm text-[#696d75]">
                    3 Star / 4 Star
                  </span>
                </div>
              </div>
            </div>

            <div className={styles["detail-nav-sticky"]}>
              <ul>
                {items.overView === " " ? null : (
                  <li>
                    <a href={"#overView"}>OverView</a>
                  </li>
                )}
                {items.itIneary === " " ? null : (
                  <li>
                    <a href={"#itIneary"}>Itinerary</a>
                  </li>
                )}
                {items.inClusions === " " ? null : (
                  <li>
                    <a href={"#inClusions"}>Inclusions</a>
                  </li>
                )}
                {items.hotels === " " ? null : (
                  <li>
                    <a href={"#hotels"}>Hotels</a>
                  </li>
                )}
              </ul>
            </div>

            <div id="overView" className={styles["detail-overview"]}>
              <h1>{items.overView === " " ? null : "OverView"}</h1>
              <p className="text-[1.1rem] max-sm:text-sm pt-3">
                {items.overView}
              </p>
            </div>

            <div id="itIneary" className={styles["detail-itinerary"]}>
              <h1>{items.itIneary === " " ? null : "Itinerary"}</h1>
              <div className={styles["itinerary-container"]}>
                {items.itIneary === " "
                  ? null
                  : items.itIneary.map((ele, index) => (
                      <div key={index} className={styles["qna-container"]}>
                        <div
                          className={styles["accordion-header"]}
                          onClick={() => toggleAccordion(index)}
                        >
                          <h3 className="text-[1.2rem]">{ele.question}</h3>
                          <span>{openIndex === index ? "-" : "+"}</span>
                        </div>
                        {openIndex === index && (
                          <div className={styles["accordion-content"]}>
                            {ele.answer.map((ans, index) => (
                              <p key={index}>{ans}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
              </div>
            </div>

            <div
              id="inClusions"
              className={styles["both-inclusions-containers"]}
            >
              <h1>Inclusions</h1>
              {items.inClusions.map((item, index) => (
                <>
                  <Fragment key={index}>
                    <div className={styles["packageInclusions-container"]}>
                      {item.packageInclusion.map((ele, index) => (
                        <div
                          key={index}
                          className={styles["packageInclusions"]}
                        >
                          <h3 className="text-[1rem] font-[500]">
                            {ele.title}
                          </h3>
                          <ul className={styles["packageInclusion"]}>
                            {ele.points.map((point, index) => (
                              <p
                                key={index}
                                className="flex items-center gap-2 text-[1rem]"
                              >
                                <FaCheckCircle className="text-green-500" />
                                <span>{point}</span>
                              </p>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </Fragment>

                  <div className={styles["packageExclusion-container"]}>
                    {item.packageExclusion.map((ele, index) => (
                      <div key={index}>
                        <h3 className="text-[1.1rem] font-[500]">
                          {ele.title}
                        </h3>
                        <ul className={styles["exclusion"]}>
                          {ele.points.map((point, index) => (
                            <p
                              key={index}
                              className="flex items-center gap-2 text-[1rem]"
                            >
                              <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" />
                              {point}
                            </p>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              ))}
            </div>

            <div id="hotels" className={styles["hotels"]}>
              <h1>{items.hotels === " " ? null : "Hotels"}</h1>
              <div>
                <table className="min-w-full table-auto border border-y-black border-collapse  text-left text-sm lg:text-base">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-b font-semibold border-gray-300">
                        ROOM TYPE
                      </th>
                      <th className="py-2 px-4 border-b font-semibold border-gray-300">
                        PLACE
                      </th>
                      <th className="py-2 px-4 border-b font-semibold border-gray-300">
                        HOTELS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.hotels.map((hotel, index) =>
                      hotel.places.map((place, placeIndex) => (
                        <tr key={`${index}-${placeIndex}`}>
                          {placeIndex === 0 && (
                            <td
                              rowSpan={hotel.places.length < 4 ? 2 : 4}
                              className="py-2 px-4 border-b border-gray-300"
                            >
                              {hotel.roomType}
                            </td>
                          )}
                          <td className="py-2 px-4 border-b border-gray-300">
                            {place.place}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-300">
                            <ul>
                              {place.hotelNames.map((name, nameIndex) => (
                                <li key={nameIndex}>{name}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Left Side */}
          <div className={styles["detail-left"]}>
            <div className={styles["detail-price-container"]}>
              <div className={styles["detail-discount"]}>
                <h1>{items.discount}</h1>
              </div>
              <div className={styles["original-price"]}>
                <span className={styles["from"]}>From</span>
                <span>
                  <del>{items.originalPrice}</del>
                </span>
              </div>
              <div className={styles["responsive-detail-price"]}>
                <div className={styles["finalPrice"]}>
                  <h1>{items.price}</h1>
                  <span>/Adult</span>
                </div>
                <div className={styles["availableBtn"]}>
                  <button>Check Availability</button>
                </div>
              </div>
            </div>

            <div
              className={`mt-10 text-2xl font-semibold text-center ${styles["review"]}`}
            >
              <h2 className="max-sm:text-sm">
                Check our reviews on TripAdvisor!
              </h2>
            </div>
            <div className={styles["tripAdvisor-container"]}>
              <div className={styles["tripAdvisor-img"]}>
                <img
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svghttps://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                  alt=""
                />
              </div>
              <div className={styles["tripAdvisor-content"]}>
                <h2>TEN TRAVELS |</h2>
                <h2>Online Travel</h2>
                <h2>Agency</h2>
                <div>
                  <p>Trip Advisor Traveler Rating</p>
                  <span className="flex items-center justify-center gap-1 text-green-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </span>
                </div>
                <div>
                  <span>Trip Advisor Review</span>
                  <p>"Ten Travel Holiday Review"</p>
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

export default MunnarDetailsPage;
