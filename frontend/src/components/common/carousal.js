import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5); // Adjust the number based on the total number of slides
    }, 7000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 5) % 5); // Adjust the number based on the total number of slides
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 5); // Adjust the number based on the total number of slides
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`hidden duration-700 ease-in-out ${currentSlide === index - 1 ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <img
            //   src={`/docs/images/carousel/carousel-${index}.svg`}
              src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg`}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {[1, 2, 3, 4, 5].map((index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentSlide === index - 1 ? 'bg-white/30' : 'bg-gray-400/30'}`}
            aria-current={currentSlide === index - 1 ? 'true' : 'false'}
            aria-label={`Slide ${index}`}
            onClick={() => handleSlideChange(index - 1)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        {/* Previous button content */}
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        {/* Next button content */}
      </button>
    </div>
  );
};

export default Carousel;