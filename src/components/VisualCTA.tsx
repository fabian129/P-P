"use client";

import { useRef } from "react";
import Image from "next/image";
import { Icon } from '@iconify/react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function VisualCTA() {
  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.to('.cta-parallax', {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.fromTo('.cta-text', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative h-[500px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 w-full h-full scale-[1.2]">
          <Image 
            src="/images/hero-apartment.jpg" 
            alt="Interior CTA" 
            fill 
            className="object-cover cta-parallax" 
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-stone-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
        
        {/* Content */}
        <div className="absolute inset-0 p-8 sm:p-16 flex flex-col justify-between items-center text-center">
          <span className="text-xs font-normal text-white/80 tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white leading-none"></span> 04 · Kontakt
          </span>
          
          <div ref={textRef} className="max-w-2xl mt-auto">
            <h2 className="cta-text text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal text-white mb-8">Vill du nå vårt unika nätverk för din bostadsaffär?</h2>
            
            <a href="#contact-section" className="cta-text inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-full text-base font-normal hover:bg-stone-100 transition-colors group">
              Kontakta oss idag <Icon icon="solar:arrow-right-linear" className="text-xl group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
