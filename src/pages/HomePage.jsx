import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles, Layers, Shield, ChevronRight, Gem, Droplets, Wine, Check, Scissors, Plane, ExternalLink, Anchor, Car, Home } from 'lucide-react';
import { BRAND_LIST, FASHION_HOUSES, BEVERAGE_HOUSES, BRANDS } from '../data/brands';
import { PRODUCTS, IKLA_VIP_PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import CampaignImage from '../components/CampaignImage';
import HeroHouseNavigation from '../components/HeroHouseNavigation';
import VIPInquiryModal from '../components/VIPInquiryModal';
import { getCampaignAsset } from '../data/campaigns';
import { getAssetPath } from '../utils/assets.js';
import { ECOSYSTEM_CONFIG, ECOSYSTEM_LINKS } from '../utils/ecosystemLinks';

export default function HomePage({
  onSelectBrand,
  onSelectProduct,
  onNavigateCollection,
  onNavigateAbout,
  onNavigateKids,
  onNavigateGriffin,
}) {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState(null);

  // Set One Assets
  const flagshipHeroAsset = getCampaignAsset('ikla-maison-flagship-hero');
  const businessCasualAsset = getCampaignAsset('ikla-business-casual-couple');

  // Curated Private Previews (VIP suites)
  const curatedVIPPreviews = IKLA_VIP_PRODUCTS.slice(0, 4);

  const handleOpenInquiry = (product = null) => {
    setInquiryProduct(product || {
      id: 'ikla-private-concierge',
      name: 'Maison Private Client Invitation',
      category: 'Concierge Appointment',
      accessMode: 'Private Allocation',
      houseName: 'IKLA Maison',
      image: 'assets/editorial/ikla-monochrome-house-editorial-banner.webp'
    });
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
    setInquiryProduct(null);
  };

  return (
    <div className="flex flex-col w-full bg-[#FAF7F2] text-[#16171A] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. MASTER FLAGSHIP HERO: ikla-maison-flagship-hero.webp */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0A0B0D]">
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(max-width: 768px)"
            srcSet={getAssetPath(flagshipHeroAsset?.url || flagshipHeroAsset?.file)}
          />
          <img
            src={getAssetPath(flagshipHeroAsset?.url || flagshipHeroAsset?.file)}
            alt={flagshipHeroAsset?.alt || 'Four adult models wearing refined IKLA Maison essentials in a sunlit travertine interior'}
            className="w-full h-full object-cover transition-transform duration-1000 scale-100 filter brightness-[0.78] contrast-[1.05]"
            style={{ objectPosition: 'center 20%' }}
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Scrim Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D]/85 via-[#0A0B0D]/40 to-transparent pointer-events-none hidden md:block" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0A0B0D]/20 to-[#0A0B0D]/75 pointer-events-none" />

        {/* Hero Live Copy */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-6 w-full">
          <div className="max-w-2xl text-left space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] font-medium backdrop-blur-md border border-[#D4AF57]/40 text-white/95 bg-black/60 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF57] animate-pulse" />
              <span>International Luxury Flagship</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-cormorant font-light text-white tracking-tight leading-[1.04]">
              I·K·L·A MAISON
            </h1>

            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#DFBF95] font-light font-manrope">
              INTERNATIONALLY KNOWN • LOCALLY ACCEPTED
            </p>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl font-manrope">
              A curated federation of contemporary design viewpoints. Disciplined tailoring, heavyweight natural knits, resort silhouettes, and ceremonial hospitality under one singular standard.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => {
                  const el = document.getElementById('houses-directory');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-white text-black hover:bg-neutral-200 transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs shadow-xl flex items-center gap-2"
              >
                <span>Explore The Houses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onNavigateCollection}
                className="px-6 py-3 border border-white/40 text-white hover:bg-white/10 transition-colors text-xs uppercase tracking-[0.2em] font-medium cursor-pointer rounded-xs backdrop-blur-xs"
              >
                View Collections
              </button>
            </div>
          </div>
        </div>

        {/* Docked Hero House Navigation along the lower edge */}
        <div className="relative z-20 w-full mt-auto">
          <HeroHouseNavigation onSelectBrand={onSelectBrand} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CONCISE HOUSE INTRODUCTION: ikla-business-casual-couple.jpg */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block">
              The Maison Heritage
            </span>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-tight">
              A Federation of Independent Ateliers
            </h2>
            <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
              IKLA Maison operates as an international umbrella uniting autonomous design disciplines. We reject disposable trends, engineering pieces with deliberate weight, architectural poise, and generational permanence.
            </p>
            <div className="pt-2">
              <button
                onClick={onNavigateAbout}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6D3F] hover:text-[#111215] transition-colors cursor-pointer group"
              >
                <span>Read The Maison Canon</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-xl group overflow-hidden">
              <CampaignImage
                src={businessCasualAsset?.url || businessCasualAsset?.file}
                alt={businessCasualAsset?.alt || 'IKLA Maison executive couple in double-faced tailoring'}
                aspectRatio="16/9"
                position="center 20%"
                className="rounded-xs w-full"
              />
              <div className="p-3 text-center bg-[#FAF7F2] border-t border-[#EAE5DC] mt-2 rounded-xs">
                <span className="text-[11px] text-[#555A64] font-light font-manrope">
                  Executive Tailoring & Transcontinental Leisure Capsule
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPLORE THE HOUSES CARDS */}
      {/* ========================================================================= */}
      <section id="houses-directory" className="relative py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full bg-[#FAF7F2]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5DFD5]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block mb-2">
              House Directory
            </span>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215]">
              The House Ecosystem
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-md font-manrope mt-3 md:mt-0">
            Distinct Houses. One Standard. Explore each autonomous atelier’s signature materials, silhouettes, and aesthetic ethos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRAND_LIST.map((brand, idx) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand(brand.id)}
              className="group bg-white border border-[#DDD7CB] hover:border-[#111215] transition-all duration-300 p-6 flex flex-col justify-between rounded-xs shadow-xs hover:shadow-xl cursor-pointer relative"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F5F2EC] mb-5 rounded-xs relative">
                  <img
                    src={getAssetPath(brand.assets.collection)}
                    alt={brand.alt.collection}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-2xs border border-white/20">
                    <span className="text-[9px] uppercase tracking-widest text-white font-mono">
                      {brand.id === 'wnnr' ? 'House 05' : `House 0${idx + 1}`}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md p-1.5 shadow-xs border border-neutral-200">
                    <img src={getAssetPath(brand.logos.crestLight)} alt="" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-cormorant font-normal text-[#111215]">{brand.name}</h3>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    {brand.tagline}
                  </span>
                </div>

                <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope mt-2 line-clamp-2">
                  {brand.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#EAE5DC] flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-[#8C6D3F] group-hover:text-[#111215] transition-colors">
                <span>Explore the House</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. NEW ARRIVALS & PRIVATE PREVIEWS: VIP PRODUCT CARDS */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#F6F2EB] border-y border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#DDD7CB]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2">
                Private Previews
              </span>
              <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215]">
                Curated Private Suites
              </h2>
            </div>
            <button
              onClick={onNavigateCollection}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#8C6D3F] hover:text-[#111215] transition-colors mt-3 md:mt-0 cursor-pointer"
            >
              <span>View All Allocations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curatedVIPPreviews.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onSelectBrand={onSelectBrand}
                onOpenInquiry={handleOpenInquiry}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. IKLA KIDS INTRODUCTION: ikla-kids-core-collection-hero.webp */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 sm:px-8 lg:px-12 bg-[#FBF9F5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#013220]/10 border border-[#013220]/25 text-[#013220] text-[10px] uppercase tracking-[0.28em] font-medium rounded-xs">
                <span>IKLA KIDS · THE FIRST INHERITANCE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cormorant font-light text-[#14181B] leading-tight">
                The Standard Starts Early.
              </h2>

              <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                Considered essentials for the next generation—built with the same discipline, material integrity and quiet confidence as the House. Repeatable core sweatsuits and summer essentials tailored for young pioneers.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={onNavigateKids}
                  className="px-7 py-3.5 bg-[#013220] hover:bg-[#02442c] text-white transition-all text-xs uppercase tracking-[0.22em] font-medium cursor-pointer rounded-xs shadow-xl flex items-center gap-2"
                >
                  <span>Explore IKLA Kids</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleOpenInquiry({
                    id: 'ikla-kids-intro',
                    name: 'IKLA Kids Allocation Inquiry',
                    category: 'Kids Essentials',
                    accessMode: 'Private Preview',
                    houseName: 'IKLA Kids'
                  })}
                  className="px-6 py-3.5 border border-[#013220]/30 hover:bg-[#013220]/5 text-[#013220] transition-all text-xs uppercase tracking-[0.22em] font-medium cursor-pointer rounded-xs"
                >
                  Join Family List
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                onClick={onNavigateKids}
                className="relative bg-white border border-[#E8E1D5] p-3 sm:p-4 rounded-xs shadow-2xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[16/9] w-full overflow-hidden rounded-xs relative">
                  <img
                    src={getAssetPath('assets/kids/ikla-kids-core-collection-hero.webp')}
                    alt="Four children wearing coordinated IKLA Kids sweatsuit essentials in a warm architectural studio"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-2xs border border-[#D4AF57]/40">
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF57] font-mono">
                      Ages 4Y — 14Y
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-[#FAF7F2] border-t border-[#EAE5DC] mt-2 rounded-xs flex items-center justify-between">
                  <span className="text-[11px] text-[#555A64] font-light font-manrope">
                    The First Inheritance · Core Collection
                  </span>
                  <span className="text-[10px] text-[#013220] uppercase tracking-widest font-semibold flex items-center gap-1">
                    Enter Kids <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. GRIFFIN EDITION TEASER: griffin-private-commissions-hero.webp */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 sm:px-8 lg:px-12 bg-[#0A0C0B] text-white border-b border-neutral-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div
                onClick={onNavigateGriffin}
                className="relative bg-[#0F1210] border border-[#C5A869]/30 p-3 sm:p-4 rounded-xs shadow-2xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[16/9] w-full overflow-hidden rounded-xs relative bg-[#060708]">
                  <img
                    src={getAssetPath('assets/griffin/griffin-private-commissions-hero.webp')}
                    alt="Dark IKLA Maison commission atelier with a griffin medallion and bespoke mobility concepts"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-2xs border border-[#C5A869]/40">
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A869] font-mono">
                      Private Commission Program
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-[#131714] border-t border-neutral-800 mt-2 rounded-xs flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400 font-light font-manrope">
                    Mobility · Maritime · Residence · Aviation
                  </span>
                  <span className="text-[10px] text-[#C5A869] uppercase tracking-widest font-semibold flex items-center gap-1">
                    Discover Griffin <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 lg:pl-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A869]/10 border border-[#C5A869]/30 text-[#C5A869] text-[10px] uppercase tracking-[0.28em] font-medium rounded-xs">
                <span>IKLA MAISON · GRIFFIN EDITION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cormorant font-light text-white leading-tight">
                One Standard. Every Environment.
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope">
                A private commission program extending the language of the Maison into mobility, residence, maritime, and aviation. Bespoke cabin studies, owner environments, and complete spatial sanctuaries.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={onNavigateGriffin}
                  className="px-7 py-3.5 bg-[#C5A869] hover:bg-[#D8BE82] text-black transition-all text-xs uppercase tracking-[0.22em] font-semibold cursor-pointer rounded-xs shadow-2xl flex items-center gap-2"
                >
                  <span>Discover Griffin Edition</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-neutral-400 font-mono">
                  Concept commissions presented by invitation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. MAISON EDITORIAL INTERLUDE: 3 MONOCHROME ASSETS */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 sm:px-8 lg:px-12 bg-[#121316] text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Interlude Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF57] font-semibold block">
              Maison Editorial
            </span>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-white">
              The Architecture of Form
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light font-manrope leading-relaxed">
              Monochrome studies of silence, stone, and structure. Exploring the dialogue between tailored silhouettes and monolithic architectural volumes.
            </p>
          </div>

          {/* Wide Gallery Banner */}
          <div className="relative bg-[#1A1C20] border border-neutral-800 p-3 sm:p-4 rounded-xs shadow-2xl overflow-hidden group">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xs relative">
              <img
                src={getAssetPath('assets/editorial/ikla-monochrome-house-editorial-banner.webp')}
                alt="Four models in refined IKLA Maison essentials photographed in a monochrome stone gallery"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 max-w-xl text-left">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF57] font-mono block mb-1">
                  Atelier Narrative
                </span>
                <h3 className="text-xl sm:text-3xl font-cormorant font-light text-white leading-snug">
                  Four Disciplines · One Architectural Standard
                </h3>
              </div>
            </div>
          </div>

          {/* Two Portrait Editorial Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Menswear Portrait Tile */}
            <div className="bg-[#1A1C20] border border-neutral-800 p-4 rounded-xs shadow-xl flex flex-col justify-between group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xs relative mb-4 bg-black">
                <img
                  src={getAssetPath('assets/editorial/ikla-monochrome-menswear-portrait.webp')}
                  alt="Male model in a tailored black overcoat and cream knit on a stone staircase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF57] font-mono block">
                  Tailored Poise
                </span>
                <h4 className="text-xl font-cormorant text-white">
                  Structured Wool & Architectural Knits
                </h4>
                <p className="text-xs text-neutral-400 font-light font-manrope leading-relaxed">
                  Sculpted double-faced wool overcoats and heavyweight cream knitwear engineered for quiet presence.
                </p>
              </div>
            </div>

            {/* Accessories Portrait Tile */}
            <div className="bg-[#1A1C20] border border-neutral-800 p-4 rounded-xs shadow-xl flex flex-col justify-between group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xs relative mb-4 bg-black">
                <img
                  src={getAssetPath('assets/editorial/ikla-monochrome-accessories-portrait.webp')}
                  alt="Woman in a sculptural black coat holding a structured IKLA handbag"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF57] font-mono block">
                  Private Objects
                </span>
                <h4 className="text-xl font-cormorant text-white">
                  Structured Leathercraft & Monolithic Hardware
                </h4>
                <p className="text-xs text-neutral-400 font-light font-manrope leading-relaxed">
                  Top-handle handbags and bespoke leather travel goods crafted with invisible stitching and hand-buffed edges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. LIFESTYLE & PRIVATE OBJECTS: BEYOND THE WARDROBE */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5DFD5]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block mb-2">
              Beyond the Wardrobe
            </span>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215]">
              Living, Travel & Private Objects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-md font-manrope mt-3 md:mt-0">
            Private dining porcelain, bedroom textiles, desk accessories, and cabin leathercraft conceived to integrate seamlessly into intentional spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border border-[#DDD7CB] rounded-xs shadow-xs space-y-4">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xs bg-[#F5F2EC]">
              <img
                src={getAssetPath('assets/vip-products/private-table-dinnerware-set.webp')}
                alt="Private Table Dinnerware Set"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#8C6D3F] font-mono block">Dining Salon</span>
            <h3 className="text-xl font-cormorant text-[#111215]">Private Table Porcelain</h3>
            <p className="text-xs text-[#50545E] font-light font-manrope">Twelve-piece bone china service rimmed in liquid-applied matte gold.</p>
          </div>

          <div className="p-6 bg-white border border-[#DDD7CB] rounded-xs shadow-xs space-y-4">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xs bg-[#F5F2EC]">
              <img
                src={getAssetPath('assets/vip-products/signature-bedroom-textile-set.webp')}
                alt="Signature Bedroom Textile Set"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#8C6D3F] font-mono block">Private Residence</span>
            <h3 className="text-xl font-cormorant text-[#111215]">Sanctuary Bedding Textiles</h3>
            <p className="text-xs text-[#50545E] font-light font-manrope">800 thread-count Egyptian cotton sateen finished with double hemstitch.</p>
          </div>

          <div className="p-6 bg-white border border-[#DDD7CB] rounded-xs shadow-xs space-y-4">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xs bg-[#F5F2EC]">
              <img
                src={getAssetPath('assets/vip-products/bespoke-cabin-travel-set.webp')}
                alt="Bespoke Cabin Travel Set"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#8C6D3F] font-mono block">Executive Mobility</span>
            <h3 className="text-xl font-cormorant text-[#111215]">Bespoke Cabin Travel Set</h3>
            <p className="text-xs text-[#50545E] font-light font-manrope">Full-grain calfskin luggage with aerospace aluminum framework.</p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. MY DRINK FAMILY CONNECTION & THREE-WAY ECOSYSTEM */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 sm:px-8 lg:px-12 bg-[#0D0F13] text-white border-y border-neutral-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E26D35]/10 border border-[#E26D35]/30 text-[#E26D35] text-[10px] uppercase tracking-[0.28em] font-medium rounded-xs">
                <span>Dynasty Universe · Beverage & Hospitality</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cormorant font-light text-white leading-tight">
                My Drink Family
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope">
                Connecting beverage culture, sports leisure, barware, and clubhouse hospitality. Explore coordinated sportswear, crystal flutes, and poolside ritual objects.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://astronomy-refine-exact-adjustment.trycloudflare.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#E26D35] hover:bg-[#F07F48] text-white transition-all text-xs uppercase tracking-[0.2em] font-medium rounded-xs shadow-xl flex items-center gap-2"
                >
                  <span>Visit My Drink Family</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://considerable-system-gif-poet.trycloudflare.com/preview/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-white/30 hover:bg-white/10 text-white transition-all text-xs uppercase tracking-[0.2em] font-medium rounded-xs flex items-center gap-2"
                >
                  <span>Open Family App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                onClick={() => onSelectBrand('my-drink-family')}
                className="relative bg-[#151920] border border-neutral-800 p-3 sm:p-4 rounded-xs shadow-2xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[16/9] w-full overflow-hidden rounded-xs relative">
                  <img
                    src={getAssetPath('assets/my-drink-family/hero-editorial-merch.webp')}
                    alt="My Drink Family Editorial Merch"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-[#0B0D10] border-t border-neutral-800 mt-2 rounded-xs flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400 font-light font-manrope">
                    Wear the Family · Live the Ritual
                  </span>
                  <span className="text-[10px] text-[#E26D35] uppercase tracking-widest font-semibold flex items-center gap-1">
                    Explore MDF Atelier <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. IKLA WATER HOSPITALITY FEATURE */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#F5F8F9] border-b border-[#CADCE0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xs bg-[#EAF2F4] border border-[#CADCE0] shadow-xl">
                <img
                  src={getAssetPath('assets/campaigns/01-ready-to-use/ikla-water/ikla-water-dining-table.jpg')}
                  alt="IKLA Water sculptural bottle beside crystal glassware on a formal dining table"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5E8896]/10 border border-[#5E8896]/30 text-[#5E8896] text-[10px] uppercase tracking-[0.28em] font-medium rounded-xs">
                <span>Architectural Hydration</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#12171B]">
                IKLA Water · Pure Mineral Stillness
              </h2>

              <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                Natural alpine mineral water presented in heavyweight reusable flint glass vessels. Conceived as an architectural component for intentional dining tables and hospitality environments.
              </p>

              <button
                onClick={() => onSelectBrand('ikla-water')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#5E8896] hover:text-[#12171B] transition-colors cursor-pointer"
              >
                <span>Explore IKLA Water</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. PRIVATE CLIENT INVITATION */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 sm:px-8 lg:px-12 bg-[#080808] text-white text-center border-t border-[#D4AF57]/30 relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="w-12 h-12 rounded-full bg-[#D4AF57]/10 border border-[#D4AF57]/40 flex items-center justify-center mx-auto text-[#D4AF57]">
            <Compass className="w-5 h-5" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF57] font-semibold block">
            Private Client Directorate
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cormorant font-light text-white leading-tight">
            An Invitation to the Sanctuary
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto leading-relaxed font-manrope">
            Connect directly with Maison concierges for private salon appointments, bespoke commission inquiries, and advance capsule allocations.
          </p>

          <div className="pt-4">
            <button
              onClick={() => handleOpenInquiry()}
              className="px-8 py-4 bg-[#D4AF57] hover:bg-[#E5BF67] text-black text-xs uppercase tracking-[0.22em] font-semibold rounded-xs shadow-2xl transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Request Private Client Introduction</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. THREE-WAY DYNASTY ECOSYSTEM */}
      {/* ========================================================================= */}
      <section id="dynasty-ecosystem-section" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#0C0E11] text-white border-t border-[#C8A97E]/30 relative overflow-hidden">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8A97E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E26D35]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#C8A97E]/30 text-[#DFBF95] text-[10px] uppercase tracking-[0.3em] font-medium rounded-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF95] animate-pulse" />
              <span>Dynasty Ecosystem · Connected Properties</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-white tracking-tight">
              Three Sovereign Expressions
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light font-manrope leading-relaxed">
              Explore the complete ecosystem uniting master couture fashion, international beverage hospitality, and the private digital member portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Property 1: IKLA Maison */}
            <div className="bg-[#14171D] border border-white/10 hover:border-[#C8A97E]/50 p-6 sm:p-8 rounded-xs transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xs bg-[#C8A97E]/10 border border-[#C8A97E]/30 flex items-center justify-center text-[#C8A97E] text-xs font-mono font-bold">
                  01
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFBF95] font-mono block">
                    Current Property · Master House
                  </span>
                  <h3 className="text-xl sm:text-2xl font-cormorant font-normal text-white mt-1">
                    IKLA Maison
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 font-light font-manrope leading-relaxed">
                  The master house of architectural tailoring, luxury knits, private commissions, and transcontinental leisure.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-[#DFBF95]">
                <span className="text-[11px] font-mono text-neutral-400">Active Sanctum</span>
                <span className="w-2 h-2 rounded-full bg-[#DFBF95]" />
              </div>
            </div>

            {/* Property 2: My Drink Family Website */}
            <a
              href={ECOSYSTEM_CONFIG.myDrinkFamilySiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the official My Drink Family website (opens in new tab)"
              className="bg-[#14171D] border border-white/10 hover:border-[#E26D35]/50 p-6 sm:p-8 rounded-xs transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-lg hover:shadow-2xl"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xs bg-[#E26D35]/10 border border-[#E26D35]/30 flex items-center justify-center text-[#E26D35] text-xs font-mono font-bold">
                  02
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#E26D35] font-mono block">
                    Hospitality Universe · Cloudflare Verified
                  </span>
                  <h3 className="text-xl sm:text-2xl font-cormorant font-normal text-white mt-1 flex items-center gap-2">
                    <span>My Drink Family</span>
                    <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 font-light font-manrope leading-relaxed">
                  The celebrated beverage portfolio, five signature flavor houses, cocktail lounges, and event hospitality.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-[#E26D35] group-hover:text-white transition-colors">
                <span>Visit Universe</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Property 3: My Drink Family App */}
            <a
              href={ECOSYSTEM_CONFIG.myDrinkFamilyAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the My Drink Family member portal app (opens in new tab)"
              className="bg-[#14171D] border border-white/10 hover:border-[#DFBF95]/50 p-6 sm:p-8 rounded-xs transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-lg hover:shadow-2xl"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xs bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs font-mono font-bold">
                  03
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFBF95] font-mono block">
                    Member Experience Portal · Cloudflare Verified
                  </span>
                  <h3 className="text-xl sm:text-2xl font-cormorant font-normal text-white mt-1 flex items-center gap-2">
                    <span>MDF Member App</span>
                    <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 font-light font-manrope leading-relaxed">
                  The private digital application for member login, secret tasting reservations, bottle allocations, and rewards.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-[#DFBF95] group-hover:text-white transition-colors">
                <span>Launch App</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* VIP Inquiry Modal */}
      <VIPInquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        product={inquiryProduct}
      />
    </div>
  );
}
