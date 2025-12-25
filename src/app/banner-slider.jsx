"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function BannerSlider({ sliderItemsList = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (sliderItemsList.length < 2) return;

    const id = setTimeout(() => {
      setCurrentSlide((prevIdx) =>
        prevIdx === sliderItemsList.length - 1 ? 0 : prevIdx + 1
      );
    }, 3000);

    return () => clearTimeout(id);
  }, [currentSlide, sliderItemsList.length]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Banner slider"
      className="flex-1 relative bg-red-300 overflow-hidden h-150"
    >
      {sliderItemsList.map((item, idx) => (
        <Image
          key={item.id}
          src={item.src}
          alt={item.alt}
          fill
          sizes="800px"
          preload={idx <= 1}
          aria-hidden={idx !== currentSlide}
          draggable={false}
          className={[
            "absolute inset-0 object-contain",
            idx === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none",
          ].join(" ")}
        />
      ))}
    </div>
  );
}
