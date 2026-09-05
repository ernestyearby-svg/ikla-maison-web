import React, { useState } from 'react';
import { ArrowRight, Check, Shield, Globe, Award, Sparkles } from 'lucide-react';
import { BRAND_LIST } from '../data/brands';
import { useCart } from '../context/CartContext';

export default function Footer({ onNavigate }) {
  const { openCart } = useCart();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#08090a] text-neutral-400 border-t border-neutral-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Newsletter & Manifesto Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-neutral-800">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A97E] block mb-2 font-medium">
              Private Correspondence
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-light mb-3">
              Join the Maison Gazette
            </h3>
            <p className="text-sm text-neutral-400 font-light max-w-md leading-relaxed">
              Receive private preview access to seasonal capsule releases, archival monographs, and private salon appointments across all five houses.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            {isSubscribed ? (
              <div className="p-4 bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Your correspondence request has been recorded with our concierge.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your confidential email..."
                  className="flex-1 bg-neutral-900 border border-neutral-800 px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:border-[#C8A97E] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#C8A97E] hover:bg-[#DFBF95] text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Inscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <span className="text-[11px] text-neutral-500 mt-2 font-light">
              We respect discretion. Unsubscribe at any time with a single correspondence.
            </span>
          </div>
        </div>

        {/* Multi-Brand Five Houses Directory */}
        <div className="py-14 border-b border-neutral-800/80 relative">
          {/* Subtle Collective Watermark in Footer (pointer-events: none) */}
          <div className="absolute right-0 bottom-4 w-72 h-72 pointer-events-none select-none opacity-[0.03] overflow-hidden">
            <img src="/assets/ikla-maison/logos/crest-light.webp" alt="" className="w-full h-full object-contain" />
          </div>

          <div className="flex items-center justify-between mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A97E] font-medium block">
              The Five Houses Directory
            </span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest hidden sm:inline">
              Independent Ateliers · One Maison
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {BRAND_LIST.map((brand) => (
              <div key={brand.id} className="space-y-3 relative group">
                {/* Brand-specific accent line */}
                <div
                  className="w-10 h-[2px] mb-3 transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: brand.palette.accent }}
                />

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 opacity-80 group-hover:opacity-100">
                    <img src={brand.logos.crestLight} alt="" className="w-full h-full object-contain" />
                  </div>
                  <button
                    onClick={() => onNavigate('brand', brand.id)}
                    className="text-sm uppercase tracking-[0.18em] font-medium text-white hover:text-[#DFBF95] transition-colors text-left block cursor-pointer"
                  >
                    {brand.name}
                  </button>
                </div>

                <p className="text-xs text-neutral-400 font-light leading-relaxed font-manrope">
                  {brand.tagline}
                </p>

                <button
                  onClick={() => onNavigate('brand', brand.id)}
                  className="text-[11px] uppercase tracking-wider hover:underline block pt-1 cursor-pointer transition-colors flex items-center gap-1"
                  style={{ color: brand.palette.accent }}
                >
                  <span>Enter House</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Global Navigation & Client Services */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs border-b border-neutral-800/80">
          {/* Navigation */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E] font-medium block">
              Curations
            </span>
            <ul className="space-y-2 text-neutral-400 font-manrope">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Master Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collection')} className="hover:text-white transition-colors cursor-pointer">
                  Complete Catalogue
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  The Five Houses Ethos
                </button>
              </li>
              <li>
                <button onClick={openCart} className="hover:text-white transition-colors cursor-pointer">
                  Shopping Bag
                </button>
              </li>
            </ul>
          </div>

          {/* Client Concierge */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E] font-medium block">
              Client Concierge
            </span>
            <ul className="space-y-2 text-neutral-400 font-manrope">
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Inquiries & Appointments
                </button>
              </li>
              <li>Mon – Fri: 08:00 – 20:00 CET</li>
              <li>Sat: 10:00 – 18:00 CET</li>
              <li className="text-neutral-500">concierge@iklamaison.com</li>
            </ul>
          </div>

          {/* Guarantees */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E] font-medium block">
              White-Glove Guarantees
            </span>
            <ul className="space-y-2 text-neutral-400 font-manrope">
              <li>• Complimentary Global Insured Courier</li>
              <li>• Archival Keepsake Gift Packaging</li>
              <li>• 30-Day Concierge Return Escort</li>
              <li>• Numbered Certificates of Authenticity</li>
            </ul>
          </div>

          {/* Maison Standards */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E] font-medium block">
              Artisanal Integrity
            </span>
            <p className="text-neutral-400 font-light leading-relaxed font-manrope">
              Every creation is realized through limited, non-industrial production runs in partner European ateliers adhering to strict environmental and fair artisan labor charters.
            </p>
          </div>
        </div>

        {/* Bottom Legal & Exact Brand Names Preservation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} IKLA MAISON Collective. Representing{' '}
            <span className="text-neutral-300 font-medium">IKLA Maison</span>,{' '}
            <span className="text-neutral-300 font-medium">KTSE</span>,{' '}
            <span className="text-neutral-300 font-medium">Motéon</span>,{' '}
            <span className="text-neutral-300 font-medium">Moral Compass</span>, and{' '}
            <span className="text-neutral-300 font-medium">My Drink Family</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('about')} className="hover:text-neutral-300 cursor-pointer">
              Privacy Protocol
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-neutral-300 cursor-pointer">
              Terms of Patronage
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-neutral-300 cursor-pointer">
              Client Relations
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
