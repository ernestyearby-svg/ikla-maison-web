import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Compass, Layers, Shield, Sparkles, Droplets, Wine, Clock } from 'lucide-react';
import { BRANDS, BRAND_LIST } from '../data/brands';
import { PRODUCTS } from '../data/products';
import BrandHero from '../components/BrandHero';
import ProductCard from '../components/ProductCard';
import CampaignImage from '../components/CampaignImage';

export default function BrandPage({
  brandId,
  onSelectBrand,
  onSelectProduct,
  onNavigateHome,
  onNavigateCollection
}) {
  const brand = BRANDS[brandId] || BRANDS['ikla-maison'];
  const brandProducts = PRODUCTS.filter((p) => p.brandId === brand.id);
  const otherBrands = BRAND_LIST.filter((b) => b.id !== brand.id);

  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', ...new Set(brandProducts.map((p) => p.category))];
  const filteredProducts = filterCategory === 'All'
    ? brandProducts
    : brandProducts.filter((p) => p.category === filterCategory);

  return (
    <div className={`flex flex-col w-full text-[#16171A] relative overflow-hidden ${brand.atmosphereBg}`}>
      {/* Brand Breadcrumb Bar */}
      <div className="bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#E2DDD3] py-3 px-6 sm:px-8 lg:px-12 flex items-center justify-between text-xs text-neutral-600 z-20">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 hover:text-[#111215] transition-colors cursor-pointer font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Master Home</span>
        </button>

        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 rounded-full overflow-hidden shrink-0">
            <img src={brand.logos.crestLight} alt="" className="w-full h-full object-contain" />
          </div>
          <span>The Houses</span>
          <span>/</span>
          <span className="text-[#111215] font-semibold">{brand.name}</span>
        </div>
      </div>

      {/* 1. Responsive Hero using <picture> */}
      <BrandHero
        brand={brand}
        onExploreCollection={() => {
          const el = document.getElementById('brand-editorial-showcase') || document.getElementById('brand-collection-grid');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreEthos={() => {
          const el = document.getElementById('brand-ethos-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* ========================================================================= */}
      {/* 2. DEDICATED BRAND-SPECIFIC EDITORIAL SHOWCASE */}
      {/* ========================================================================= */}
      <div id="brand-editorial-showcase">
        {/* ----------------------------------------------------------------------- */}
        {/* A. IKLA MAISON DEDICATED MODULES */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'ikla-maison' && (
          <div className="space-y-24 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            {/* Module 1: Leisure & Sport (Clean Golf Flat-Lays) */}
            <section className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2">
                  Maison Leisure & Sport
                </span>
                <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215]">
                  The Golf & Country Club Archive
                </h2>
                <p className="text-xs sm:text-sm text-[#50545E] font-light mt-2 font-manrope">
                  Curated flat lays showcasing tailored active silhouettes, pleated technical skirts, and bespoke leather sporting accessories.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Men's Golf Flat Lay */}
                <div className="bg-white border border-[#DDD7CB] p-4 rounded-xs shadow-md">
                  <CampaignImage
                    src="assets/campaigns/01-ready-to-use/ikla-maison/ikla-mens-golf-flatlay.jpg"
                    alt="IKLA Maison Men's Leisure Golf flat lay with technical polo and accessories"
                    aspectRatio="1/1"
                    position="center"
                    className="rounded-xs w-full mb-4"
                  />
                  <div className="p-3 bg-[#FAF7F2] border-t border-[#EAE5DC] rounded-xs">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C6D3F] font-semibold block">
                      Men's Club Silhouette
                    </span>
                    <h3 className="text-base font-cormorant font-normal text-[#111215] mt-1">
                      Technical Pique Polo & Tailored Bermudas
                    </h3>
                    <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">
                      Woven from high-twist Egyptian cotton with moisture-dissipating micro-mesh panels.
                    </p>
                  </div>
                </div>

                {/* Women's Golf Flat Lay */}
                <div className="bg-white border border-[#DDD7CB] p-4 rounded-xs shadow-md">
                  <CampaignImage
                    src="assets/campaigns/01-ready-to-use/ikla-maison/ikla-womens-golf-flatlay.jpg"
                    alt="IKLA Maison Women's Leisure Golf flat lay with cream pleated skirt and visor"
                    aspectRatio="1/1"
                    position="center"
                    className="rounded-xs w-full mb-4"
                  />
                  <div className="p-3 bg-[#FAF7F2] border-t border-[#EAE5DC] rounded-xs">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C6D3F] font-semibold block">
                      Women's Club Silhouette
                    </span>
                    <h3 className="text-base font-cormorant font-normal text-[#111215] mt-1">
                      Pleated Court Skirt & Minimalist Visor
                    </h3>
                    <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">
                      Precision knife pleats engineered from wrinkle-resilient fluid stretch twill.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Module 2: Movement (Tennis & Cycling) */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-1">
                    Kinetic Movement
                  </span>
                  <h2 className="text-3xl font-cormorant font-normal text-[#111215]">
                    Court & Circuit Disciplines
                  </h2>
                </div>
                <p className="text-xs text-[#50545E] font-light max-w-md font-manrope">
                  Tailored active performance balancing speed and breathability on open roads and clay courts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-[#DDD7CB] p-4 rounded-xs shadow-md">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ikla-maison/ikla-tennis-collection.jpg"
                    alt="IKLA Maison Tennis Club editorial"
                    aspectRatio="4/3"
                    position="center 25%"
                    className="rounded-xs w-full mb-3"
                  />
                  <h3 className="text-lg font-cormorant font-normal text-[#111215]">
                    The Clay Court Tennis Collection
                  </h3>
                  <p className="text-xs text-[#50545E] font-light mt-1 font-manrope">
                    Tailored whites and cream knitwear crafted for rotational mobility and crisp court presence.
                  </p>
                </div>

                <div className="bg-white border border-[#DDD7CB] p-4 rounded-xs shadow-md">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ikla-maison/ikla-coastal-cycling.jpg"
                    alt="IKLA Maison Coastal Cycling editorial"
                    aspectRatio="4/3"
                    position="center 20%"
                    className="rounded-xs w-full mb-3"
                  />
                  <h3 className="text-lg font-cormorant font-normal text-[#111215]">
                    The Coastal Cycling Discipline
                  </h3>
                  <p className="text-xs text-[#50545E] font-light mt-1 font-manrope">
                    Aerodynamic windbreakers with bonded water-resistant seams engineered for alpine coastal ascents.
                  </p>
                </div>
              </div>
            </section>

            {/* Module 3: Travel, Family & Business Casual */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-1">
                  Transcontinental Transit
                </span>
                <h2 className="text-3xl font-cormorant font-normal text-[#111215]">
                  Travel, Family & Executive Leisure
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white border border-[#DDD7CB] p-4 rounded-xs shadow-sm">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ikla-maison/ikla-family-airport-travel.jpg"
                    alt="IKLA Maison Family Travel editorial"
                    aspectRatio="3/4"
                    position="center 25%"
                    className="rounded-xs w-full mb-3"
                  />
                  <h3 className="text-base font-cormorant font-normal text-[#111215]">
                    Generational Travel Harmony
                  </h3>
                  <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">
                    Matching loopback fleece tailored for effortless movement through private air hubs.
                  </p>
                </div>

                <div className="bg-white border border-[#DDD7CB] p-4 rounded-xs shadow-sm">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ikla-maison/ikla-luxury-coastal-couple.jpg"
                    alt="IKLA Maison Yacht Coastal Leisure"
                    aspectRatio="3/4"
                    position="center 30%"
                    className="rounded-xs w-full mb-3"
                  />
                  <h3 className="text-base font-cormorant font-normal text-[#111215]">
                    Maritime Coastal Escape
                  </h3>
                  <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">
                    Unstructured linen shirts and relaxed trousers tailored for Mediterranean horizons.
                  </p>
                </div>

                <div className="bg-white border border-[#DDD7CB] p-4 rounded-xs shadow-sm">
                  <CampaignImage
                    src="assets/campaigns/01-ready-to-use/ikla-maison/ikla-business-casual-couple.jpg"
                    alt="IKLA Maison Business Casual Executive Couple"
                    aspectRatio="3/4"
                    position="center 20%"
                    className="rounded-xs w-full mb-3"
                  />
                  <h3 className="text-base font-cormorant font-normal text-[#111215]">
                    Executive Business Casual
                  </h3>
                  <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">
                    Sharp double-breasted outerwear and mock neck knitwear designed for international meetings.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* B. KTSE DEDICATED EDITORIAL SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'ktse' && (
          <div className="space-y-24 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            {/* KTSE Headline Statement */}
            <section className="bg-black text-white p-8 sm:p-14 rounded-xs border border-neutral-800 relative overflow-hidden">
              <div className="max-w-3xl relative z-10 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8A97E] font-semibold block">
                  Brutalist Streetwear Ethos
                </span>
                <h2 className="text-4xl sm:text-6xl font-cinzel font-light tracking-tight leading-tight">
                  KEEP THAT SAME ENERGY.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope">
                  KTSE strips away extraneous decoration to celebrate raw loopback terry, drop-shoulder volume, and tactile weight. Designed to maintain its structural form across daily wear.
                </p>
              </div>
            </section>

            {/* KTSE Colorways Product Grid */}
            <section className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-semibold block mb-1">
                    Signature Dye Baths
                  </span>
                  <h3 className="text-3xl font-cormorant font-normal text-[#111215]">
                    Architectural Colorways & Heavyweight Sets
                  </h3>
                </div>
                <span className="text-xs text-[#555A64] font-mono">450–520 GSM Terry</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-sm">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ktse/ktse-multiple-colorways-product-grid.jpg"
                    alt="KTSE Multiple Colorways Product Grid"
                    aspectRatio="3/4"
                    position="center"
                    className="rounded-xs w-full mb-3"
                  />
                  <h4 className="text-sm font-cormorant font-normal text-[#111215]">The Quad Colorway Spectrum</h4>
                  <p className="text-[11px] text-[#555A64] font-light mt-1 font-manrope">
                    Stone, Slate, Moss, and Vintage Black pigment dyes.
                  </p>
                </div>

                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-sm">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ktse/ktse-vintage-black-colorways.jpg"
                    alt="KTSE Vintage Black Colorways"
                    aspectRatio="3/4"
                    position="center"
                    className="rounded-xs w-full mb-3"
                  />
                  <h4 className="text-sm font-cormorant font-normal text-[#111215]">Vintage Washed Black</h4>
                  <p className="text-[11px] text-[#555A64] font-light mt-1 font-manrope">
                    Enzyme washed for an authentic broken-in charcoal patina.
                  </p>
                </div>

                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-sm">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ktse/ktse-ash-grey-set.jpg"
                    alt="KTSE Ash Grey Set"
                    aspectRatio="3/4"
                    position="center"
                    className="rounded-xs w-full mb-3"
                  />
                  <h4 className="text-sm font-cormorant font-normal text-[#111215]">Ash Grey Terry Set</h4>
                  <p className="text-[11px] text-[#555A64] font-light mt-1 font-manrope">
                    Matching raw-hem sweatshorts with heavy drawstring cords.
                  </p>
                </div>

                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-sm">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ktse/ktse-brand-shirt-still-life.jpg"
                    alt="KTSE Brand Shirt Still Life"
                    aspectRatio="3/4"
                    position="center"
                    className="rounded-xs w-full mb-3"
                  />
                  <h4 className="text-sm font-cormorant font-normal text-[#111215]">Ribbed Collar Heavyweight Tee</h4>
                  <p className="text-[11px] text-[#555A64] font-light mt-1 font-manrope">
                    320 GSM combed cotton with high-density neck ribbing.
                  </p>
                </div>
              </div>
            </section>

            {/* KTSE Campaign Photography Gallery */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-semibold block mb-1">
                  Lookbook & Atmosphere
                </span>
                <h3 className="text-3xl font-cormorant font-normal text-[#111215]">
                  Keep That Same Energy Campaign Photography
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-sm">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ktse/ktse-streetwear-duo.jpg"
                    alt="KTSE Streetwear Duo in brutalist setting"
                    aspectRatio="3/4"
                    position="center 20%"
                    className="rounded-xs w-full mb-3"
                  />
                  <h4 className="text-sm font-cormorant font-normal text-[#111215]">Brutalist Courtyard Duo</h4>
                  <p className="text-[11px] text-[#555A64] font-light mt-1 font-manrope">
                    Oversized architectural volume against concrete masonry.
                  </p>
                </div>

                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-sm">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ktse/ktse-urban-same-energy.jpg"
                    alt="KTSE Urban Same Energy"
                    aspectRatio="3/4"
                    position="center 20%"
                    className="rounded-xs w-full mb-3"
                  />
                  <h4 className="text-sm font-cormorant font-normal text-[#111215]">Metropolitan Same Energy</h4>
                  <p className="text-[11px] text-[#555A64] font-light mt-1 font-manrope">
                    Everyday structural durability in fast-paced urban transit.
                  </p>
                </div>

                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-sm">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ktse/ktse-coastal-couple.jpg"
                    alt="KTSE Coastal Couple"
                    aspectRatio="3/4"
                    position="center 25%"
                    className="rounded-xs w-full mb-3"
                  />
                  <h4 className="text-sm font-cormorant font-normal text-[#111215]">Pacific Horizon Leisure</h4>
                  <p className="text-[11px] text-[#555A64] font-light mt-1 font-manrope">
                    Relaxed heavy fleece tailored for ocean breeze and evening twilight.
                  </p>
                </div>

                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-sm">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ktse/ktse-beach-collection.jpg"
                    alt="KTSE Beach Collection"
                    aspectRatio="3/4"
                    position="center 30%"
                    className="rounded-xs w-full mb-3"
                  />
                  <h4 className="text-sm font-cormorant font-normal text-[#111215]">Shoreline Raw-Hem Shorts</h4>
                  <p className="text-[11px] text-[#555A64] font-light mt-1 font-manrope">
                    Natural textured terry engineered for relaxed shorefront weekends.
                  </p>
                </div>

                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-sm">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ktse/ktse-summer-lifestyle-trio.jpg"
                    alt="KTSE Summer Lifestyle Trio"
                    aspectRatio="3/4"
                    position="center 25%"
                    className="rounded-xs w-full mb-3"
                  />
                  <h4 className="text-sm font-cormorant font-normal text-[#111215]">Summer Terrace Trio</h4>
                  <p className="text-[11px] text-[#555A64] font-light mt-1 font-manrope">
                    Communal comfort and understated streetwear cohesion.
                  </p>
                </div>

                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-sm">
                  <CampaignImage
                    src="assets/campaigns/02-reference-crops/ktse/ktse-collection-collage.jpg"
                    alt="KTSE Collection Collage"
                    aspectRatio="3/4"
                    position="center"
                    className="rounded-xs w-full mb-3"
                  />
                  <h4 className="text-sm font-cormorant font-normal text-[#111215]">Catalogue Overview</h4>
                  <p className="text-[11px] text-[#555A64] font-light mt-1 font-manrope">
                    Complete archival catalogue across all four foundational palettes.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* C. MOTÉON DEDICATED EDITORIAL SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'moteon' && (
          <div className="space-y-24 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            {/* Clean Launch Spotlight */}
            <section className="bg-[#FAF4EE] border border-[#E8DCCF] p-8 sm:p-12 rounded-xs shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#B85D3B] font-semibold block">
                    Seasonal Debut
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-tight">
                    Motéon — Riviera Freedom & Elevated Movement
                  </h2>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Conceived on the sunlit bluffs of the Mediterranean. Fluid European linens, airy crochet knits, and unstructured loungewear tailored for sun-drenched arrivals and evening aperitifs.
                  </p>
                  <div className="pt-2">
                    <span className="inline-block px-4 py-2 bg-white border border-[#E0D0C0] text-[#B85D3B] text-xs uppercase tracking-widest font-semibold rounded-xs">
                      Official Debut · April 1
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                    <CampaignImage
                      src="assets/campaigns/01-ready-to-use/moteon/moteon-launching-april-first.jpg"
                      alt="Motéon Launching April 1 Campaign Visual"
                      aspectRatio="3/4"
                      position="center 20%"
                      className="rounded-xs w-full"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Motéon Ethos: Not A Trend & Designed To Move */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-[#DDD7CB] p-6 rounded-xs shadow-sm flex flex-col justify-between">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/moteon/moteon-not-a-trend.jpg"
                  alt="Motéon Not A Trend campaign visual"
                  aspectRatio="4/3"
                  position="center 20%"
                  className="rounded-xs w-full mb-4"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#B85D3B] font-semibold block mb-1">
                    Atelier Standard
                  </span>
                  <h3 className="text-2xl font-cormorant font-normal text-[#111215] mb-2">
                    Not A Trend — Timeless Riviera Permanence
                  </h3>
                  <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                    Motéon avoids momentary resort hype. We prioritize natural flax fibres, horn buttons, and breathable open-stitch crochet designed to age with distinguished grace.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#DDD7CB] p-6 rounded-xs shadow-sm flex flex-col justify-between">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/moteon/moteon-designed-to-move.jpg"
                  alt="Motéon Designed To Move campaign visual"
                  aspectRatio="4/3"
                  position="center 20%"
                  className="rounded-xs w-full mb-4"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#B85D3B] font-semibold block mb-1">
                    Kinetic Leisure
                  </span>
                  <h3 className="text-2xl font-cormorant font-normal text-[#111215] mb-2">
                    Designed To Move — Fluid Unconstrained Comfort
                  </h3>
                  <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                    Tailored with relaxed armholes, elasticated linen drawstrings, and flowing leg openings that celebrate natural human motion under open skies.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* D. MORAL COMPASS DEDICATED PREVIEW SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'moral-compass' && (
          <div className="space-y-24 py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full text-center">
            <section className="bg-white border border-[#DDD7CB] p-8 sm:p-14 rounded-xs shadow-lg space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF7F2] border border-[#DDD7CB] text-[#7A828A] text-[10px] uppercase tracking-[0.3em] font-semibold rounded-xs">
                <Compass className="w-3.5 h-3.5 text-[#7A828A]" />
                Private Inception Preview
              </div>

              <h2 className="text-3xl sm:text-5xl font-cinzel font-light text-[#111215]">
                MORAL COMPASS — CARDINAL INCEPTION
              </h2>

              <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-xl mx-auto leading-relaxed font-manrope">
                Guided by internal orientation rather than external momentum. A private Maison atelier currently in developmental curation.
              </p>

              <div className="max-w-md mx-auto p-3 bg-[#FAF7F2] border border-[#E0DBD0] rounded-xs shadow-inner">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/moral-compass/moral-compass-coming-soon.jpg"
                  alt="Moral Compass Coming Soon Preview Visual"
                  aspectRatio="3/4"
                  position="center"
                  className="rounded-xs w-full"
                />
              </div>

              <div className="pt-4 border-t border-[#EAE5DC] max-w-lg mx-auto">
                <span className="text-[11px] text-[#7A828A] uppercase tracking-widest font-mono block mb-2">
                  Status: Private Atelier Inception
                </span>
                <p className="text-xs text-[#555A64] font-light font-manrope">
                  No commercial inventory is publicly offered at this time. Registered patrons will receive private correspondence upon collection release.
                </p>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* E. IKLA WATER DEDICATED HOUSE EXTENSION SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'ikla-water' && (
          <div className="space-y-24 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            {/* Lead Narrative with Dining Table Hero */}
            <section className="bg-white border border-[#CADCE0] p-8 sm:p-12 rounded-xs shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F8F9] border border-[#CADCE0] text-[#5E8896] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs">
                    <Droplets className="w-3.5 h-3.5 text-[#5E8896]" />
                    Maison Glass Extension
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-tight">
                    Pure Mineral Hydration In Heavyweight Flint Glass
                  </h2>

                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    IKLA Water is conceived as an architectural extension of the IKLA Maison dining salon. Reusable flint glass bottles engineered with heavy monolithic bases, designed to elevate executive hospitality, residential tables, and gallery spaces.
                  </p>

                  <div className="p-4 bg-[#F5F8F9] border border-[#CADCE0] rounded-xs space-y-2 text-xs text-[#40444E] font-manrope">
                    <div className="font-semibold text-[#111215]">Concept Specifications:</div>
                    <div>• 100% Reusable heavy-gauge flint glass</div>
                    <div>• Sculptural rounded decanters & monolithic cylinders</div>
                    <div>• Designed for intentional hospitality & fine dining</div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="bg-[#FAFBFB] p-3 border border-[#CADCE0] rounded-xs shadow-xl">
                    <CampaignImage
                      src="assets/campaigns/01-ready-to-use/ikla-water/ikla-water-dining-table.jpg"
                      alt="IKLA Water Dining Table Setting"
                      aspectRatio="16/10"
                      position="center 40%"
                      className="rounded-xs w-full"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Pedestal & Bottle Silhouettes Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pedestal */}
              <div className="bg-white border border-[#CADCE0] p-4 rounded-xs shadow-sm flex flex-col justify-between">
                <CampaignImage
                  src="assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-pedestal.jpg"
                  alt="IKLA Water Trio Pedestal Display"
                  aspectRatio="1/1"
                  position="center"
                  className="rounded-xs w-full mb-4"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#5E8896] font-semibold block mb-1">
                    Pedestal Installation
                  </span>
                  <h3 className="text-lg font-cormorant font-normal text-[#111215]">
                    The Gallery Pedestal Curation
                  </h3>
                  <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">
                    Sculptural vessels conceived as functional art pieces in conversation with marble and limestone.
                  </p>
                </div>
              </div>

              {/* Rounded Bottles */}
              <div className="bg-white border border-[#CADCE0] p-4 rounded-xs shadow-sm flex flex-col justify-between">
                <div className="aspect-square w-full bg-[#FAFBFB] border border-[#E5EEF0] rounded-xs p-4 mb-4 flex items-center justify-center">
                  <CampaignImage
                    src="assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-rounded-bottles.jpg"
                    alt="IKLA Water Rounded Bottles Profile"
                    aspectRatio="1/1"
                    fit="contain"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#5E8896] font-semibold block mb-1">
                    Silhouette Profile 01
                  </span>
                  <h3 className="text-lg font-cormorant font-normal text-[#111215]">
                    Rounded Flint Glass Decanter
                  </h3>
                  <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">
                    Soft tapered neck with embossed silver typographical seal.
                  </p>
                </div>
              </div>

              {/* Cylinder Bottles */}
              <div className="bg-white border border-[#CADCE0] p-4 rounded-xs shadow-sm flex flex-col justify-between">
                <div className="aspect-square w-full bg-[#FAFBFB] border border-[#E5EEF0] rounded-xs p-4 mb-4 flex items-center justify-center">
                  <CampaignImage
                    src="assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-cylinder-bottles.jpg"
                    alt="IKLA Water Cylinder Bottles Profile"
                    aspectRatio="1/1"
                    fit="contain"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#5E8896] font-semibold block mb-1">
                    Silhouette Profile 02
                  </span>
                  <h3 className="text-lg font-cormorant font-normal text-[#111215]">
                    Monolithic Cylinder Vessel
                  </h3>
                  <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">
                    Slender architectural proportions with weighted crystal base.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* F. MY DRINK FAMILY DEDICATED COMMUNITY & COLLABORATION SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'my-drink-family' && (
          <div className="space-y-24 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rep The Legacy Merch */}
              <div className="bg-white border border-[#E2DCBE] p-6 rounded-xs shadow-sm flex flex-col justify-between">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/my-drink-family/my-drink-family-rep-the-legacy-merch.jpg"
                  alt="My Drink Family Rep The Legacy campaign"
                  aspectRatio="4/3"
                  position="center 20%"
                  className="rounded-xs w-full mb-4"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#E06D38] font-semibold block mb-1">
                    Clubhouse Apparel
                  </span>
                  <h3 className="text-2xl font-cormorant font-normal text-[#111215] mb-2">
                    Rep The Legacy — Clubhouse Silhouettes
                  </h3>
                  <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                    Heavyweight fleece featuring the signature circular family crest, celebrating shared history and elevated community gatherings.
                  </p>
                </div>
              </div>

              {/* MyMosa Collaboration Merch */}
              <div className="bg-white border border-[#E2DCBE] p-6 rounded-xs shadow-sm flex flex-col justify-between">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/my-drink-family/mymosa-family-merch.jpg"
                  alt="MyMosa Family Merch collaboration"
                  aspectRatio="4/3"
                  position="center 20%"
                  className="rounded-xs w-full mb-4"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#E06D38] font-semibold block mb-1">
                    House Collaboration
                  </span>
                  <h3 className="text-2xl font-cormorant font-normal text-[#111215] mb-2">
                    MyMosa × Family Legacy Curation
                  </h3>
                  <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                    Conceived alongside MyMosa, the celebrated Premium Wine Cocktail. Blending ceremonial toasts with casual luxury apparel.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 3. COLLECTION FLAT LAY & DESIGN LANGUAGE SPOTLIGHT (IF APPLICABLE) */}
      {/* ========================================================================= */}
      {!brand.isExtension && brand.id !== 'moral-compass' && (
        <section className="relative py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full z-10 border-t border-[#E2DDD3]">
          {/* Subtle Background Brand Wordmark Watermark */}
          <div className="absolute -top-12 -left-20 w-[65vw] max-w-[900px] pointer-events-none select-none opacity-[0.05] filter contrast-125 z-0">
            <img src={brand.logos.wordmarkDark} alt="" className="w-full h-full object-contain" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Flat Lay Visual Asset (collection.webp) */}
            <div className="lg:col-span-7 bg-white border border-[#DDD7CB] p-3 sm:p-4 group rounded-xs shadow-lg relative overflow-hidden">
              <div className="absolute top-6 right-6 w-24 h-24 opacity-[0.08] pointer-events-none">
                <img src={brand.logos.crestLight} alt="" className="w-full h-full object-contain animate-spin-slow" />
              </div>

              <div className="relative aspect-square w-full overflow-hidden bg-[#F5F2EC] rounded-xs">
                <img
                  src={brand.assets.collection}
                  alt={brand.alt.collection}
                  loading="eager"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-white/95 backdrop-blur-md text-[#16171A] border border-neutral-300/80 rounded-xs flex items-center gap-2 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brand.palette.accent }} />
                    {brand.name} Flat Lay Archive
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-[#555A64] font-light mt-3 px-1 text-center font-manrope">
                Official archive flat lay showcasing foundational silhouettes, construction, and textiles.
              </p>
            </div>

            {/* Brand Identity & Attributes */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#DDD7CB] flex items-center justify-center p-1 shadow-xs">
                    <img src={brand.logos.crestLight} alt="" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8C6D3F]">
                    House Signature
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] mb-3">
                  Materiality & Form
                </h2>
                <p className="text-xs sm:text-sm text-[#4A4E57] font-light leading-relaxed mb-6 font-manrope">
                  {brand.description}
                </p>
              </div>

              {/* Key Attributes List */}
              <div className="space-y-3.5 border-t border-[#E2DDD3] pt-6">
                {brand.keyAttributes.map((attr, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-[#30333A]">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5"
                      style={{ backgroundColor: brand.palette.accent }}
                    >
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="font-light font-manrope leading-relaxed">{attr}</span>
                  </div>
                ))}
              </div>

              {/* Keywords */}
              <div className="pt-4 flex flex-wrap gap-2">
                {brand.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1 text-[10px] uppercase tracking-wider bg-white border border-[#DDD7CB] text-[#30333A] rounded-xs font-medium shadow-2xs"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 4. BRAND PRODUCTS COLLECTION GRID (IF PRODUCTS EXIST) */}
      {/* ========================================================================= */}
      {brandProducts.length > 0 && (
        <section id="brand-collection-grid" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#FAF7F2] border-y border-[#E2DDD3] relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header & Filter Tabs */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2">
                  Seasonal Release
                </span>
                <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215]">
                  The {brand.name} Catalogue
                </h2>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-4 py-2 text-xs uppercase tracking-wider transition-all cursor-pointer rounded-xs ${
                      filterCategory === cat
                        ? `${brand.buttonStyle} shadow-lg`
                        : 'bg-white border border-[#DDD7CB] text-[#40444E] hover:text-[#111215]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {filteredProducts.map((product) => (
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
      )}

      {/* ========================================================================= */}
      {/* 5. EDITORIAL LIFESTYLE BANNER */}
      {/* ========================================================================= */}
      <section id="brand-ethos-section" className="relative w-full py-32 px-6 sm:px-8 lg:px-12 bg-neutral-950 overflow-hidden z-10">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={brand.assets.editorial}
            alt={brand.alt.editorial}
            loading="lazy"
            className="w-full h-full object-cover object-center brightness-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-black/60 to-black/40" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.06] overflow-hidden">
          <img src={brand.logos.wordmarkDark} alt="" className="w-[85vw] max-w-[1100px] object-contain" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-black/60 border border-white/20 flex items-center justify-center p-2 mb-6 shadow-xl">
            <img src={brand.logos.crestLight} alt="" className="w-full h-full object-contain animate-spin-slow" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8A97E] font-medium mb-4 block">
            Campaign Narrative
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-cormorant font-light text-white tracking-tight mb-6 leading-snug max-w-3xl">
            "{brand.manifesto}"
          </h2>

          <div className="w-16 h-px bg-[#C8A97E] mb-6" />

          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl leading-relaxed italic font-manrope">
            House of {brand.name} · {brand.origin}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. EXPLORE NEIGHBORING HOUSES */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full z-10 bg-[#ECEAE4] border-t border-[#DFDBD3]">
        <div className="flex items-center justify-between mb-12 pb-4 border-b border-[#D8D3C7]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block">
              Discover More
            </span>
            <h3 className="text-2xl sm:text-3xl font-cormorant text-[#111215] font-normal mt-1">
              Explore Sister Houses & Extensions
            </h3>
          </div>
          <button
            onClick={onNavigateCollection}
            className="text-xs uppercase tracking-widest text-[#8C6D3F] hover:text-[#111215] font-semibold cursor-pointer flex items-center gap-1"
          >
            <span>All Collections</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherBrands.slice(0, 4).map((b) => (
            <div
              key={b.id}
              onClick={() => {
                onSelectBrand(b.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group p-5 bg-white border border-[#DDD7CB] hover:border-[#C8A97E] transition-all cursor-pointer flex flex-col justify-between rounded-xs shadow-xs hover:shadow-md"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F5F2EC] mb-4 rounded-xs relative">
                  <img
                    src={b.assets.collection}
                    alt={b.alt.collection}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/60 p-1">
                    <img src={b.logos.crestLight} alt="" className="w-full h-full object-contain" />
                  </div>
                </div>
                <h4 className="text-base font-cormorant font-normal text-[#111215] group-hover:text-black transition-colors">
                  {b.name}
                </h4>
                <p className="text-[11px] text-[#555A64] font-light mt-1 line-clamp-2 font-manrope">
                  {b.tagline}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#8C6D3F] font-semibold uppercase tracking-wider">
                <span>Explore House</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
