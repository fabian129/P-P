import { Icon } from '@iconify/react';
import Image from 'next/image';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 lg:py-8">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/" className="block relative w-48 h-10 hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png" 
            alt="Properties & Partners" 
            fill 
            className="object-contain object-left" 
            priority
            style={{ filter: "invert(1) brightness(0)" }}
          />
        </a>
      </div>
      
      {/* Classic Centered Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm font-normal text-stone-600">
        <a href="/" className="hover:text-stone-900 transition-colors">Start</a>
        <a href="/listings" className="hover:text-stone-900 transition-colors">Bostäder</a>
        <a href="#contact-section" className="hover:text-stone-900 transition-colors">Rådgivning</a>
        <a href="#about" className="hover:text-stone-900 transition-colors">Vår filosofi</a>
      </div>
      
      {/* Right Action Button */}
      <div className="flex items-center">
        <a href="#contact-section" className="flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-sm font-normal hover:bg-stone-800 transition-colors">
          Boka värdering <Icon icon="solar:letter-linear" className="text-lg" />
        </a>
      </div>
    </nav>
  );
}
