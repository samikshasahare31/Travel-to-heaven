import { useParams } from "react-router-dom";
import { travelPackage } from "../../../../../assets/Data/naintal";

import { useState } from "react";
import { FaCheckCircle, FaStar, FaBusAlt, FaStarHalfAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";
import "./NainitalDetails.css";

const NainitalDetails = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);
    const { id } = useParams();

    const nainitalObject = travelPackage.find((obj) => obj.id === Number(id));

    if (!nainitalObject) {
        return <div>Package not found</div>;
    }

    const handlePrevImage = () => {
        setCurrentImage((prevIndex) =>
            prevIndex === 0 ? nainitalObject.images.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImage((prevIndex) =>
            prevIndex === nainitalObject.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="nainital-details-container">
            <div className="nainital-detail-right">
                <div className="nainital-detail-title">
                    <h1>{nainitalObject.title}</h1>
                    <div className="nainital-no-days">
                        <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                            <h2 className="text-white text-3xl">{nainitalObject.noOfDays}</h2>
                        </div>
                        <span>Days</span>
                    </div>
                </div>

                <div className="nainital-details-images-slider">
                    <img
                        src={nainitalObject.images[currentImage]}
                        alt={nainitalObject.title}
                        className="nainital-details-card-image"
                    />
                    <button
                        className="nainital-details-arrow left"
                        onClick={handlePrevImage}
                    >
                        ❮
                    </button>
                    <button
                        className="nainital-details-arrow right"
                        onClick={handleNextImage}
                    >
                        ❯
                    </button>
                </div>

                <div className="nainital-detail-description">
                    <p>{nainitalObject.detailDescription}</p>
                    <br />
                    <p>{nainitalObject.subDescription}</p>
                </div>

                <div className="nainital-info-details p-4">
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

                <div className="nainital-detail-nav-sticky">
                    <ul>
                        {nainitalObject.overView && (
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

                <div id="overView" className="nainital-detail-overview">
                    <h1>{nainitalObject.overView ? "OverView" : null}</h1>
                    <p>{nainitalObject.overView}</p>
                </div>

                <div id="Itinerary" className="nainital-detail-itinerary">
                    <h1>Itinerary</h1>
                    <div className="nainital-itinerary-container">
                        {nainitalObject.qna.map((ele, index) => (
                            <div key={index} className="nainital-qna-container">
                                <div
                                    className="nainital-accordion-header"
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
                                        className="nainital-accordion-content"
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

                <div id="Inclusions" className="nainital-inclusions-container">
                    <h1> Inclusion</h1>
                    <h2>Package Inclusions</h2>
                    <div className="nainital-inclusions">
                        {nainitalObject.packageInclusion.map((inc, index) => (
                            <div key={index} className="nainital-inclusion">
                                <p>
                                    <FaCheckCircle className="text-green-500 overflow-hidden text-xl" /> {inc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="nainital-exclusion-container">
                    <h2>Package Exclusion</h2>
                    <div className="nainital-inclusions">
                        {nainitalObject.packageExclusion.map((exc, index) => (
                            <div key={index} className="nainital-inclusion">
                                <p>
                                    <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" /> {exc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="Hotels" className="nainital-hotels-container">
                    <h1>Hotels</h1>
                    {nainitalObject.hotels && nainitalObject.hotels.length > 0 ? (
                        <table className="hotels-table">
                            <thead>
                                <tr>
                                    <th>Place</th>
                                    <th>Hotel</th>
                                    <th>Room Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nainitalObject.hotels.map((hotels, index) => (
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

            <div className="nainital-detail-left">
                <div className="nainital-detail-price-container">
                    <div className="nainital-detail-discount">
                        <h1>{nainitalObject.discount}</h1>
                    </div>
                    <div className="nainital-originalPrice">
                        <span className="nainital-from">From</span>
                        <span>
                            <del>{nainitalObject.originalPrice}</del>
                        </span>
                    </div>
                    <div className="nainital-finalPrice">
                        <h1>{nainitalObject.price}</h1>
                        <span>/Adult</span>
                    </div>
                    <div className="nainital-availableBtn">
                        <button>Check Availability</button>
                    </div>
                </div>

                <div className="mt-10 text-2xl font-semibold text-center">
                    <h2>Check our reviews on TripAdvisor!</h2>
                </div>
                <div className="nainital-tripAdvisor-container">
                    <div className="nainital-tripAdvisor-img">
                        <img
                            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                            alt=""
                        />
                    </div>
                    <div className="nainital-tripAdvisor-content">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NainitalDetails;
