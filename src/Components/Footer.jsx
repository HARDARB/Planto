import React from "react";
import Plant0_Logo from "../assets/img/Planto_logo.svg";

export default function Footer() {
  return (
    <footer className=" bg-gray-500/10 text-white py-10 pb-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 ">
        <div>
          <h3 className="text-2xl font-bold"><img src={Plant0_Logo} alt="" className='h-10 w-10 inline' />Planto.</h3>
          <p className="mt-3 text-gray-400">Bringing nature closer to you with our curated plant collections.</p>
          <div className="mt-16 flex space-x-2.5 font-bold text-xl">
            <p>FB</p>
            <p>TW</p>
            <p>LI</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><a href="/">Home</a></li>
            <li><a href="/">Types of Plants</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div >
          <h4 className="font-semibold mb-4">Subscribe</h4>
         <div className="flex flex-col md:flex-row border border-gray-400 rounded-md overflow-hidden w-full max-w-md">
  <input
    type="email"
    placeholder="Enter your email"
    className="p-2 flex-grow bg-transparent text-white focus:outline-none"
  />
  <button className="bg-gray-300 text-black px-4 py-2 md:py-0 hover:bg-green-700 hover:text-white transition">
    Subscribe
  </button>
</div>


        </div>
      </div>
      <p className="text-center text-xs mt-8 text-gray-400">© 2025 Planto. All rights reserved.</p>
    </footer>
  );
}
