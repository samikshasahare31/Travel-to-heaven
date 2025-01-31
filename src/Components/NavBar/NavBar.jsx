import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isIndiaSubmenuOpen, setIndiaSubmenuOpen] = useState(false);
  const [isHimachalSubmenuOpen, setHimachalSubmenuOpen] = useState(false);
  const [isKeralaSubmenuOpen, setKeralaSubmenuOpen] = useState(false);
  const [isTamilNaduSubmenuOpen, setTamilNaduSubmenuOpen] = useState(false);
  const [isActivitiesSubmenuOpen, setActivitiesSubmenuOpen] = useState(false);
  const [isInternationalSubmenuOpen, setInternationalSubmenuOpen] = useState(false);
  const [isUttarakhandSubmenuOpen, setUttarakhandSubmenuOpen] = useState(false);

  const indiaMenuRef = useRef(null); 
  const indiaDropdownRef = useRef(null); 
  const internationalMenuRef = useRef(null); 
  const internationalDropdownRef = useRef(null); 
  const activitiesMenuRef = useRef(null); 
  const activitiesDropdownRef = useRef(null); 

  const activeStyle = "text-white font-bold";
  const inactiveStyle = "text-black font-small";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        indiaMenuRef.current && !indiaMenuRef.current.contains(event.target) &&
        indiaDropdownRef.current && !indiaDropdownRef.current.contains(event.target)
      ) {
        setIndiaSubmenuOpen(false);
      }

      if (
        internationalMenuRef.current && !internationalMenuRef.current.contains(event.target) &&
        internationalDropdownRef.current && !internationalDropdownRef.current.contains(event.target)
      ) {
        setInternationalSubmenuOpen(false);
      }
      if (
        activitiesMenuRef.current && !activitiesMenuRef.current.contains(event.target) &&
        activitiesDropdownRef.current && !activitiesDropdownRef.current.contains(event.target)
      ) {
        setActivitiesSubmenuOpen(false);
      }
     
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  
  return (
    <div>
<div className="flex flex-col md:flex-row md:justify-between md:items-center px-6 md:px-36">
  {/* logo */}

</div>
      {/* Desktop */}
      <div className="hidden md:flex justify-center items-center bg-gray-400 px-6 py-4 shadow-md">
        <div className="flex gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline hover:text-white` } >
            HOME
          </NavLink>
          
          <div className="relative mx-2" >
            <div className="flex">
            <NavLink
              to="/india"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline hover:text-white` }>
              <button className="block ">INDIA</button>
            </NavLink>
            <button
              className={`${inactiveStyle} no-underline hover:no-underline focus:no-underline`}
              onClick={() => setIndiaSubmenuOpen(!isIndiaSubmenuOpen)}  ref={indiaMenuRef}>
              <span className="ml-2">&#9660;</span>
            </button>
            </div>
            {isIndiaSubmenuOpen && (
              <div className="absolute  bg-gray-100 mx-2 w-40 shadow-lg z-50 mt-4"  ref={indiaDropdownRef}>
                <NavLink
                  to="/andaman-tour"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setIndiaSubmenuOpen(false)} >
                  <button className="block px-4  justify-center items-center py-2 text-left hover:bg-gray-300">
                    Andaman Tour
                  </button>
                </NavLink>
                <button
                  className="block px-3 py-2 justify-center items-center flex text-left hover:bg-gray-300 no-underline hover:no-underline focus:no-underline"
                  onClick={() =>
                    setHimachalSubmenuOpen(!isHimachalSubmenuOpen) }>
                  Himachal <span className="ml-6">&#9654;</span>
                </button>
                {isHimachalSubmenuOpen && (
                  <div className="absolute left-full top-16 bg-gray-100 shadow-lg z-50">
                    <NavLink
                      to="/kasol"
                      className={({ isActive }) =>
                        `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}>
                      <button className="block  justify-center items-center px-4 py-2 text-left   hover:bg-gray-300"
                        onClick={() => {
                          setIndiaSubmenuOpen(false);
                          setHimachalSubmenuOpen(false); }} >
                        Kasol
                      </button>
                    </NavLink>
                  </div>
                )}
                <button
                  className="block px-4 py-2 flex text-left hover:bg-gray-300 no-underline hover:no-underline focus:no-underlin"
                  onClick={() =>
                    setKeralaSubmenuOpen(!isKeralaSubmenuOpen) }  >
                  Kerala
                 <span className="ml-12">&#9654;</span>
                </button>
                {isKeralaSubmenuOpen && (
                  <div className="absolute left-full my-3 bg-gray-100 top-24 shadow-lg z-50">
                    <NavLink
                      to="/Munnar"
                      className={({ isActive }) =>
                        `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }>
                      <button className="block  px-4 py-2 text-left hover:bg-gray-300"
                         onClick={() => {
                          setIndiaSubmenuOpen(false);
                          setKeralaSubmenuOpen(false); }} >
                        Munnar
                      </button>
                    </NavLink>
                  </div>
                )}
                <button
                  className="block px-4 py-2 flex text-left hover:bg-gray-300 no-underline hover:no-underline focus:no-underline"
                  onClick={() =>
                    setTamilNaduSubmenuOpen(!isTamilNaduSubmenuOpen)}>
                  Tamil Nadu
                 <span className="ml-2">&#9654;</span>
                </button>
                {isTamilNaduSubmenuOpen && (
                  <div className="absolute left-full top-32  my-4 bg-gray-100 shadow-lg z-50">
                    <NavLink
                      to="/india/tamilnadu/ooty"
                      className={({ isActive }) =>
                        `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }>
                      <button className="block px-4  py-2 text-center hover:bg-gray-300"
                         onClick={() => {
                          setIndiaSubmenuOpen(false);
                          setTamilNaduSubmenuOpen(false); }} >
                        Ooty
                      </button>
                    </NavLink>
                    <NavLink
                      to="/india/tamilnadu/kodaikanal"
                      className={({ isActive }) =>
                        `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`  } >
                      <button className="block px-2   py-2 text-center hover:bg-gray-300"
                         onClick={() => {
                          setIndiaSubmenuOpen(false);
                          setTamilNaduSubmenuOpen(false);}} >
                       Kodaikanal
                      </button>
                    </NavLink>
                  </div>
                )}
                <NavLink
                  to="/india/goa"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setIndiaSubmenuOpen(false)} >
                  <button className="block  px-4 py-2 text-center hover:bg-gray-300">
                    Goa
                  </button>
                </NavLink>
                <NavLink
                  to="/india/darjeeling"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setIndiaSubmenuOpen(false)} >
                  <button className="block px-4 py-2  text-center hover:bg-gray-300">
                    Darjeeling
                  </button>
                </NavLink>
                <NavLink
                  to="/india/sikkim"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setIndiaSubmenuOpen(false)} >
                  <button className="block px-4 py-2  text-center hover:bg-gray-300">
                    Sikkim
                  </button>
                </NavLink>
                <NavLink
                  to="/india/kashmir"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setIndiaSubmenuOpen(false)} >
                  <button className="block px-4 py-2  text-center hover:bg-gray-300">
                    Kashmir
                  </button>
                </NavLink>
                <NavLink
                  to="/india/ladakh"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setIndiaSubmenuOpen(false)} >
                  <button className="block px-4 py-2  text-center hover:bg-gray-300">
                   Ladakh
                  </button>
                </NavLink>
                <button
                  className="block px-2 py-2 flex text-left hover:bg-gray-300no-underline hover:no-underline focus:no-underline"
                  onClick={() =>
                    setUttarakhandSubmenuOpen(!isUttarakhandSubmenuOpen)} >
                  Uttarakhand
                 <span className="ml-4">&#9654;</span>
                </button>
                {isUttarakhandSubmenuOpen && (
                  <div className="absolute left-full top-28 my-72 bg-gray-100 shadow-lg z-50">
                    <NavLink
                      to="/india/uttarakhand/nainital"
                      className={({ isActive }) =>
                        `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }>
                      <button className="block px-4 py-2 text-center  hover:bg-gray-300"
                         onClick={() => {
                          setIndiaSubmenuOpen(false);
                          setUttarakhandSubmenuOpen(false); }} >
                        Nainital
                      </button>
                    </NavLink>
                    <NavLink
                      to="/india/uttarakhand/rishikesh"
                      className={({ isActive }) =>
                        `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`  } >
                      <button className="block px-4 py-2 text-center  hover:bg-gray-300"
                         onClick={() => {
                          setIndiaSubmenuOpen(false);
                          setUttarakhandSubmenuOpen(false);}} >
                       Rishikesh
                      </button>
                    </NavLink>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* International */}
          <div className="relative mx-2 ">
          <div className="flex">
            <NavLink
              to="/international"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline hover:text-white` } >
              <button className="block">INTERNATIONAL</button>
            </NavLink>
            <button
              className={`${inactiveStyle} no-underline hover:no-underline focus:no-underline`}
              onClick={() => setInternationalSubmenuOpen(!isInternationalSubmenuOpen)}  ref={internationalMenuRef}>
              <span className="ml-2">&#9660;</span>
            </button>
            </div>
            {isInternationalSubmenuOpen && (
              <div className="absolute left-20 bg-gray-100 justify-center items-center shadow-lg z-50 mt-4" ref={internationalDropdownRef}>
                <NavLink
                  to="/international/singapore"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setInternationalSubmenuOpen(false)}  >
                  <button className="block px-4 py-2  text-left hover:bg-gray-300 ">
                  Singapore
                  </button>
                </NavLink>
                <NavLink
                  to="/international/maldives"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setInternationalSubmenuOpen(false)} >
                  <button className="block px-4  py-2 text-left hover:bg-gray-300 ">
                   Maldives
                  </button>
                </NavLink>
                <NavLink
                  to="/international/malaysia"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setInternationalSubmenuOpen(false)} >
                  <button className="block px-4  py-2 text-left hover:bg-gray-300 ">
                   Malaysia
                  </button>
                </NavLink>
                <NavLink
                  to="/international/dubai"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`  }
                  onClick={() => setInternationalSubmenuOpen(false)}  >
                  <button className="block px-4  py-2 text-left hover:bg-gray-300 ">
                    Dubai
                  </button>
                </NavLink>
                <NavLink
                  to="/international/thailand"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setInternationalSubmenuOpen(false)} >
                  <button className="block px-4  py-2 text-left hover:bg-gray-300 ">
                    Thailand
                  </button>
                </NavLink>
                <NavLink
                  to="/international/bali"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setInternationalSubmenuOpen(false)} >
                  <button className="block  px-4 py-2 text-left hover:bg-gray-300 ">
                    Bali
                  </button>
                </NavLink>
              </div>
            )}
          </div>
          {/* Activities*/}
          <div className="relative mx-2">
          <div className="flex">
            <NavLink
              to="/activities"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline hover:text-white` }>
              <button className="block ">ACTIVITIES</button>
            </NavLink>
            <button
              className={`${inactiveStyle} no-underline hover:no-underline focus:no-underline`}
              onClick={() => setActivitiesSubmenuOpen(!isActivitiesSubmenuOpen)} ref={activitiesMenuRef} >
              <span className="ml-2">&#9660;</span>
            </button>
            </div>
            {isActivitiesSubmenuOpen && (
              <div className="absolute w-18 left-8 bg-gray-100 shadow-lg z-50 mt-4" ref={activitiesDropdownRef}>
                <NavLink
                  to="/activities/riverrafting"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
                  onClick={() => setActivitiesSubmenuOpen(false)} >
                  <button className="block  px-7 w-40 py-2 text-left hover:bg-gray-300 ">
                   River Rafting
                  </button>
                </NavLink>
                <NavLink
                  to="/activities/paragliding"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setActivitiesSubmenuOpen(false)}  >
                  <button className="block  px-9 py-2 justify-center items-center text-left hover:bg-gray-300 ">
                    Paragliding
                  </button>
                </NavLink>
                <NavLink
                  to="/activities/hiking"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setActivitiesSubmenuOpen(false)} >
                  <button className="block px-14   justify-center items-center py-2 text-left hover:bg-gray-300 ">
                    Hiking
                  </button>
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline hover:text-white` }>
            ABOUT US
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              `${isActive ? activeStyle : inactiveStyle} no-underline mx-2 hover:no-underline focus:no-underline hover:text-white` }>
            REVIEWS
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? activeStyle : inactiveStyle} no-underline mx-2 hover:no-underline focus:no-underline hover:text-white`}>
            CONTACT
          </NavLink>
        </div>
      </div>
{/* mobile */}
<div className="md:hidden bg-gray-300 text-white p-4">
  <div className="flex justify-between items-center">
     <button
          className="flex items-center justify-between  w-full  bg-gray-300"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span>Menu</span>
          <span className="ml-2"> {isMobileMenuOpen ? "✕" : "☰"}</span>
        </button>
  </div>
  
  {isMobileMenuOpen && (
    <div className="absolute my-2 left-0 w-full bg-gray-300 text-white p-4  z-50">
      <div className="">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
        onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
        <button className="block py-2 text-left font-medium"  onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
          HOME
        </button>
      </NavLink>
        <div className="flex">
        <NavLink
        to="/india"
        className={({ isActive }) =>
          `${isActive ? activeStyle : inactiveStyle} block py-2 text-left font-medium no-underline hover:no-underline focus:no-underline`}>
        <button className="block text-left">INDIA</button>
      </NavLink>
        <span
            className={`ml-48 px-3 py-2 cursor-pointer ${
              isIndiaSubmenuOpen ? "text-white-500" : "text-gray-600"
            } hover:text-gray-800`}
            onClick={() => setIndiaSubmenuOpen(!isIndiaSubmenuOpen)} ref={indiaMenuRef}>
            {isIndiaSubmenuOpen ? "▲" : "▼"} 
          </span>
        </div>
        {isIndiaSubmenuOpen && (
          <div className="ml-4" ref={indiaDropdownRef}>
            <NavLink
              to="/india/andaman"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`} onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)}  >
              <button className="block py-2 text-left">Andaman Tour</button>
            </NavLink>
            <div className="flex">
            <button
          className={`block py-2 text-left no-underline hover:no-underline focus:no-underline ${
            isHimachalSubmenuOpen ? activeStyle : inactiveStyle }`}
          onClick={() => setHimachalSubmenuOpen(!isHimachalSubmenuOpen)}>
          Himachal
        </button>
        <span
          className={`ml-36 px-3 py-2 cursor-pointer ${
            isHimachalSubmenuOpen ? "text-white-500" : "text-gray-600"
          } hover:text-gray-800`}
          onClick={() => setHimachalSubmenuOpen(!isHimachalSubmenuOpen)}>
          {isHimachalSubmenuOpen ? "▲" : "▼"}
        </span>
            </div>
            {isHimachalSubmenuOpen && (
              <div className="ml-4">
                <NavLink
                  to="/india/Himachal/kasol"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }  onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
                  <button className="block py-2 text-left">Kasol</button>
                </NavLink>
              </div> )}
              <div className="flex">
            <button
          className={`block py-2 text-left no-underline hover:no-underline focus:no-underline ${
            isKeralaSubmenuOpen ? activeStyle : inactiveStyle
          }`}
          onClick={() => setKeralaSubmenuOpen(!isKeralaSubmenuOpen)} >
          Kerala
        </button>
        <span
          className={`ml-44 px-2 py-2 cursor-pointer ${
            isKeralaSubmenuOpen ? "text-white-500" : "text-gray-600"
          } hover:text-gray-800`}
          onClick={() => setKeralaSubmenuOpen(!isKeralaSubmenuOpen)} >
          {isKeralaSubmenuOpen ? "▲" : "▼"}
        </span>
            </div>
            {isKeralaSubmenuOpen && (
              <div className="ml-4">
                <NavLink
                  to="/kerala/india/Munnar"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }  onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
                  <button className="block py-2 text-left">Munnar</button>
                </NavLink>
              </div> )}
              <div className="flex">
            <button
          className={`block py-2 text-left no-underline hover:no-underline focus:no-underline ${
            isTamilNaduSubmenuOpen ? activeStyle : inactiveStyle
          }`}
          onClick={() => setTamilNaduSubmenuOpen(!isTamilNaduSubmenuOpen)}>
          Tamil Nadu
        </button>
        <span
          className={`ml-36 py-2 cursor-pointer ${
            isTamilNaduSubmenuOpen ? "text-white-500" : "text-gray-600"
          } hover:text-gray-800`}
          onClick={() => setTamilNaduSubmenuOpen(!isTamilNaduSubmenuOpen)} >
          {isTamilNaduSubmenuOpen ? "▲" : "▼"}
        </span>
            </div>
            {isTamilNaduSubmenuOpen && (
              <div className="ml-4">
                <NavLink
                  to="/india/tamilnadu/ooty"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }  onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
                  <button className="block py-2 text-left">Ooty</button>
                </NavLink>
                <NavLink
                  to="/india/tamilnadu/kodaikanal"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` } onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)}  >
                  <button className="block py-2 text-left">Kodaikanal</button>
                </NavLink>
              </div> )}
              <NavLink
                  to="/goa"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`} onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
                  <button className="block py-2 text-left">Goa</button>
                </NavLink>
              <NavLink
              to="/india/darjeeling"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` } onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)}  >
              <button className="block py-2 text-left font-medium">
                Darjeeling
              </button>
            </NavLink>
            <NavLink
              to="/india/sikkim"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` } onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
              <button className="block py-2 text-left font-medium">
              Sikkim
              </button>
            </NavLink>
            <NavLink
              to="/india/kashmir"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`} onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
              <button className="block py-2 text-left font-medium">
              Kashmir
              </button>
            </NavLink>
            <NavLink
              to="/india/ladakh"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`} onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
              <button className="block py-2 text-left font-medium">
              Ladakh
              </button>
            </NavLink>
            <div className="flex">
            <button
          className={`block py-2 text-left no-underline hover:no-underline focus:no-underline ${
            isUttarakhandSubmenuOpen ? activeStyle : inactiveStyle
          }`}
          onClick={() => setUttarakhandSubmenuOpen(!isUttarakhandSubmenuOpen)}>
          Uttarakhand
        </button>
        <span
          className={`ml-32 px-2  py-2 cursor-pointer ${
            isUttarakhandSubmenuOpen ? "text-white-500" : "text-gray-600"
          } hover:text-gray-800`}
          onClick={() => setUttarakhandSubmenuOpen(!isUttarakhandSubmenuOpen)} >
          {isUttarakhandSubmenuOpen ? "▲" : "▼"}
        </span>
            </div>
            {isUttarakhandSubmenuOpen && (
              <div className="ml-4">
                <NavLink
                  to="/india/uttarakhand/nainital"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }  onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
                  <button className="block py-2 text-left">Nainital</button>
                </NavLink>
                <NavLink
                  to="/india/uttarakhand/rishikesh"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` } onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)}  >
                  <button className="block py-2 text-left">Rishikesh</button>
                </NavLink>
              </div> )}
                  </div>
                )}
              </div>
      <div>
        <div className="flex">
            <button
                   className={`${isInternationalSubmenuOpen ? activeStyle : inactiveStyle} block py-2 text-left font-medium no-underline hover:no-underline focus:no-underline`}
              onClick={() => setInternationalSubmenuOpen(!isInternationalSubmenuOpen)} >
              INTERNATIONAL
            </button>
            <span
            className={`ml-32 py-2 cursor-pointer ${
              isInternationalSubmenuOpen ? "text-white-500" : "text-gray-600"
            } hover:text-gray-800`}
            onClick={() => setInternationalSubmenuOpen(!isInternationalSubmenuOpen)}  ref={internationalMenuRef}>
            {isInternationalSubmenuOpen ? "▲" : "▼"} 
          </span>
            </div>
            {isInternationalSubmenuOpen && (
              <div ref={internationalDropdownRef}>
                <NavLink
                  to="/international/singapore"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isInternationalSubmenuOpen)}>
                  <button className="block py-2 text-left">Singapore</button>
                </NavLink>
                <NavLink
                  to="/international/maldives"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isInternationalSubmenuOpen)}>
                  <button className="block py-2 text-left">Maldives</button>
                </NavLink>
                <NavLink
                  to="/international/malaysia"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isInternationalSubmenuOpen)}>
                  <button className="block py-2 text-left">Malaysia</button>
                </NavLink>
                <NavLink
                  to="/international/dubai"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isInternationalSubmenuOpen)}>
                  <button className="block py-2 text-left">Dubai</button>
                </NavLink>
                <NavLink
                  to="/international/thailand"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isInternationalSubmenuOpen)}>
                  <button className="block py-2 text-left">Thailand</button>
                </NavLink>
                <NavLink
                  to="/international/bali"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isInternationalSubmenuOpen)}>
                  <button className="block py-2 text-left">Bali</button>
                </NavLink>
                </div>
            )}
            </div>
      <div>
        <div className="flex">
        <button
          className={`block py-2 text-left no-underline hover:no-underline focus:no-underline ${
            isActivitiesSubmenuOpen ? activeStyle : inactiveStyle }`}
          onClick={() => setActivitiesSubmenuOpen(!isActivitiesSubmenuOpen)} >
          ACTIVITIES
        </button>
            <span
          className={`ml-36 px-6 py-2 cursor-pointer ${
            isActivitiesSubmenuOpen ? "text-white-500" : "text-gray-600"
          } hover:text-gray-800`}
          onClick={() => setActivitiesSubmenuOpen(!isActivitiesSubmenuOpen)} ref={activitiesMenuRef}>
          {isActivitiesSubmenuOpen ? "▲" : "▼"} 
        </span>
            </div>
            {isActivitiesSubmenuOpen && (
              <div ref={activitiesDropdownRef}>
                <NavLink
                  to="/activities/riverraftingr"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isActivitiesSubmenuOpen)}>
                  <button className="block py-2 text-left">River Rafting</button>
                </NavLink>
                <NavLink
                  to="/activities/paragliding"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isActivitiesSubmenuOpen)}>
                  <button className="block py-2 text-left">Paragliding</button>
                </NavLink>
                <NavLink
                  to="/activities/hiking"
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
                  onClick={() => setMobileMenuSubmenuOpen(!isActivitiesSubmenuOpen)}>
                  <button className="block py-2 text-left">Hiking</button>
                </NavLink>
                </div>
            )}
            </div>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline`}
        onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
        <button className="block py-2 text-left font-medium">
          ABOUT US
        </button>
      </NavLink>
      <NavLink
        to="/reviews"
        className={({ isActive }) =>
          `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
        onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)}>
        <button className="block py-2 text-left font-medium">
          REVIEWS
        </button>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${isActive ? activeStyle : inactiveStyle} no-underline hover:no-underline focus:no-underline` }
        onClick={() => setMobileMenuSubmenuOpen(!isIndiaSubmenuOpen)} >
        <button className="block py-2 text-left font-medium">
          CONTACT
        </button>
      </NavLink>
    </div>
  )}
  </div>
  </div>
  );
};

export default Navbar;


