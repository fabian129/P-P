import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const WORKS = [
  {
    title: "Sekelskifte Vasastan",
    location: "STOCKHOLM",
    year: "2024",
    type: "VÅNING",
    image: "/images/interior-2.jpg", 
    href: "/listings"
  },
  {
    title: "Modern Villa Lidingö",
    location: "LIDINGÖ",
    year: "2023",
    type: "VILLA",
    image: "/images/villa-1.jpg",
    href: "/listings"
  }
];

export function SelectedWorks() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      {/* Header section matching the design */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-6xl font-normal tracking-tight text-stone-900 mb-6" style={{ fontFamily: 'var(--font-heading, inherit)' }}>
            Utvalda objekt
          </h2>
          <p className="text-stone-500 text-base md:text-lg font-light leading-relaxed">
            Handplockad samling av exklusiva bostäder och fastigheter i Stockholm, med fokus på kvalitet och skandinavisk design.
          </p>
        </div>
        
        {/* Buttons / Controls */}
        <div className="flex gap-3 self-start">
          <Link href="/listings" className="w-12 h-12 rounded-xl bg-stone-800 text-stone-100 flex items-center justify-center hover:bg-stone-900 transition-colors">
            <Icon icon="solar:widget-3-bold" className="text-xl" />
          </Link>
          <Link href="/listings" className="w-12 h-12 rounded-xl border border-stone-200 text-stone-600 bg-white flex items-center justify-center hover:bg-stone-50 transition-colors">
            <Icon icon="solar:list-linear" className="text-xl" />
          </Link>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left Item */}
        <Link href={WORKS[0].href} className="group block relative">
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-stone-100">
            <Image 
              src={WORKS[0].image} 
              alt={WORKS[0].title} 
              fill 
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm text-stone-900 text-xs font-medium px-4 py-2 rounded-full tracking-wider uppercase">
              {WORKS[0].type}
            </div>
          </div>
          <div className="flex justify-between items-end px-2">
            <div>
              <h3 className="text-2xl font-normal tracking-tight text-stone-900" style={{ fontFamily: 'var(--font-heading, inherit)' }}>{WORKS[0].title}</h3>
              <p className="text-stone-400 text-xs tracking-widest uppercase mt-2">{WORKS[0].location}</p>
            </div>
            <span className="text-stone-600 text-sm font-medium">{WORKS[0].year}</span>
          </div>
        </Link>
        
        {/* Right Item (Offset down) */}
        <Link href={WORKS[1].href} className="group block relative md:mt-32">
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-stone-100">
            <Image 
              src={WORKS[1].image} 
              alt={WORKS[1].title} 
              fill 
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm text-stone-900 text-xs font-medium px-4 py-2 rounded-full tracking-wider uppercase">
              {WORKS[1].type}
            </div>
          </div>
          <div className="flex justify-between items-end px-2">
            <div>
              <h3 className="text-2xl font-normal tracking-tight text-stone-900" style={{ fontFamily: 'var(--font-heading, inherit)' }}>{WORKS[1].title}</h3>
              <p className="text-stone-400 text-xs tracking-widest uppercase mt-2">{WORKS[1].location}</p>
            </div>
            <span className="text-stone-600 text-sm font-medium">{WORKS[1].year}</span>
          </div>
        </Link>
      </div>

      {/* Button to properties below */}
      <div className="mt-20 flex justify-center">
        <Link href="/listings" className="inline-flex items-center gap-2 bg-transparent text-stone-900 border border-stone-300 px-8 py-4 rounded-full text-base font-normal hover:bg-stone-50 transition-colors">
          Se alla bostäder <Icon icon="solar:arrow-right-linear" className="text-xl" />
        </Link>
      </div>
    </section>
  );
}
