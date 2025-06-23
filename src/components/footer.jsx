import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="relative text-center py-10 md:py-20 h-auto overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/trave.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full  bg-opacity-60 text-white px-4">

        {/* Newsletter Section */}
        <div className="mb-10 text-center">
          <small className="text-sm tracking-widest text-gray-300 uppercase mr-137 ">KIPP IN TOUCH</small>
          <div className="flex gap-4">
            <h2 className="text-2xl font-bold mt-6">Travel with us</h2>

            <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="px-4 py-2 rounded-full w-72 sm:w-96 text-blue-300 border"
                required
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition"
              >
                SEND <FiSend />
              </button>
            </form></div>

        </div>

        {/* Footer Content */}
        <div className="max-w-6xl w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-300 py-10 rounded-lg">
          {/* About Section */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-2xl font-bold mb-4">
              <MdTravelExplore className="text-blue-800" />
              <a href="#" className="hover:underline text-black">Travel.</a>
            </div>
            <p className="text-sm text-gray-800 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ab doloremque ratione
              voluptatem molestiae velit mollitia facere. Deleniti, adipisci similique hic ex incidunt
              esse, vitae optio in nobis aspernatur!
            </p>
            <div className="flex justify-center lg:justify-start gap-4 text-2xl text-black">
              <a href="#" className="hover:text-blue-400 transition"><AiOutlineTwitter /></a>
              <a href="#" className="hover:text-red-500 transition"><AiOutlineYoutube /></a>
              <a href="#" className="hover:text-pink-500 transition"><AiOutlineInstagram /></a>
              <a href="#" className="hover:text-green-500 transition"><SiTripadvisor /></a>
            </div>
          </div>

          {/* Our Agency 1 */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide text-black">Our Agency</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2 hover:text-blue-600 transition">
                <FaAngleRight /> Services
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 transition">
                <FaAngleRight /> Insurance
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 transition">
                <FaAngleRight /> Agency
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 transition">
                <FaAngleRight /> Tourism
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 transition">
                <FaAngleRight /> Payment
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide text-black">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2 hover:text-blue-600 transition">
                <FaAngleRight /> Home
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 transition">
                <FaAngleRight /> Packages
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 transition">
                <FaAngleRight /> Blog
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 transition">
                <FaAngleRight /> Contact
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 transition">
                <FaAngleRight /> FAQ
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide text-black">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="hover:text-blue-600 transition">📞 +91-7898012795</li>
              <li className="hover:text-blue-600 transition">
                📧 <a href="mailto:dhruvbadukle15@gmail.com" className="underline">dhruvbadukle15@gmail.com</a>
              </li>
              <li className="hover:text-blue-600 transition">
                💻 <a href="#">GitHub</a> | 🌐 <a href="#">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-500 text-white text-center py-4 flex   ">
          <div>
            <p className="text-xs sm:text-sm tracking-wide font-medium">
              BEST TRAVEL WEBSITE THEME
            </p>
          </div>
          <div><p className="text-xs sm:text-sm mt-1">
            COPYRIGHTS RESERVED – ISRATECH © 2025
          </p>
          </div>
        </div>


      </div>
      
    </section>
  );
}

