// src/components/Hero.jsx
import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { IoLocationSharp } from "react-icons/io5";

// Sample destinations (9 items)
const destinations = [
  { title: "Paris, France", description: "Cultural, Relax", image: image1 },
  { title: "Tokyo, Japan", description: "Modern, Traditional", image: image2 },
  { title: "Bali, Indonesia", description: "Beach, Adventure", image: image3 },
  { title: "New York, USA", description: "Urban, Skyline", image: image1 },
  { title: "Rome, Italy", description: "Historic, Food", image: image2 },
  { title: "Kyoto, Japan", description: "Temples, Nature", image: image3 },
  { title: "London, UK", description: "Classic, Vibrant", image: image1 },
  { title: "Dubai, UAE", description: "Luxury, Desert", image: image2 },
  { title: "Sydney, Australia", description: "Harbor, Beaches", image: image3 },
];

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gray-200 py-10 px-4 flex flex-col items-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Most Visited Destinations</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl w-full">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <img src={place.image} alt={place.title} className="w-full h-48 object-cover" />

            <div className="p-4    flex-grow">
              {/* Location and Title */}
              <div className="flex items-center mb-2">
               
                <h4 className="text-lg font-semibold text-gray-800">{place.title}</h4>
                
              </div>

              {/* Description */}
             <div className="flex">
              <IoLocationSharp className=" w-5 h-5 mr-2 text-gray-500" />
               <p className="text-sm text-gray-400 mb-4"> {place.description}</p>
             </div>

             

              {/* Details Button */}
              <button className="mt-auto self-start px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
