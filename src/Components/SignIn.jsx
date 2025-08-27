import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { flowers } from "../Components/products";
import Plant0_Logo from "../assets/img/Planto_logo.svg";
import Bg_Image from "../assets/img/nagy-arnold-X_IvVDuHvDQ-unsplash 2.png";
import { RiFacebookCircleFill } from "react-icons/ri";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { gsap } from "gsap";

const SignIn = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.fromTo(
      leftRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1 }
    ).fromTo(
      rightRef.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1 },
      "-=0.5" // overlaps the animation slightly
    );
  }, []);

  return (
    <div className="flex min-h-screen overflow-hidden relative">
      {/* Left side with background & flowers */}
      <div
        ref={leftRef}
        className="hidden md:flex w-1/2 items-center justify-center overflow-hidden"
      >
        <div className="z-10 w-3/4">
          <Slider {...settings}>
            {flowers.map((flower, idx) => (
              <div key={idx} className="flex justify-center">
                <img
                  src={flower}
                  alt={`flower-${idx}`}
                  className="object-contain max-h-auto mx-auto drop-shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Right side with Sign In form */}
      <div
        ref={rightRef}
        className="flex w-full md:w-1/2 justify-center items-center p-4 relative"
      >
        {/* Background image */}
        <img
          src={Bg_Image}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="bg-white relative z-10 rounded-2xl shadow-xl p-8 w-96">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
            Sign In To
            <Link className=" text-green-600 " to="/">
              <img
                src={Plant0_Logo}
                alt="Planto Logo"
                className="h-10 w-10 inline "
              />
              Planto.
            </Link>
          </h2>

          {/* Email */}
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="***********"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Remember me + Forgot */}
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="w-4 h-4" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="text-sm text-gray-500 hover:text-green-500">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-2 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Socials */}
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
              <RiFacebookCircleFill />
            </button>
            <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
              <IoLogoGoogleplus />
            </button>
            <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
              <FaXTwitter />
            </button>
          </div>

          {/* Footer */}
          <p className="text-sm text-center mt-6 text-gray-500">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-green-500 font-medium">
              Create new one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
