import "./dubai.css";
import Card from "../../../Components/Card/Card";
import { dubai } from "../../../assets/Data/dubai";
import { useLocation } from "react-router-dom";

import { useState } from "react";

const Dubai = () => {
  const location = useLocation();
  const [locationURL] = useState(location.pathname);
  const newUrl = locationURL
    .split("")
    .map((ele) => (ele === "/" ? " > " : ele))
    .join("");

  return (
    <>
      <div className="dubaiIntro">
        <p> Home {newUrl}</p>
        <h1>Dubai</h1>
        <div className="dubaiInfo">
          <p>
            One of the world&apos;s most visited tourist attractions, Dubai is a
            metropolis with many different faces. This international metropolis,
            which is home to the Burj Khalifa, the highest structure in the
            world, is renowned for its impressive skylines, opulent
            architecture, and several tourist attractions that set records for
            being the largest, longest, and tallest. Adventure sports like
            skydiving over the stunning Palm Islands, reef and wreck diving,
            kite surfing, wakeboarding, and desert safaris over the golden
            Arabian dunes are all quite common in Dubai.
          </p>
          <br />
          <p>
            Once a desolate place, Dubai now boasts a sparkling infrastructure
            set against the backdrop of the Arabian desert. This man-made wonder
            is now teeming with glistening skyscrapers, upscale hotels, shopping
            centers, and dining establishments. Among the most popular tourist
            attractions in Dubai are the Burj Khalifa, the tallest man-made
            structure, the Atlantis, the Palm, the aquarium resort, and the
            Dubai Fountain, which has jets and lights that are timed to music.
            Dubai, the second largest of the seven emirates in terms of size and
            population, will wow you with its blend of traditional Arabian
            customs and contemporary wonder.
          </p>
        </div>

        <div className="friAndFam">
          <h2>Friends & Family Tour</h2>
        </div>
        <div className="dubaiCardsContainer">
          {dubai.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} locationURL={locationURL} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dubai;
