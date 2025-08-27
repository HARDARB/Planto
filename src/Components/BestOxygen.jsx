import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import Bg_Image from "../assets/img/Rectangle_O2.png";
import { itemsBestOxygen } from "../Components/products";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function BestOxygen() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // create GSAP context scoped to the sectionRef
    const ctx = gsap.context(() => {
      // select elements INSIDE the section
      const targets = sectionRef.current
        ? sectionRef.current.querySelectorAll(".animate-on-scroll")
        : [];


      gsap.from(targets, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // when the top of the section hits 80% of viewport
          toggleActions: "play none none reverse",
          // markers: true, // <-- enable for debugging trigger positions
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    // refresh ScrollTrigger after paint (helps with slider/cloned slides & images)
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    // also refresh after a short delay to catch async layout changes (safe)
    const t = setTimeout(() => ScrollTrigger.refresh(), 150);

    return () => {
      clearTimeout(t);
      ctx.revert(); // cleanup
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    beforeChange: (_, next) => setCurrentSlide(next),
    afterChange: () => {
      // refresh when react-slick finishes a change (helps ScrollTrigger recalc)
      ScrollTrigger.refresh();
    },
    customPaging: () => (
      <div className="h-2 w-3 rounded-full bg-gray-400 transition-all duration-300"></div>
    ),
    appendDots: (dots) => (
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <div ref={sectionRef} className="relative py-8">
      <h2 className="md:text-3xl text-2xl font-bold md:mb-28 text-white md:mt-18 text-center animate-on-scroll">
        Our Best O₂ Plants
      </h2>

      <div className="relative max-w-6xl mx-auto px-4 text-white">
        <div className="absolute inset-0 z-0 flex justify-center">
          <img
            src={Bg_Image}
            alt="background"
            className="w-full hidden md:block h-100 object-contain pointer-events-none select-none"
            onLoad={() => ScrollTrigger.refresh()} // refresh after background image loads
          />
        </div>

        <div className="relative z-10 md:p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-full md:w-1/2 animate-on-scroll">
              <img
                src={itemsBestOxygen[currentSlide].image}
                alt={itemsBestOxygen[currentSlide].title}
                className="object-contain w-full h-full md:-mt-[10rem] md:ml-20"
                onLoad={() => ScrollTrigger.refresh()} // refresh after slide image loads
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-between animate-on-scroll">
              <div className="max-w-sm">
                <Slider
                  ref={sliderRef}
                  {...settings}
                  className="best-oxygen-slider"
                >
                  {itemsBestOxygen.map((item, index) => (
                    // animate each slide block (Slick clones slides, so selection via sectionRef is robust)
                    <div key={index} className="animate-on-scroll">
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="mb-6">{item.description}</p>
                    </div>
                  ))}
                </Slider>

                <div className="grid grid-cols-2 gap-2 md:gap-10">
                  <div className="md:order-1 order-2">
                    <button className="mt-6 border  px-8 py-2 rounded-lg shadow hover:bg-green-700 hover:text-white transition">
                      Explore
                    </button>
                  </div>

                  <div className="flex items-center md:space-x-4 mt-4 md:order-2 order-1">
                    <button
                      onClick={() => sliderRef.current.slickPrev()}
                      className="w-10 h-10 flex items-center justify-center rounded-full  text-white hover:bg-green-700 transition"
                    >
                      <IoChevronBack size={20} />
                    </button>
                    <span className="font-semibold">
                      {currentSlide + 1} / {itemsBestOxygen.length}
                    </span>
                    <button
                      onClick={() => sliderRef.current.slickNext()}
                      className="w-10 h-10 flex items-center justify-center rounded-full  text-white hover:bg-green-700 transition"
                    >
                      <IoChevronForward size={20} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .best-oxygen-slider .slick-dots {
            position: absolute;
            bottom: -220px;
          }
        }
        .best-oxygen-slider .slick-dots li {
          width: auto !important;
        }
        .best-oxygen-slider .slick-dots li.slick-active div {
          width: 16px !important;
          background-color: #16a34a !important;
        }
        .best-oxygen-slider .slick-dots li div {
          width: 8px;
          height: 4px;
          border-radius: 9999px;
          background: #9ca3af;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}

