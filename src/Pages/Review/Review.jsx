import React from 'react';
import './Review.css';

const reviews = [
  {
    name: 'Satish Yarramsetti',
    title: 'Maldives Accommodation',
    date: 'September 4, 2019',
    review: 'We are satisfied with your service and do recommend you. Only concern is we did not get honeymoon benefits though we informed you while Booking. Overall satisfied.'
  },
  {
    name: 'Kuldeep',
    title: 'Candle light dinner at impiana',
    date: 'August 5, 2019',
    review: 'Must b work on Indian food availability for Travellers in package options.'
  },
  {
    name: 'Amy Thakur',
    title: 'Extremely well managed tour',
    date: 'July 3, 2019',
    review: 'Extremely well managed tour with sightseeing and honest and humble tour guide/driver his name is ‘Giddi’.'
  },
  {
    name: 'Ankit Vats',
    title: 'Private pool villa in bali',
    date: 'June 3, 2019',
    review: 'Private pool villa in bali'
  },
  {
    name: 'Harish',
    title: 'Awesome Hotel and the transport service!',
    date: 'May 3, 2019',
    review: 'I had a very supportive agent in Jyothika! She was brilliant and did things which even I would have missed!'
  },
  {
    name: 'Dhiraj Kalekar',
    title: 'Car Serivice very good.',
    date: 'May 3, 2019',
    review: 'Car Serivice very good.'
  },
  {
    name: 'Rehan',
    title: 'Cruise dinner was best',
    date: 'May 15, 2022',
    review: 'Singapore Cruise dinner. everythng was very well planned.'
  },
  {
    name: 'Harsh',
    title: 'I am very happy in whole trip.',
    date: 'December 25, 2021',
    review: 'Room service is very average in all hotels. Havelock should have more days for stay. rest was good.'
  },
  {
    name: 'Vaibhav',
    title: 'Neil hotel room very good',
    date: 'December 5, 2021',
    review: 'Neil hotel room very good. havlock was best. food in port blair restaurant was very good.'
  },
  {
    name: 'Sohan Hegde',
    title: 'Good Trip',
    date: 'November 14, 2021',
    review: 'Timely pick up & Drop very friendly staff.'
  },
  {
    name: 'Ankita',
    title: 'Accomodation was good.',
    date: 'November 5, 2021',
    review: 'The houseboat and resorts were very good. The food was also very tasty. The driver was suggesting too many activities… but Munnar is best to relax at the resort kind of place.'
  },
  {
    name: 'Subhanarayan',
    title: 'Awesome resort in Maldives',
    date: 'November 3, 2021',
    review: 'Great support from the agent. water Villa was wonderful. We enjoyed a lot.'
  },
  {
    name: 'Ambesh',
    title: 'Overall munnar was good place to visit',
    date: 'October 3, 2019',
    review: 'Overall munnar was good place to visit, we could have given one more day to it. Kovalam beach was fantastic and kanyakumari- wow what to say, just visit the place, go to swami vivekanand memorial and see triveni sangam around you. Ur team and support was up to date. But you have pasted a readymade'
  },
  {
    name: 'Sudhanshu Bhandari',
    title: 'Customer orientation',
    date: 'September 3, 2019',
    review: 'Customer orientation'
  },
  {
    name: 'Ankit Gupta',
    title: 'CAB DRIVER Support',
    date: 'June 3, 2019',
    review: 'Local Home stays can be done (Same like house feeling )'
  },
  {
    name: 'Nivesh',
    title: 'Service',
    date: 'May 3, 2019',
    review: 'Everything is awesome'
  },
  {
    name: 'Kumar',
    title: 'Our driver was very good person',
    date: 'May 3, 2019',
    review: 'No safety about money for new couple because they directly send money to your account. Atleast 1 hard copy of company guidelines and money information is require during trip and also need insurance option for trip'
  },
  {
    name: 'Chetan Mahajan',
    title: 'Driver\'s carefulness',
    date: 'May 3, 2019',
    review: 'Driver’s carefulness'
  },
  {
    name: 'Mahesh',
    title: 'Very good car given.',
    date: 'May 3, 2019',
    review: 'Very good car given.'
  },
  {
    name: 'Anil Maru',
    title: 'Entire process was smooth and trip was fantastic.',
    date: 'May 3, 2019',
    review: 'Entire process was smooth and trip was fantastic.'
  },
  {
    name: 'Rajat',
    title: 'Trip',
    date: 'April 10, 2019',
    review: 'Trip'
  },
  {
    name: 'Mannu',
    title: 'good',
    date: 'January 6, 2019',
    review: 'More clarity in communication like i got second day room what i booked.but any way you have supported well. overall satisfstory'
  },
  {
    name: 'Sanjay SIngh',
    title: 'good',
    date: 'January 6, 2019',
    review: 'More clarity in communication like i got second day room what i booked.but any way you have supported well. overall satisfstory'
  }
];

function Review() {
  return (
    <div className="reviews-page">
      <h2>Reviews</h2>
      <div className="feedback-banner">
        <img
          src="https://b4holiday.com/wp-content/uploads/2022/02/feedback-banner.jpg"
          alt="Feedback banner"
        />
      </div>
      <div className="rating-summary">
        <div className="average-rating">
          <h3>4.7 ★★★★☆</h3>
          <p>4.7 out of 5 stars (based on 23 reviews)</p>
        </div>
        <div className="rating-distribution">
          {['Excellent', 'Very good', 'Average', 'Poor', 'Terrible'].map((label, index) => (
            <div key={index} className="rating-bar">
              <span>{label}</span>
              <div className="bar">
                <div className={`fill fill-${index}`} style={{ width: `${index === 0 ? '70%' : index === 1 ? '30%' : '0%'}` }}></div>
              </div>
              <span>{index === 0 ? '70%' : index === 1 ? '30%' : '0%'}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="submittedd reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <h3>{review.title}</h3>
            <p><strong>{review.name}</strong> on {review.date}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
