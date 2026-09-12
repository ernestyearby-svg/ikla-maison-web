import React from 'react';
import { ArrowRight, Droplets } from 'lucide-react';
import { getAssetPath } from '../utils/assets';

export const HERO_HOUSES = [
  {
    id: 'ikla-maison',
    name: 'IKLA Maison',
    badge: 'House 01',
    category: 'Tailoring & Couture',
    cta: 'Explore IKLA',
    image: 'assets/campaigns/round-three/ikla-womens-court-resort-capsule.webp',
    alt: 'IKLA Maison women\'s court and resort apparel capsule beside private clay court',
    borderHover: 'hover:border-[#C8A97E]/80',
  },
  {
    id: 'ktse',
    name: 'KTSE',
    badge: 'House 02',
    category: 'Heavyweight Form',
    cta: 'Explore KTSE',
    image: 'assets/campaigns/round-three/ktse-heavyweight-core-colorways.webp',
    alt: 'KTSE heavyweight French terry streetwear colorways in brutalist architecture',
    borderHover: 'hover:border-[#D0D3D6]/80',
  },
  {
    id: 'moteon',
    name: 'Motéon',
    badge: 'House 03',
    category: 'Resort & Movement',
    cta: 'Explore Motéon',
    image: 'assets/campaigns/round-two/moteon-womens-performance-hero.webp',
    alt: 'Motéon performance activewear in Mediterranean courtyard',
    borderHover: 'hover:border-[#3B7B7B]/80',
  },
  {
    id: 'moral-compass',
    name: 'Moral Compass',
    badge: 'House 04',
    category: 'Cardinal Structure',
    cta: 'Explore Moral Compass',
    image: 'assets/campaigns/round-three/moral-compass-apparel-capsule.webp',
    alt: 'Moral Compass cardinal structure apparel capsule with precision tailoring',
    borderHover: 'hover:border-[#8C9B8F]/80',
  },
  {
    id: 'wnnr',
    name: 'WNNR',
    badge: 'House 05',
    category: 'WIN WITHIN',
    cta: 'Explore WNNR',
    image: 'assets/campaigns/round-two/wnnr-tshirt-colorways.webp',
    alt: 'WNNR heavyweight athletic training t-shirt colorways',
    borderHover: 'hover:border-[#C5A869]/80',
  },
  {
    id: 'ikla-water',
    name: 'IKLA Water',
    badge: 'Extension',
    category: 'Flint Glass Decanters',
    cta: 'Explore IKLA Water',
    image: 'assets/accessories/ikla-water/ikla-water-hydration-service.webp',
    alt: 'IKLA Water sculptural mineral flint decanter and hydration service',
    borderHover: 'hover:border-[#5E8896]/80',
    icon: Droplets,
  },
  {
    id: 'my-drink-family',
    name: 'My Drink Family',
    badge: 'Clubhouse',
    category: 'Celebration & Spirits',
    cta: 'Explore My Drink Family',
    image: 'assets/campaigns/02-reference-crops/my-drink-family/my-drink-family-rep-the-legacy-merch.jpg',
    alt: 'My Drink Family Rep The Legacy circular crest clubhouse fleece',
    borderHover: 'hover:border-[#D97736]/80',
  },
];

export default function HeroHouseNavigation({ onSelectBrand }) {
  return (
    <div
      id="hero-house-navigation"
      aria-label="The Houses of IKLA Maison"
      className="w-full bg-[#0A0B0D]/90 backdrop-blur-md border-t border-[#C8A97E]/30 pt-3.5 pb-5 px-4 sm:px-6 lg:px-8 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Subtle Architectural Header Bar */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10 text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.28em] font-medium text-white/90 font-manrope">
              The Seven Houses & Extensions
            </span>
          </div>
          <span className="hidden sm:inline text-[10px] font-mono text-[#C8A97E]/80 tracking-widest uppercase">
            Direct Atelier Gateways · EST. 2026
          </span>
          <span className="sm:hidden text-[9px] font-mono text-[#C8A97E]/80 tracking-wider uppercase">
            Swipe to Explore →
          </span>
        </div>

        {/* Responsive Houses Container:
            - Desktop (xl/lg): 7-column refined grid (all visible at once)
            - Tablet (md): 4-column balanced grid
            - Mobile: Touch-friendly horizontal snap carousel with card peek
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-2.5 md:grid md:grid-cols-4 lg:grid-cols-7 pb-1 md:pb-0">
          {HERO_HOUSES.map((house) => (
            <a
              key={house.id}
              href={`#/brand/${house.id}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectBrand(house.id);
              }}
              aria-label={`${house.cta} — ${house.name}`}
              className={`group flex-none w-[68vw] max-w-[210px] md:w-auto snap-start relative aspect-[4/5] bg-neutral-900 border border-white/15 ${house.borderHover} rounded-xs overflow-hidden transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] hover:shadow-2xl hover:-translate-y-1 block`}
            >
              {/* Image with subtle zoom on hover */}
              <img
                src={getAssetPath(house.image)}
                alt={house.alt}
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-[0.80] contrast-[1.05] group-hover:brightness-95"
              />

              {/* Scrim Gradients for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Top Meta Tag: House Number / Badge */}
              <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-neutral-300">
                <span className="px-1.5 py-0.5 bg-black/70 backdrop-blur-md rounded-2xs border border-white/15 text-white/90">
                  {house.badge}
                </span>
                {house.icon && (
                  <house.icon className="w-3 h-3 text-[#5E8896]" />
                )}
              </div>

              {/* Bottom Card Content: House Name, Category, and Exact CTA */}
              <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 space-y-0.5">
                <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#C8A97E] font-medium font-manrope truncate">
                  {house.category}
                </span>

                <h3 className="text-sm sm:text-base font-cormorant font-normal text-white leading-tight tracking-wide group-hover:text-white transition-colors truncate">
                  {house.name}
                </h3>

                {/* Exact CTA from Prompt */}
                <div className="pt-1 flex items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.16em] font-medium text-white/80 group-hover:text-[#DFBF95] transition-colors font-manrope border-t border-white/15 mt-1">
                  <span className="truncate">{house.cta}</span>
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C8A97E] group-hover:translate-x-1.5 transition-transform duration-300 shrink-0 ml-1" />
                </div>
              </div>

              {/* Fine Gold Accent Hairline on Card Top on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8A97E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
