import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle, FaStar, FaBusAlt, FaStarHalfAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdRestaurant } from "react-icons/md";
import { ladakhFamilyTrips, ladakhOtherTrip } from "../../../../assets/Data/data";

import "./LadakhDetails.css";

const LadakhDetails = () => {
    const { id } = useParams();
    const [currentImage, setCurrentImage] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);

    const ladakhTrips = [...ladakhFamilyTrips, ...ladakhOtherTrip];
    const filteredObjects = ladakhTrips.filter((obj) => obj.id === Number(id));
    const ladakhPackage = filteredObjects[0];

    const handlePrevImage = (images) => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNextImage = (images) => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // If no packages match the ID, show an error message
    if (!ladakhPackage) {
        return <div className="error-message">Package not found</div>;
    }

    return (
        <div className="ladakh-details-container">
            {/* Right Section */}
            <div className="ladakh-detail-right">
                <div className="ladakh-detail-title">
                    <h1>{ladakhPackage.title}</h1>
                    <div className="ladakh-no-days">
                        <div className="bg-green-600 w-full pt-1 flex justify-center items-center">
                            <h2 className="text-white text-3xl">{ladakhPackage.noOfDays}</h2>
                        </div>
                        <span>Days</span>
                    </div>
                </div>

                {/* Image Slider */}
                <div className="ladakh-details-images-slider">
                    <img
                        src={ladakhPackage.images[currentImage]}
                        alt={ladakhPackage.title}
                        className="ladakh-details-card-image"
                    />
                    <button
                        className="ladakh-details-arrow left"
                        onClick={() => handlePrevImage(ladakhPackage.images)}
                    >
                        ❮
                    </button>
                    <button
                        className="ladakh-details-arrow right"
                        onClick={() => handleNextImage(ladakhPackage.images)}
                    >
                        ❯
                    </button>
                </div>

                {/* Description */}
                <div className="ladakh-detail-description">
                    <p>{ladakhPackage.detailDescription}</p>
                    <br />
                    <p>{ladakhPackage.subDescription}</p>
                </div>

                {/* Information Details */}
                <div className="ladakh-info-details p-4">
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

                {/* Sticky Navigation */}
                <div className="ladakh-detail-nav-sticky">
                    <ul>
                        {ladakhPackage.overview && (
                            <li>
                                <a href="#overview">Overview</a>
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

                {/* Overview Section */}
                {ladakhPackage.overview && (
                    <div id="overview" className="ladakh-detail-overview">
                        <h1>Overview</h1>
                        <p>{ladakhPackage.overview}</p>
                    </div>
                )}

                {/* Itinerary Section */}
                <div id="Itinerary" className="ladakh-detail-itinerary">
                    <h1>Itinerary</h1>
                    <div className="itinerary-container">
                        {ladakhPackage.qna.map((item, index) => (
                            <div key={index} className="ladakh-qna-container">
                                <div
                                    className="ladakh-accordion-header"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h2>{item.question}</h2>
                                    <span>{openIndex === index ? "-" : "+"}</span>
                                </div>
                                {openIndex === index && (
                                    <div className="ladakh-accordion-content">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inclusion Section */}
                <div id="Inclusions" className="ladakh-inclusions-container">
                    <h1>Package Inclusions</h1>
                    <div className="ladakh-inclusions">
                        {ladakhPackage.packageInclusion.map((inc, index) => (
                            <div key={index} className="ladakh-inclusion">
                                <p>
                                    <FaCheckCircle className="text-green-500 overflow-hidden text-xl" /> {inc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Exclusion Section */}
                <div className="ladakh-exclusion-container">
                    <h2>Package Exclusions</h2>
                    <div className="ladakh-inclusions">
                        {ladakhPackage.packageExclusion.map((exc, index) => (
                            <div key={index} className="ladakh-inclusion">
                                <p>
                                    <IoMdCloseCircle className="text-red-500 overflow-hidden text-2xl" /> {exc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hotels Section */}
                <div id="Hotels" className="ladakh-hotels-container">
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
                            {ladakhPackage.hotels.map((hotel, index) => (
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

            {/* Left Section */}
            <div className="ladakh-detail-left">
                <div className="ladakh-detail-price-container">
                    <div className="ladakh-detail-discount">
                        <h1>{ladakhPackage.discount}</h1>
                    </div>
                    <div className="ladakh-originalPrice">
                        <span className="ladakh-from">From</span>
                        <span>
                            <del>{ladakhPackage.originalPrice}</del>
                        </span>
                    </div>
                    <div className="ladakh-finalPrice">
                        <h1>{ladakhPackage.price}</h1>
                        <span>/Adult</span>
                    </div>
                    <div className="ladakh-availableBtn">
                        <button>Check Availability</button>
                    </div>
                </div>

                <div className="mt-10 text-2xl font-semibold text-center">
                    <h2>Check our reviews on TripAdvisor!</h2>
                </div>
                <div className="ladakh-tripAdvisor-container">
                    <div className="ladakh-tripAdvisor-img">
                        <img
                            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                            alt=""
                        />
                    </div>
                    <div className="ladakh-tripAdvisor-content">
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
                            <p>"Comfortable experience"</p>
                            <p>"Nicely planned trip to Bali"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LadakhDetails;