import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles, Layers, Shield, ChevronRight, Gem } from 'lucide-react';
import { BRAND_LIST, BRANDS } from '../data/brands';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage({ onSelectBrand, onSelectProduct, onNavigateCollection, onNavigateAbout }) {
  const [activeBrandTab, setActiveBrandTab] = useState('ikla-maison');
  const [hoveredHouse, setHoveredHouse] = useState(null);
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 8);
  const activeBrand = BRANDS[activeBrandTab];

  return (
    <div className="flex flex-col w-full bg-[#FAF7F2] text-[#16171A] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. MASTER LUXURY COLLECTIVE ENTRANCE & LAYERED HERO */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#07080a]">
        {/* Dynamic Background Image based on active house */}
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(max-width: 768px)"
            srcSet={activeBrand.assets.heroMobile}
            type="image/webp"
          />
          <source
            media="(min-width: 769px)"
            srcSet={activeBrand.assets.heroDesktop}
            type="image/webp"
          />
          <img
            src={activeBrand.assets.heroDesktop}
            alt={activeBrand.alt.heroDesktop}
            className="w-full h-full object-cover object-center transition-all duration-1000 scale-100"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Atmospheric Ambient Lighting & Controlled Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-black/55 to-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0b0d]/50 to-[#07080a]/90 pointer-events-none" />
        
        {/* Ambient Glow Drift */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-25 animate-glow-drift -top-40 -left-20"
          style={{ backgroundColor: activeBrand.palette.accent }}
        />

        {/* Oversized Faded IKLA Maison Wordmark Watermark behind Hero Content (4%–9% opacity) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <img
            src="/assets/ikla-maison/logos/wordmark-dark.webp"
            alt=""
            className="w-[90vw] max-w-[1300px] object-contain opacity-[0.06] filter contrast-125"
            loading="eager"
          />
        </div>

        {/* Rotating Circular Collective Crest Behind Hero (7%–14% opacity) */}
        <div className="absolute -right-24 md:right-12 -bottom-24 md:bottom-8 w-80 md:w-96 h-80 md:h-96 pointer-events-none select-none z-0 opacity-12">
          <img
            src="/assets/ikla-maison/logos/crest-light.webp"
            alt=""
            className="w-full h-full object-contain animate-spin-slow filter brightness-125"
            loading="eager"
          />
        </div>

        {/* Master Center Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center flex flex-col items-center">
          {/* Collective Badge with Mini Seal */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.3em] font-medium mb-7 backdrop-blur-md border border-[#C8A97E]/30 text-white/95 bg-black/60 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] animate-pulse" />
            <span>The Five Luxury Houses</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cormorant font-light tracking-tight text-white mb-6 leading-[1.08]">
            Architectural Form. <br className="hidden sm:inline" />
            Five Distinct Expressions.
          </h1>

          <p className="text-sm sm:text-lg text-neutral-300 font-light max-w-2xl leading-relaxed mb-10 font-manrope">
            An independent luxury collective curated under one disciplined Maison system: <strong className="text-white font-medium">IKLA Maison</strong>, <strong className="text-white font-medium">KTSE</strong>, <strong className="text-white font-medium">Motéon</strong>, <strong className="text-white font-medium">Moral Compass</strong>, and <strong className="text-white font-medium">My Drink Family</strong>.
          </p>

          {/* Action Buttons styled to active brand */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onSelectBrand(activeBrandTab)}
              className={`px-8 py-4 ${activeBrand.buttonStyle} shadow-xl active:scale-95 cursor-pointer flex items-center gap-2.5`}
            >
              <span>Explore House of {activeBrand.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onNavigateCollection}
              className="px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium text-white hover:text-black hover:bg-white transition-all backdrop-blur-md border border-white/30 active:scale-95 cursor-pointer"
            >
              View All Collections
            </button>
          </div>

          {/* Interactive House Selector Tab Bar */}
          <div className="mt-14 w-full max-w-4xl bg-black/70 backdrop-blur-xl border border-white/15 p-1.5 grid grid-cols-2 sm:grid-cols-5 gap-1.5 rounded-xs shadow-2xl">
            {BRAND_LIST.map((b) => (
              <button
                key={b.id}
                onClick={() => setActiveBrandTab(b.id)}
                className={`py-3 px-2 text-center transition-all cursor-pointer rounded-xs flex flex-col items-center justify-center gap-1 group ${
                  activeBrandTab === b.id
                    ? 'bg-white/20 border border-white/40 text-white shadow-lg'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 opacity-80 group-hover:opacity-100">
                  <img src={b.logos.crestLight} alt="" className="w-full h-full object-contain" />
                </div>
                <span className="block text-xs uppercase tracking-[0.14em] font-medium truncate">
                  {b.name}
                </span>
                <span className="block text-[9px] text-neutral-400 font-light truncate">
                  {b.keywords[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PREMIUM TRANSITION SECTION: ARCHITECTURAL CURATION MANIFESTO */}
      {/* ========================================================================= */}
      <section className="relative py-20 px-6 sm:px-10 border-y border-[#E2DDD3] bg-[#F4EFE6] text-[#16171A]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-[#C8A97E]/50 flex items-center justify-center p-3 shrink-0 bg-white shadow-sm">
              <img
                src="/assets/ikla-maison/logos/crest-light.webp"
                alt="IKLA Maison Emblem"
                className="w-full h-full object-contain animate-spin-slow"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-1">
                The Maison Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-cormorant font-normal text-[#111215]">
                Five Independent Houses Beneath One Disciplined System
              </h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#4A4E57] font-light max-w-md leading-relaxed font-manrope">
            From Paris to Tokyo, Amalfi to Copenhagen, and Brooklyn rooftops—every silhouette is tailored with uncompromising textile density, archival hardware, and generational longevity.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE FIVE HOUSES IMMERSIVE PANELS (COLOR & WATERMARK REVEAL ON HOVER) */}
      {/* ========================================================================= */}
      <section className="relative py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full bg-[#FAF7F2]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5DFD5]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block mb-2">
              The Curated Directory
            </span>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215]">
              The Five Houses
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-md mt-4 md:mt-0 leading-relaxed font-manrope">
            Hover over any house to illuminate its distinctive atmosphere, architectural watermark, and bespoke color signature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRAND_LIST.map((brand, idx) => {
            const isHovered = hoveredHouse === brand.id;
            return (
              <div
                key={brand.id}
                onClick={() => onSelectBrand(brand.id)}
                onMouseEnter={() => setHoveredHouse(brand.id)}
                onMouseLeave={() => setHoveredHouse(null)}
                className={`group relative flex flex-col border transition-all duration-500 cursor-pointer overflow-hidden rounded-xs bg-white ${
                  isHovered
                    ? `${brand.houseBorder} shadow-2xl`
                    : 'border-[#E6E0D5] shadow-sm'
                }`}
                style={{
                  boxShadow: isHovered ? `0 18px 40px ${brand.glowColor}` : '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                {/* Background Atmosphere Glow */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  } ${brand.atmosphereBg}`}
                />

                {/* Faded Brand Wordmark Layered into Panel Background (4%–9% opacity) */}
                <div className="absolute -top-6 -right-10 w-72 h-32 pointer-events-none select-none overflow-hidden opacity-[0.05] group-hover:opacity-[0.09] transition-opacity duration-500">
                  <img
                    src={brand.logos.wordmarkDark}
                    alt=""
                    className="w-full h-full object-contain filter contrast-125"
                    loading="lazy"
                  />
                </div>

                {/* Rotating Corner Crest Watermark (7%–14% opacity) */}
                <div className="absolute top-4 right-4 w-16 h-16 pointer-events-none select-none opacity-[0.08] group-hover:opacity-[0.16] transition-opacity duration-500">
                  <img
                    src={brand.logos.crestLight}
                    alt=""
                    className="w-full h-full object-contain animate-spin-slow"
                    loading="lazy"
                  />
                </div>

                {/* Image Container using Collection Flat Lay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F2EC] z-10">
                  <img
                    src={brand.assets.collection}
                    alt={brand.alt.collection}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Top Header Badge with House Logo */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-white/90 backdrop-blur-md text-[#16171A] border border-neutral-300/80 rounded-xs flex items-center gap-1.5 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brand.palette.accent }} />
                      House 0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Text Meta Container */}
                <div className="p-7 flex flex-col flex-1 justify-between gap-5 relative z-10 bg-white">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-cormorant font-normal text-[#111215] group-hover:text-black transition-colors">
                        {brand.name}
                      </h3>
                      <div className="w-6 h-6 rounded-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity">
                        <img src={brand.logos.crestLight} alt="" className="w-full h-full object-contain" />
                      </div>
                    </div>

                    <div
                      className="text-xs font-serif italic mb-3 transition-colors font-medium"
                      style={{ color: brand.palette.accent }}
                    >
                      {brand.tagline}
                    </div>

                    <p className="text-xs text-[#50545E] font-light leading-relaxed line-clamp-3 font-manrope">
                      {brand.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EAE5DC] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {brand.keywords.slice(0, 3).map((kw) => (
                        <span
                          key={kw}
                          className="text-[9px] uppercase tracking-wider px-2.5 py-1 bg-[#FAF7F2] border border-[#E2DDD3] text-[#40434A] rounded-xs font-medium"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                    <span
                      className="text-xs uppercase tracking-widest font-semibold group-hover:translate-x-1.5 transition-all flex items-center gap-1"
                      style={{ color: brand.palette.accent }}
                    >
                      Enter <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Collective Philosophy Card */}
          <div
            onClick={onNavigateAbout}
            className="p-8 bg-[#F4EFE6] border border-[#DDD7CB] flex flex-col justify-between hover:border-[#C8A97E] transition-all duration-300 cursor-pointer rounded-xs group shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            {/* Background Watermark Crest */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.06] pointer-events-none">
              <img src="/assets/ikla-maison/logos/crest-light.webp" alt="" className="w-full h-full object-contain" />
            </div>

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-full bg-white border border-[#C8A97E]/40 flex items-center justify-center text-[#8C6D3F] mb-6 shadow-xs">
                <Gem className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-3">
                Atelier Manifesto
              </span>
              <h3 className="text-3xl font-cormorant text-[#111215] font-normal mb-4">
                The Architecture of IKLA MAISON
              </h3>
              <p className="text-xs text-[#50545E] font-light leading-relaxed mb-6 font-manrope">
                Discover the curation philosophy binding our five labels: limited runs, certified virgin natural textiles, and enduring design integrity without concession.
              </p>
            </div>
            <div className="pt-5 border-t border-[#E0DBD0] flex items-center justify-between text-xs text-[#8C6D3F] font-semibold uppercase tracking-widest relative z-10 group-hover:translate-x-1 transition-transform">
              <span>Read The Manifesto</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FEATURED CURATIONS GRID WITH LUXURY FRAMING */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#F5EFEB] border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2">
                Seasonal Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215]">
                Curated Foundational Garments
              </h2>
            </div>
            <button
              onClick={onNavigateCollection}
              className="text-xs uppercase tracking-[0.2em] text-[#8C6D3F] hover:text-[#111215] font-medium flex items-center gap-1.5 transition-colors mt-4 sm:mt-0 cursor-pointer"
            >
              <span>Explore Complete Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onSelectBrand={onSelectBrand}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EDITORIAL STORYLOOK SECTION */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 5. EDITORIAL STORYLOOK SECTION */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full bg-[#FAF7F2]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2">
            Editorial Perspectives
          </span>
          <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] mb-4">
            Campaign Chronicles
          </h2>
          <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
            Captured across classical colonnades, Mediterranean sea coves, brutalist monoliths, and sun-drenched rooftops.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editorial 1: IKLA Maison */}
          <div
            onClick={() => onSelectBrand('ikla-maison')}
            className="group relative aspect-[16/9] overflow-hidden bg-neutral-900 border border-[#E0DBD0] shadow-sm hover:shadow-xl cursor-pointer rounded-xs"
          >
            <img
              src="/assets/ikla-maison/editorial.webp"
              alt="IKLA Maison Editorial Lifestyle visual at coastal infinity pool"
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E] block mb-1">
                  IKLA Maison Lookbook
                </span>
                <h3 className="text-xl font-cormorant text-white">Quiet Horizon & Architectural Leisure</h3>
              </div>
              <span className="text-xs uppercase tracking-widest text-[#C8A97E] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                View <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Editorial 2: Motéon */}
          <div
            onClick={() => onSelectBrand('moteon')}
            className="group relative aspect-[16/9] overflow-hidden bg-neutral-900 border border-[#E0DBD0] shadow-sm hover:shadow-xl cursor-pointer rounded-xs"
          >
            <img
              src="/assets/moteon/editorial.webp"
              alt="Motéon Mediterranean boat arrival editorial lookbook"
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E5B591] block mb-1">
                  Motéon Resort Chronicle
                </span>
                <h3 className="text-xl font-cormorant text-white">Seaside Arrival & Woven Textures</h3>
              </div>
              <span className="text-xs uppercase tracking-widest text-[#E5B591] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                View <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Editorial 3: Moral Compass */}
          <div
            onClick={() => onSelectBrand('moral-compass')}
            className="group relative aspect-[16/9] overflow-hidden bg-neutral-900 border border-[#E0DBD0] shadow-sm hover:shadow-xl cursor-pointer rounded-xs"
          >
            <img
              src="/assets/moral-compass/editorial.webp"
              alt="Moral Compass circular rotunda celestial floor editorial visual"
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8CDD5] block mb-1">
                  Moral Compass Direction
                </span>
                <h3 className="text-xl font-cinzel text-white">The Rotunda of Internal Navigation</h3>
              </div>
              <span className="text-xs uppercase tracking-widest text-[#C8CDD5] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                View <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Editorial 4: My Drink Family */}
          <div
            onClick={() => onSelectBrand('my-drink-family')}
            className="group relative aspect-[16/9] overflow-hidden bg-neutral-900 border border-[#E0DBD0] shadow-sm hover:shadow-xl cursor-pointer rounded-xs"
          >
            <img
              src="/assets/my-drink-family/editorial.webp"
              alt="My Drink Family rooftop celebration lifestyle banner"
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E8C862] block mb-1">
                  My Drink Family Clubhouse
                </span>
                <h3 className="text-xl font-manrope text-white">Rooftop Golden Hour & Shared Spirits</h3>
              </div>
              <span className="text-xs uppercase tracking-widest text-[#E8C862] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                View <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHITE-GLOVE CLIENT SERVICE PILLARS */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#ECEAE4] border-t border-[#DFDBD3]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center sm:text-left">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white border border-[#DDD7CB] text-[#8C6D3F] shrink-0 rounded-xs shadow-xs">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#111215] mb-1 tracking-wide">Archival Authenticity Guarantee</h3>
              <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                Each acquisition includes a serial-numbered certificate verified by our master atelier.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-white border border-[#DDD7CB] text-[#8C6D3F] shrink-0 rounded-xs shadow-xs">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#111215] mb-1 tracking-wide">Complimentary Keepsake Packaging</h3>
              <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                Presented in heavy acid-free rigid boxes with hand-tied grosgrain ribbon and scented archival tissue.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-white border border-[#DDD7CB] text-[#8C6D3F] shrink-0 rounded-xs shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#111215] mb-1 tracking-wide">Private Client Concierge</h3>
              <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                Dedicated style advisors available for bespoke sizing, garment care, and private previews.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

