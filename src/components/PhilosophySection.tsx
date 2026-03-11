"use client";

import { useRef } from "react";
import { Icon } from '@iconify/react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PhilosophySection() {
  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.to('.about-word', {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%',
      },
      y: '0%',
      stagger: 0.015,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: container });

  const text = "Vi ser varje bostadsaffär som unik. Det handlar inte bara om kvadratmeter, utan om hur ett hem får dig att känna, leva och växa. Vår rådgivning bygger på absolut transparens, gedigen marknadskännedom och ett oslagbart nätverk.";
  const words = text.split(" ");

  return (
    <section ref={container} id="about" className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-[#FAF9F8] rounded-[3rem] shadow-sm border border-stone-200/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <span className="text-xs font-normal text-stone-400 tracking-widest uppercase flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-800"></span> 02 · Vår Filosofi
          </span>
          
          {/* Masked Staggered Word Reveal Target */}
          <p ref={textRef} className="text-2xl sm:text-3xl lg:text-4xl font-light leading-[1.3] tracking-tight text-stone-900">
            {words.map((word, wIdx) => (
              <span key={wIdx} className="inline-block overflow-hidden align-bottom pb-2 -mb-2 mr-2">
                <span className="inline-block translate-y-[120%] about-word">{word}</span>
              </span>
            ))}
          </p>
        </div>
        
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 lg:pt-0">
          <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200/60 flex flex-col items-start transition-colors hover:bg-stone-100/50">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-100 mb-6 text-stone-700">
              <Icon icon="solar:stars-linear" className="text-xl" />
            </div>
            <h4 className="text-xl font-normal tracking-tight mb-3 text-stone-900">Noggrant utvalt</h4>
            <p className="text-base text-stone-500 font-light leading-relaxed">Vi filtrerar bort bruset och presenterar endast bostäder och köpare som möter våra rigorösa krav på kvalitet, design och läge.</p>
          </div>
          
          <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200/60 flex flex-col items-start transition-colors hover:bg-stone-100/50 sm:translate-y-8">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-100 mb-6 text-stone-700">
              <Icon icon="solar:global-linear" className="text-xl" />
            </div>
            <h4 className="text-xl font-normal tracking-tight mb-3 text-stone-900">Brett nätverk</h4>
            <p className="text-base text-stone-500 font-light leading-relaxed">Få tillgång till off-market försäljningar och exklusiva spekulanter genom våra djupa relationer och diskreta kanaler över hela Stockholm.</p>
          </div>
          
          <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200/60 flex flex-col items-start transition-colors hover:bg-stone-100/50">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-100 mb-6 text-stone-700">
              <Icon icon="solar:shield-check-linear" className="text-xl" />
            </div>
            <h4 className="text-xl font-normal tracking-tight mb-3 text-stone-900">Sömlös process</h4>
            <p className="text-base text-stone-500 font-light leading-relaxed">Från första möte till överlåtelse orkestrerar vårt team varje detalj för att säkerställa en friktionsfri och trygg affär för alla parter.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
