// src/components/Home.jsx
import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";

 


const Home = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/traval.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-opacity-60 z-10 "></div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col top-50 left-0 md:left-30  h-full text-white  px-4">
        <p className="text-sm md:text-sm ">OUR PACKAGES</p>
        <h5 className="text-5xl md:text-3xl font-bold mb-3">Search Your Holiday</h5>


        <form className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg">

          {/* Destination Search */}
          <div className="flex flex-col">
            <label
              htmlFor="destination"
              className="mb-2 text-sm font-medium text-black opacity-50"
            >
              Search Your Destination
            </label>
            <div className="relative">
              <input
                id="destination"
                type="text"
                placeholder="Enter name here..."
                className="w-full p-3 pr-10 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-300"
              />
              <FaLocationDot className="absolute top-3.5 right-3 text-gray-500" />
            </div>
          </div>

          {/* Date Input */}
          <div className="flex flex-col">
            <label
              htmlFor="date"
              className="mb-2 text-sm font-medium text-black opacity-50"
            >
              Select Your Date
            </label>
            <div className="relative">
              <input
                id="date"
                type="date"
                className="w-full p-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-300"
              />
              <FaRegSquareCheck className="absolute top-3.5 right-3 text-gray-500" />
            </div>
          </div>

          {/* Max Price */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center ">
              <label
                htmlFor="maxPrice"
                className="mb-2 text-sm font-medium text-black opacity-50"
              >
                Max Price
              </label>
              <span className="text-sm font-medium text-black">$5000</span>
            </div>
            <div className="border-2 bg-gray-300 rounded-full"><input
              id="maxPrice"
              type="range"
              min="100"
              max="5000"
              className="w-full p-3 rounded-full text-black-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-300"
            /></div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-3 text-center justify-center items-center mt-25  absolute ml-110">
            <button
              type="submit"
              className="mt-3 w-full md:w-30 py-1 bg-blue-500 hover:bg-blue-200 text-white rounded-full  transition duration-300"
            >
              MORE FILTER
            </button>
          </div>

        </form>
        <div className="md:mt-10 mt-5 flex gap-2">
          <LuFacebook className="text-white" size={20} />
          <BsInstagram className="text-white" size={20} />
          <BsTwitter className="text-white" size={20}/>
        </div>
      </div>

    </section>
  );
};

export default Home;
