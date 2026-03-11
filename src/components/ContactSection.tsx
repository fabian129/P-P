import { Icon } from '@iconify/react';
import Image from 'next/image';

export function ContactSection() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact-section" className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="text-xs font-normal text-stone-400 tracking-widest uppercase flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-800"></span> 05 · Förfrågningar
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal text-stone-900 mb-8">Hör av dig till oss.</h2>
            <p className="text-lg text-stone-500 font-light leading-relaxed mb-12 max-w-md">
              Oavsett om du söker din nästa bostad, överväger att sälja din fastighet, eller bara söker expertis på den lokala marknaden.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 text-stone-700">
                  <Icon icon="solar:map-point-linear" className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-normal text-stone-900 mb-1">Kontor</h4>
                  <p className="text-base text-stone-500 font-light leading-relaxed">Strandvägen 7A<br />114 56 Stockholm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 text-stone-700">
                  <Icon icon="solar:letter-linear" className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-normal text-stone-900 mb-1">E-post</h4>
                  <a href="mailto:info@propertiespartners.se" className="text-base text-stone-500 font-light hover:text-stone-900 transition-colors border-b border-transparent hover:border-stone-900">info@propertiespartners.se</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 text-stone-700">
                  <Icon icon="solar:phone-linear" className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-normal text-stone-900 mb-1">Telefon</h4>
                  <a href="tel:+46812345678" className="text-base text-stone-500 font-light hover:text-stone-900 transition-colors border-b border-transparent hover:border-stone-900">+46 8 123 45 678</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#FAF9F8] p-8 sm:p-10 rounded-[3rem] border border-stone-200/60 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs font-normal text-stone-500 tracking-wide uppercase">Förnamn</label>
                  <input type="text" id="firstName" className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors font-light placeholder-stone-400" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs font-normal text-stone-500 tracking-wide uppercase">Efternamn</label>
                  <input type="text" id="lastName" className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors font-light placeholder-stone-400" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-normal text-stone-500 tracking-wide uppercase">E-postadress</label>
                <input type="email" id="email" className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors font-light placeholder-stone-400" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="interest" className="text-xs font-normal text-stone-500 tracking-wide uppercase">Ärende</label>
                <div className="relative">
                  <select id="interest" className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors font-light appearance-none">
                    <option value="buy">Köpa Bostad</option>
                    <option value="sell">Sälja Bostad</option>
                    <option value="market">Fri Värdering</option>
                    <option value="other">Övrigt</option>
                  </select>
                  <Icon icon="solar:alt-arrow-down-linear" className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-normal text-stone-500 tracking-wide uppercase">Meddelande</label>
                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors font-light placeholder-stone-400 resize-none" placeholder="Berätta mer om ditt ärende..."></textarea>
              </div>
              
              <button type="button" className="w-full bg-stone-900 text-stone-50 py-4 rounded-2xl text-base font-normal hover:bg-stone-800 transition-colors mt-4 flex justify-center items-center gap-2">
                Skicka förfrågan <Icon icon="solar:arrow-right-linear" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 w-full bg-stone-900 text-stone-400 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mt-12 rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="w-48 h-10 relative mb-6">
              <Image 
                src="/logo.png" 
                alt="Properties & Partners" 
                fill 
                className="object-contain object-left invert brightness-0" 
              />
            </div>
            <p className="text-sm font-light leading-relaxed mb-6 max-w-xs text-stone-400">
              Din partner för framgångsrika fastighetsaffärer. Vi förmedlar exklusiva hem över hela Stockholm.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-stone-800 hover:text-stone-200 transition-colors">
                <Icon icon="basil:instagram-outline" className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-stone-800 hover:text-stone-200 transition-colors">
                <Icon icon="basil:linkedin-outline" className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-stone-200 font-normal mb-6">Fastigheter</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="/listings" className="hover:text-stone-200 transition-colors">Till Salu</a></li>
              <li><a href="#" className="hover:text-stone-200 transition-colors">Kommande</a></li>
              <li><a href="#" className="hover:text-stone-200 transition-colors">Sålda objekt</a></li>
              <li><a href="#" className="hover:text-stone-200 transition-colors">Större projekt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-stone-200 font-normal mb-6">Företaget</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#about" className="hover:text-stone-200 transition-colors">Vår Filosofi</a></li>
              <li><a href="#" className="hover:text-stone-200 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-stone-200 transition-colors">Karriär</a></li>
              <li><a href="#contact-section" className="hover:text-stone-200 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-200 font-normal mb-6">Nyhetsbrev</h4>
            <p className="text-sm font-light leading-relaxed mb-4 text-stone-400">
              Prenumerera för att få tillgång till off-market objekt och nyheter före alla andra.
            </p>
            <div className="relative">
              <input type="email" placeholder="Din e-postadress" className="w-full bg-stone-800 border-none rounded-xl py-3 pl-4 pr-12 text-sm text-stone-200 focus:ring-1 focus:ring-stone-500 outline-none" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-stone-700 flex items-center justify-center text-stone-300 hover:bg-stone-600 transition-colors">
                <Icon icon="solar:arrow-right-linear" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
          <p>© {new Date().getFullYear()} Properties & Partners. Alla rättigheter förbehållna.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-200 transition-colors">Integritetspolicy</a>
            <a href="#" className="hover:text-stone-200 transition-colors">Cookie-policy</a>
          </div>
        </div>
      </footer>
  );
}
