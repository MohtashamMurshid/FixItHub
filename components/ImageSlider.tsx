"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const ImageSlider = () => {
  const images = [
    "https://i.pinimg.com/736x/75/05/75/750575681c15d52ad0373192ba7cedb1.jpg",
    "https://i.pinimg.com/736x/0b/0f/76/0b0f76929aef6e63eddd13100f872a26.jpg",
    "https://i.pinimg.com/736x/0e/16/bc/0e16bca89cfc33c709f4ce586d607785.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full lg:max-w-full mx-auto">
      {/* Slider Container */}
      <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px] overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="min-w-full h-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={800}
                height={450}
                layout="responsive"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600 z-10"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600 z-10"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
