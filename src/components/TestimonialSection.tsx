import { Icon } from '@iconify/react';
import Image from 'next/image';

export function TestimonialSection() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <span className="text-xs font-normal text-stone-400 tracking-widest uppercase flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-stone-800"></span> 03 · Perspektiv
      </span>
      <h2 className="text-3xl sm:text-4xl tracking-tight font-normal text-stone-900 mb-12">Vad våra kunder säger</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-[#FAF9F8] p-8 rounded-3xl border border-stone-200/60 flex flex-col justify-between hover:bg-stone-50/80 transition-colors">
          <div>
            <div className="flex text-stone-800 gap-0.5 mb-6">
              <Icon icon="solar:star-bold" className="text-sm" />
              <Icon icon="solar:star-bold" className="text-sm" />
              <Icon icon="solar:star-bold" className="text-sm" />
              <Icon icon="solar:star-bold" className="text-sm" />
              <Icon icon="solar:star-bold" className="text-sm" />
            </div>
            <p className="text-base text-stone-600 font-light leading-relaxed mb-8">
              "Deras öga för detaljer och tillgång till exklusiva objekt under hand revolutionerade vårt sökande. De förstod exakt vilken typ av sekelskiftesvåning vi letade efter i Vasastan."
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <Image className="rounded-full border border-stone-200 object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e8dcc2a-cfdf-4807-888e-d6488bf7387d_320w.webp" alt="Anna Jansson" fill sizes="48px" />
            </div>
            <div>
              <p className="text-sm font-normal text-stone-900">Anna Jansson</p>
              <p className="text-xs font-light text-stone-500 mt-0.5">Köpare, Vasastan</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-[#FAF9F8] p-8 rounded-3xl border border-stone-200/60 flex flex-col justify-between hover:bg-stone-50/80 transition-colors">
          <div>
            <div className="flex text-stone-800 gap-0.5 mb-6">
              <Icon icon="solar:star-bold" className="text-sm" />
              <Icon icon="solar:star-bold" className="text-sm" />
              <Icon icon="solar:star-bold" className="text-sm" />
              <Icon icon="solar:star-bold" className="text-sm" />
              <Icon icon="solar:star-bold" className="text-sm" />
            </div>
            <p className="text-base text-stone-600 font-light leading-relaxed mb-8">
              "Att sälja familjevillan genom Properties & Partners var ett mästerverk i professionalism. Varje förhandling sköttes med yttersta diskretion, och slutpriset överträffade förväntningarna."
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <Image className="rounded-full border border-stone-200 object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp" alt="David Chen" fill sizes="48px" />
            </div>
            <div>
              <p className="text-sm font-normal text-stone-900">David Lindström</p>
              <p className="text-xs font-light text-stone-500 mt-0.5">Säljare, Lidingö</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-[#FAF9F8] p-8 rounded-3xl border border-stone-200/60 flex flex-col justify-between hover:bg-stone-50/80 transition-colors">
          <div>
            <div className="flex text-stone-800 gap-0.5 mb-6">
              <Icon icon="solar:star-bold" className="text-sm" />
              <Icon icon="solar:star-bold" className="text-sm" />
              <Icon icon="solar:star-bold" className="text-sm" />
              <Icon icon="solar:star-bold" className="text-sm" />
              <Icon icon="solar:star-bold" className="text-sm" />
            </div>
            <p className="text-base text-stone-600 font-light leading-relaxed mb-8">
              "Properties & Partners säljer inte bara fastigheter; de curerar livsstilar. Teamets estetiska känsla och förståelse för presentation lyfte vår våning på Östermalm helt."
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <Image className="rounded-full border border-stone-200 object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b69128d6-8393-4270-a8e7-2c933bf498bf_320w.webp" alt="Elena Rostova" fill sizes="48px" />
            </div>
            <div>
              <p className="text-sm font-normal text-stone-900">Elin Roos</p>
              <p className="text-xs font-light text-stone-500 mt-0.5">Säljare, Östermalm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
