import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { flowers } from "../Components/products";
import Plant0_Logo from "../assets/img/Planto_logo.svg";
import Bg_Image from "../assets/img/nagy-arnold-X_IvVDuHvDQ-unsplash 2.png";
import { gsap } from "gsap";

const SignUp = () => {
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
      "-=0.5" // overlap slightly with left animation
    );
  }, []);

  return (
    <div className="flex min-h-screen overflow-hidden relative">
      {/* Left side with Sign Up form */}
      <div
        ref={leftRef}
        className="flex w-full md:w-1/2 justify-center items-center p-2 relative"
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
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
            Sign Up To{" "}
            <Link to="/" className=" text-green-600 ">
              <img
                src={Plant0_Logo}
                alt="Planto Logo"
                className="h-10 w-10 inline "
              />
              Planto.
            </Link>
          </h2>

          {/* Username */}
          <input
            type="text"
            placeholder="@john_doe"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

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

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="***********"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Terms */}
          <label className="flex items-center space-x-2 text-sm mb-4">
            <input type="checkbox" className="w-4 h-4" />
            <span>
              By signing up you accept the{" "}
              <a href="#" className="text-blue-500">
                Term of service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
            </span>
          </label>

          {/* Sign Up Button */}
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Sign Up
          </button>

          {/* Footer */}
          <p className="text-sm text-center mt-6 text-gray-500">
            Already have an account?{" "}
            <Link to="/SignIn" className="text-green-500 font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right side with background & flowers */}
      <div
        ref={rightRef}
        className="hidden md:flex w-1/2 items-center justify-center overflow-hidden"
      >
        <div className="z-10 w-3/4 ">
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
    </div>
  );
};

export default SignUp;
