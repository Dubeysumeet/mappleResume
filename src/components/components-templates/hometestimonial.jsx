import React, { useEffect, useState } from 'react';
import { FormatQuote, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    text: "This is a great service! Highly recommend to everyone.",
    image: null,
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    text: "Good quality and excellent customer support.",
    image: null,
  },
  {
    id: 3,
    name: "Bob Johnson",
    rating: 5,
    text: "Amazing experience, will definitely use again!",
    image: null,
  },
];

const HomeTestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handlePrevClick = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? testimonials.length - 1 : prevCurrent - 1));
  };

  const handleNextClick = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
  };

  return (
    <div className="px-5 py-32 flex justify-center items-center">
      <div className="w-full max-w-4xl flex items-center justify-between relative gap-12">
        <button
          onClick={handlePrevClick}
          className="text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 hover:bg-green-700 p-2 rounded-full"
        >
          <ArrowBackIos />
        </button>

        <div
          className="flex justify-center flex-grow mx-4" // Added margin for spacing
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className=" p-5 rounded-lg shadow-lg bg-white w-full flex items-center flex-col">
           
            <p className="text-black text-3xl font-bold text-center p-6 font-serif mb-4">{testimonials[current].text}</p>
            <div className="flex items-center pb-5">
              {testimonials[current].image ? (
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-20 h-20 rounded-full mr-4 p-5"
                />
              ) : (
                <PersonIcon className="w-20 h-20 text-gray-500 mr-4" />
              )}
              <span className="text-gray-900 font-bold">{testimonials[current].name}</span>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <StarIcon key={i} className="text-yellow-600" />
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleNextClick}
          className="text-white bg-gray-800 bg-opacity-50 hover:bg-green-700 hover:bg-opacity-75 p-2 rounded-full"
        >
          <ArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default HomeTestimonialCarousel;
