import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";
import { MdTravelExplore } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md px-6 py-4 z-50" >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black flex items-center">
          <MdTravelExplore className="w-6 h-6 mr-2 text-blue-600" />
          Travel.
        </h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#package" className="hover:text-blue-600">Packages</a></li>
          <li><a href="#shop" className="hover:text-blue-600">Shop</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#pages" className="hover:text-blue-600">Pages</a></li>
          <li><a href="#news" className="hover:text-blue-600">News</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Book Now</button>
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <TbGridDots
            className="w-7 h-7 text-blue-600 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-50%", scale: 0.8 }}
            animate={{ opacity: 1, y: "0%", scale: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: "-50%", scale: 0.8, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-50 flex justify-center items-center  bg-opacity-30"
          >
            <motion.div
              className="w-[75%] max-w-md bg-white px-6 py-8 flex flex-col items-center space-y-6 text-lg border-2 border-gray-300 rounded-[30px] relative top-10"
              style={{ transform: "translate(0%, 0%)" }} // native transform override
            >
              <IoIosCloseCircle
                className="absolute top-4 right-4 w-8 h-8 text-red-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
              <a href="#Home" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</a>
              <a href="#package" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Packages</a>
              <a href="#shop" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Shop</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">About</a>
              <a href="#pages" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Pages</a>
              <a href="#news" onClick={() => setIsOpen(false)} className="hover:text-blue-600">News</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Book Now</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
