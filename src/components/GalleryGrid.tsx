"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Icon } from '@iconify/react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ALL_PROPERTIES = [
  {
    title: "Strandvägen Våning",
    location: "Strandvägen 7A, Stockholm",
    price: "32 500 000 kr",
    beds: 4,
    baths: 3,
    sqft: "160 kvm",
    image: "/images/interior-1.jpg",
    status: "available",
  },
  {
    title: "Modern Villa Lidingö",
    location: "Herserudsvägen 12, Lidingö",
    price: "24 000 000 kr",
    beds: 5,
    baths: 4,
    sqft: "280 kvm",
    image: "/images/villa-1.jpg",
    status: "upcoming",
  },
  {
    title: "Sekelskifte Vasastan",
    location: "Odengatan 15, Stockholm",
    price: "15 900 000 kr",
    beds: 3,
    baths: 2,
    sqft: "115 kvm",
    image: "/images/interior-2.jpg",
    status: "available",
  },
  {
    title: "Takvåning Kungsholmen",
    location: "Norr Mälarstrand 22, Stockholm",
    price: "18 500 000 kr",
    beds: 3,
    baths: 2,
    sqft: "135 kvm",
    image: "/images/apartment-ext.jpg",
    status: "sold",
  },
  {
    title: "Arkitektritad Villa Bromma",
    location: "Svalvägen 8, Bromma",
    price: "19 500 000 kr",
    beds: 4,
    baths: 3,
    sqft: "220 kvm",
    image: "/images/villa-2.jpg",
    status: "available",
  },
  {
    title: "Sjönära Ekerö",
    location: "Strandpromenaden 1, Ekerö",
    price: "14 200 000 kr",
    beds: 4,
    baths: 2,
    sqft: "180 kvm",
    image: "/images/hero-apartment.jpg",
    status: "upcoming",
  }
];

export function TopMenu() {
  return (
    <nav className="flex items-center justify-between py-6 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200/60 mb-12">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/" className="block relative h-10 hover:opacity-80 transition-opacity">
          <Image 
            src="/Properties_partners.R.white-c95e2828.png" 
            alt="Properties & Partners" 
            width={180} 
            height={40} 
            className="h-8 w-auto object-contain brightness-0" 
          />
        </a>
      </div>
      {/* Classic Centered Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm font-normal text-stone-600">
        <a href="/" className="hover:text-stone-900 transition-colors">Start</a>
        <a href="/listings" className="text-stone-900 border-b border-stone-900 pb-0.5">Bostäder</a>
        <a href="/#contact-section" className="hover:text-stone-900 transition-colors">Rådgivning</a>
        <a href="/#about" className="hover:text-stone-900 transition-colors">Vår filosofi</a>
      </div>
      
      {/* Right Action Button */}
      <div className="flex items-center">
        <a href="/#contact-section" className="flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-sm font-normal hover:bg-stone-800 transition-colors">
          Boka värdering <Icon icon="solar:letter-linear" className="text-lg" />
        </a>
      </div>
    </nav>
  );
}

