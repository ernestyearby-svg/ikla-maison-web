import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BrandHero({ brand, onExploreCollection, onExploreEthos }) {
  const { name, tagline, description, assets, alt, typography, palette, buttonStyle, buttonOutlineStyle, logos } = brand;
  const isWnnr = brand.id === 'wnnr';

  return (
    <div className="relative w-full min-h-[88vh] lg:min-h-[92vh] flex items-end justify-start overflow-hidden bg-[#07080a]">
      {/* Responsive Picture Element */}
      <picture className="absolute inset-0 w-full h-full">
        {/* Mobile source: vertical 9:16 hero */}
        <source
          media="(max-width: 768px)"
          srcSet={assets.heroMobile}
          type={assets.heroMobile?.endsWith('.webp') ? 'image/webp' : undefined}
        />
        {/* Desktop source: wide panoramic hero */}
        <source
          media="(min-width: 769px)"
          srcSet={assets.heroDesktop}
          type={assets.heroDesktop?.endsWith('.webp') ? 'image/webp' : undefined}
        />
        {/* Fallback image */}
        <img
          src={assets.heroDesktop}
          alt={alt.heroDesktop}
          className={`w-full h-full object-cover transition-transform duration-1000 scale-100 ${
            isWnnr ? 'object-[42%_center]' : 'object-center'
          }`}
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      {/* Luxury Gradient Overlay for high-contrast legible typography */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isWnnr
            ? 'linear-gradient(to top, rgba(10,11,14,0.96) 0%, rgba(10,11,14,0.6) 40%, rgba(10,11,14,0.2) 100%), linear-gradient(to left, rgba(10,11,14,0.75) 0%, transparent 60%)'
            : 'linear-gradient(to top, rgba(10,11,14,0.96) 0%, rgba(10,11,14,0.6) 45%, rgba(10,11,14,0.2) 100%)'
        }}
      />

      {/* Oversized Faded Brand Wordmark Watermark in background (4%–9% opacity) */}
      <div className={`absolute top-1/4 ${isWnnr ? 'left-0 -translate-x-12' : 'right-0 translate-x-12'} pointer-events-none select-none overflow-hidden opacity-[0.06] z-0`}>
        <img
          src={logos.wordmarkDark}
          alt=""
          className="w-[60vw] max-w-[850px] object-contain filter contrast-125"
          loading="eager"
        />
      </div>

      {/* Rotating Circular Brand Crest Emblem in Corner (7%–14% opacity) */}
      <div className={`absolute top-12 ${isWnnr ? 'left-6 md:left-16' : 'right-6 md:right-16'} w-36 md:w-56 h-36 md:h-56 pointer-events-none select-none z-0 opacity-12`}>
        <img
          src={logos.crestLight}
          alt=""
          className="w-full h-full object-contain animate-spin-slow filter brightness-125"
          loading="eager"
        />
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 w-full flex ${isWnnr ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-2xl ${isWnnr ? 'bg-black/40 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none p-6 md:p-0 rounded-xs' : ''}`}>
          {/* House Badge with Micro Emblem */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.25em] font-medium mb-5 backdrop-blur-md border border-white/20 text-white/90 bg-black/50 shadow-lg">
            <div className="w-3.5 h-3.5 rounded-full overflow-hidden shrink-0">
              <img src={logos.crestLight} alt="" className="w-full h-full object-contain" />
            </div>
            <span>The House of {name}</span>
          </div>

          {/* Prominent Official Brand Logo & Live Copy */}
          {isWnnr ? (
            <div className="mb-6">
              <div className="flex items-baseline gap-4 mb-2">
                <h1 className="text-4xl sm:text-6xl font-cormorant font-light text-white tracking-[0.2em] leading-none">
                  WNNR
                </h1>
                <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-0.5 border border-[#C5A869]/50 text-[#C5A869] rounded-xs font-mono">
                  Pronounced "winner"
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-cormorant font-normal text-[#C5A869] tracking-[0.25em] uppercase mt-2">
                WIN WITHIN
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-300 font-light mt-1">
                Discipline. Ambition. Execution.
              </p>
            </div>
          ) : brand.isBeverageHouse ? (
            <div className="mb-4">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h1 className="text-4xl sm:text-6xl font-cormorant font-light text-white tracking-[0.12em] leading-none">
                  {name}
                </h1>
                <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-0.5 border border-white/30 text-white/90 rounded-xs font-mono">
                  Sports-Fashion House
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#DFBF95] font-light mt-1">
                A House of My Drink Family
              </p>
            </div>
          ) : (
            <div className="mb-4 max-w-sm">
              <img
                src={logos.wordmarkDark}
                alt={name}
                className="h-10 sm:h-14 w-auto object-contain filter brightness-110 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
              />
            </div>
          )}

          {!isWnnr && (
            <p className="text-lg sm:text-xl text-neutral-200 font-light italic mb-3 tracking-wide">
              {tagline}
            </p>
          )}

          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-xl mb-8 font-manrope">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreCollection}
              className={`px-8 py-4 ${buttonStyle} active:scale-95 cursor-pointer shadow-xl flex items-center gap-2`}
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {onExploreEthos && (
              <button
                onClick={onExploreEthos}
                className={`px-8 py-4 ${buttonOutlineStyle} active:scale-95 cursor-pointer backdrop-blur-md`}
              >
                Explore Atelier Ethos
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
