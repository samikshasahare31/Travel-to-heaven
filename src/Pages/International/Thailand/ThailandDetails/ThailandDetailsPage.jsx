import React, { Fragment, useState } from "react";
import { Thailand } from "../../../../assets/Data/ThailandData";
import { useParams } from "react-router-dom";
import styles from "./thailandDetails.module.css";
import {
  FaBusAlt,
  FaCheckCircle,
  FaHotel,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";

const ThailandDetailsPage = () => {
  const [currentImages, setCurrentImages] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const { id } = useParams();
  const filteredObjects = Thailand.filter((obj) => obj.id === Number(id));
  console.log(filteredObjects);

  const handlePrevImage = (images) => {
    setCurrentImages((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (images) => {
    setCurrentImages((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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
        <div key={index} className={styles["details-container"]}>
          {/* Right side */}
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
                onClick={() => handlePrevImage(items.images)}>
                ❮
              </button>
              <button
                className={`${styles["details-arrow"]} ${styles["right"]}`}
                onClick={() => handleNextImage(items.images)}>
                ❯
              </button>
            </div>

            <div
              className={
                items.detailDescription === " "
                  ? "m-0"
                  : styles["detail-description"]
              }>
              <p>
                {items.detailDescription === " "
                  ? null
                  : items.detailDescription}
              </p>
              <br />
              <p>
                {items.subDescription === " " ? null : items.subDescription}
              </p>
            </div>

            <div className={styles["detail-destination"]}>
              {items.destination === " "
                ? null
                : items.destination &&
                  items.destination.map((item, index) => (
                    <div key={index}>
                      <h1>{item.place}</h1>

                      {item.favPlaces === " "
                        ? item.desc.map((ele, index) => (
                            <p key={index} className="text-[1.1rem]">
                              {ele}
                            </p>
                          ))
                        : item.favPlaces.map((ele, index) => (
                            <div key={index}>
                              <h1>{ele.title}</h1>
                              <p className="text-[1.1rem]">{ele.desc}</p>
                            </div>
                          ))}
                    </div>
                  ))}
            </div>

            <div className={styles["info-details"]}>
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

            <div className={styles["detail-nav-sticky"]}>
              <ul>
                {items.overView === " " ? null : (
                  <li>
                    <a href={"#overView"}>OverView</a>
                  </li>
                )}
                {items.itIneary === " " ? null : (
                  <li>
                    <a href={"#itIneary"}>Itineary</a>
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

            {/* Mine css */}
            <div id="overView" className={styles["detail-overview"]}>
              <h1>{items.overView === " " ? null : "OverView"}</h1>
              <div>
                {items.overView.map((list, index) => (
                  <div key={index}>
                    {typeof list === "string" ? (
                      <p className="text-[1.1rem] pt-3">{list}</p>
                    ) : (
                      list && (
                        <div>
                          <h3 className="text-md font-semibold text-[#6b6b74]">
                            {list.listTitle}
                          </h3>
                          <ul>
                            {list.listItems.length === 1
                              ? list.listItems.map((item, index) => (
                                  <li
                                    key={index}
                                    className="list-none text-[#75757d]">
                                    {item}
                                  </li>
                                ))
                              : list.listItems.map((item, index) => (
                                  <li
                                    key={index}
                                    className="list-disc text-[#80818b]">
                                    {item}
                                  </li>
                                ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
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
                          onClick={() => toggleAccordion(index)}>
                          <h2>{ele.question}</h2>
                          <span>{openIndex === index ? "-" : "+"}</span>
                        </div>
                        {openIndex === index && (
                          <div className={styles["accordion-content"]}>
                            <p>{ele.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
              </div>
            </div>

            <div
              id="inClusions"
              className={styles["both-inclusions-containers"]}>
              <h1>Inclusions</h1>
              {items.inClusions.map((item, index) => (
                <>
                  <Fragment key={index}>
                    <div className={styles["packageInclusions-container"]}>
                      {item.packageInclusion.map((ele, index) => (
                        <div
                          key={index}
                          className={styles["packageInclusions"]}>
                          <h3 className="text-[1.1rem] font-[500]">
                            {ele.title}
                          </h3>
                          <ul className={styles["packageInclusion"]}>
                            {ele.points.map((point, index) => (
                              <p
                                key={index}
                                className="flex items-center gap-2 text-[1rem]">
                                <FaCheckCircle className="text-green-500 overflow-hidden text-2xl" />
                                {point}
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
                              className="flex items-center gap-2 text-[1rem]">
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
              <h1>Hotel</h1>
              <div>
                <table className="min-w-full table-auto border-collapse  text-left text-sm lg:text-base">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-b font-semibold border-gray-300">
                        PLACE
                      </th>
                      <th className="py-2 px-4 border-b font-semibold border-gray-300">
                        HOTEL
                      </th>
                      <th className="py-2 px-4 border-b font-semibold border-gray-300">
                        ROOM TYPE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.hotels.map((hotel, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 border-b border-gray-300">
                          {hotel.place}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-300">
                          {hotel.hotelName}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-300">
                          {hotel.roomType}
                        </td>
                      </tr>
                    ))}
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
               
              </div>
            </div>
            <div
              className={`mt-10 text-2xl font-semibold text-center ${styles["review"]}`}
            >
              <h2>Check our reviews on TripAdvisor!</h2>
            </div>
            <div className={styles["tripAdvisor-container"]}>
              <div className={styles["tripAdvisor-img"]}>
                <img
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svghttps://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                  alt=""
                />
              </div>
              <div className={styles["tripAdvisor-content"]}>
                <h2>Travel to Heavens</h2>

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
                  <p>"Travel to Heaven Holiday Review"</p>
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

export default ThailandDetailsPage;
