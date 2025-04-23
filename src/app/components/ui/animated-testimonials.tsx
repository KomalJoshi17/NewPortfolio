"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay && !isHovered) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isHovered]);

  return (
    <section
      id="work"

      className="scroll-mt-24 w-full bg-[#0B0D10] text-white font-sans px-4 py-12 flex flex-col items-center justify-center"
      // className="w-full bg-[#0B0D10] text-white font-sans px-4 py-10 flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500"
      >
        My Creative Work
      </motion.h2>

      {/* Card */}
      <div className="w-full max-w-2xl rounded-xl bg-black/30 shadow-lg p-4 md:p-6 flex flex-col items-center">
        {/* Image */}
        <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) =>
              index === active ? (
                <motion.div
                  key={testimonial.src}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Text */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            {testimonials[active].name}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            {testimonials[active].designation}
          </p>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed px-1">
            {testimonials[active].quote}
          </p>
        </motion.div>

        {/* Arrows */}
        <div className="flex gap-4 mt-5">
          <button
            onClick={handlePrev}
            className="h-9 w-9 rounded-full bg-[#1F1F1F] hover:bg-[#2C2C2C] transition-all"
          >
            <IconArrowLeft className="text-gray-300 mx-auto" size={18} />
          </button>
          <button
            onClick={handleNext}
            className="h-9 w-9 rounded-full bg-[#1F1F1F] hover:bg-[#2C2C2C] transition-all"
          >
            <IconArrowRight className="text-gray-300 mx-auto" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
