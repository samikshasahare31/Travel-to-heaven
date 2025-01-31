import React, { useState } from "react";
import { darjeelingPackages } from "../../../assets/Data/data";
import Card from "../../../Components/Card/Card";
import styles from "./Darjeeling.module.css";
import { useLocation } from "react-router-dom";

const Darjeeling = () => {
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");
  return (
    <>
      <section className={styles["main"]}>
        <p>Home {newUrl}</p>
        <div className={styles["title-content"]}>
          <h1 className={styles["darjeeling-heading"]}>
            Darjeeling
            <span className={styles["underline"]}></span>
          </h1>

          <div>
            <p className={styles["darjeeling-description"]}>
              Darjeeling, the "Queen of the Hills" in West Bengal, India, is
              famous for its stunning Himalayan views, especially of Mount
              Kanchenjunga, and its world-renowned tea. With a vibrant culture
              blending Tibetan, Nepali, and Bengali influences, Darjeeling
              offers unique attractions like the UNESCO-listed Darjeeling
              Himalayan Railway and the scenic Tiger Hill, making it a beloved
              destination for its natural beauty and colonial charm.
            </p>
          </div>
        </div>

        <div className={styles["sightseeing-divider"]}>
          <h2>Sightseeing</h2>
        </div>

        {/* flex flex-wrap gap-5 ml-0 justify-center max-lg:justify-start max-lg:ml-7 max-lg:pl-5     max-md:justify-center max-md:ml-7 max-md:pl-5 max-xl:justify-start  max-2xl:justify-start max-sm:ml-0 */}
        <div className={styles["container"]}>
          {darjeelingPackages.map((pckg) => (
            <Card
              key={pckg.id}
              pkg={pckg}
              className={styles["card"]}
              locationURL={locationURL}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Darjeeling;

//
