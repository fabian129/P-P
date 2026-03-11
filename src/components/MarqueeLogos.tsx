import { Icon } from '@iconify/react';

export function MarqueeLogos() {
  return (
    <div className="w-full border-y border-stone-200/60 bg-[#FAF9F8] py-12 overflow-hidden flex relative z-10">
      <div className="flex whitespace-nowrap animate-marquee items-center w-max">
        {/* First set */}
        <div className="flex gap-20 items-center px-10">
          <Icon icon="simple-icons:nasa" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:spacex" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:uber" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:visa" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:grab" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:bose" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:discover" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:dji" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:nikon" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:sony" width="64" height="64" className="text-stone-300" />
        </div>
        {/* Duplicated set for infinite loop */}
        <div className="flex gap-20 items-center px-10">
          <Icon icon="simple-icons:nasa" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:spacex" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:uber" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:visa" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:grab" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:bose" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:discover" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:dji" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:nikon" width="64" height="64" className="text-stone-300" />
          <Icon icon="simple-icons:sony" width="64" height="64" className="text-stone-300" />
        </div>
      </div>
    </div>
  );
}
