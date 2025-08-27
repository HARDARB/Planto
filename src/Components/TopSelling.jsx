import React, { useEffect, useRef } from "react";
import { GreenButton } from "../components/BuyNowButton";
import { plants } from "../Components/products";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TopSelling() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "10% 80%", // when top of section hits 80% viewport
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section ref={sectionRef} className="py-16 text-white text-center">
      <h2 className="text-3xl font-bold mb-20">Our Top Selling</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-3xl mx-auto">
        {plants.map((plant, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative text-white p-5 rounded-2xl shadow-md flex flex-col items-center"
          >
            {/* Background image */}
            <img
              src={plant.background}
              alt="background"
              className="absolute inset-0 w-full h-full object-contain z-0"
            />

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-auto h-auto -mt-20 object-cover"
              />
              <div className="-mt-4">
                <h3 className="text-lg font-semibold">{plant.name}</h3>
                <p className="text-sm text-gray-300">Beautiful indoor plant</p>
                <p className="mt-2 font-bold">${plant.price}</p>
                <GreenButton key={plant.id} product={plant} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
