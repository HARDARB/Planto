import React, { useLayoutEffect, useRef } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { WhiteButton } from "../Components/BuyNowButton";
import { goods } from "../Components/products";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TrendyPlants = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".plant-card");

      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.05,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",      // when the top of the card hits 85% of viewport height
            toggleActions: "play none none reverse",
            // markers: true,      // enable for debugging
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative text-white pt-[4rem] md:pt-16">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center md:pb-30 pb-2">Our Trendy Plants</h2>

        <div className="md:space-y-10">
          {goods.map((good, index) => (
            <div
              key={good.id}
              className={`plant-card relative flex flex-col md:flex-row items-center justify-between gap-6 px-6 rounded-3xl overflow-visible ${
                index === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* background layer (desktop only) */}
              <img
                src={good.background}
                alt="background"
                className="absolute inset-0 w-full hidden md:block h-[280] md:object-cover opacity-50 z-0"
              />

              {/* Plant Image */}
              <div className="md:flex-shrink-0 md:w-100 md:-mt-30 relative z-10">
                <img
                  src={good.image}
                  alt={good.name}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10 md:pl-10 -mt-10 md:-mt-6">
                <h3 className="text-xl font-semibold mb-2">{good.name}</h3>
                <p className="text-sm text-gray-200 mb-4">{good.description}</p>
                <p className="text-lg font-bold mb-4">${good.price}</p>
                <WhiteButton key={good.id} product={good} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendyPlants;
