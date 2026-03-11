"use client";

import { useRef } from "react";
import { Icon } from '@iconify/react';
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const container = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.to('.hero-char', {
      y: '0%',
      stagger: 0.02,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2
    });

    gsap.to('.parallax-bg', {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: container });

  const titleText = "Din partner för exklusiva bostadsaffärer.";
  const titleWords = titleText.split(" ");

  return (
    <section ref={container} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 pt-12 lg:pt-20 pb-24 items-center min-h-[80vh]">
      <div className="max-w-2xl">
        <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-normal leading-[1.1] text-stone-800">
          {titleWords.map((word, wIdx) => (
            <span key={wIdx} className="inline-block whitespace-nowrap mr-3 sm:mr-4">
              {word.split('').map((char, cIdx) => (
                <span key={cIdx} className="inline-block overflow-hidden align-bottom pb-1 -mb-1">
                  <span className="inline-block translate-y-[120%] hero-char">{char}</span>
                </span>
              ))}
            </span>
          ))}
        </h1>
        
        <p className="mt-8 text-lg sm:text-xl text-stone-500 font-light leading-relaxed max-w-lg">
          Vi är din lokala fastighetsmäklare i Stockholm och erbjuder expertis och lokalkännedom på högsta nivå. Vi har bred erfarenhet, kunskap och stort kundfokus.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <a href="/listings" className="relative group rounded-full p-[1px] overflow-hidden bg-stone-200 inline-flex transition-transform hover:scale-[1.02]">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E7E5E4_0%,#292524_50%,#E7E5E4_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative w-full h-full bg-[#F8F7F5] group-hover:bg-[#FAF9F8] transition-colors rounded-full px-8 py-4 flex items-center justify-center gap-3 text-base font-normal">
              Se våra bostäder <Icon icon="solar:arrow-right-linear" className="text-xl" />
            </span>
          </a>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="relative w-12 h-12">
                <Image className="rounded-full border-2 border-[#F8F7F5] object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e8dcc2a-cfdf-4807-888e-d6488bf7387d_320w.webp" alt="Client 1" fill sizes="48px" />
              </div>
              <div className="relative w-12 h-12">
                <Image className="rounded-full border-2 border-[#F8F7F5] object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp" alt="Client 2" fill sizes="48px" />
              </div>
              <div className="relative w-12 h-12">
                <Image className="rounded-full border-2 border-[#F8F7F5] object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b69128d6-8393-4270-a8e7-2c933bf498bf_320w.webp" alt="Client 3" fill sizes="48px" />
              </div>
            </div>
            <div className="text-sm font-light">
              <div className="flex text-stone-800 gap-0.5">
                <Icon icon="solar:star-linear" className="text-sm" />
                <Icon icon="solar:star-linear" className="text-sm" />
                <Icon icon="solar:star-linear" className="text-sm" />
                <Icon icon="solar:star-linear" className="text-sm" />
                <Icon icon="solar:star-linear" className="text-sm" />
              </div>
              <span className="text-stone-500 mt-1 block">Förtroende i hela Stockholm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[500px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden bg-stone-200">
        <Image 
          src="/images/hero-apartment.jpg" 
          alt="Modern Apartment Building" 
          fill 
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="absolute inset-0 w-full h-full object-cover parallax-bg scale-[1.15]" 
        />
        
        {/* Floating Elements */}
        <div className="absolute top-8 left-8 bg-[#FAF9F8]/90 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/40">
          <p className="text-xs text-stone-500 font-normal">Under förhandling</p>
          <p className="text-2xl font-normal tracking-tight mt-1">Östermalm</p>
          <button className="mt-3 text-xs font-normal border border-stone-200 px-3 py-1.5 rounded-full hover:bg-stone-50">Intresseanmälan</button>
        </div>

        <div className="absolute bottom-8 right-8 bg-[#FAF9F8]/90 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-white/40 max-w-[200px]">
          <p className="text-xs text-stone-500 font-normal">Strandvägen, Stockholm</p>
          <p className="text-xl font-normal tracking-tight mt-1">32 500 000 kr</p>
          <p className="text-xs text-stone-400 mt-2 leading-relaxed">Exklusiv våning med panoramautsikt över Nybroviken.</p>
        </div>

        <div className="absolute top-1/2 right-8 -translate-y-1/2 bg-[#FAF9F8]/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-white/40 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
            <Icon icon="solar:play-linear" className="text-sm" />
          </div>
          <span className="text-xs font-normal pr-2">Virtuell Visning</span>
        </div>
      </div>
    </section>
  );
}
