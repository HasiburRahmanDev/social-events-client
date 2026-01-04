import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";

const slides = [
  {
    id: 1,
    title: "Hello there",
    text: "In today’s fast-paced world, finding ways to make a positive impact within your community can be challenging. Our community-driven event management platform bridges that gap by empowering individuals and organizations to create, join, and track social service events right in their local areas.",
    image:
      "https://i.pinimg.com/736x/ec/83/e7/ec83e7329ce4ed36e2712f620cc72fb5.jpg",
    cta: "/upcoming-events",
    ctaText: "Upcoming Events",
  },
  {
    id: 2,
    title: "Join the Movement",
    text: "From environmental clean-ups and charity drives to educational workshops, collaborate on initiatives that matter most in your local area.",
    image: "https://i.pinimg.com/736x/6a/7b/8c/6a7b8c123456789.jpg",
    cta: "/register",
    ctaText: "Get Started",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div
      className="relative h-[65vh] w-full flex items-center justify-center bg-cover bg-center transition-all duration-700 my-12"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl px-4 animate-fadeIn">
        <h1 className="mb-5 text-4xl md:text-5xl font-bold">{slide.title}</h1>
        <p className="mb-5 text-lg md:text-xl">{slide.text}</p>
        <NavLink to={slide.cta}>
          <button className="btn btn-primary animate-bounce">
            {slide.ctaText}
          </button>
        </NavLink>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-primary" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
