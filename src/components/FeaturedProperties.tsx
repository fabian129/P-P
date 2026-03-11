"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from '@iconify/react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PROPERTIES = [
  {
    title: "Strandvägen Våning",
    location: "Strandvägen 7A, Stockholm",
    price: "32 500 000 kr",
    beds: 4,
    baths: 3,
    sqft: "160 kvm",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00cbf3d5-c57a-44b4-8ff1-669b2228ff09_3840w.jpg"
  },
  {
    title: "Modern Villa Lidingö",
    location: "Herserudsvägen 12, Lidingö",
    price: "24 000 000 kr",
    beds: 5,
    baths: 4,
    sqft: "280 kvm",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e95c120c-4095-44e5-84e0-a99494a6c22b_1600w.jpg"
  },
  {
    title: "Sekelskifte Vasastan",
    location: "Odengatan 15, Stockholm",
    price: "15 900 000 kr",
    beds: 3,
    baths: 2,
    sqft: "115 kvm",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/838f503d-a3fc-48b8-8498-40e9fcbf33cd_1600w.jpg"
  }
];

export function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % PROPERTIES.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + PROPERTIES.length) % PROPERTIES.length);
  };

  const getCardClass = (index: number) => {
    if (index === currentIndex) return "card-active";
    if (index === (currentIndex + 1) % PROPERTIES.length) return "card-next";
    if (index === (currentIndex - 1 + PROPERTIES.length) % PROPERTIES.length) return "card-prev";
    return "card-hidden";
  };

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
        <div>
          <span className="text-xs font-normal text-stone-400 tracking-widest uppercase flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-800"></span> 01 · I fokus
          </span>
          <h2 className="text-3xl sm:text-4xl tracking-tight font-normal text-stone-900">Utvalda bostäder</h2>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={prevCard} 
            className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors"
          >
            <Icon icon="solar:arrow-left-linear" className="text-xl" />
          </button>
          <button 
            onClick={nextCard} 
            className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors"
          >
            <Icon icon="solar:arrow-right-linear" className="text-xl" />
          </button>
        </div>
      </div>

      <div className="relative h-[600px] w-full card-rotator overflow-hidden rounded-[2rem]">
        {PROPERTIES.map((property, index) => (
          <div key={index} className={cn("absolute inset-0 card-slide", getCardClass(index))}>
            <div className="w-full h-full bg-[#FAF9F8] rounded-[2rem] border border-stone-200/60 overflow-hidden flex flex-col shadow-sm">
              <div className="relative h-2/3 w-full overflow-hidden">
                <Image 
                  src={property.image} 
                  alt={property.title} 
                  fill 
                  className="object-cover sepia-[.15]" 
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F8]/90 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center text-sm font-normal border border-white/40">
                  <span className="flex items-center gap-2 text-stone-700"><Icon icon="solar:bed-linear" className="text-lg" /> {property.beds} RoK</span>
                  <span className="flex items-center gap-2 text-stone-700"><Icon icon="solar:bath-linear" className="text-lg" /> {property.baths} Bad</span>
                  <span className="flex items-center gap-2 text-stone-700"><Icon icon="solar:ruler-linear" className="text-lg" /> {property.sqft}</span>
                </div>
              </div>
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-normal tracking-tight text-stone-900">{property.title}</h3>
                  <p className="text-stone-500 text-base mt-2 font-light">{property.location}</p>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-normal tracking-tight text-stone-900">{property.price}</span>
                  <button className="text-sm font-normal border-b border-stone-900 pb-0.5 hover:text-stone-500 hover:border-stone-500 transition-colors">Läs mer</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
