// 
import React, { useEffect, useRef } from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Background_img from "../assets/img/Rectangle_CustomerReview.png";
import Customer_one from "../assets/img/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";
import Customer_two from "../assets/img/anil-sharma-C03yHydhdL4-unsplash.jpg";
import Customer_three from "../assets/img/aydin-sefidi-OsoC2dXAvoQ-unsplash.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
  const reviewsRef = useRef([]);

  const reviews = [
    { 
      name: "Maxn Raval",
      img: Customer_one,
      text: "Amazing service and beautiful plants! My living room feels so fresh now.",
      background: Background_img,
    },
    { 
      name: "Venely K",
      img: Customer_two,
      text: "I love the quality of the plants. They were delivered in perfect condition.",
      background: Background_img,
    },
    { 
      name: "Lii Thakur",
      img: Customer_three,
      text: "Affordable and stylish plants. Highly recommended for every home!",
      background: Background_img,
    },
  ];

  useEffect(() => {
    reviewsRef.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.2, // stagger effect
          }
        );
      }
    });
  }, []);

  return (
    <section className="py-16 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, index) => (
          <div
            key={index}
            ref={(el) => (reviewsRef.current[index] = el)}
            className="relative p-10 rounded-2xl shadow-md bg-opacity-70"
          >
            {/* ✅ Background image */}
            <img
              src={r.background}
              alt="background"
              className="absolute inset-0 w-auto h-auto object-cover z-0"
            />

            {/* ✅ Foreground content */}
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{r.name}</h4>
                  <div className="flex space-x-1 text-yellow-400">
                    <IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf />
                  </div>
                </div>
              </div>
              <p className="italic md:text-md text-sm">"{r.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
