import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoChevronForward } from "react-icons/io5";
import Bg_Image from "../assets/img/Rectangle_Background.png"; // Adjust path as needed
import { WhiteButton } from "../Components/BuyNowButton"; 
import { items } from "../Components/products";

const AutoSwipers = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    customPaging: () => (
      <div className="h-2 w-3 rounded-full bg-gray-400 transition-all duration-300"></div>
    ),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2 -mt-4">{dots}</ul>
      </div>
    ),
  };


  return (
    <div className="relative  max-w-xs flex justify-center ">
      {/* ✅ Background image */}
      <div className="">
        <img
          src={Bg_Image}
          alt="background"
          className="absolute mt-10 inset-0 w-full h-full object-contain z-0 rounded-3xl overflow-hidden"
        />
      </div>
      

      {/* ✅ Foreground content */}
      <div className="relative md:max-w-[300px] max-w-[250px]  md:-mt-20 z-10 ">
        <Slider ref={sliderRef} {...settings} className="HeroSwipper">
          {items.map((item, index) => (
            <div key={index} className="relative ">
              <img
                src={item.image}
                alt={item.description}
                className="w-auto h-auto object-cover "
              />
              <div className="-mt-10 pb-4 pl-10 pr-10 pt-0">
               <p>${item.price}</p>
                <h2 className="md:text-sm text-xs mb-2">{item.title}</h2>
                <div className="flex items-center justify-between">
                  <p className="md:text-2xl font-semibold">{item.description}</p>
                  <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="ml-4 inline-flex items-center justify-center w-6 h-6 text-white rounded-full shadow-lg hover:bg-green-700 transition"
                  >
                    <IoChevronForward size={20} />
                  </button>
                </div>
              
                <div className="mt-4">
                  <WhiteButton key={item.id} product={item} />
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* ✅ Custom indicator override */}
          <style jsx>{`
       .HeroSwipper .slick-dots {
          position: absolute;
          bottom: -20px;
        }
  .HeroSwipper .slick-dots li {
    width: auto !important;
  }
  .HeroSwipper .slick-dots li.slick-active div {
    width: 16px !important;
    background-color: #16a34a !important;
  }
  .HeroSwipper .slick-dots li div {
    width: 8px;
    height: 4px;
    border-radius: 9999px;
    background: #9ca3af;
    transition: all 0.3s ease;
  }
`}</style>
      </div>
    </div>
  );
};

export default AutoSwipers;
