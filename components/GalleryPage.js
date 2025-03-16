"use client"; // Ensure this is a Client Component

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

// Import local images
import Gallery1 from "../assets/gallery/Gallery1.jpeg";
import Gallery2 from "../assets/gallery/Gallery2.jpeg";
import Gallery3 from "../assets/gallery/Gallery3.jpeg";
import Gallery4 from "../assets/gallery/Gallery4.jpeg";
import Gallery5 from "../assets/gallery/Gallery5.jpeg";
import Gallery6 from "../assets/gallery/Gallery6.jpeg";
import Gallery7 from "../assets/gallery/Gallery7.jpeg";
import Gallery8 from "../assets/gallery/Gallery8.jpeg";
import Gallery9 from "../assets/gallery/Gallery9.jpeg";
import Gallery10 from "../assets/gallery/Gallery10.jpeg";

const GalleryPage = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".gallery-slider", {
        x: "-100%", // Moves images left continuously
        ease: "linear",
        repeat: -1, // Infinite loop
        duration: 40, // 2 seconds per image (10 images, 10x2 = 20s)
      });
    }, galleryRef);

    return () => ctx.revert(); // Cleanup on component unmount
  }, []);

  const galleryImages = [
    Gallery1, Gallery2, Gallery3, Gallery4, Gallery5,
    Gallery6, Gallery7, Gallery8, Gallery9, Gallery10,
  ];

  return (
    <div className="p-5 bg-gradient-to-b from-orange-500/30 to-black/50 text-center text-white border-t" ref={galleryRef}>
      <h2 className="text-lg font-semibold mb-3">Our Gallery</h2>
      <div className="overflow-hidden w-full relative">
        <div className="flex gallery-slider w-[1000%]">
          {/* Original Images */}
          {galleryImages.map((image, index) => (
            <div key={index} className="w-1/10 flex-shrink-0 p-2">
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-auto"
                width={600}
                height={400}
              />
            </div>
          ))}
          {/* Duplicated Images for Smooth Looping */}
          {galleryImages.map((image, index) => (
            <div key={`duplicate-${index}`} className="w-1/10 flex-shrink-0 p-2">
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-auto"
                width={600}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
