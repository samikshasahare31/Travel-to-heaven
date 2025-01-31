import React from "react";
import { BiCalendar } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { packages } from "../../assets/Data/homePage";
import "./Home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()


  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue); 
    }
  };

  return (
    <div>
      <section>
      <div className="video-background-container">
      <video
        className="video-background"
        src="./video/videoplayback.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>Enjoy the immersive background video experience.</p>
      </div>
    </div>
    
    
        <div className="relative my-[-3rem] mx-auto bg-white shadow-lg rounded-lg p-2 flex flex-col justify-between sm:flex-row items-center gap-4 w-11/12 md:w-4/5 lg:w-3/4">
          {/* Destination Input */}
          <div className="flex flex-col w-full sm:w-1/3">
            <label className="text-gray-500 text-sm mb-1">DESTINATION</label>
            <div className="flex items-center py-2">
              <span className="text-green-500 text-lg material-icons">
                <CiLocationOn />
              </span>
              <select   onChange={handleChange}
      defaultValue="" className="flex-1 outline-none ml-2 text-gray-700">
                <option value="" disabled selected>
                  Destination
                </option>
                <option value="/andaman-tour" onClick={()=>navigate('')}>Andaman Tour</option>
                <option value="/india/goa">Goa</option>
                <option value="/india/sikkim">Sikkim</option>
                <option value="/india/darjeeling">Darjeeling</option>
                <option value="/kasol">Kasol</option>
                <option value="/india/kashmir">Kashmir</option>
                <option value="/munnar">Munnar</option>
                <option value="/india/tamilnadu/Ooty">Ooty</option>
                <option value="/india/tamilnadu/Kodaikanal">kodaikanal</option>
                <option value="/india/ladakh">ladakh</option>
                <option value="/india/uttarakhand/nainital">ainital</option>
                <option value="/india/uttarakhand/rishikesh">Rishikesh</option>
               
              </select>
            </div>
          </div>

          {/* Duration Input */}
          <div className="flex flex-col w-full sm:w-1/3">
            <label className="text-gray-500 text-sm mb-1">DURATION</label>
            <div className="flex items-center py-2">
              <span className="text-green-500 text-lg material-icons">
                <BiCalendar />
              </span>
              <select className="flex-1 outline-none ml-2 text-gray-700">
                <option value="" disabled selected>
                  Duration
                </option>
                <option value="1day">1 Day</option>
                <option value="3days">3 Days</option>
                <option value="1week">1 Week</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-green-500 text-white w-full sm:w-auto px-6 py-3 rounded-lg hover:bg-green-600">
            SEARCH
          </button>
        </div>
      </section>
      <section>
        <div className="px-6 mt-4 py-12 md:py-20 bg-white flex flex-col md:flex-row md:justify-between">
          {/* Information Section */}
          <div className="mr-4 md:w-1/2">
            <h2 className="text-2xl md:text-4xl  text-gray-800">
              Thousands of happy families have travelled with us!
            </h2>
            <div className="mt-2 w-20 h-1 bg-green-500"></div>
            <p className="mt-4 text-gray-600 text-md leading-relaxed text-lg items-center">
            Travel to Heaven | Online Travel Agency was founded with the simple
              goal of creating happy travel experiences, and since then, it has
              been empowering Indian tourists. By providing a Offering a wide
              choice of first-rate travel services at reliable and reasonably
              priced costs, it guarantees that everyone can enjoy the pleasures
              of travel. Its specially crafted couple packages revive the
              enchantment of newlywed happiness by fostering a romantic
              ambiance.
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Check Flights For your Trip
            </h3>

            <div className="mt-4 space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="from"
                  className="text-sm font-medium text-gray-600"
                >
                  From
                </label>
                <input
                  type="text"
                  id="from"
                  placeholder="Enter departure city"
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="to"
                  className="text-sm font-medium text-gray-600"
                >
                  To
                </label>
                <input
                  type="text"
                  id="to"
                  placeholder="Enter destination city"
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="return"
                    name="trip"
                    className="mr-2"
                  />
                  <label htmlFor="return" className="text-sm text-gray-600">
                    Return
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="one-way"
                    name="trip"
                    className="mr-2"
                    defaultChecked
                  />
                  <label htmlFor="one-way" className="text-sm text-gray-600">
                    One way
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-3 md:flex-col lg:flex-row md:gap-3">
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="depart"
                    className="text-sm font-medium text-gray-600"
                  >
                    Depart
                  </label>
                  <input
                    type="date"
                    id="depart"
                    className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div className="flex flex-col flex-1 mt-0 md:mt-0">
                  <label
                    htmlFor="return-date"
                    className="text-sm font-medium text-gray-600"
                  >
                    Return
                  </label>
                  <input
                    type="date"
                    id="return-date"
                    className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
              </div>

              <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600">
                Search flights ✈️
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="flex flex-col justify-center items-center mb-5">
          <h2 className="text-2xl md:text-4xl text-center text-gray-800">
            Our Best Sellers Packages
          </h2>
          <div className="w-24 h-1 items-center bg-green-500"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative bg-cover bg-center h-64 rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${pkg.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
              <div className="absolute top-3 left-3 bg-green-500 text-white text-sm px-2 py-1 rounded">
                {pkg.price}
              </div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-lg font-semibold">{pkg.title}</h3>
                <p className="text-sm text-white">{pkg.duration}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-5">
          <button className="text-lg text-green-700 capitalize hover:bg-green-700 transition-transform hover:text-white border-2 px-3 rounded-md py-2 border-green-600">
            View all packages
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
