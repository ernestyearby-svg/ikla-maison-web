import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles, Layers, Shield, ChevronRight, Gem, Droplets, Wine, Check } from 'lucide-react';
import { BRAND_LIST, BRANDS } from '../data/brands';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import CampaignImage from '../components/CampaignImage';
import { getCampaignAsset } from '../data/campaigns';

export default function HomePage({ onSelectBrand, onSelectProduct, onNavigateCollection, onNavigateAbout }) {
  const [activeBrandTab, setActiveBrandTab] = useState('ikla-maison');
  const [hoveredHouse, setHoveredHouse] = useState(null);
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 8);
  const activeBrand = BRANDS[activeBrandTab] || BRANDS['ikla-maison'];

  // Key campaign assets for sequence
  const businessCasualAsset = getCampaignAsset('ikla-business-casual-couple');
  const dynastyHoodiesAsset = getCampaignAsset('ikla-dynasty-spectrum-hoodies');
  const mymosaCollabAsset = getCampaignAsset('ikla-x-mymosa-lifestyle');
  const waterDiningAsset = getCampaignAsset('ikla-water-dining-table');
  const waterPedestalAsset = getCampaignAsset('ikla-water-trio-pedestal');
  const waterRoundedAsset = getCampaignAsset('ikla-water-trio-rounded-bottles');
  const waterCylinderAsset = getCampaignAsset('ikla-water-trio-cylinder-bottles');

  return (
    <div className="flex flex-col w-full bg-[#FAF7F2] text-[#16171A] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. MASTER LUXURY COLLECTIVE ENTRANCE & LAYERED HERO */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#07080a]">
        {/* Dynamic Background Image based on active house */}
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(max-width: 640px)"
            srcSet={activeBrand.assets.heroMobile}
          />
          <source
            media="(min-width: 641px)"
            srcSet={activeBrand.assets.heroDesktop}
          />
          <img
            src={activeBrand.assets.heroDesktop}
            alt={activeBrand.alt.heroDesktop}
            className="w-full h-full object-cover object-center filter brightness-[0.45] transition-all duration-1000 transform scale-105"
            loading="eager"
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

        {/* Oversized Faded IKLA Maison Wordmark Watermark behind Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <img
            src={BRANDS['ikla-maison'].logos.wordmarkDark}
            alt=""
            className="w-[90vw] max-w-[1300px] object-contain opacity-[0.06] filter contrast-125"
            loading="eager"
          />
        </div>

        {/* Rotating Circular Collective Crest Behind Hero */}
        <div className="absolute -right-24 md:right-12 -bottom-24 md:bottom-8 w-80 md:w-96 h-80 md:h-96 pointer-events-none select-none z-0 opacity-12">
          <img
            src={BRANDS['ikla-maison'].logos.crestLight}
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

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-cormorant font-light text-white tracking-tight leading-[1.05] mb-6">
            Architectural Luxury. <br />
            <span className="italic font-normal text-[#F4EFE6] underline decoration-[#C8A97E]/40 decoration-1 underline-offset-8">
              Five Independent Houses.
            </span>
          </h1>

          <p className="max-w-2xl text-xs sm:text-sm md:text-base text-neutral-300 font-light tracking-wide mb-10 leading-relaxed font-manrope">
            A curated federation of contemporary design viewpoints. Disciplined tailoring, heavyweight natural knits, resort silhouettes, and ceremonial hospitality under one singular standard.
          </p>

          {/* Primary Action Button Cluster */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onSelectBrand(activeBrandTab)}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#0A0B0D] hover:bg-[#F4EFE6] transition-all duration-300 font-medium tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 shadow-2xl cursor-pointer group rounded-xs border border-white"
            >
              <span>Explore {activeBrand.name}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              onClick={onNavigateCollection}
              className="w-full sm:w-auto px-8 py-4 bg-black/40 backdrop-blur-md hover:bg-black/60 text-white border border-white/30 hover:border-white/60 transition-all duration-300 font-light tracking-[0.2em] uppercase text-xs cursor-pointer rounded-xs"
            >
              View Full Inventory
            </button>
          </div>

          {/* Interactive House Selector Tab Strip */}
          <div className="mt-14 w-full max-w-3xl grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 bg-black/50 backdrop-blur-xl border border-white/15 rounded-xs shadow-2xl">
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
      {/* 2. SEQUENCE STEP 1: HOUSE INTRODUCTION (CLEAN BUSINESS-CASUAL IMAGE) */}
      {/* ========================================================================= */}
      <section className="relative py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full bg-[#FAF7F2] border-b border-[#E5DFD5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DDD7CB] text-[#8C6D3F] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D3F]" />
              House Introduction
            </div>

            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-[1.15]">
              Architectural Proportions. <br />
              <span className="italic font-light text-[#50545E]">Heirloom Construction.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#40444E] font-light leading-relaxed font-manrope">
              IKLA Maison exists at the convergence of pure architectural geometry and relaxed couture. Each garment is conceived as a habitable silhouette—measured, intentional, and sculpted from world-class natural wools, cashmere, and certified organic textiles.
            </p>

            <div className="border-l-2 border-[#C8A97E] pl-6 py-2 my-6">
              <p className="text-sm sm:text-base italic font-cormorant text-[#1F2228] leading-relaxed">
                "We do not design garments for seasonal turnover. We construct heirloom silhouettes that age gracefully with their wearer."
              </p>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold block mt-2">
                — IKLA Maison Master Atelier
              </span>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectBrand('ikla-maison')}
                className="px-7 py-3.5 bg-[#0F172A] text-[#FAF7F2] hover:bg-[#1E293B] shadow-md border border-[#0F172A] transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer rounded-xs flex items-center gap-2 group"
              >
                <span>Discover IKLA Maison</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onNavigateAbout}
                className="px-7 py-3.5 border border-[#DDD7CB] text-[#111215] hover:bg-white hover:border-[#111215] transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer rounded-xs"
              >
                Atelier Manifesto
              </button>
            </div>
          </div>

          {/* Right Clean Crop Image */}
          <div className="lg:col-span-6">
            <div className="relative p-3 bg-white border border-[#DDD7CB] shadow-xl rounded-xs">
              <CampaignImage
                src={businessCasualAsset.file}
                alt={businessCasualAsset.alt}
                aspectRatio="2/3"
                position="center 20%"
                className="rounded-xs w-full"
                badge={
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.2em] font-medium border border-white/20 rounded-xs">
                    Editorial Archive
                  </span>
                }
              />
              <div className="p-4 text-center bg-[#FAF7F2] border-t border-[#EAE5DC] mt-2 rounded-xs">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold block">
                  Executive Tailoring & Outerwear
                </span>
                <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">
                  Structured double-faced trench coats and natural knitwear tailored for global transit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SEQUENCE STEP 2: THE DYNASTY SPECTRUM (MAJOR VISUAL STATEMENT) */}
      {/* ========================================================================= */}
      <section className="relative py-28 px-6 sm:px-8 lg:px-12 bg-[#F4EFE6] border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Showcase */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative p-3 bg-white border border-[#DDD7CB] shadow-xl rounded-xs">
              <CampaignImage
                src={dynastyHoodiesAsset.file}
                alt={dynastyHoodiesAsset.alt}
                aspectRatio="1/1"
                position="center"
                className="rounded-xs w-full shadow-inner"
                badge={
                  <span className="px-3 py-1 bg-[#0F172A]/85 backdrop-blur-md text-[#FAF7F2] text-[10px] uppercase tracking-[0.2em] font-medium border border-[#0F172A]/30 rounded-xs">
                    The Dynasty Series
                  </span>
                }
              />
              <div className="flex items-center justify-between p-3.5 bg-[#FAF7F2] border-t border-[#E5E0D8] text-[11px] text-[#555A64]">
                <span className="font-mono uppercase tracking-wider">500 GSM Organic Cotton</span>
                <span className="uppercase tracking-widest text-[#8C6D3F] font-semibold">Tonal Natural Palette</span>
              </div>
            </div>
          </div>

          {/* Copy and CTA */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DDD7CB] text-[#8C6D3F] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D3F]" />
              Foundational Statement
            </div>

            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-[1.15]">
              The Dynasty Spectrum.
            </h2>

            <p className="text-sm sm:text-base text-[#40444E] font-light leading-relaxed font-manrope">
              Five architectural gradients sculpted from certified 500 GSM double-faced loopback fleece. A disciplined exploration of weight, tactile gravity, and heirloom permanence.
            </p>

            <ul className="space-y-3 pt-2 text-xs text-[#30333A] font-manrope">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
                <span>Heavyweight 500 GSM double-faced loopback fleece</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
                <span>Seamless double-layered hood with drop-shoulder balance</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
                <span>Custom dyed in bone cream, travertine, dune, charcoal, and obsidian</span>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={() => onSelectBrand('ikla-maison')}
                className="px-8 py-4 bg-[#0F172A] text-[#FAF7F2] hover:bg-[#1E293B] shadow-lg border border-[#0F172A] transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer rounded-xs flex items-center gap-3 group"
              >
                <span>Explore The Spectrum</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SEQUENCE STEP 3: SHOP THE HOUSE / COLLECTIONS (5 REFINED CARDS) */}
      {/* ========================================================================= */}
      <section className="relative py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full bg-[#FAF7F2]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5DFD5]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block mb-2">
              The Curated Directory
            </span>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215]">
              Shop The Houses & Extensions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-md mt-4 md:mt-0 leading-relaxed font-manrope">
            Each house operates autonomously under its bespoke materiality, palette, and architectural ethos.
          </p>
        </div>

        {/* 5 Distinct Cards for IKLA Maison, KTSE, Motéon, Moral Compass, and IKLA Water */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Card 1: IKLA Maison */}
          <div
            onClick={() => onSelectBrand('ikla-maison')}
            className="group bg-white border border-[#DDD7CB] hover:border-[#C8A97E] transition-all duration-300 rounded-xs p-4 flex flex-col justify-between shadow-xs hover:shadow-xl cursor-pointer"
          >
            <div>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F2EC] rounded-xs mb-4">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/ikla-maison/ikla-standard-hoodie-sweats.jpg"
                  alt="IKLA Maison Tailoring & Leisure"
                  aspectRatio="4/5"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-white/95 backdrop-blur-md text-[9px] uppercase tracking-widest font-semibold border border-[#DDD7CB] text-[#111215] rounded-xs">
                  House 01
                </div>
              </div>
              <h3 className="text-lg font-cormorant font-normal text-[#111215]">IKLA Maison</h3>
              <p className="text-[11px] text-[#50545E] font-light mt-1 font-manrope line-clamp-2">
                Architectural tailoring, double-faced fleece, and international leisure.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#8C6D3F] font-semibold uppercase tracking-wider">
              <span>Enter House</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: KTSE */}
          <div
            onClick={() => onSelectBrand('ktse')}
            className="group bg-white border border-[#DDD7CB] hover:border-[#8C7A6B] transition-all duration-300 rounded-xs p-4 flex flex-col justify-between shadow-xs hover:shadow-xl cursor-pointer"
          >
            <div>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F2EC] rounded-xs mb-4">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/ktse/ktse-streetwear-duo.jpg"
                  alt="KTSE Keep That Same Energy"
                  aspectRatio="4/5"
                  position="center 20%"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-white/95 backdrop-blur-md text-[9px] uppercase tracking-widest font-semibold border border-[#DDD7CB] text-[#111215] rounded-xs">
                  House 02
                </div>
              </div>
              <h3 className="text-lg font-cormorant font-normal text-[#111215]">KTSE</h3>
              <p className="text-[11px] text-[#50545E] font-light mt-1 font-manrope line-clamp-2">
                Keep That Same Energy: brutalist terry, raw hems, and structural gravity.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#8C7A6B] font-semibold uppercase tracking-wider">
              <span>Enter House</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Motéon */}
          <div
            onClick={() => onSelectBrand('moteon')}
            className="group bg-white border border-[#DDD7CB] hover:border-[#B85D3B] transition-all duration-300 rounded-xs p-4 flex flex-col justify-between shadow-xs hover:shadow-xl cursor-pointer"
          >
            <div>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F2EC] rounded-xs mb-4">
                <CampaignImage
                  src="assets/campaigns/01-ready-to-use/moteon/moteon-launching-april-first.jpg"
                  alt="Motéon Riviera Resort"
                  aspectRatio="4/5"
                  position="center 20%"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-white/95 backdrop-blur-md text-[9px] uppercase tracking-widest font-semibold border border-[#DDD7CB] text-[#111215] rounded-xs">
                  House 03
                </div>
              </div>
              <h3 className="text-lg font-cormorant font-normal text-[#111215]">Motéon</h3>
              <p className="text-[11px] text-[#50545E] font-light mt-1 font-manrope line-clamp-2">
                Effortless European resort wear, crochet open-knits, and fluid linen.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#B85D3B] font-semibold uppercase tracking-wider">
              <span>Enter House</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Moral Compass */}
          <div
            onClick={() => onSelectBrand('moral-compass')}
            className="group bg-white border border-[#DDD7CB] hover:border-[#7A828A] transition-all duration-300 rounded-xs p-4 flex flex-col justify-between shadow-xs hover:shadow-xl cursor-pointer"
          >
            <div>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F2EC] rounded-xs mb-4">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/moral-compass/moral-compass-coming-soon.jpg"
                  alt="Moral Compass Coming Soon Preview"
                  aspectRatio="4/5"
                  position="center"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-white/95 backdrop-blur-md text-[9px] uppercase tracking-widest font-semibold border border-[#DDD7CB] text-[#111215] rounded-xs">
                  House 04
                </div>
              </div>
              <h3 className="text-lg font-cormorant font-normal text-[#111215]">Moral Compass</h3>
              <p className="text-[11px] text-[#50545E] font-light mt-1 font-manrope line-clamp-2">
                Cardinal direction, minimalist navigation, and private atelier preview.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#7A828A] font-semibold uppercase tracking-wider">
              <span>View Preview</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: IKLA Water */}
          <div
            onClick={() => onSelectBrand('ikla-water')}
            className="group bg-white border border-[#DDD7CB] hover:border-[#5E8896] transition-all duration-300 rounded-xs p-4 flex flex-col justify-between shadow-xs hover:shadow-xl cursor-pointer"
          >
            <div>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F2EC] rounded-xs mb-4">
                <CampaignImage
                  src="assets/campaigns/01-ready-to-use/ikla-water/ikla-water-dining-table.jpg"
                  alt="IKLA Water Dining Table Vessel"
                  aspectRatio="4/5"
                  position="center 30%"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-white/95 backdrop-blur-md text-[9px] uppercase tracking-widest font-semibold border border-[#DDD7CB] text-[#111215] rounded-xs">
                  Extension
                </div>
              </div>
              <h3 className="text-lg font-cormorant font-normal text-[#111215]">IKLA Water</h3>
              <p className="text-[11px] text-[#50545E] font-light mt-1 font-manrope line-clamp-2">
                Pure alpine mineral hydration in reusable monolithic flint glass vessels.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#5E8896] font-semibold uppercase tracking-wider">
              <span>Discover Vessel</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SEQUENCE STEP 4: IKLA EDITORIAL GRID (MULTIDISCIPLINARY SELECTION) */}
      {/* ========================================================================= */}
      <section className="relative py-28 px-6 sm:px-8 lg:px-12 bg-[#F4EFE6] border-y border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2">
              Editorial Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] mb-4">
              IKLA Editorial Chronicles
            </h2>
            <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
              Documenting movement, leisure, discipline, and transcontinental transit across the Maison's global disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Editorial 1: Movement & Tennis */}
            <div
              onClick={() => onSelectBrand('ikla-maison')}
              className="group bg-white border border-[#DDD7CB] rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE5DC]">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/ikla-maison/ikla-tennis-collection.jpg"
                  alt="IKLA Maison Tennis Club collection on clay court"
                  aspectRatio="4/3"
                  position="center 25%"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[9px] uppercase tracking-widest font-semibold rounded-xs">
                  Movement: Tennis
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl font-cormorant font-normal text-[#111215] mb-2">
                    Clay Court Precision & Athletic Whites
                  </h3>
                  <p className="text-xs text-[#555A64] font-light leading-relaxed font-manrope">
                    Tailored pleated skirts and performance pique polos engineered for dynamic court movement without aesthetic compromise.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#8C6D3F] font-semibold uppercase tracking-wider">
                  <span>View Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Editorial 2: Movement & Coastal Cycling */}
            <div
              onClick={() => onSelectBrand('ikla-maison')}
              className="group bg-white border border-[#DDD7CB] rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE5DC]">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/ikla-maison/ikla-coastal-cycling.jpg"
                  alt="IKLA Maison coastal road cyclist in technical outerwear"
                  aspectRatio="4/3"
                  position="center 20%"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[9px] uppercase tracking-widest font-semibold rounded-xs">
                  Movement: Cycling
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl font-cormorant font-normal text-[#111215] mb-2">
                    Coastal Velocity & Wind-Defying Outerwear
                  </h3>
                  <p className="text-xs text-[#555A64] font-light leading-relaxed font-manrope">
                    Disciplined technical layers sculpted for coastal hill climbs and solitary road endurance against the horizon.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#8C6D3F] font-semibold uppercase tracking-wider">
                  <span>View Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Editorial 3: Travel & Family */}
            <div
              onClick={() => onSelectBrand('ikla-maison')}
              className="group bg-white border border-[#DDD7CB] rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE5DC]">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/ikla-maison/ikla-family-airport-travel.jpg"
                  alt="IKLA Maison family walking through private terminal in matching tailored leisurewear"
                  aspectRatio="4/3"
                  position="center 25%"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[9px] uppercase tracking-widest font-semibold rounded-xs">
                  Travel & Family
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl font-cormorant font-normal text-[#111215] mb-2">
                    Cross-Continental Transit & Generational Unity
                  </h3>
                  <p className="text-xs text-[#555A64] font-light leading-relaxed font-manrope">
                    Harmonized leisure silhouettes tailored for private air transit and relaxed arrival at global destinations.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#8C6D3F] font-semibold uppercase tracking-wider">
                  <span>View Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Editorial 4: Focus, Discipline, Purpose */}
            <div
              onClick={() => onSelectBrand('ikla-maison')}
              className="group bg-white border border-[#DDD7CB] rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE5DC]">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/ikla-maison/ikla-focus-discipline-purpose.jpg"
                  alt="IKLA Maison Focus, Discipline, Purpose campaign portrait"
                  aspectRatio="4/3"
                  position="center 30%"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[9px] uppercase tracking-widest font-semibold rounded-xs">
                  Ethos: Discipline
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl font-cormorant font-normal text-[#111215] mb-2">
                    Focus, Discipline & Internal Purpose
                  </h3>
                  <p className="text-xs text-[#555A64] font-light leading-relaxed font-manrope">
                    Behind every finished silhouette is relentless physical and mental dedication. Apparel engineered to mirror disciplined commitment.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#8C6D3F] font-semibold uppercase tracking-wider">
                  <span>View Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Editorial 5: Maritime Leisure */}
            <div
              onClick={() => onSelectBrand('ikla-maison')}
              className="group bg-white border border-[#DDD7CB] rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE5DC]">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/ikla-maison/ikla-luxury-coastal-couple.jpg"
                  alt="IKLA Maison couple relaxing on yacht deck overlooking sea"
                  aspectRatio="4/3"
                  position="center 35%"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[9px] uppercase tracking-widest font-semibold rounded-xs">
                  Maritime Leisure
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl font-cormorant font-normal text-[#111215] mb-2">
                    Quiet Horizon & Yachtside Sanctuary
                  </h3>
                  <p className="text-xs text-[#555A64] font-light leading-relaxed font-manrope">
                    Unstructured tailoring conceived for sea breeze, open decks, and quiet coastal horizons.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#8C6D3F] font-semibold uppercase tracking-wider">
                  <span>View Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Editorial 6: Monochrome Essentials */}
            <div
              onClick={() => onSelectBrand('ikla-maison')}
              className="group bg-white border border-[#DDD7CB] rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE5DC]">
                <CampaignImage
                  src="assets/campaigns/02-reference-crops/ikla-maison/ikla-standard-black-white-basics.jpg"
                  alt="IKLA Maison monochrome basic foundation tees"
                  aspectRatio="4/3"
                  position="center"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[9px] uppercase tracking-widest font-semibold rounded-xs">
                  Foundational Basics
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl font-cormorant font-normal text-[#111215] mb-2">
                    Monochrome Combed Cotton Foundations
                  </h3>
                  <p className="text-xs text-[#555A64] font-light leading-relaxed font-manrope">
                    Dense organic combed jersey foundational tees that provide the tactile baseline for daily layering.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#8C6D3F] font-semibold uppercase tracking-wider">
                  <span>View Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SEQUENCE STEP 5: THE WORLD OF IKLA (STORY STRIP) */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#FAF7F2] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block mb-2">
              Maison Ethos
            </span>
            <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215]">
              The World of IKLA
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                title: 'Fashion',
                desc: 'Architectural cuts sculpted from virgin natural fibres.',
              },
              {
                title: 'Performance',
                desc: 'Technical fluidity across courts, circuits, and horizons.',
              },
              {
                title: 'Travel',
                desc: 'Effortless transit from private terminals to coastal villas.',
              },
              {
                title: 'Family',
                desc: 'Generational unity and shared values expressed in fabric.',
              },
              {
                title: 'Discipline',
                desc: 'Uncompromising standard of tactile density and construction.',
              },
              {
                title: 'Legacy',
                desc: 'Enduring heirlooms built to outlast transient fashion cycles.',
              },
            ].map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-6 bg-white border border-[#DDD7CB] rounded-xs text-center flex flex-col justify-between shadow-2xs hover:border-[#C8A97E] transition-all"
              >
                <div>
                  <span className="text-[9px] font-mono text-[#8C6D3F] uppercase tracking-widest block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-cormorant font-medium text-[#111215] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-[#555A64] font-light leading-relaxed font-manrope">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SEQUENCE STEP 6: COLLABORATIONS (IKLA × MYMOSA) */}
      {/* ========================================================================= */}
      <section className="relative py-28 px-6 sm:px-8 lg:px-12 bg-[#101114] text-[#FAF7F2] border-b border-neutral-800 overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E06D38]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[#E8C862] text-[10px] uppercase tracking-[0.25em] font-medium rounded-xs">
              <Wine className="w-3 h-3 text-[#E8C862]" />
              Maison Collaboration
            </div>

            <h2 className="text-3xl sm:text-5xl font-cormorant font-light text-white leading-[1.15]">
              IKLA × MyMosa <br />
              <span className="italic text-[#E8C862]">The Art of Celebration.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed font-manrope">
              In collaboration with MyMosa, the celebrated Premium Wine Cocktail. Blending refined lounge living with social hospitality under golden hour skies. An authentic union of elevated leisurewear and ceremonial toasts.
            </p>

            <div className="p-4 bg-white/5 border border-white/10 rounded-xs">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#E8C862] font-semibold block mb-1">
                Featured Product Profile
              </span>
              <p className="text-xs text-neutral-300 font-light font-manrope leading-relaxed">
                MyMosa Premium Wine Cocktail — Crafted with crisp premium wine and natural citrus essences for elevated private gatherings.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSelectBrand('my-drink-family')}
                className="px-8 py-4 bg-[#E06D38] text-white hover:bg-[#C95C2B] transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer rounded-xs flex items-center gap-3 shadow-xl group border border-[#E06D38]"
              >
                <span>Explore The Collaboration</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative p-3 bg-neutral-900 border border-neutral-700 shadow-2xl rounded-xs">
              <CampaignImage
                src={mymosaCollabAsset.file}
                alt={mymosaCollabAsset.alt}
                aspectRatio="3/4"
                position="center 20%"
                className="rounded-xs w-full"
                badge={
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[#E8C862] text-[10px] uppercase tracking-[0.2em] font-medium border border-white/20 rounded-xs">
                    MyMosa Lifestyle
                  </span>
                }
              />
              <div className="p-3 text-center bg-black/50 border-t border-neutral-800 text-[11px] text-neutral-400 font-manrope">
                Celebrated moments with MyMosa Premium Wine Cocktail and My Drink Family apparel.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SEQUENCE STEP 7: IKLA WATER (PREMIUM PRODUCT/STORY SECTION) */}
      {/* ========================================================================= */}
      <section id="ikla-water" className="relative py-28 px-6 sm:px-8 lg:px-12 bg-[#F6F9FA] border-b border-[#CADCE0]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#CADCE0] text-[#5E8896] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs shadow-2xs mb-4">
              <Droplets className="w-3.5 h-3.5 text-[#5E8896]" />
              House Extension Concept
            </div>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] mb-4">
              IKLA Water — Sculptural Mineral Vessels
            </h2>
            <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
              Conceived as an architectural extension of the formal dining salon. Pure natural mineral water contained in reusable flint glass vessels designed to integrate seamlessly into modern living spaces.
            </p>
          </div>

          {/* 4 Clean Images Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Dining Table Hero Image */}
            <div className="lg:col-span-7 bg-white border border-[#CADCE0] p-4 rounded-xs shadow-md flex flex-col justify-between">
              <CampaignImage
                src={waterDiningAsset.file}
                alt={waterDiningAsset.alt}
                aspectRatio="16/10"
                position="center 40%"
                className="rounded-xs w-full mb-4"
              />
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#5E8896] font-semibold block mb-1">
                  The Dining Table Setting
                </span>
                <h3 className="text-xl font-cormorant font-normal text-[#111215] mb-2">
                  Monolithic Glassware For Ceremonial Hospitality
                </h3>
                <p className="text-xs text-[#555A64] font-light font-manrope leading-relaxed">
                  Sculptural glass bottles engineered with heavy bases and tactile ergonomics, designed to rest beside crystal stemware on intentional dining tables.
                </p>
              </div>
            </div>

            {/* Pedestal Display */}
            <div className="lg:col-span-5 bg-white border border-[#CADCE0] p-4 rounded-xs shadow-md flex flex-col justify-between">
              <CampaignImage
                src={waterPedestalAsset.file}
                alt={waterPedestalAsset.alt}
                aspectRatio="1/1"
                position="center"
                className="rounded-xs w-full mb-4"
              />
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#5E8896] font-semibold block mb-1">
                  Architectural Pedestal Archive
                </span>
                <h3 className="text-xl font-cormorant font-normal text-[#111215] mb-2">
                  Sculptural Vessel Silhouettes
                </h3>
                <p className="text-xs text-[#555A64] font-light font-manrope leading-relaxed">
                  Conceived as functional sculptures for minimalist interiors, executive conference spaces, and private residences.
                </p>
              </div>
            </div>
          </div>

          {/* Bottle Profile Silhouettes (Contain Fit so Silhouettes & Labels are Pristine) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Rounded Bottles */}
            <div className="bg-white border border-[#CADCE0] p-6 rounded-xs shadow-sm flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-48 h-48 shrink-0 bg-[#FAFBFB] border border-[#E5EEF0] rounded-xs p-2">
                <CampaignImage
                  src={waterRoundedAsset.file}
                  alt={waterRoundedAsset.alt}
                  aspectRatio="1/1"
                  fit="contain"
                  className="w-full h-full"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#5E8896] font-semibold block">
                  Silhouette 01
                </span>
                <h4 className="text-xl font-cormorant font-normal text-[#111215]">
                  The Rounded Flint Glass Decanter
                </h4>
                <p className="text-xs text-[#555A64] font-light font-manrope leading-relaxed">
                  A soft-curved silhouette with generous volume, tactile neck taper, and embossed silver Maison seal.
                </p>
                <span className="inline-block text-[10px] text-[#5E8896] font-mono uppercase tracking-wider">
                  Maison Concept Archive
                </span>
              </div>
            </div>

            {/* Cylinder Bottles */}
            <div className="bg-white border border-[#CADCE0] p-6 rounded-xs shadow-sm flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-48 h-48 shrink-0 bg-[#FAFBFB] border border-[#E5EEF0] rounded-xs p-2">
                <CampaignImage
                  src={waterCylinderAsset.file}
                  alt={waterCylinderAsset.alt}
                  aspectRatio="1/1"
                  fit="contain"
                  className="w-full h-full"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#5E8896] font-semibold block">
                  Silhouette 02
                </span>
                <h4 className="text-xl font-cormorant font-normal text-[#111215]">
                  The Monolithic Cylinder Vessel
                </h4>
                <p className="text-xs text-[#555A64] font-light font-manrope leading-relaxed">
                  Slender architectural lines with weighted crystal base and airtight brushed metal closure.
                </p>
                <span className="inline-block text-[10px] text-[#5E8896] font-mono uppercase tracking-wider">
                  Maison Concept Archive
                </span>
              </div>
            </div>
          </div>

          {/* Action to Explore IKLA Water */}
          <div className="text-center pt-4">
            <button
              onClick={() => onSelectBrand('ikla-water')}
              className="px-8 py-4 bg-[#1A2830] text-[#FAFBFB] hover:bg-[#283C48] shadow-lg border border-[#1A2830] transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer rounded-xs inline-flex items-center gap-3 group"
            >
              <span>Explore Complete IKLA Water Showcase</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FEATURED CURATIONS GRID WITH LUXURY FRAMING */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#F5EFEB] border-b border-[#E5DFD5]">
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
      {/* 10. WHITE-GLOVE CLIENT SERVICE PILLARS */}
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
