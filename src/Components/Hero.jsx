import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import AutoSwipers from "./HeroSwipper";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import Customer_img from "../assets/img/artem-beliaikin-j5almO1E8rU-unsplash.jpg";

export default function Hero() {
  const rootRef = useRef(null);   
  const leftRef = useRef(null);
  const cardRef = useRef(null);
  const rightRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    "https://videos.pexels.com/video-files/7844956/7844956-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/5971269/5971269-uhd_4096_2160_25fps.mp4",
    "https://videos.pexels.com/video-files/5717544/5717544-uhd_3840_2160_25fps.mp4",
    "https://videos.pexels.com/video-files/5717009/5717009-uhd_3840_2160_25fps.mp4",
    "https://videos.pexels.com/video-files/6964784/6964784-hd_1920_1080_25fps.mp4",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

      // Animate left container, then card, then right container
      tl.from(leftRef.current, { x: 60, autoAlpha: 0, delay: 0.5 })
        .from(cardRef.current, { y: 60, autoAlpha: 0 }, "-=0.4")
        .from(rightRef.current, { x: 60, autoAlpha: 0 }, "-=0.4");
    }, rootRef);

    return () => ctx.revert(); // cleanup for StrictMode
  }, []);

  const openModal = (idx = 0) => { setCurrentVideo(idx); setIsOpen(true); };
  const closeModal = () => setIsOpen(false);
  const nextVideo = () => setCurrentVideo((p) => (p + 1) % videos.length);
  const prevVideo = () => setCurrentVideo((p) => (p - 1 + videos.length) % videos.length);

  return (
    <section ref={rootRef} className="pt-28 relative text-white min-h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 md:gap-8 max-w-6xl mx-auto px-8 w-full">
        {/* Left Section */}
        <div ref={leftRef}>
          <h1 className="text-5xl md:text-6xl font-bold">Breathe Naturally</h1>
          <p className="mt-4 text-md max-w-xl mx-auto">
            Transform your home into a green sanctuary with our curated collection of indoor plants that purify the air and bring life into your space.
          </p>
          <div className="mt-6 space-x-4">
            <button className="border px-2 md:px-8 py-2 rounded-lg shadow-lg hover:bg-green-700">Explore</button>
            <button onClick={() => openModal(0)} className="px-6 py-3 hover:text-green-400 transition">
              <FaRegCirclePlay className="inline mr-2 md:text-4xl text-xl" />
              Live Demo . . .
            </button>
          </div>

          {/* Customer Review Card */}
          <div ref={cardRef} className="mt-18 backdrop-blur-3xl bg-green-100/10 border p-4 rounded-2xl shadow-lg max-w-xs">
            <div className="flex items-center space-x-4">
              <div className="w-15 h-15">
                <img src={Customer_img} alt="customer" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl">Alina Patel</h1>
                <div className="flex justify-center space-x-1.5 mt-1">
                  <IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf />
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm">I got my first delivery. Plant lovers can discover the joy of nurturing nature at home here.</p>
          </div>
        </div>

        {/* Right Section */}
        <div ref={rightRef} className="flex items-center md:justify-end">
          <AutoSwipers />
        </div>
      </div>

      {/* Video Modal with Next/Prev */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl px-4">
            <button className="absolute -top-10 right-0 text-white text-3xl hover:text-red-500" onClick={closeModal}>
              <IoClose />
            </button>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-green-400" onClick={prevVideo}>
              <IoChevronBack />
            </button>

            <video
              key={videos[currentVideo]}  // forces reload on index change
              src={videos[currentVideo]}
              controls
              autoPlay
              className="w-full h-[50vh] md:h-[60vh] rounded-lg shadow-lg"
            />

            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-green-400" onClick={nextVideo}>
              <IoChevronForward />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
