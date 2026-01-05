"use client";

import { useState } from "react";
import { X } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

// Placeholder images - replace with your actual images later
const IMAGES = [
  {
    id: 1,
    src: "/pics/whatsapp1.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 2,
    src: "/pics/whatsapp2.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 3,
    src: "/pics/whatsapp3.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 4,
    src: "/pics/whatsapp4.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 5,
    src: "/pics/whatsapp5.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 6,
    src: "/pics/whatsapp6.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 7,
    src: "/pics/whatsapp7.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 8,
    src: "/pics/whatsapp8.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 9,
    src: "/pics/whatsapp9.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 10,
    src: "/pics/whatsapp10.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 11,
    src: "/pics/whatsapp11.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 12,
    src: "/pics/whatsapp12.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 13,
    src: "/pics/whatsapp13.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 14,
    src: "/pics/whatsapp14.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 15,
    src: "/pics/whatsapp15.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 16,
    src: "/pics/whatsapp16.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 17,
    src: "/pics/whatsapp17.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 18,
    src: "/pics/whatsapp18.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 20,
    src: "/pics/whatsapp20.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 21,
    src: "/pics/whatsapp21.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 22,
    src: "/pics/whatsapp22.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 23,
    src: "/pics/whatsapp23.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 24,
    src: "/pics/whatsapp24.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 26,
    src: "/pics/whatsapp26.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 27,
    src: "/pics/whatsapp27.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  {
    id: 28,
    src: "/pics/whatsapp28.jpeg",
    alt: "Description",
    //caption: "Your caption here",
  },
  // ... more photos
];

export default function PicsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const selectedImg = IMAGES.find((img) => img.id === selectedImage);

  return (
    <main className="container max-w-9xl mx-auto px-2 py-20 pb-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <BlurFade delay={0.1}>
          <h1 className="text-4xl font-bold mb-2">Gallery</h1>
        </BlurFade>
        <BlurFade delay={0.2}>
          <p className="text-muted-foreground">
            Photos from around Chandigarh and beyond. Captured on a Pixel 6, CMF
            Phone 2 Pro or a Canon T7
          </p>
        </BlurFade>
      </div>

      {/* Pinterest-style Masonry Grid */}
      <div className="columns-2 md:columns-4 gap-2 md:gap-4">
        {IMAGES.map((image, index) => (
          <BlurFade key={image.id} delay={0.1 + index * 0.05}>
            <div
              className="relative mb-2 md:mb-4 cursor-pointer overflow-hidden group break-inside-avoid inline-block w-full"
              onClick={() => openLightbox(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <span className="text-white text-sm">View</span>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImg.src}
              alt={selectedImg.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {/*selectedImg.caption && <p className="text-white mt-4 text-center">{selectedImg.caption}</p>*/}
          </div>
        </div>
      )}
    </main>
  );
}