export function GalleryGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.gallery-card');
    
    gsap.fromTo(cards,
      { 
        y: 50, 
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
        }
      }
    );
  }, { scope: gridRef });

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32">
      
      <div className="mb-12">
         <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal text-stone-900 mb-6">Till Salu</h1>
         <p className="text-lg text-stone-500 font-light leading-relaxed max-w-2xl">
           Utforska vårt handplockade utbud av Stockholms mest exklusiva bostäder och fastigheter. Varje objekt i vår portfölj är noga utvalt för att möta högsta standard för kvalitet, design och läge.
         </p>
      </div>

      {/* Modern Filter Bar (P&P Properties inspired) */}
      <div className="mb-12 bg-white sticky top-4 z-40 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-stone-200/60 p-4 lg:p-2">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* Status Tabs */}
          <div className="flex w-full lg:w-auto p-1 bg-stone-100/50 rounded-xl">
             <button className="flex-1 lg:flex-none px-6 py-2.5 rounded-lg bg-white text-stone-900 text-sm font-medium shadow-sm border border-stone-200/50 transition-all">
                Till salu
             </button>
             <button className="flex-1 lg:flex-none px-6 py-2.5 rounded-lg text-stone-500 hover:text-stone-900 text-sm font-medium transition-all">
                Kommande
             </button>
             <button className="flex-1 lg:flex-none px-6 py-2.5 rounded-lg text-stone-500 hover:text-stone-900 text-sm font-medium transition-all hidden sm:block">
                Sålda objekt
             </button>
          </div>

          {/* Search, Type, and Size filters */}
          <div className="flex w-full lg:w-auto items-center gap-2 lg:gap-4 flex-col sm:flex-row">
            <div className="relative w-full sm:w-64">
               <Icon icon="solar:magnifer-linear" className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-lg" />
               <input 
                 type="text" 
                 placeholder="Sök område eller gata..." 
                 className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-stone-200 transition-all placeholder:text-stone-400"
               />
            </div>

            <div className="flex w-full sm:w-auto gap-2">
              <div className="relative flex-1 sm:flex-none">
                <select className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2.5 bg-stone-50 border border-stone-200/80 rounded-xl text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-200 transition-all cursor-pointer">
                  <option>Bostadstyp</option>
                  <option>Lägenhet / Våning</option>
                  <option>Villa / Gård</option>
                  <option>Fritidshus</option>
                </select>
                <Icon icon="solar:alt-arrow-down-linear" className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400" />
              </div>
              <div className="relative flex-1 sm:flex-none">
                <select className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2.5 bg-stone-50 border border-stone-200/80 rounded-xl text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-200 transition-all cursor-pointer">
                  <option>Storlek</option>
                  <option>Minst 3 RoK</option>
                  <option>Minst 4 RoK</option>
                  <option>Minst 5+ RoK</option>
                </select>
                <Icon icon="solar:alt-arrow-down-linear" className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {ALL_PROPERTIES.map((property, index) => (
          <div key={index} className="gallery-card group cursor-pointer">
            <div className="w-full bg-[#FAF9F8] rounded-3xl border border-stone-200/60 overflow-hidden flex flex-col shadow-sm transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-md">
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image 
                  src={property.image} 
                  alt={property.title} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {property.status === 'upcoming' && (
                   <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur text-white text-xs font-medium px-3 py-1.5 rounded-full">
                     Kommande uppdrag
                   </div>
                )}
                {property.status === 'sold' && (
                   <div className="absolute top-4 left-4 bg-stone-200/90 backdrop-blur text-stone-600 border border-stone-300 text-xs font-medium px-3 py-1.5 rounded-full">
                     Såld
                   </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F8]/90 backdrop-blur-md rounded-2xl p-3 flex justify-between items-center text-xs font-normal border border-white/40">
                  <span className="flex items-center gap-1.5 text-stone-700"><Icon icon="solar:bed-linear" className="text-base" /> {property.beds}</span>
                  <span className="flex items-center gap-1.5 text-stone-700"><Icon icon="solar:bath-linear" className="text-base" /> {property.baths}</span>
                  <span className="flex items-center gap-1.5 text-stone-700"><Icon icon="solar:ruler-linear" className="text-base" /> {property.sqft}</span>
                </div>
              </div>
              <div className="p-6">
                <div>
                  <h3 className="text-xl font-normal tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors">{property.title}</h3>
                  <p className="text-stone-500 text-sm mt-1.5 font-light">{property.location}</p>
                </div>
                <div className="mt-6 flex justify-between items-end">
                  <span className="text-lg font-normal tracking-tight text-stone-900">{property.price}</span>
                  <span className="text-sm font-normal flex items-center gap-1 text-stone-400 group-hover:text-stone-900 transition-colors">
                    Läs mer <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
