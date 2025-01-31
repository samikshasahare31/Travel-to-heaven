import React, { useState } from "react";
import {
  ladakhFamilyTrips,
  ladakhOtherTrip,
  thingsTodoInLadakh,
} from "../../../assets/Data/data";
import { famousLakes } from "../../../assets/Data/data";
import Card from "../../../Components/Card/Card";
import styles from "./Ladakh.module.css";
import { useLocation } from "react-router-dom";

const Ladakh = () => {
  const listPlaces = [
    "Leh",
    "Drass",
    "Kargil",
    "Nubra Valley",
    "Lamayuru",
    "Stok Kangari",
    "Suru Valley",
    "Shyok Valley",
    "Sarchu",
    "Keylong",
    "Zanskar",
    "Padum",
    "Phugthal",
    "Jispa",
    "Hunder",
    "Changthang",
    "Diskit",
    "Panamik",
    "Turtuk",
  ];
  const listMonasteries = [
    "Hemis Monastery",
    "Karma Dupgyud Choeling Monastery",
    "Matho Monastery",
    "Rangdum Gompa",
    "Lamayuru Monastery",
    "Samstanling Monastery",
    "Phugtal Monastery",
    "Alchi Monastery",
    "Diskit Monastery",
    "Spituk Gompa",
    "Likir Gompa",
    "Thiksey Gompa",
    "Shey Monastery",
    "Sankar Monastery",
    "Wanla Gompa",
    "Phyang Gompa",
    "Stakna Monastery",
    "Zongkhul Monastery",
  ];

  const listOfMountains = [
    "Khardung La",
    "Chang La",
    "Bara-lacha La",
    "Taglang La",
    "Fotu La",
    "Lachulung La",
    "Namik La",
    "Zoji La",
    "Umling La Pass",
  ];

  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");

  return (
    <section className={styles["custom-container"]}>
      <p>Home {newUrl}</p>
      <h1 className={styles["custom-heading"]}>
        Ladakh
        <span className={styles["underline"]}></span>
      </h1>

      <div>
        <p className={styles["custom-paragraph"]}>
          Ladakh, <strong>India's dramatic crown, entices adventurers</strong>{" "}
          with its barren beauty, snow-capped peaks, azure skies, and vibrant
          culture. Since opening to tourists in the 1970s, it has enchanted
          visitors with serene
          <strong>
            Pangong Lake, Tibetan monasteries, trekking trails, and rugged
            terrain.
          </strong>
          Explore pristine lakes, admire majestic mountains, and embrace
          Ladakh's raw nature and simple lifestyle with curated holiday
          packages. Before you visit this land of monasteries and resilient
          people, acclimatization to the high altitude is essential.{" "}
          <strong>
            Here’s a comprehensive guide to help you plan your Ladakh adventure
          </strong>
          .
        </p>
        <p className={styles["custom-paragraph-secondary"]}>
          Be a part of an unforgettable travel story with us and relish our
          legacy to travel, explore and celebrate life.
        </p>
      </div>

      <div className={styles["custom-section"]}>
        <h3 className={styles["custom-subheading"]}>
          Best Places to Visit in Ladakh
        </h3>
        <ul className={styles["custom-list"]}>
          {listPlaces.map((item) => (
            <li className={styles["custom-list-item"]}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <div className={styles["custom-highlight"]}>
          <span className={styles["custom-highlight-item"]}>
            <u>Things to do in Ladakh</u>
          </span>{" "}
          <span className={styles["custom-divider"]}>|</span>{" "}
          <span className={styles["custom-highlight-item"]}>
            <u>Attraction in Ladakh</u>
          </span>
        </div>
        {thingsTodoInLadakh.map((list, index) => (
          <div key={index} className={styles["custom-item"]}>
            <div className={styles["custom-item-content"]}>
              <p className={styles["custom-place-name"]}>{list.placeName}</p>
              <p className={styles["custom-item-description"]}>
                {list.description}
              </p>

              <ul className={styles["custom-details-list"]}>
                <li className={styles["custom-details-item"]}>
                  Location:{" "}
                  <span className={styles["custom-location"]}>
                    {list.description}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div>
        <span className={styles["custom-highlight-item"]}>
          <u>Famous Lakes in Leh Ladakh</u>
        </span>{" "}
        {famousLakes.map((item, index) => (
          <div key={index} className="mt-3">
            <div className={styles["custom-item-content"]}>
              <p className={styles["custom-place-name"]}>{item.lakesName}</p>
              <p className={styles["custom-item-description"]}>
                {item.description}
              </p>

              <div>
                <p className={styles["custom-attraction"]}>
                  Attraction of {item.lakesName}:
                </p>
                <ul className={styles["custom-details-list"]}>
                  {item.attraction.length === 1
                    ? item.attraction.map((list) => (
                        <li className="text-md list-none font-semibold text-gray-600">
                          <span className="font-normal">{list}</span>
                        </li>
                      ))
                    : item.attraction.map((list) => (
                        <li className="text-md list-disc font-semibold text-gray-600">
                          <span className="font-normal">{list}</span>
                        </li>
                      ))}
                </ul>
              </div>
              <div className={styles["custom-visit-time"]}>
                <p className={styles["custom-visitTime-name"]}>
                  Best time to visit {item.lakesName}:{" "}
                  <span className="font-normal">{item.timeVisit}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles["custom-section-leh"]}>
        <span className={styles["custom-highlight-item-ladakh"]}>
          <u>List of Monasteries in Leh ladakh</u>
        </span>{" "}
        <div className="py-3">
          <ul className={styles["custom-list-leh"]}>
            {listMonasteries.map((item, index) => (
              <li className={styles["custom-list-item"]} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-3">
          <span className={styles["custom-subheading-name"]}>
            List of popular Mountain Passes in Leh ladakh
          </span>
          <div className="mt-3">
            <ul className={styles["custom-list-mountains"]}>
              {listOfMountains.map((item, index) => (
                <li className={styles["custom-list-mountain-item"]} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto my-10 px-1">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border  border-gray-300 text-left text-sm lg:text-base">
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Union Territory of Ladakh
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Leh & Kargil Districts
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Languages
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Ladakhi, Tibetan, Urdu, Balti, Hindi, English
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Best Season
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Summers – June to September
                  <br />
                  Winters – Oct to March
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Weather
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Summer 8°C – 25°C
                  <br />
                  Winter -5°C to -20°C
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Altitude
                </td>
                <td className="py-2 px-4 border-b border-gray-300">3500 m</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Srinagar – Leh – Manali Route
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Srinagar – Sonmarg – Kargil – Leh – Nubra – Pangong – Sarchu –
                  Jispa – Manali – Delhi
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Manali – Leh – Manali Route
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Manali – Jispa – Sarchu – Leh – Khardung La – Nubra Valley –
                  Pangong Lake – Manali
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles["custom-divider-container"]}>
        <h2>Friends & Family Tour</h2>
      </div>

      <div className={styles["custom-flex-container"]}>
        {ladakhFamilyTrips.map((pckg) => (
          <Card key={pckg.id} pkg={pckg} locationURL={locationURL} />
        ))}
      </div>

      <div className={styles["custom-divider-container"]}>
        <h2>Other Trips</h2>
      </div>

      <div className={styles["custom-flex-other-container"]}>
        {ladakhOtherTrip.map((pckg) => (
          <Card key={pckg.id} pkg={pckg} locationURL={locationURL} />
        ))}
      </div>
    </section>
  );
};

export default Ladakh;
