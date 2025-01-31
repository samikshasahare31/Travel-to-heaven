import React from "react";
import "./About.css";
const AboutUs = () => {
  const images = [
    "https://tse4.mm.bing.net/th?id=OIP.GRnVzP2Ef2fc43EHT31AawHaDf&pid",
    "https://cdn.newsapi.com.au/image/v1/2ce97da73c2360879125bcbcd297c36d",
    "https://b4holiday.com/wp-content/uploads/2022/02/IMG-20190614-WA0017.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.nXAA4tV1x3IL55OSZe7d_wHaE8&pid=Api&P=0&h=180",
    "https://www.tripfore.com/wp-content/uploads/2020/02/best-vacation-spots-in-the-world.jpeg",
    "https://www.travelandleisure.com/thmb/wsA6EXFuYkqtuJGLbQWw05-cwPs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lake-como-MOSTBEAUTIFUL0921-cb08f3beff1041e4beefc67b5e956b23.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.ylHV8SPDpVc7FntTo0ZBsQHaEK&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.oEV457iq2o2Xif-8uaxrAQHaFj&pid=Api&P=0&h=180",
    "https://i.ytimg.com/vi/MfPAPF2OdT4/maxresdefault.jpg",
    "https://www.hachettebookgroup.com/wp-content/uploads/2019/08/iStock-539167007.jpg?w=1024",
    "https://media.easemytrip.com/media/Blog/India/637033873695687971/637033873695687971exGTcR.jpg",
    "https://cdn.images.express.co.uk/img/dynamic/78/1200x630/5764453.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.2_9qf9n3-OvNNXaoAiCTeAHaEY&pid=Api&P=0&w=675&h=400",
    "https://b4holiday.com/wp-content/uploads/2022/02/IMG-20190912-WA0003.jpg",
    "https://b4holiday.com/wp-content/uploads/2022/02/IMG-20190912-WA0004.jpg",
    "https://b4holiday.com/wp-content/uploads/2022/02/IMG-20190928-WA0010.jpg",
    "https://b4holiday.com/wp-content/uploads/2022/02/WhatsApp-Image-2019-05-25-at-5.49.56-PM-1.jpeg",
    "https://tse3.mm.bing.net/th?id=OIP.UTfESn5HwYBTUBFoRtBg1QHaEW&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.n0kEEKdips-q0TeT-XFuhAHaEK&pid=Api&P=0&h=180",
    "https://media.cntraveller.in/wp-content/uploads/2014/10/taj-mahal-hotel-1366x768.jpg",
  ];
  return (
    <section>
      <h2 className='heading'>ABOUT US</h2>
      <div className='About-description'>
        <img
          src='https://b4holiday.com/wp-content/uploads/2022/02/Why-Book-with-before-holiday.jpeg'
          alt='Why Book with Travel to Heaven'
        />
        <p>
        At The Entrepreneurship Network (TEN), we are passionate about transforming ideas into impactful realities. Our mission is to empower aspiring entrepreneurs through our Virtual Incubator Program, a comprehensive initiative that offers accessible resources, expert mentorship, and practical guidance. From idea validation and market research to strategic business planning and funding opportunities, we are dedicated to supporting individuals at every stage of their entrepreneurial journey, bridging the gap between ambition and success.
        </p>
<p>To further enhance our offerings and diversify our impact, we established TEN Travel, a subsidiary that blends entrepreneurship with travel excellence. Since its inception, TEN Travel has been redefining travel experiences, providing personalized itineraries, theme-based packages, and seamless corporate travel solutions. Together, TEN and TEN Travel create a unique ecosystem where dreams are nurtured—whether through business innovation or unforgettable journeys. </p>
       
       
        <div className='image-grid'>
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Travel ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
