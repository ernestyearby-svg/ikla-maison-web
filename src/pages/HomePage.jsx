import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles, Layers, Shield, ChevronRight, Gem, Droplets, Wine, Check, Scissors, Plane, PackageCheck } from 'lucide-react';
import { BRAND_LIST, FASHION_HOUSES, BRANDS } from '../data/brands';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import CampaignImage from '../components/CampaignImage';
import { getCampaignAsset } from '../data/campaigns';

export default function HomePage({ onSelectBrand, onSelectProduct, onNavigateCollection, onNavigateAbout }) {
  const [activeEditorialHouse, setActiveEditorialHouse] = useState('ikla-maison');
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 8);

  // Set One Assets
  const flagshipHeroAsset = getCampaignAsset('ikla-maison-flagship-hero');
  const fashionGatewayAsset = getCampaignAsset('house-of-ikla-fashion-gateway');
  const businessCasualAsset = getCampaignAsset('ikla-business-casual-couple');

  // Set Two Assets
  const accessoriesGatewayAsset = getCampaignAsset('house-of-ikla-accessories-gateway');

  // Set Three Assets
  const travelGoodsAsset = getCampaignAsset('house-of-ikla-travel-goods');

  // Set Four Assets
  const craftsmanshipAsset = getCampaignAsset('house-of-ikla-atelier-craftsmanship');
  const packagingAsset = getCampaignAsset('house-of-ikla-private-client-packaging');

  // Editorial Lifestyle Assets for Rotating Feature
  const editorialLifestyleAssets = {
    'ikla-maison': {
      asset: getCampaignAsset('ikla-mens-editorial-lifestyle'),
      houseName: 'IKLA Maison',
      tagline: 'The Architectural Standard',
      narrative: 'Refined menswear tailoring, structured double-faced wool overcoats, and considered essentials designed for international executive presence.',
      accent: '#8C6D3F',
      actionText: 'Explore IKLA Maison'
    },
    'wnnr': {
      asset: getCampaignAsset('wnnr-discipline-lifestyle'),
      houseName: 'WNNR',
      tagline: 'WIN WITHIN — Sunrise Discipline',
      narrative: 'Morning focus in a penthouse studio. Heavyweight 520 GSM loopback French terry and precision training layers engineered for internal resolve.',
      accent: '#C5A869',
      actionText: 'Explore WNNR Atelier'
    },
    'ktse': {
      asset: getCampaignAsset('ktse-urban-lifestyle'),
      houseName: 'KTSE',
      tagline: 'NO SWITCHES. NO EXCUSES.',
      narrative: 'Brutalist street volume, dense loopback terry, and tactile gravity against concrete plaza monoliths. Structural streetwear built to endure.',
      accent: '#9B324D',
      actionText: 'Explore KTSE House'
    },
    'moteon': {
      asset: getCampaignAsset('moteon-coastal-movement-lifestyle'),
      houseName: 'Motéon',
      tagline: 'Riviera Freedom & Coastal Movement',
      narrative: 'Fluid European linens, open-gauge artisan crochet knits, and relaxed seaside tailoring designed for unhurried Mediterranean living.',
      accent: '#B85D3B',
      actionText: 'Explore Motéon House'
    },
    'moral-compass': {
      asset: getCampaignAsset('moral-compass-executive-lifestyle'),
      houseName: 'Moral Compass',
      tagline: 'Direction in Every Detail',
      narrative: 'Cardinal double-breasted tailoring, celestial navigation jacquard linings, and volcanic obsidian tones designed with quiet intention.',
      accent: '#132B20',
      actionText: 'Explore Moral Compass'
    }
  };

  // Preserved Collaboration & Concept Assets
  const mymosaCollabAsset = getCampaignAsset('ikla-x-mymosa-lifestyle');
  const waterDiningAsset = getCampaignAsset('ikla-water-dining-table');
  const waterPedestalAsset = getCampaignAsset('ikla-water-trio-pedestal');
  const waterRoundedAsset = getCampaignAsset('ikla-water-trio-rounded-bottles');
  const waterCylinderAsset = getCampaignAsset('ikla-water-trio-cylinder-bottles');

  const currentEditorial = editorialLifestyleAssets[activeEditorialHouse] || editorialLifestyleAssets['ikla-maison'];

  return (
    <div className="flex flex-col w-full bg-[#FAF7F2] text-[#16171A] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. FLAGSHIP HERO: ikla-maison-flagship-hero.webp */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[92vh] lg:min-h-[95vh] flex items-end justify-start overflow-hidden bg-[#0A0B0D]">
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(max-width: 768px)"
            srcSet={flagshipHeroAsset?.url || flagshipHeroAsset?.file}
          />
          <img
            src={flagshipHeroAsset?.url || flagshipHeroAsset?.file}
            alt={flagshipHeroAsset?.alt || 'Four adult models wearing refined IKLA Maison essentials in a sunlit travertine interior'}
            className="w-full h-full object-cover transition-transform duration-1000 scale-100 filter brightness-[0.78] contrast-[1.05]"
            style={{ objectPosition: 'center center' }}
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Scrim Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D]/85 via-[#0A0B0D]/40 to-transparent pointer-events-none hidden md:block" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0A0B0D]/20 to-[#0A0B0D]/75 pointer-events-none" />

        {/* Hero Live Copy */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 w-full">
          <div className="max-w-2xl text-left space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.3em] font-medium backdrop-blur-md border border-[#C8A97E]/40 text-white/95 bg-black/60 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] animate-pulse" />
              <span>International Luxury Flagship</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-cormorant font-light text-white tracking-tight leading-[1.04]">
              I·K·L·A MAISON
            </h1>

            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#DFBF95] font-light font-manrope">
              INTERNATIONALLY KNOWN • LOCALLY ACCEPTED
            </p>

            <p className="text-xs sm:text-base text-neutral-300 font-light leading-relaxed max-w-xl font-manrope">
              A curated federation of contemporary design viewpoints. Disciplined tailoring, heavyweight natural knits, resort silhouettes, and ceremonial hospitality under one singular standard.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('fashion-houses-gateway');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs shadow-xl flex items-center gap-2"
              >
                <span>Explore The Maison</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onNavigateCollection}
                className="px-8 py-4 border border-white/40 text-white hover:bg-white/10 transition-colors text-xs uppercase tracking-[0.2em] font-medium cursor-pointer rounded-xs backdrop-blur-xs"
              >
                Shop All Collections
              </button>
            </div>
          </div>
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
      {/* 3. FASHION HOUSES GATEWAY: house-of-ikla-fashion-gateway.webp */}
      {/* ========================================================================= */}
      <section id="fashion-houses-gateway" className="relative py-28 px-6 sm:px-8 lg:px-12 bg-[#F5EFEB] border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#DDD7CB] text-[#8C6D3F] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs shadow-2xs">
              <span>The Fashion Houses</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215]">
              Curated Fashion Viewpoints
            </h2>
            <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
              United under the House of IKLA umbrella. Distinct Houses. One Standard. From architectural couture tailoring to brutalist street gravity, sunlit resort open-knits, celestial direction, and internal victory discipline.
            </p>
          </div>

          <div className="relative bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-2xl overflow-hidden group">
            <CampaignImage
              src={fashionGatewayAsset?.url || fashionGatewayAsset?.file}
              alt={fashionGatewayAsset?.alt || 'Five curated fashion looks representing IKLA Maison KTSE Motéon Moral Compass and WNNR in a luxury showroom'}
              aspectRatio="16/9"
              position="center center"
              className="rounded-xs w-full"
            />
            <div className="p-4 sm:p-6 bg-[#FAF7F2] border-t border-[#EAE5DC] flex flex-col md:flex-row items-center justify-between gap-4 mt-2 rounded-xs">
              <div className="text-center md:text-left">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block">
                  Showroom Federation
                </span>
                <h3 className="text-base sm:text-lg font-cormorant font-normal text-[#111215] mt-0.5">
                  IKLA Maison · KTSE · Motéon · Moral Compass · WNNR
                </h3>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {FASHION_HOUSES.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => onSelectBrand(h.id)}
                    className="px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] font-medium bg-white border border-[#DDD7CB] hover:border-[#111215] text-[#111215] transition-all rounded-xs cursor-pointer shadow-xs"
                  >
                    {h.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SHOP THE HOUSES: ALL HOUSES & EXTENSIONS (INCLUDING WNNR) */}
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
                    src={brand.assets.collection}
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
                    <img src={brand.logos.crestLight} alt="" className="w-full h-full object-contain" />
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
                <span>Enter House</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}

          {/* IKLA Water Card */}
          <div
            onClick={() => onSelectBrand('ikla-water')}
            className="group bg-white border border-[#CADCE0] hover:border-[#5E8896] transition-all duration-300 p-6 flex flex-col justify-between rounded-xs shadow-xs hover:shadow-xl cursor-pointer relative"
          >
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAFBFB] mb-5 rounded-xs relative">
                <img
                  src={BRANDS['ikla-water'].assets.collection}
                  alt={BRANDS['ikla-water'].alt.collection}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#1A2830]/80 backdrop-blur-md px-2.5 py-1 rounded-2xs border border-[#5E8896]/40">
                  <span className="text-[9px] uppercase tracking-widest text-[#FAFBFB] font-mono">Extension</span>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#1A2830] p-1.5 shadow-xs border border-[#5E8896]/40 flex items-center justify-center text-[#5E8896]">
                  <Droplets className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-cormorant font-normal text-[#111215]">IKLA Water</h3>
                <span className="text-[10px] font-mono text-[#5E8896] uppercase tracking-widest">Glass Extension</span>
              </div>

              <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope mt-2 line-clamp-2">
                Pure alpine mineral hydration in reusable monolithic flint glass vessels for intentional dining tables.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-[#E5EEF0] flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-[#5E8896] group-hover:text-[#1A2830] transition-colors">
              <span>Discover Vessels</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ACCESSORIES ACROSS THE HOUSES: house-of-ikla-accessories-gateway.webp */}
      {/* ========================================================================= */}
      <section id="accessories-across-houses" className="relative py-24 px-6 sm:px-8 lg:px-12 bg-[#F6F4EF] border-y border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D8D3C7]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block mb-2">
                Cross-House Program
              </span>
              <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215]">
                Accessories Across the Houses
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-md font-manrope">
              Footwear, headwear, travel bags, and leather goods curated across the fashion houses. Unifying brutalist carry bags, monolithic slides, and architectural travel accessories.
            </p>
          </div>

          <div className="bg-white border border-[#DDD7CB] p-3 sm:p-5 rounded-xs shadow-xl overflow-hidden group">
            <CampaignImage
              src={accessoriesGatewayAsset?.url || accessoriesGatewayAsset?.file}
              alt={accessoriesGatewayAsset?.alt || 'Accessory displays representing IKLA Maison KTSE Motéon Moral Compass and WNNR in a luxury showroom'}
              aspectRatio="16/9"
              position="center center"
              className="rounded-xs w-full"
            />
            <div className="p-6 bg-[#FAF7F2] border-t border-[#EAE5DC] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3 rounded-xs">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#8C6D3F] font-semibold block">01. Footwear & Slides</span>
                <p className="text-xs text-[#50545E] font-light font-manrope">Ergonomic recovery slides, molded EVA footbeds, and leather court sneakers.</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#8C6D3F] font-semibold block">02. Headwear Architecture</span>
                <p className="text-xs text-[#50545E] font-light font-manrope">Unstructured twill dad caps, ribbed merino beanies, and minimal visors.</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#8C6D3F] font-semibold block">03. Carry & Weekenders</span>
                <p className="text-xs text-[#50545E] font-light font-manrope">Ballistic cotton weekenders, heavyweight canvas totes, and leather travel folios.</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#8C6D3F] font-semibold block">04. Socks & Small Goods</span>
                <p className="text-xs text-[#50545E] font-light font-manrope">Arch-support ribbed pima knit socks, solid brass buckle belts, and silk twill scarves.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CRAFTSMANSHIP: house-of-ikla-atelier-craftsmanship.webp */}
      {/* ========================================================================= */}
      <section id="atelier-craftsmanship" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block">
              Materiality & Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-tight">
              The Standard Is in the Making
            </h2>
            <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
              Every garment across the Maison begins with tactile discipline. Custom-milled Egyptian cotton, heavy loopback French terry reaching 520 GSM, breathable Mediterranean flax, and hand-finished selvedge construction.
            </p>
            <div className="space-y-3 pt-2 text-xs text-[#40444E] font-manrope border-t border-[#E5DFD5]">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#8C6D3F]" />
                <span>Precision pattern drafting adhering to anatomical comfort</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#8C6D3F]" />
                <span>Limited, non-industrial production runs in partner European ateliers</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#8C6D3F]" />
                <span>Hand-finished seams, bespoke linings, and natural horn buttons</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-xl overflow-hidden group">
              <CampaignImage
                src={craftsmanshipAsset?.url || craftsmanshipAsset?.file}
                alt={craftsmanshipAsset?.alt || 'Artisan hands measuring and finishing premium IKLA garments among fabric tools and pattern paper'}
                aspectRatio="16/9"
                position="center center"
                className="rounded-xs w-full"
              />
              <div className="p-3 text-center bg-[#FAF7F2] border-t border-[#EAE5DC] mt-2 rounded-xs">
                <span className="text-[11px] text-[#555A64] font-light font-manrope">
                  European Atelier Partnership · Traditional Tailoring & Pattern Cutting
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. ROTATING / ALTERNATING EDITORIAL FEATURE BY HOUSE */}
      {/* ========================================================================= */}
      <section id="rotating-editorial-showcase" className="relative py-28 px-6 sm:px-8 lg:px-12 bg-[#0E1013] text-white border-y border-neutral-800 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-800">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8A97E] font-semibold block mb-2">
                Editorial Showcase
              </span>
              <h2 className="text-3xl sm:text-5xl font-cormorant font-light text-white">
                Voices of the Maison
              </h2>
            </div>
            {/* House Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(editorialLifestyleAssets).map((key) => {
                const item = editorialLifestyleAssets[key];
                const isActive = activeEditorialHouse === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveEditorialHouse(key)}
                    className={`px-3.5 py-1.5 text-xs uppercase tracking-[0.16em] transition-all rounded-xs cursor-pointer ${
                      isActive
                        ? 'bg-white text-black font-semibold shadow-lg'
                        : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.houseName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Editorial Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 p-3 rounded-xs shadow-2xl overflow-hidden">
              <CampaignImage
                src={currentEditorial.asset?.url || currentEditorial.asset?.file}
                alt={currentEditorial.asset?.alt || currentEditorial.tagline}
                aspectRatio="16/9"
                position="center center"
                className="rounded-xs w-full"
              />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-white/10 text-white border border-white/20 font-mono">
                <span>{currentEditorial.houseName} Lifestyle</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-cormorant font-light text-white leading-tight">
                {currentEditorial.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope">
                {currentEditorial.narrative}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onSelectBrand(activeEditorialHouse)}
                  className="px-6 py-3.5 bg-white text-black hover:bg-[#C8A97E] hover:text-black transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs flex items-center gap-2"
                >
                  <span>{currentEditorial.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. TRAVEL GOODS: house-of-ikla-travel-goods.webp */}
      {/* ========================================================================= */}
      <section id="travel-goods-showcase" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-xl overflow-hidden group">
              <CampaignImage
                src={travelGoodsAsset?.url || travelGoodsAsset?.file}
                alt={travelGoodsAsset?.alt || 'Luxury travel goods representing IKLA Maison KTSE Motéon Moral Compass and WNNR in an airport lounge'}
                aspectRatio="16/9"
                position="center center"
                className="rounded-xs w-full"
              />
              <div className="p-3 text-center bg-[#FAF7F2] border-t border-[#EAE5DC] mt-2 rounded-xs">
                <span className="text-[11px] text-[#555A64] font-light font-manrope">
                  Transcontinental Airport Lounge Transit · Weekenders, Duffels & Leather Folios
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block">
              Transcontinental Transit
            </span>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-tight">
              Made to Move With You
            </h2>
            <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
              Engineered for seamless international passage between private lounges and transatlantic cabins. Heavy-gauge cotton canvas, reinforced saddlery leather straps, and solid gold-tone hardware designed to patina gracefully across journeys.
            </p>
            <p className="text-xs text-[#7A828A] font-light italic font-manrope">
              Curated cross-house archival travel display. Select bespoke travel pieces available by private client inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. PACKAGING & GIFTING SERVICE (USED ONCE): house-of-ikla-private-client-packaging.webp */}
      {/* ========================================================================= */}
      <section id="private-client-packaging-feature" className="relative py-24 px-6 sm:px-8 lg:px-12 bg-[#F6F4EE] border-y border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#DDD7CB] text-[#8C6D3F] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs shadow-2xs">
                <PackageCheck className="w-3.5 h-3.5 text-[#8C6D3F]" />
                <span>Archival Packaging & Service</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                White-Glove Archival Presentation
              </h2>
              <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                Every acquisition arrives encased in rigid textured keepsake gift boxes, tied with tonal grosgrain ribbon, and accompanied by numbered certificates of authenticity signed by the overseeing atelier.
              </p>
              <div className="space-y-2 pt-2 text-xs text-[#555A64] font-manrope border-t border-[#DCD6C8]">
                <div>• Acid-free tissue paper and embossed house seals</div>
                <div>• Signature garment travel folios with breathable cotton backing</div>
                <div>• Private concierge client support across all orders</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-xl overflow-hidden group">
                <CampaignImage
                  src={packagingAsset?.url || packagingAsset?.file}
                  alt={packagingAsset?.alt || 'Luxury packaging and apparel representing IKLA Maison KTSE Motéon Moral Compass and WNNR'}
                  aspectRatio="16/9"
                  position="center center"
                  className="rounded-xs w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. PRESERVED COLLECTIVE: WORLD OF IKLA 6 PILLARS */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2">
            The Dynasty Doctrine
          </span>
          <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215]">
            Six Pillars of the Maison
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Gem,
              title: 'Architectural Form',
              desc: 'Tailoring that preserves its structural silhouette through movement, balancing proportion and kinetic grace.'
            },
            {
              icon: Layers,
              title: 'Material Integrity',
              desc: 'Custom-milled Egyptian cottons, heavy loopback terry, and breathable European flax crafted for longevity.'
            },
            {
              icon: Compass,
              title: 'Cardinal Purpose',
              desc: 'Internal direction over transient seasonal momentum. Clothes designed to anchor and center the wearer.'
            },
            {
              icon: Shield,
              title: 'Disciplined Execution',
              desc: 'Rigorous attention to stitch count, tonal silicon branding, bespoke jacquard linings, and precision hardware.'
            },
            {
              icon: Droplets,
              title: 'Sensory Living',
              desc: 'Extending luxury beyond apparel into sculptural flint glass hydration, hospitality, and residential dining.'
            },
            {
              icon: Wine,
              title: 'Shared Celebration',
              desc: 'Rooted in authentic connection, community clubhouse apparel, and joyful toasts under golden hour skies.'
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-white border border-[#DDD7CB] p-6 rounded-xs shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#DDD7CB] flex items-center justify-center text-[#8C6D3F]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-cormorant font-normal text-[#111215]">{pillar.title}</h3>
                <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. PRESERVED COLLECTIVE: IKLA × MYMOSA COLLABORATION */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#F9F6F0] border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DDD7CB] text-[#8C6D3F] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs">
              <Wine className="w-3.5 h-3.5 text-[#8C6D3F]" />
              Maison Collaboration
            </div>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-tight">
              IKLA × MyMosa — The Art of Celebration
            </h2>
            <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
              Conceived alongside MyMosa, the celebrated Premium Wine Cocktail. Bridging daytime poolside leisure with twilight toasts, featuring limited clubhouse capsules and commemorative glassware.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onSelectBrand('my-drink-family')}
                className="px-6 py-3 bg-[#111215] text-white hover:bg-neutral-800 transition-colors text-xs uppercase tracking-widest font-medium rounded-xs cursor-pointer flex items-center gap-2"
              >
                <span>Explore Family Clubhouse</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-xl group">
              <CampaignImage
                src={mymosaCollabAsset?.url || mymosaCollabAsset?.file}
                alt="IKLA x MyMosa collaborative lifestyle portrait"
                aspectRatio="16/9"
                position="center 25%"
                className="rounded-xs w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. PRESERVED COLLECTIVE: IKLA WATER EXTENSION (OBJECT-FIT: CONTAIN) */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#CADCE0]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#5E8896] font-semibold block mb-2">
              Maison Extension
            </span>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215]">
              IKLA Water — Heavyweight Flint Glass Decanters
            </h2>
          </div>
          <button
            onClick={() => onSelectBrand('ikla-water')}
            className="text-xs uppercase tracking-widest text-[#5E8896] hover:text-[#1A2830] font-semibold cursor-pointer flex items-center gap-1 mt-4 md:mt-0"
          >
            <span>View Water Archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-[#CADCE0] p-4 rounded-xs shadow-sm">
            <CampaignImage
              src={waterDiningAsset?.url || waterDiningAsset?.file}
              alt="IKLA Water on dining table"
              aspectRatio="4/3"
              position="center 40%"
              className="rounded-xs w-full mb-3"
            />
            <h3 className="text-base font-cormorant font-normal text-[#111215]">The Dining Table Setting</h3>
            <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">Refined mineral hydration designed for fine dining salon settings.</p>
          </div>

          <div className="bg-white border border-[#CADCE0] p-4 rounded-xs shadow-sm">
            <CampaignImage
              src={waterPedestalAsset?.url || waterPedestalAsset?.file}
              alt="IKLA Water on architectural pedestal"
              aspectRatio="4/3"
              position="center"
              className="rounded-xs w-full mb-3"
            />
            <h3 className="text-base font-cormorant font-normal text-[#111215]">Gallery Pedestal Installation</h3>
            <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">Sculptural vessels displayed as architectural objects.</p>
          </div>

          <div className="bg-white border border-[#CADCE0] p-4 rounded-xs shadow-sm">
            <div className="aspect-[4/3] w-full bg-[#FAFBFB] border border-[#E5EEF0] rounded-xs p-3 mb-3 flex items-center justify-center">
              <CampaignImage
                src={waterRoundedAsset?.url || waterRoundedAsset?.file}
                alt="Rounded flint glass decanter"
                aspectRatio="4/3"
                fit="contain"
                className="w-full h-full"
              />
            </div>
            <h3 className="text-base font-cormorant font-normal text-[#111215]">Rounded Decanter Profile</h3>
            <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">Soft curved shoulder silhouette in heavyweight reusable flint glass.</p>
          </div>

          <div className="bg-white border border-[#CADCE0] p-4 rounded-xs shadow-sm">
            <div className="aspect-[4/3] w-full bg-[#FAFBFB] border border-[#E5EEF0] rounded-xs p-3 mb-3 flex items-center justify-center">
              <CampaignImage
                src={waterCylinderAsset?.url || waterCylinderAsset?.file}
                alt="Monolithic cylinder vessel"
                aspectRatio="4/3"
                fit="contain"
                className="w-full h-full"
              />
            </div>
            <h3 className="text-base font-cormorant font-normal text-[#111215]">Monolithic Cylinder Profile</h3>
            <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">Slender architectural cylinder with weighted crystal glass base.</p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. PRESERVED COLLECTIVE: CURATED COLLECTION HIGHLIGHTS */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-t border-[#E5DFD5]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5DFD5]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2">
              Featured Curations
            </span>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215]">
              Foundational Silhouettes
            </h2>
          </div>
          <button
            onClick={onNavigateCollection}
            className="text-xs uppercase tracking-widest text-[#8C6D3F] hover:text-[#111215] font-semibold cursor-pointer flex items-center gap-1 mt-4 md:mt-0"
          >
            <span>View All Curations</span>
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
      </section>
    </div>
  );
}
