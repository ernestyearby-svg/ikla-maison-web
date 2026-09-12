import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Compass, Layers, Shield, Sparkles, Droplets, Wine, Clock, Zap, Target } from 'lucide-react';
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
  const [activeMymosaColor, setActiveMymosaColor] = useState('classic-orange');

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
        {/* A. IKLA MAISON DEDICATED EDITORIAL PATHWAYS */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'ikla-maison' && (
          <div className="space-y-28 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            {/* Pathway 1: Men's Considered Essentials */}
            <section className="space-y-10">
              <div className="max-w-3xl space-y-3">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block">
                  Men's Atelier Pathway
                </span>
                <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-tight">
                  Considered Essentials. Built for Presence.
                </h2>
                <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                  Structured double-faced overcoats, high-twist Egyptian cotton knit polos, pleated wool trousers, and hand-finished calfskin court sneakers tailored for transcontinental executive life.
                </p>
              </div>

              {/* Lifestyle Opener */}
              <div className="bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-xl overflow-hidden group">
                <CampaignImage
                  src="assets/campaigns/round-four/ikla-mens-editorial-lifestyle.webp"
                  alt="Three adult men wearing refined IKLA Maison essentials in a modern luxury hotel lobby"
                  aspectRatio="16/9"
                  position="center center"
                  className="rounded-xs w-full"
                />
                <div className="p-4 bg-[#FAF7F2] border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 rounded-xs">
                  <span className="text-xs text-[#111215] font-cormorant font-normal text-base">
                    Editorial Feature · Executive Lounge Transit
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                    Milano — Zurich — London
                  </span>
                </div>
              </div>

              {/* Product Follow-Through */}
              <div className="bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <CampaignImage
                      src="assets/campaigns/round-three/ikla-mens-essentials-collection.webp"
                      alt="IKLA Maison men's knit polos trousers quarter-zips jacket belt and sneakers displayed in a travertine salon"
                      aspectRatio="16/9"
                      position="center center"
                      className="rounded-xs w-full"
                    />
                  </div>
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold block">
                      The Salon Roster
                    </span>
                    <h3 className="text-2xl font-cormorant font-normal text-[#111215]">
                      The Menswear Foundational Archive
                    </h3>
                    <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                      Knit pique quarter-zips, unlined zip blousons, supple leather belts with satin brass buckles, and minimal court sneakers resting on natural travertine.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          const el = document.getElementById('brand-collection-grid');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-xs uppercase tracking-widest text-[#8C6D3F] hover:text-[#111215] font-semibold cursor-pointer flex items-center gap-1.5"
                      >
                        <span>View Available Pieces</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pathway 2: Women's Form & Movement */}
            <section className="space-y-10 border-t border-[#E5DFD5] pt-20">
              <div className="max-w-3xl space-y-3">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block">
                  Women's Atelier Pathway
                </span>
                <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-tight">
                  Form. Movement. Presence.
                </h2>
                <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                  Engineered with fluid anatomical panelling, compressive ribbed knitwear, and architectural drape that flows gracefully with rotational human movement.
                </p>
              </div>

              {/* Lifestyle Opener */}
              <div className="bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-xl overflow-hidden group">
                <CampaignImage
                  src="assets/campaigns/round-four/ikla-womens-editorial-lifestyle.webp"
                  alt="Three adult women wearing slate blue ivory and sage IKLA Maison looks in a luxury fashion salon"
                  aspectRatio="16/9"
                  position="center center"
                  className="rounded-xs w-full"
                />
                <div className="p-4 bg-[#FAF7F2] border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 rounded-xs">
                  <span className="text-xs text-[#111215] font-cormorant font-normal text-base">
                    Editorial Feature · Salon Silhouette Study
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                    Slate Blue · Raw Ivory · Sage
                  </span>
                </div>
              </div>

              {/* Product Follow-Through */}
              <div className="bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <CampaignImage
                      src="assets/campaigns/round-two/ikla-womens-performance-capsule.webp"
                      alt="Four coordinated IKLA Maison women's performance sets in slate blue ivory sage and black"
                      aspectRatio="16/9"
                      position="center center"
                      className="rounded-xs w-full"
                    />
                  </div>
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold block">
                      Active Capsule
                    </span>
                    <h3 className="text-2xl font-cormorant font-normal text-[#111215]">
                      Coordinated Kinetic Silhouettes
                    </h3>
                    <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                      Four refined palettes across seamless athletic bras, high-waisted ribbed leggings, and unstructured modal wraps tailored for studio and recovery.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pathway 3: Court & Resort */}
            <section className="space-y-10 border-t border-[#E5DFD5] pt-20">
              <div className="max-w-3xl space-y-3">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block">
                  Court & Country Club
                </span>
                <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-tight">
                  Performance Meets Presence.
                </h2>
                <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                  Clay court whites, powder blue knits, pleated fluid skirts, and moisture-dissipating micro-mesh panels built for rotational mobility on court and leisurely terrace luncheons.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-lg">
                  <CampaignImage
                    src="assets/campaigns/round-three/ikla-womens-court-resort-capsule.webp"
                    alt="IKLA Maison women's court apparel in powder blue ivory sage and black beside a private tennis court"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold block">
                    Clay Court Standard
                  </span>
                  <h3 className="text-2xl font-cormorant font-normal text-[#111215]">
                    Court & Resort Archive
                  </h3>
                  <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                    Knife-pleat skirts with built-in compression liners, structured visors with embroidered tonal crests, and breathable tennis polo tops.
                  </p>
                </div>
              </div>
            </section>

            {/* Pathway 4: Accessories Complete the Standard */}
            <section className="space-y-10 border-t border-[#E5DFD5] pt-20">
              <div className="max-w-3xl space-y-3">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block">
                  Finishing Touch
                </span>
                <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-tight">
                  The Details Complete the Standard.
                </h2>
                <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                  Ergonomic molded recovery slides, arch-cushioned pima ribbed socks, structured weekender carry goods, and Italian horn hardware.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-lg">
                  <CampaignImage
                    src="assets/campaigns/round-two/ikla-slides-socks-collection.webp"
                    alt="IKLA Maison slides and ribbed socks in black ivory forest and slate blue displayed on marble and travertine"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold block">
                    Slide & Sock Program
                  </span>
                  <h3 className="text-2xl font-cormorant font-normal text-[#111215]">
                    Travertine Footwear Curation
                  </h3>
                  <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                    Black, ivory, deep forest, and slate blue palettes crafted from lightweight dual-density EVA paired with heavyweight pima cotton knitwear.
                  </p>
                </div>
              </div>
            </section>

            {/* Pathway 5: The Maison, At Home. (Home & Living Collections) */}
            <section id="home-living" className="space-y-12 border-t border-[#E5DFD5] pt-20">
              <div className="max-w-3xl space-y-3">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block">
                  Home & Living Curation
                </span>
                <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-tight">
                  The Maison, At Home.
                </h2>
                <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                  Private rituals, considered materials, and quiet comfort—an extension of IKLA Maison beyond the wardrobe.
                </p>
              </div>

              {/* Side by side on desktop, stacked on mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 1. Bedroom Collection */}
                <div id="bedroom-collection" className="bg-white border border-[#DDD7CB] p-4 sm:p-6 rounded-xs shadow-xl flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-xs">
                      <CampaignImage
                        src="assets/accessories/ikla-maison/ikla-maison-bedroom-collection.webp"
                        alt="IKLA Maison bedroom collection featuring bedding, pillows, throws, slippers, a sleep mask, candle, and leather valet tray."
                        aspectRatio="16/9"
                        position="center center"
                        className="rounded-xs w-full group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold">
                          Bedroom Collection
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                          Collection Preview
                        </span>
                      </div>
                      <h3 className="text-2xl font-cormorant font-normal text-[#111215] mt-1">
                        Sanctuary of Rest & Ritual
                      </h3>
                      <p className="text-xs text-[#50545E] font-light mt-2 leading-relaxed font-manrope">
                        300-thread-count washed Egyptian cotton sateen bedding, double-faced cashmere jacquard accent throws, molded calfskin slippers, scented poured vegetable wax candles, and hand-burnished valet trays.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EAE5DC] flex flex-wrap gap-1.5">
                      {['Bedding', 'Pillows', 'Throws', 'Slippers', 'Sleep masks', 'Candles', 'Valet trays'].map((item) => (
                        <span key={item} className="text-[10px] font-mono px-2.5 py-1 bg-[#FAF7F2] border border-[#E2DDD3] text-[#555] rounded-2xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#EAE5DC] flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                      Allocation Window
                    </span>
                    <button
                      onClick={() => {
                        const prod = PRODUCTS.find((p) => p.id === 'ikla-bedroom-suite');
                        if (prod) onSelectProduct(prod);
                      }}
                      className="text-xs uppercase tracking-widest text-[#8C6D3F] hover:text-[#111215] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Request Allocation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 2. Bath & Spa Collection */}
                <div id="bath-spa" className="bg-white border border-[#DDD7CB] p-4 sm:p-6 rounded-xs shadow-xl flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-xs">
                      <CampaignImage
                        src="assets/accessories/ikla-maison/ikla-maison-bath-spa-collection.webp"
                        alt="IKLA Maison bath and spa collection featuring plush towels, waffle robes, bath mats, slippers, ceramic vanity vessels, and leather toiletry cases."
                        aspectRatio="16/9"
                        position="center center"
                        className="rounded-xs w-full group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold">
                          Bath & Spa Collection
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                          Collection Preview
                        </span>
                      </div>
                      <h3 className="text-2xl font-cormorant font-normal text-[#111215] mt-1">
                        Restorative Personal Ceremony
                      </h3>
                      <p className="text-xs text-[#50545E] font-light mt-2 leading-relaxed font-manrope">
                        750 GSM zero-twist Aegean cotton towels, textured honeycomb waffle spa robes with gilded bullion monograms, hand-turned ceramic canisters with brass lids, and full-grain calfskin dopp kits.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EAE5DC] flex flex-wrap gap-1.5">
                      {['Towels', 'Robes', 'Bath mats', 'Bath slippers', 'Vanity vessels', 'Toiletry cases', 'Grooming accessories'].map((item) => (
                        <span key={item} className="text-[10px] font-mono px-2.5 py-1 bg-[#FAF7F2] border border-[#E2DDD3] text-[#555] rounded-2xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#EAE5DC] flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                      Allocation Window
                    </span>
                    <button
                      onClick={() => {
                        const prod = PRODUCTS.find((p) => p.id === 'ikla-bath-spa-suite');
                        if (prod) onSelectProduct(prod);
                      }}
                      className="text-xs uppercase tracking-widest text-[#8C6D3F] hover:text-[#111215] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Request Allocation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* B. KTSE DEDICATED EDITORIAL SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'ktse' && (
          <div className="space-y-28 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            {/* Headline Statement */}
            <section className="bg-black text-white p-8 sm:p-14 rounded-xs border border-neutral-800 relative overflow-hidden">
              <div className="max-w-3xl relative z-10 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8A97E] font-semibold block">
                  Brutalist Streetwear Ethos
                </span>
                <h2 className="text-4xl sm:text-6xl font-cinzel font-light tracking-tight leading-tight">
                  KEEP THAT SAME ENERGY.
                </h2>
                <div className="text-sm font-mono text-neutral-400 tracking-[0.25em] uppercase">
                  NO SWITCHES. NO EXCUSES.
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope pt-2">
                  KTSE strips away extraneous decoration to celebrate raw loopback terry, drop-shoulder volume, and tactile weight. Designed to maintain its structural form across daily wear.
                </p>
              </div>
            </section>

            {/* Lifestyle Emotional Anchor */}
            <section className="space-y-6">
              <div className="bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-xl overflow-hidden group">
                <CampaignImage
                  src="assets/campaigns/round-four/ktse-urban-lifestyle.webp"
                  alt="Four adult models wearing KTSE heavyweight streetwear on a monumental concrete city plaza"
                  aspectRatio="16/9"
                  position="center center"
                  className="rounded-xs w-full"
                />
                <div className="p-4 bg-[#FAF7F2] border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 rounded-xs">
                  <span className="text-sm font-cormorant text-[#111215] font-normal">
                    Monumental Urban Plaza Campaign
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                    Brutalist Monoliths · 450–520 GSM Terry
                  </span>
                </div>
              </div>
            </section>

            {/* Core Heavyweight Sets */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-semibold block">
                    Core Uniform
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Heavyweight Core Colorway Spectrum
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Heavyweight T-shirts and raw-hem sweat shorts pigment-washed in Vintage Black, Ash Grey, Taupe, and Raw Bone. Enzyme treated for tactile broken-in comfort while retaining architectural drape.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/campaigns/round-three/ktse-heavyweight-core-colorways.webp"
                    alt="KTSE heavyweight T-shirt and raw-hem short sets in vintage black ash grey taupe and bone"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>
              </div>
            </section>

            {/* Accessories Colorways Depth */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/campaigns/round-two/ktse-accessories-colorways.webp"
                    alt="KTSE bags caps socks and slides in vintage black ash grey taupe and bone on concrete steps"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-semibold block">
                    Utility & Carry
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Accessories on Concrete Steps
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Ballistic canvas carry weekenders, unstructured cotton twill dad caps, arch-support ribbed socks, and molded recovery slides engineered for fast-paced metropolitan movement.
                  </p>
                </div>
              </div>
            </section>

            {/* Training & Everyday Carry Collection Feature */}
            <section id="training-carry" className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="max-w-3xl space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-semibold block">
                  Discipline Accessories & Carry
                </span>
                <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                  Carry the Energy.
                </h3>
                <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                  Purpose-built objects for training, movement, recovery, and the discipline between sessions.
                </p>
                <div className="flex flex-wrap gap-4 text-[11px] font-mono text-neutral-600 uppercase tracking-widest pt-1">
                  <span>Keep That Same Energy</span>
                  <span>•</span>
                  <span>No Switches. No Excuses.</span>
                  <span>•</span>
                  <span>Built Different. Made Consistent.</span>
                </div>
              </div>

              <div className="bg-white border border-[#DDD7CB] p-4 sm:p-6 rounded-xs shadow-xl space-y-6">
                <div className="overflow-hidden rounded-xs">
                  <CampaignImage
                    src="assets/accessories/ktse/ktse-training-everyday-carry.webp"
                    alt="KTSE training and everyday carry collection featuring heavyweight training duffels, technical backpacks, exercise mats, insulated bottles, lifting straps, and performance accessories."
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full hover:scale-101 transition-transform duration-500"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                  <div className="lg:col-span-8 space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#8C7A6B] font-semibold block">
                      Objects of Movement & Recovery
                    </span>
                    <h4 className="text-xl font-cormorant font-normal text-[#111215]">
                      Heavyweight Training Duffels, Recovery Mats & Field Essentials
                    </h4>
                    <p className="text-xs text-[#50545E] font-light font-manrope leading-relaxed">
                      1680D ballistic nylon training duffels with ventilated shoe vaults, non-slip 5mm natural rubber mats, heavy cotton lifting straps, and recovery slides calibrated for ruthless consistency.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {['Training duffels', 'Technical backpacks', 'Exercise mats', 'Insulated bottles', 'Wrist wraps', 'Lifting straps', 'Resistance bands', 'Performance towels', 'Crew socks', 'Slides', 'Caps', 'Beanies', 'Crossbody pouches'].map((item) => (
                        <span key={item} className="text-[10px] font-mono px-2 py-0.5 bg-[#FAF7F2] border border-[#E2DDD3] text-[#555] rounded-2xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#EAE5DC] lg:pl-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">Status</span>
                      <span className="text-sm font-cormorant text-[#111215] font-semibold">Collection Preview</span>
                    </div>
                    <button
                      onClick={() => {
                        const prod = PRODUCTS.find((p) => p.id === 'ktse-training-carry-suite');
                        if (prod) onSelectProduct(prod);
                      }}
                      className="px-6 py-3 bg-[#111215] text-white hover:bg-neutral-800 text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors cursor-pointer flex items-center gap-2 shadow-md"
                    >
                      <span>Request Allocation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* C. MOTÉON DEDICATED EDITORIAL SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'moteon' && (
          <div className="space-y-28 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            {/* Lead Narrative */}
            <section className="bg-[#FAF4EE] border border-[#E8DCCF] p-8 sm:p-14 rounded-xs shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E0D0C0] text-[#B85D3B] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs">
                Riviera Standard
              </div>
              <h2 className="text-4xl sm:text-6xl font-cormorant font-normal text-[#111215] leading-tight">
                Movement, Refined.
              </h2>
              <div className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#B85D3B] font-manrope font-medium">
                Performance. Style. Discipline. Freedom.
              </div>
              <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope max-w-2xl pt-2">
                Conceived on the sunlit bluffs of the Mediterranean. Fluid European linens, airy crochet open-knits, and unconstrained loungewear tailored for sun-drenched arrivals and evening aperitifs.
              </p>
            </section>

            {/* Women's Performance Hero */}
            <section className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#B85D3B] font-semibold block">
                    Women's Movement
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Courtyard Performance Silhouettes
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Deep teal and raw ivory athletic knit sets tailored for mobility under open skies, paired with fluid linen overshirts.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/campaigns/round-two/moteon-womens-performance-hero.webp"
                    alt="Two adult women wearing deep teal and ivory Motéon performance apparel in a Mediterranean courtyard"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>
              </div>
            </section>

            {/* Men's Performance Capsule */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/campaigns/round-three/moteon-mens-performance-capsule.webp"
                    alt="Motéon men's performance polos shirts shorts trousers and overshirts in teal black ivory and grey"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#B85D3B] font-semibold block">
                    Men's Performance
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Breathable European Flax & Open Knits
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Technical polos, pleated linen trousers, light zip overshirts, and relaxed court shorts in teal, black, ivory, and mineral grey.
                  </p>
                </div>
              </div>
            </section>

            {/* Footwear & Movement Accessories by Pool */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#B85D3B] font-semibold block">
                    Movement Accessories
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Footwear, Carry & Wellness
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Court sneakers, recovery slides, canvas weekenders, insulated flasks, and bespoke exercise mats displayed beside calm reflecting waters.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/campaigns/round-three/moteon-footwear-movement-accessories.webp"
                    alt="Motéon sneakers slides socks headwear duffel bottle and exercise mat beside a reflecting pool"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>
              </div>
            </section>

            {/* Coastal Movement Lifestyle */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-xl overflow-hidden group">
                <CampaignImage
                  src="assets/campaigns/round-four/moteon-coastal-movement-lifestyle.webp"
                  alt="Adult man and woman wearing Motéon performance apparel on a Mediterranean coastal promenade"
                  aspectRatio="16/9"
                  position="center center"
                  className="rounded-xs w-full"
                />
                <div className="p-4 bg-[#FAF7F2] border-t border-[#EAE5DC] text-center rounded-xs">
                  <span className="text-sm font-cormorant text-[#111215]">
                    Coastal Promenade Movement Campaign · Mediterranean Light & Stone
                  </span>
                </div>
              </div>
            </section>

            {/* Resort & Travel Lifestyle Collection Feature */}
            <section id="resort-travel" className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="max-w-3xl space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B85D3B] font-semibold block">
                  Resort & Travel Accessories
                </span>
                <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                  Movement, Refined.
                </h3>
                <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                  A considered travel system shaped for resort mornings, coastal afternoons, and movement without interruption.
                </p>
              </div>

              <div className="bg-white border border-[#DDD7CB] p-4 sm:p-6 rounded-xs shadow-xl space-y-6">
                <div className="overflow-hidden rounded-xs">
                  <CampaignImage
                    src="assets/accessories/moteon/moteon-resort-travel-collection.webp"
                    alt="Motéon resort and travel collection featuring weekender luggage, carryall totes, leather toiletry cases, passport wallets, designer sunglasses, and leisure accessories."
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full hover:scale-101 transition-transform duration-500"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                  <div className="lg:col-span-8 space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#B85D3B] font-semibold block">
                      Coastal Transit & Leisure System
                    </span>
                    <h4 className="text-xl font-cormorant font-normal text-[#111215]">
                      Weekender Luggage, Italian Acetate Optics & Travel Foulards
                    </h4>
                    <p className="text-xs text-[#50545E] font-light font-manrope leading-relaxed">
                      Structured water-repellent canvas weekenders with saddle leather trims, handcrafted Italian acetate sunglasses with Category 3 UV optics, and pure silk twill foulards tailored for effortless passage between coastal terraces.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {['Weekender bags', 'Carryall totes', 'Toiletry cases', 'Passport wallets', 'Sunglasses', 'Silk scarves', 'Visors', 'Slides', 'Travel socks', 'Pool towels', 'Insulated bottles', 'Leisure equipment'].map((item) => (
                        <span key={item} className="text-[10px] font-mono px-2 py-0.5 bg-[#FAF4EE] border border-[#E8DCCF] text-[#B85D3B] rounded-2xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#EAE5DC] lg:pl-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">Status</span>
                      <span className="text-sm font-cormorant text-[#111215] font-semibold">Collection Preview</span>
                    </div>
                    <button
                      onClick={() => {
                        const prod = PRODUCTS.find((p) => p.id === 'moteon-resort-travel-suite');
                        if (prod) onSelectProduct(prod);
                      }}
                      className="px-6 py-3 bg-[#B85D3B] text-white hover:bg-[#A04D2D] text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors cursor-pointer flex items-center gap-2 shadow-md"
                    >
                      <span>Request Allocation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* D. MORAL COMPASS DEDICATED EDITORIAL SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'moral-compass' && (
          <div className="space-y-28 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            <section className="bg-white border border-[#DDD7CB] p-8 sm:p-14 rounded-xs shadow-md space-y-4 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FAF7F2] border border-[#DDD7CB] text-[#7A828A] text-[10px] uppercase tracking-[0.3em] font-semibold rounded-xs">
                <Compass className="w-3.5 h-3.5 text-[#7A828A]" />
                Cardinal Curation
              </div>
              <h2 className="text-3xl sm:text-5xl font-cinzel font-light text-[#111215]">
                Direction in Every Detail.
              </h2>
              <div className="text-xs uppercase tracking-[0.3em] text-[#7A828A] font-mono">
                Designed With Intention.
              </div>
              <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-xl mx-auto leading-relaxed font-manrope pt-2">
                Guided by internal orientation rather than external momentum. Structured double-breasted tailoring, celestial jacquards, and volcanic obsidian palettes.
              </p>
            </section>

            {/* Executive Lifestyle Opener */}
            <section className="space-y-6">
              <div className="bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-xl overflow-hidden group">
                <CampaignImage
                  src="assets/campaigns/round-four/moral-compass-executive-lifestyle.webp"
                  alt="Adult Black man and woman wearing restrained Moral Compass apparel in a monumental stone corridor"
                  aspectRatio="16/9"
                  position="center center"
                  className="rounded-xs w-full"
                />
                <div className="p-4 bg-[#FAF7F2] border-t border-[#EAE5DC] text-center rounded-xs">
                  <span className="text-sm font-cinzel text-[#111215] font-light">
                    Monumental Stone Corridor Campaign · Architectural Poise
                  </span>
                </div>
              </div>
            </section>

            {/* Apparel Capsule */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#7A828A] font-semibold block">
                    Apparel Capsule
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Structured Wool & Knit Layers
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Tailored overshirts, fine gauge knit hoodies, heavyweight tees, pleated wool trousers, and wool gabardine coats in deep forest, bone, and obsidian.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/campaigns/round-three/moral-compass-apparel-capsule.webp"
                    alt="Moral Compass overshirt knit hoodie T-shirt trousers and coat in forest bone charcoal and black"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>
              </div>
            </section>

            {/* Accessories Feature */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/campaigns/round-two/moral-compass-accessories.webp"
                    alt="Moral Compass tote scarf belt beanie socks folio and slides in forest bone and black"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#7A828A] font-semibold block">
                    Directional Accoutrements
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Accessories With Purpose
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Leather carry folios, woven celestial scarves, solid buckle belts, ribbed merino beanies, and recovery slides arranged with measured precision.
                  </p>
                </div>
              </div>
            </section>

            {/* Executive Leather Goods Lifestyle Collection Feature */}
            <section id="executive-leather" className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="max-w-3xl space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#7A828A] font-semibold block">
                  Private Office & Personal Instruments
                </span>
                <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                  Objects of Certainty.
                </h3>
                <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                  Quietly constructed instruments for those who move with intention and answer to an internal standard.
                </p>
              </div>

              <div className="bg-[#111315] text-[#FAF8F5] border border-neutral-800 p-4 sm:p-6 rounded-xs shadow-2xl space-y-6">
                <div className="overflow-hidden rounded-xs border border-neutral-800">
                  <CampaignImage
                    src="assets/accessories/moral-compass/moral-compass-executive-leather.webp"
                    alt="Moral Compass executive leather goods collection featuring architectural briefcases, document portfolios, leather journals, card holders, watch rolls, and refined brass keepsakes."
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full hover:scale-101 transition-transform duration-500"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                  <div className="lg:col-span-8 space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#B89758] font-semibold block">
                      Architectural Saddlery & Private Instruments
                    </span>
                    <h4 className="text-xl font-cormorant font-normal text-white">
                      Boxcalf Briefcases, Bridle Parchment Folios & Machined Solid Brass Keepsakes
                    </h4>
                    <p className="text-xs text-neutral-400 font-light font-manrope leading-relaxed">
                      Hand-stitched full-grain French boxcalf briefcases with brass tuck locks, refillable archival journals bound in bridle leather, and solid brass compass weights engraved with cardinal coordinates.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {['Briefcases', 'Document portfolios', 'Leather journals', 'Fountain pens', 'Card holders', 'Wallets', 'Passport covers', 'Key cases', 'Watch rolls', 'Belts', 'Gloves', 'Eyewear cases', 'Compass keepsakes'].map((item) => (
                        <span key={item} className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-300 rounded-2xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-neutral-800 lg:pl-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">Access</span>
                      <span className="text-sm font-cormorant text-white font-semibold">Private Preview</span>
                    </div>
                    <button
                      onClick={() => {
                        const prod = PRODUCTS.find((p) => p.id === 'moral-compass-leather-suite');
                        if (prod) onSelectProduct(prod);
                      }}
                      className="px-6 py-3 bg-[#B89758] text-[#111315] hover:bg-[#C9A96E] text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors cursor-pointer flex items-center gap-2 shadow-md"
                    >
                      <span>Private Allocation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* E. WNNR DEDICATED EDITORIAL SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'wnnr' && (
          <div className="space-y-28 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            {/* 1. Manifesto Statement */}
            <section className="bg-[#0D0F0E] text-[#F4F1EA] p-8 sm:p-14 rounded-xs border border-[#C5A869]/30 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#C5A869]/10 via-transparent to-transparent pointer-events-none" />
              <div className="max-w-3xl relative z-10 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A869] font-semibold block">
                    Discipline Atelier Ethos
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] px-2.5 py-0.5 border border-[#C5A869]/40 text-[#C5A869] rounded-xs font-mono">
                    Pronounced "winner"
                  </span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-cormorant font-light tracking-tight leading-tight text-white">
                  WIN WITHIN.
                </h2>
                <div className="text-base sm:text-xl font-cormorant text-[#C5A869] tracking-[0.25em] uppercase font-light">
                  Discipline. Ambition. Execution.
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope pt-2">
                  {brand.manifesto}
                </p>
                <div className="pt-2 flex items-center gap-6 text-xs text-neutral-400 font-mono tracking-widest uppercase">
                  <span>Victory Earned Internally</span>
                  <span>•</span>
                  <span>Monolithic Balance</span>
                  <span>•</span>
                  <span>Uncompromised Routine</span>
                </div>
              </div>
            </section>

            {/* 2. Discipline Lifestyle Campaign (Set Four) */}
            <section className="space-y-6">
              <div className="bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-xl overflow-hidden group">
                <CampaignImage
                  src="assets/campaigns/round-four/wnnr-discipline-lifestyle.webp"
                  alt="Adult Black man and woman wearing WNNR performance essentials in a penthouse training studio at sunrise"
                  aspectRatio="16/9"
                  position="center center"
                  className="rounded-xs w-full"
                />
                <div className="p-4 bg-[#FAF7F2] border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 rounded-xs">
                  <span className="text-sm font-cormorant text-[#111215] font-normal">
                    Penthouse Training Studio at Sunrise · Private Discipline
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                    Discipline Uniform · High-Density French Terry
                  </span>
                </div>
              </div>
            </section>

            {/* 3. Core Hoodie & Jogger Uniform (Set Three) */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-semibold block">
                    Core Uniform
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Five-Colorway Heavyweight Loopback Sets
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Structured 520 GSM custom-milled loopback French terry hoodies paired with tapered track joggers. Rendered in Obsidian Black, Raw Bone, Deep Forest, Oxblood Crimson, and Charcoal Patina.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/campaigns/round-three/wnnr-hoodie-jogger-colorways.webp"
                    alt="Five WNNR hoodie and jogger sets in black bone forest oxblood and charcoal"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>
              </div>
            </section>

            {/* 4. T-Shirt Color Story (Set Two) */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/campaigns/round-two/wnnr-tshirt-colorways.webp"
                    alt="Six heavyweight WNNR T-shirts in black bone forest oxblood ochre and charcoal"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-semibold block">
                    Foundational Tops
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Hexa-Colorway Heavyweight T-Shirt Spectrum
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    320 GSM combed cotton drop-shoulder boxy tees featuring high-density collar ribbing and discreet tonal WNNR branding. Displaying the complete extended palette: Obsidian, Bone, Forest, Oxblood, Gold Ochre, and Charcoal.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Accessories Plinths (Set Two) */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-semibold block">
                    Monolithic Plinths
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Accessories Architecture
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Reinforced canvas weekenders, unstructured dad caps, ribbed merino beanies, pima athletic socks, and recovery slides arranged on architectural concrete plinths.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/campaigns/round-two/wnnr-accessories-collection.webp"
                    alt="WNNR bags caps beanies socks and slides in black bone forest and gold arranged on architectural plinths"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>
              </div>
            </section>

            {/* 6. Quad-Discipline Palette Presentation */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-semibold block mb-1">
                  Atelier Chromatics
                </span>
                <h3 className="text-3xl font-cormorant font-normal text-[#111215]">
                  The WNNR Chromatic Discipline
                </h3>
                <p className="text-xs text-[#50545E] font-light mt-2 font-manrope">
                  Intentional pigments engineered to express internal resolve, measured quiet confidence, and earned victory.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {brand.paletteColors && brand.paletteColors.map((color) => (
                  <div key={color.name} className="bg-white border border-[#DDD7CB] p-5 rounded-xs shadow-sm flex flex-col justify-between">
                    <div>
                      <div
                        className="w-full h-24 rounded-xs mb-4 shadow-inner border border-black/10 flex items-end p-2.5"
                        style={{ backgroundColor: color.hex }}
                      >
                        <span
                          className={`text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-2xs ${
                            color.hex === '#F4F1EA' ? 'bg-black/80 text-white' : 'bg-white/90 text-black'
                          }`}
                        >
                          {color.hex}
                        </span>
                      </div>
                      <h4 className="text-base font-cormorant font-normal text-[#111215]">
                        {color.name}
                      </h4>
                      <p className="text-xs text-[#50545E] font-light mt-1.5 font-manrope leading-relaxed">
                        {color.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Executive Travel Lifestyle Collection Feature */}
            <section id="executive-travel" className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="max-w-3xl space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-semibold block">
                  Discipline Travel & Transit
                </span>
                <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                  Prepared to Win.
                </h3>
                <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                  Executive travel and everyday-carry objects built around discipline, readiness, and the victory that begins within.
                </p>
                <div className="text-xs font-mono text-[#C5A869] uppercase tracking-widest pt-1">
                  WNNR · WIN WITHIN
                </div>
              </div>

              <div className="bg-[#0D0F0E] text-[#F4F1EA] border border-[#C5A869]/30 p-4 sm:p-6 rounded-xs shadow-2xl space-y-6">
                <div className="overflow-hidden rounded-xs border border-[#C5A869]/20">
                  <CampaignImage
                    src="assets/accessories/wnnr/wnnr-executive-travel.webp"
                    alt="WNNR executive travel and everyday-carry collection featuring obsidian leather totes, weekender duffels, executive backpacks, headwear, card holders, and discipline travel accessories."
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full hover:scale-101 transition-transform duration-500"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                  <div className="lg:col-span-8 space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A869] font-semibold block">
                      Discipline Carry Architecture
                    </span>
                    <h4 className="text-xl font-cormorant font-normal text-white">
                      Obsidian Pebble Weekenders, Technical Backpacks & Passport Folios
                    </h4>
                    <p className="text-xs text-neutral-300 font-light font-manrope leading-relaxed">
                      Obsidian pebble-grain leather weekenders with champagne gold hardware, structured technical executive backpacks with device compartments, and RFID-shielding leather passport organizers designed for focused global movement.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {['Leather totes', 'Weekenders', 'Executive backpacks', 'Caps', 'Beanies', 'Belts', 'Wallets', 'Card holders', 'Passport covers', 'Watch rolls', 'Shoe bags', 'Insulated bottles', 'Key fobs'].map((item) => (
                        <span key={item} className="text-[10px] font-mono px-2 py-0.5 bg-[#1B2E24]/60 border border-[#C5A869]/30 text-neutral-200 rounded-2xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-neutral-800 lg:pl-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">Allocation</span>
                      <span className="text-sm font-cormorant text-[#C5A869] font-semibold">Collection Preview</span>
                    </div>
                    <button
                      onClick={() => {
                        const prod = PRODUCTS.find((p) => p.id === 'wnnr-travel-suite');
                        if (prod) onSelectProduct(prod);
                      }}
                      className="px-6 py-3 bg-[#C5A869] text-[#0D0F0E] hover:bg-[#DFC78E] text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors cursor-pointer flex items-center gap-2 shadow-md"
                    >
                      <span>Request Allocation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Honest Category Links & Discipline Reserve CTA */}
            <section className="bg-gradient-to-r from-[#0D0F0E] via-[#1B2E24] to-[#0D0F0E] border border-[#C5A869]/40 p-8 sm:p-14 rounded-xs text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="max-w-2xl mx-auto relative z-10 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A869] font-semibold block">
                  Discipline Allocation
                </span>
                <h3 className="text-3xl sm:text-5xl font-cormorant font-light tracking-tight text-white">
                  WIN WITHIN
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope max-w-xl mx-auto">
                  Signify your commitment to private discipline, internal focus, and elevated performance. Inquire below to join the private allocation ledger for upcoming release windows.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => {
                      const el = document.getElementById('brand-collection-grid');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-[#C5A869] text-[#0D0F0E] hover:bg-[#DFC78E] transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs shadow-lg"
                  >
                    Explore WNNR Products
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('site-footer');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 border border-[#C5A869] text-[#C5A869] hover:bg-[#C5A869] hover:text-[#0D0F0E] transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs"
                  >
                    Private Allocation Ledger
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* F. IKLA WATER DEDICATED HOUSE EXTENSION SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'ikla-water' && (
          <div className="space-y-20 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
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
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAFBFB] border border-[#CADCE0] rounded-xs text-xs font-mono text-[#5E8896]">
                      <span>Zero-Waste · Reusable Flint Glass · Alpine Provenance</span>
                    </div>
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
                    <div className="p-3 bg-white border-t border-[#E5EEF0] mt-2 text-center rounded-xs">
                      <span className="text-xs text-[#555A64] font-manrope font-light">
                        The Formal Dining Salon Setting · Flint Glass & Fine Crystal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* The Sculptural Vessels Grid */}
            <section className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-[#CADCE0]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#5E8896] font-semibold block mb-1">
                    Vessel Architecture
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-cormorant font-normal text-[#111215]">
                    Monolithic Glass Profiles
                  </h3>
                </div>
                <p className="text-xs text-[#50545E] font-light max-w-md font-manrope mt-2 md:mt-0">
                  Engineered with weighted crystal glass pedestals for tactile balance and formal table presence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Rounded Decanter */}
                <div className="bg-white border border-[#CADCE0] p-4 rounded-xs shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] w-full bg-[#FAFBFB] border border-[#E5EEF0] rounded-xs p-3 mb-4 flex items-center justify-center">
                    <CampaignImage
                      src="assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-rounded-bottles.jpg"
                      alt="Rounded flint glass decanter"
                      aspectRatio="4/3"
                      fit="contain"
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="text-lg font-cormorant font-normal text-[#111215]">Rounded Decanter Profile</h4>
                  <p className="text-xs text-[#50545E] font-light mt-1 font-manrope">
                    Soft curved shoulder silhouette cast in heavyweight reusable flint glass with polished stopper.
                  </p>
                </div>

                {/* 2. Monolithic Cylinder */}
                <div className="bg-white border border-[#CADCE0] p-4 rounded-xs shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] w-full bg-[#FAFBFB] border border-[#E5EEF0] rounded-xs p-3 mb-4 flex items-center justify-center">
                    <CampaignImage
                      src="assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-cylinder-bottles.jpg"
                      alt="Monolithic cylinder vessel"
                      aspectRatio="4/3"
                      fit="contain"
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="text-lg font-cormorant font-normal text-[#111215]">Monolithic Cylinder Profile</h4>
                  <p className="text-xs text-[#50545E] font-light mt-1 font-manrope">
                    Slender architectural cylinder with weighted base, designed for clean refrigeration storage and dining.
                  </p>
                </div>

                {/* 3. Pedestal Gallery Trio */}
                <div className="bg-white border border-[#CADCE0] p-4 rounded-xs shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] w-full bg-[#FAFBFB] border border-[#E5EEF0] rounded-xs p-3 mb-4 flex items-center justify-center">
                    <CampaignImage
                      src="assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-pedestal.jpg"
                      alt="Three IKLA Water bottles on travertine pedestal"
                      aspectRatio="4/3"
                      fit="contain"
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="text-lg font-cormorant font-normal text-[#111215]">Travertine Pedestal Installation</h4>
                  <p className="text-xs text-[#50545E] font-light mt-1 font-manrope">
                    Sculptural vessels displayed as architectural objects in private residential galleries.
                  </p>
                </div>
              </div>
            </section>

            {/* Hydration & Table Service Lifestyle Collection Feature */}
            <section id="hydration-service" className="space-y-8 border-t border-[#CADCE0] pt-16">
              <div className="max-w-3xl space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#5E8896] font-semibold block">
                  Table Ceremony & Vessels
                </span>
                <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                  The Ritual of Water.
                </h3>
                <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                  Hydration expressed through considered vessels, refined table service, and objects designed for everyday ceremony.
                </p>
              </div>

              <div className="bg-white border border-[#CADCE0] p-4 sm:p-6 rounded-xs shadow-xl space-y-6">
                <div className="overflow-hidden rounded-xs border border-[#E5EEF0]">
                  <CampaignImage
                    src="assets/accessories/ikla-water/ikla-water-hydration-service.webp"
                    alt="IKLA Water hydration and table service collection featuring minimalist glass carafes, water tumblers, reusable glass travel bottles, ice buckets, coaster sets, and serving trays."
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full hover:scale-101 transition-transform duration-500"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                  <div className="lg:col-span-8 space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#5E8896] font-semibold block">
                      Residential Dining & Hospitality Accoutrements
                    </span>
                    <h4 className="text-xl font-cormorant font-normal text-[#111215]">
                      Flint Glass Carafes, Mineral Tumblers & Travertine Coaster Suites
                    </h4>
                    <p className="text-xs text-[#50545E] font-light font-manrope leading-relaxed">
                      Hand-blown architectural flint glass carafes with precision stoppers, crystal mineral tumblers, solid travertine coaster sets, and leather-trimmed insulated canvas carriers designed for dining salons and gallery terraces.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {['Glass carafes', 'Water tumblers', 'Insulated bottles', 'Reusable glass travel bottles', 'Ice buckets', 'Tongs', 'Coaster sets', 'Bottle carriers', 'Picnic coolers', 'Serving trays'].map((item) => (
                        <span key={item} className="text-[10px] font-mono px-2 py-0.5 bg-[#F5F8F9] border border-[#CADCE0] text-[#5E8896] rounded-2xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#CADCE0] lg:pl-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">Status</span>
                      <span className="text-sm font-cormorant text-[#111215] font-semibold">Collection Preview</span>
                    </div>
                    <button
                      onClick={() => {
                        const prod = PRODUCTS.find((p) => p.id === 'ikla-water-hydration-suite');
                        if (prod) onSelectProduct(prod);
                      }}
                      className="px-6 py-3 bg-[#1A2830] text-[#FAFBFB] hover:bg-[#283C48] text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors cursor-pointer flex items-center gap-2 shadow-md"
                    >
                      <span>Register Interest</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* G. MY DRINK FAMILY DEDICATED COMMUNITY & COLLABORATION SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'my-drink-family' && (
          <div className="space-y-24 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

            {/* The Art of the Serve — Hospitality & Entertaining Master Suite */}
            <section id="hospitality" className="space-y-12 border-t border-[#E2DCBE] pt-20">
              <div className="max-w-3xl space-y-3">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#E06D38] font-semibold block">
                  Master Hospitality Universe
                </span>
                <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] leading-tight">
                  The Art of the Serve.
                </h2>
                <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                  Objects designed for gathering—across the bar, beside the pool, and throughout the seventeen-house hospitality universe.
                </p>
              </div>

              {/* Side by Side on Desktop, Stacked on Mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 1. Glassware & Barware */}
                <div id="glassware-barware" className="bg-white border border-[#E2DCBE] p-4 sm:p-6 rounded-xs shadow-xl flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-xs">
                      <CampaignImage
                        src="assets/accessories/my-drink-family/my-drink-family-glassware-barware.webp"
                        alt="My Drink Family glassware and barware suite featuring crystal coupes, champagne flutes, rocks glasses, cocktail shaker, jigger, strainer, and gold serving tray."
                        aspectRatio="16/9"
                        position="center center"
                        className="rounded-xs w-full group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#E06D38] font-semibold">
                          Glassware & Barware
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                          Collection Preview
                        </span>
                      </div>
                      <h3 className="text-2xl font-cormorant font-normal text-[#111215] mt-1">
                        Crystalline Stemware & Barware Suite
                      </h3>
                      <p className="text-xs text-[#50545E] font-light mt-2 leading-relaxed font-manrope">
                        Lead-free European crystalline coupes, flutes, and rocks glasses paired with brushed brass 18/10 stainless steel shakers, jiggers, strainers, and gilded rectangular serving plinths.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EAE5DC] flex flex-wrap gap-1.5">
                      {['Champagne flutes', 'Coupes', 'Wine goblets', 'Stemless tumblers', 'Rocks glasses', 'Highball glasses', 'Mixing glasses', 'Shakers', 'Jiggers', 'Strainers', 'Ice buckets', 'Serving trays'].map((item) => (
                        <span key={item} className="text-[10px] font-mono px-2 py-0.5 bg-[#FAF7F2] border border-[#E2DDD3] text-[#555] rounded-2xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#EAE5DC] flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                      Allocation Window
                    </span>
                    <button
                      onClick={() => {
                        const prod = PRODUCTS.find((p) => p.id === 'mdf-glassware-barware-suite');
                        if (prod) onSelectProduct(prod);
                      }}
                      className="text-xs uppercase tracking-widest text-[#E06D38] hover:text-[#111215] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Register Interest</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 2. Poolside Hospitality */}
                <div id="poolside-hospitality" className="bg-white border border-[#E2DCBE] p-4 sm:p-6 rounded-xs shadow-xl flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-xs">
                      <CampaignImage
                        src="assets/accessories/my-drink-family/my-drink-family-poolside-hospitality.webp"
                        alt="My Drink Family poolside hospitality collection featuring floating bar stations, luxury pool floats, beach towels, tumblers, and outdoor entertaining pieces."
                        aspectRatio="16/9"
                        position="center center"
                        className="rounded-xs w-full group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#E06D38] font-semibold">
                          Poolside Hospitality
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                          Collection Preview
                        </span>
                      </div>
                      <h3 className="text-2xl font-cormorant font-normal text-[#111215] mt-1">
                        Floating Stations & Outdoor Leisure
                      </h3>
                      <p className="text-xs text-[#50545E] font-light mt-2 leading-relaxed font-manrope">
                        Marine-grade floating serving stations, heavy UV-resistant resort floats, jacquard cabana towels, and double-walled insulated tumblers designed for golden hour entertaining.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EAE5DC] flex flex-wrap gap-1.5">
                      {['Floating serving stations', 'Resort floats', 'Beach balls', 'Towels', 'Coolers', 'Tumblers', 'Serving caddies', 'Outdoor entertainment accessories'].map((item) => (
                        <span key={item} className="text-[10px] font-mono px-2 py-0.5 bg-[#FAF7F2] border border-[#E2DDD3] text-[#555] rounded-2xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#EAE5DC] flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                      Allocation Window
                    </span>
                    <button
                      onClick={() => {
                        const prod = PRODUCTS.find((p) => p.id === 'mdf-poolside-hospitality-suite');
                        if (prod) onSelectProduct(prod);
                      }}
                      className="text-xs uppercase tracking-widest text-[#E06D38] hover:text-[#111215] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Register Interest</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* H. MYMOSA DEDICATED FLAGSHIP SPORTS-FASHION SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'mymosa' && (
          <div className="space-y-28 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            {/* 1. Flagship Manifesto Statement */}
            <section className="bg-gradient-to-br from-[#1C130D] via-[#241710] to-[#120C08] text-[#FAF7F2] p-8 sm:p-14 rounded-xs border border-[#E26D35]/30 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#E26D35]/15 via-transparent to-transparent pointer-events-none" />
              <div className="max-w-3xl relative z-10 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#E26D35] font-semibold block">
                    Flagship Sports-Fashion House
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] px-2.5 py-0.5 border border-[#E26D35]/40 text-[#E26D35] rounded-xs font-mono">
                    My Drink Family Universe
                  </span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-cormorant font-light tracking-tight leading-tight text-white">
                  The Art of Celebration, Worn.
                </h2>
                <div className="text-base sm:text-xl font-cormorant text-[#E26D35] tracking-[0.2em] uppercase font-light">
                  Four Flagship Colorways · Architectural Athleisure
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope pt-2">
                  {brand.manifesto}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400 font-mono tracking-widest uppercase">
                  <span>Classic Orange</span>
                  <span>•</span>
                  <span>Pineapple</span>
                  <span>•</span>
                  <span>Strawberry</span>
                  <span>•</span>
                  <span>Watermelon</span>
                </div>
              </div>
            </section>

            {/* 2. Flagship Tracksuits Feature (16:9) */}
            <section className="space-y-8">
              <div className="bg-white border border-[#DDD7CB] p-3 sm:p-4 rounded-xs shadow-xl overflow-hidden group">
                <CampaignImage
                  src="assets/products/mymosa/mymosa-four-flavor-tracksuits.webp"
                  alt="MyMosa four-flavor sports-fashion tracksuits collection in Classic Orange, Pineapple, Strawberry, and Watermelon colorways"
                  aspectRatio="16/9"
                  position="center center"
                  className="rounded-xs w-full"
                />
                <div className="p-4 bg-[#FAF7F2] border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 rounded-xs">
                  <span className="text-sm font-cormorant text-[#111215] font-normal text-base">
                    The Four-Flavor Tracksuit Suite · Classic Orange, Pineapple, Strawberry, Watermelon
                  </span>
                  <span className="text-[11px] font-mono text-[#E26D35] uppercase tracking-widest font-medium">
                    500 GSM Heavyweight Loopback Terry
                  </span>
                </div>
              </div>
            </section>

            {/* 3. Interactive Four-Colorway System */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#E26D35] font-semibold block mb-1">
                  Signature Chromatics
                </span>
                <h3 className="text-3xl font-cormorant font-normal text-[#111215]">
                  The Four Flagship Colorway Identities
                </h3>
                <p className="text-xs text-[#50545E] font-light mt-2 font-manrope">
                  Four coordinated colorways calibrated across every silhouette in the collection.
                </p>
              </div>

              {/* Colorway Switcher Buttons */}
              <div className="flex flex-wrap justify-center gap-3">
                {brand.flagshipColorways && brand.flagshipColorways.map((cw) => {
                  const isActive = activeMymosaColor === cw.id;
                  return (
                    <button
                      key={cw.id}
                      onClick={() => setActiveMymosaColor(cw.id)}
                      className={`px-5 py-2.5 rounded-xs text-xs uppercase tracking-[0.16em] font-medium transition-all flex items-center gap-2.5 cursor-pointer ${
                        isActive
                          ? 'bg-[#16171A] text-white shadow-md'
                          : 'bg-white border border-[#DDD7CB] text-[#555A64] hover:text-[#111215]'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: cw.hex }}
                      />
                      <span>{cw.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Colorway Detail Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {brand.flagshipColorways && brand.flagshipColorways.map((cw) => {
                  const isActive = activeMymosaColor === cw.id;
                  return (
                    <div
                      key={cw.id}
                      onClick={() => setActiveMymosaColor(cw.id)}
                      className={`bg-white border p-5 rounded-xs transition-all cursor-pointer flex flex-col justify-between ${
                        isActive
                          ? 'border-[#E26D35] ring-1 ring-[#E26D35]/30 shadow-md'
                          : 'border-[#DDD7CB] hover:border-[#C8A97E] shadow-xs'
                      }`}
                    >
                      <div>
                        <div
                          className="w-full h-20 rounded-xs mb-3 shadow-inner border border-black/10 flex items-end justify-between p-2.5"
                          style={{ backgroundColor: cw.hex }}
                        >
                          <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-2xs bg-black/75 text-white">
                            {cw.hex}
                          </span>
                          {cw.secondaryHex && (
                            <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-2xs bg-black/75 text-white">
                              {cw.secondaryHex}
                            </span>
                          )}
                        </div>
                        <h4 className="text-base font-cormorant font-normal text-[#111215]">
                          {cw.name}
                        </h4>
                        <p className="text-xs text-[#50545E] font-light mt-1.5 font-manrope leading-relaxed">
                          {cw.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 4. Heavyweight Sweats & Hoodies (16:9) */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#E26D35] font-semibold block">
                    Heavyweight Fleece
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Structured Coordinated Sweatsuits
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Dense loopback fleece engineered for relaxed posture and architectural silhouette retention. Dual-layer hood construction, heavyweight ribbed cuffs, and discreet tonal chest embroidery across all four flagship colorways.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('brand-collection-grid');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs uppercase tracking-widest text-[#E26D35] hover:text-[#111215] font-semibold cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Explore Sweats Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/products/mymosa/mymosa-four-flavor-heavyweight-sweats.webp"
                    alt="MyMosa heavyweight sweats and hoodies collection in Classic Orange, Pineapple, Strawberry, and Watermelon colorways"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>
              </div>
            </section>

            {/* 5. Complete Category Showcase Grid (16:9 assets) */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#E26D35] font-semibold block mb-1">
                  Assortment Breadth
                </span>
                <h3 className="text-3xl font-cormorant font-normal text-[#111215]">
                  The Complete MyMosa Sports-Fashion Taxonomy
                </h3>
                <p className="text-xs text-[#50545E] font-light mt-2 font-manrope">
                  Spanning court-ready athletic shorts, drop-shoulder tees, structured headwear, recovery slides, and travel bags.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* T-Shirts */}
                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-xs space-y-3">
                  <CampaignImage
                    src="assets/products/mymosa/mymosa-tshirts-four-flavors.webp"
                    alt="MyMosa heavyweight T-shirts across four flagship colorways"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                  <div className="p-2">
                    <h4 className="text-base font-cormorant font-normal text-[#111215]">Heavyweight T-Shirts</h4>
                    <p className="text-xs text-[#50545E] font-light font-manrope mt-1">
                      320 GSM drop-shoulder boxy tees in Classic Orange, Pineapple, Strawberry, and Watermelon.
                    </p>
                  </div>
                </div>

                {/* Hoodies */}
                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-xs space-y-3">
                  <CampaignImage
                    src="assets/products/mymosa/mymosa-hoodies-four-flavors.webp"
                    alt="MyMosa pullover and zip hoodies in four colorways"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                  <div className="p-2">
                    <h4 className="text-base font-cormorant font-normal text-[#111215]">Pullover & Zip Hoodies</h4>
                    <p className="text-xs text-[#50545E] font-light font-manrope mt-1">
                      Custom brass zippers, kangaroo pockets, and high-density rib cuffs with double-needle hems.
                    </p>
                  </div>
                </div>

                {/* Athletic Shorts */}
                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-xs space-y-3">
                  <CampaignImage
                    src="assets/products/mymosa/mymosa-athletic-shorts.webp"
                    alt="MyMosa athletic shorts in four flagship colorways"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                  <div className="p-2">
                    <h4 className="text-base font-cormorant font-normal text-[#111215]">Court & Athletic Shorts</h4>
                    <p className="text-xs text-[#50545E] font-light font-manrope mt-1">
                      Breathable mesh lining, braided drawstring waist, and relaxed 6-inch inseam for court mobility.
                    </p>
                  </div>
                </div>

                {/* Headwear */}
                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-xs space-y-3">
                  <CampaignImage
                    src="assets/products/mymosa/mymosa-hats-beanies-visors.webp"
                    alt="MyMosa caps, beanies, and athletic visors"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                  <div className="p-2">
                    <h4 className="text-base font-cormorant font-normal text-[#111215]">Caps, Beanies & Visors</h4>
                    <p className="text-xs text-[#50545E] font-light font-manrope mt-1">
                      Unstructured washed twill dad caps, ribbed merino beanies, and court athletic visors.
                    </p>
                  </div>
                </div>

                {/* Footwear */}
                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-xs space-y-3">
                  <CampaignImage
                    src="assets/products/mymosa/mymosa-slides-socks.webp"
                    alt="MyMosa molded recovery slides and ribbed crew socks"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                  <div className="p-2">
                    <h4 className="text-base font-cormorant font-normal text-[#111215]">Slides & Ribbed Crew Socks</h4>
                    <p className="text-xs text-[#50545E] font-light font-manrope mt-1">
                      Molded dual-density EVA recovery slides paired with cushioned combed pima crew socks.
                    </p>
                  </div>
                </div>

                {/* Bags */}
                <div className="bg-white border border-[#DDD7CB] p-3 rounded-xs shadow-xs space-y-3">
                  <CampaignImage
                    src="assets/products/mymosa/mymosa-gym-travel-bags.webp"
                    alt="MyMosa gym duffels and travel bags in four colorways"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                  <div className="p-2">
                    <h4 className="text-base font-cormorant font-normal text-[#111215]">Gym Duffels & Travel Bags</h4>
                    <p className="text-xs text-[#50545E] font-light font-manrope mt-1">
                      Water-repellent nylon canvas, separated shoe compartment, and padded shoulder strap.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Sports Accessories Feature (16:9) */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/products/mymosa/mymosa-sports-accessories.webp"
                    alt="MyMosa sports accessories collection featuring caps, beanies, socks, slides, and gym duffel bags across four signature colorways"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#E26D35] font-semibold block">
                    Sports Accoutrements
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Everyday Athletic Movement
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Curated accessories designed to accompany high-energy clubhouse celebrations, morning workouts, and weekend travel across all four flavor expressions.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('brand-collection-grid');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-[#E26D35] text-white hover:bg-[#CA5B26] transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs shadow-md inline-flex items-center gap-2"
                    >
                      <span>Explore Products Below</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Honest Production Preview & Allocation CTA */}
            <section className="bg-[#1C130D] border border-[#E26D35]/40 p-8 sm:p-14 rounded-xs text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="max-w-2xl mx-auto relative z-10 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#E26D35] font-semibold block">
                  Production Preview · Allocation Window
                </span>
                <h3 className="text-3xl sm:text-5xl font-cormorant font-light tracking-tight text-white">
                  Join the MyMosa Allocation Ledger
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope max-w-xl mx-auto">
                  The MyMosa sports-fashion collection is currently in final production preview. Express interest below to secure priority allocation upon release.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => {
                      const el = document.getElementById('brand-collection-grid');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-[#E26D35] text-white hover:bg-[#CA5B26] transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs shadow-lg"
                  >
                    View Product Catalogue
                  </button>
                  <button
                    onClick={() => onSelectBrand('my-drink-family')}
                    className="px-8 py-4 border border-[#E26D35] text-[#E26D35] hover:bg-[#E26D35] hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs"
                  >
                    Explore My Drink Family
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* I. MYTAI DEDICATED SPORTS-FASHION SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'mytai' && (
          <div className="space-y-28 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            {/* 1. Manifesto / Positioning Statement */}
            <section className="bg-gradient-to-br from-[#0F1B1E] via-[#16272B] to-[#0A1214] text-[#FAF7F2] p-8 sm:p-14 rounded-xs border border-[#2A7B88]/40 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#2A7B88]/20 via-transparent to-transparent pointer-events-none" />
              <div className="max-w-3xl relative z-10 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#2A7B88] font-semibold block">
                    Island Sports-Fashion House
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] px-2.5 py-0.5 border border-[#2A7B88]/40 text-[#2A7B88] rounded-xs font-mono">
                    My Drink Family Universe
                  </span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-cormorant font-light tracking-tight leading-tight text-white">
                  Island Leisure & Athletic Poise.
                </h2>
                <div className="text-base sm:text-xl font-cormorant text-[#2A7B88] tracking-[0.2em] uppercase font-light">
                  Black · Ivory · Deep Teal · Sunset Coral · Restrained Gold
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope pt-2">
                  {brand.manifesto}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400 font-mono tracking-widest uppercase">
                  <span>Poolside Tracksuits</span>
                  <span>•</span>
                  <span>Court Caps</span>
                  <span>•</span>
                  <span>Weekender Duffels</span>
                  <span>•</span>
                  <span>Resort Slides</span>
                </div>
              </div>
            </section>

            {/* 2. Apparel Collection Feature (16:9) */}
            <section className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#2A7B88] font-semibold block">
                    Apparel Collection
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Island-Inspired Warmups & Tops
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    High-density cotton tees, technical track jackets, zip hoodies, and coordinated sweatpants rendered in rich oceanic teal, sunlit coral, raw ivory, and obsidian black.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('brand-collection-grid');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs uppercase tracking-widest text-[#2A7B88] hover:text-[#111215] font-semibold cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Explore Apparel Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/products/mytai/mytai-apparel-products.webp"
                    alt="MyTai island-inspired sports-fashion apparel collection featuring T-shirts, hoodies, track jackets, and sweatpants in black, ivory, teal, coral, and restrained gold"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>
              </div>
            </section>

            {/* 3. Accessories Collection Feature (16:9) */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/products/mytai/mytai-accessories-products.webp"
                    alt="MyTai accessories collection featuring caps, beanies, visors, crew socks, slides, duffel bags, and belt bags in teal, coral, ivory, and black"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#2A7B88] font-semibold block">
                    Resort & Court Accoutrements
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Accessories Architecture
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Dual-tone athletic caps, visors, technical crew socks, molded recovery slides, water-repellent duffels, and crossbody belt bags designed for coastal movement.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('brand-collection-grid');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-[#2A7B88] text-white hover:bg-[#20606B] transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs shadow-md inline-flex items-center gap-2"
                    >
                      <span>Explore Accessories</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Color Story Palette */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#2A7B88] font-semibold block mb-1">
                  Atelier Chromatics
                </span>
                <h3 className="text-3xl font-cormorant font-normal text-[#111215]">
                  The MyTai Chromatic Spectrum
                </h3>
                <p className="text-xs text-[#50545E] font-light mt-2 font-manrope">
                  Oceanic lagoon tones balanced with sun-drenched coral and restrained gold insignia.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {brand.paletteColors && brand.paletteColors.map((color) => (
                  <div key={color.name} className="bg-white border border-[#DDD7CB] p-5 rounded-xs shadow-xs flex flex-col justify-between">
                    <div>
                      <div
                        className="w-full h-20 rounded-xs mb-3 shadow-inner border border-black/10 flex items-end p-2.5"
                        style={{ backgroundColor: color.hex }}
                      >
                        <span
                          className={`text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-2xs ${
                            color.hex === '#F4F0E6' ? 'bg-black/80 text-white' : 'bg-white/90 text-black'
                          }`}
                        >
                          {color.hex}
                        </span>
                      </div>
                      <h4 className="text-base font-cormorant font-normal text-[#111215]">
                        {color.name}
                      </h4>
                      <p className="text-xs text-[#50545E] font-light mt-1 font-manrope leading-relaxed">
                        {color.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Honest Allocation CTA */}
            <section className="bg-[#0F1B1E] border border-[#2A7B88]/40 p-8 sm:p-14 rounded-xs text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="max-w-2xl mx-auto relative z-10 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#2A7B88] font-semibold block">
                  Production Preview · Allocation Window
                </span>
                <h3 className="text-3xl sm:text-5xl font-cormorant font-light tracking-tight text-white">
                  Reserve MyTai Allocation
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope max-w-xl mx-auto">
                  Experience island ritual through athletic poise. Inquire below to join the private release ledger for the upcoming capsule drop.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => {
                      const el = document.getElementById('brand-collection-grid');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-[#2A7B88] text-white hover:bg-[#20606B] transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs shadow-lg"
                  >
                    Explore Products Below
                  </button>
                  <button
                    onClick={() => onSelectBrand('my-drink-family')}
                    className="px-8 py-4 border border-[#2A7B88] text-[#2A7B88] hover:bg-[#2A7B88] hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs"
                  >
                    Explore My Drink Family
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* J. MYTINI DEDICATED SPORTS-FASHION SHOWCASE */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'mytini' && (
          <div className="space-y-28 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            {/* 1. Manifesto Statement */}
            <section className="bg-gradient-to-br from-[#120F0D] via-[#1C1613] to-[#0D0B0A] text-[#FAF7F2] p-8 sm:p-14 rounded-xs border border-[#382B24]/50 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#382B24]/30 via-transparent to-transparent pointer-events-none" />
              <div className="max-w-3xl relative z-10 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A869] font-semibold block">
                    Nocturnal Sports-Fashion House
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] px-2.5 py-0.5 border border-[#C5A869]/40 text-[#C5A869] rounded-xs font-mono">
                    My Drink Family Universe
                  </span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-cormorant font-light tracking-tight leading-tight text-white">
                  Nocturnal Poise & Lounge Tailoring.
                </h2>
                <div className="text-base sm:text-xl font-cormorant text-[#C5A869] tracking-[0.2em] uppercase font-light">
                  Midnight Black · Roast Espresso · Warm Ivory · Restrained Gold
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope pt-2">
                  {brand.manifesto}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400 font-mono tracking-widest uppercase">
                  <span>Clubroom Warmups</span>
                  <span>•</span>
                  <span>Cashmere Beanies</span>
                  <span>•</span>
                  <span>Leather Duffels</span>
                  <span>•</span>
                  <span>Late-Night Transit</span>
                </div>
              </div>
            </section>

            {/* 2. Apparel Collection Feature (16:9) */}
            <section className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#382B24] font-semibold block">
                    Apparel Collection
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Nocturnal Lounge Warmups & Tops
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Monochromatic drop-shoulder tees, minimalist hoodies, and tailored warmups crafted in heavyweight combed cottons and fine-rib trims with gilded barware emblems.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('brand-collection-grid');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs uppercase tracking-widest text-[#382B24] hover:text-[#111215] font-semibold cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Explore Apparel Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/products/mytini/mytini-apparel-products.webp"
                    alt="MyTini nocturnal lounge sports-fashion apparel collection featuring T-shirts, hoodies, and tailored warmups in black, espresso, ivory, and restrained gold"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>
              </div>
            </section>

            {/* 3. Accessories Collection Feature (16:9) */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/products/mytini/mytini-accessories-products.webp"
                    alt="MyTini accessories collection featuring structured caps, beanies, socks, slides, weekender duffels, and belt bags in black, espresso, ivory, and restrained gold"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#382B24] font-semibold block">
                    Clubroom & Transit Accoutrements
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Understated Accoutrements
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Structured low-profile caps, cashmere-blend ribbed beanies, pima crew socks, molded recovery slides, and pebble-grain weekender duffels with solid gold-tone hardware.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('brand-collection-grid');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-[#211B17] text-white hover:bg-[#382B24] transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs shadow-md inline-flex items-center gap-2"
                    >
                      <span>Explore Accessories</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Color Story Palette */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#382B24] font-semibold block mb-1">
                  Atelier Chromatics
                </span>
                <h3 className="text-3xl font-cormorant font-normal text-[#111215]">
                  The MyTini Chromatic Discipline
                </h3>
                <p className="text-xs text-[#50545E] font-light mt-2 font-manrope">
                  Nocturnal lounge tones crafted for private salon environments and evening movement.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {brand.paletteColors && brand.paletteColors.map((color) => (
                  <div key={color.name} className="bg-white border border-[#DDD7CB] p-5 rounded-xs shadow-xs flex flex-col justify-between">
                    <div>
                      <div
                        className="w-full h-20 rounded-xs mb-3 shadow-inner border border-black/10 flex items-end p-2.5"
                        style={{ backgroundColor: color.hex }}
                      >
                        <span
                          className={`text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-2xs ${
                            color.hex === '#F5F2EA' ? 'bg-black/80 text-white' : 'bg-white/90 text-black'
                          }`}
                        >
                          {color.hex}
                        </span>
                      </div>
                      <h4 className="text-base font-cormorant font-normal text-[#111215]">
                        {color.name}
                      </h4>
                      <p className="text-xs text-[#50545E] font-light mt-1 font-manrope leading-relaxed">
                        {color.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Honest Allocation CTA */}
            <section className="bg-[#120F0D] border border-[#382B24]/50 p-8 sm:p-14 rounded-xs text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="max-w-2xl mx-auto relative z-10 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A869] font-semibold block">
                  Production Preview · Allocation Window
                </span>
                <h3 className="text-3xl sm:text-5xl font-cormorant font-light tracking-tight text-white">
                  Reserve MyTini Allocation
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope max-w-xl mx-auto">
                  Precision evening sports-fashion. Register your interest below to join the private release ledger.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => {
                      const el = document.getElementById('brand-collection-grid');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-[#211B17] text-white hover:bg-[#382B24] transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs shadow-lg"
                  >
                    Explore Products Below
                  </button>
                  <button
                    onClick={() => onSelectBrand('my-drink-family')}
                    className="px-8 py-4 border border-[#C5A869] text-[#C5A869] hover:bg-[#C5A869] hover:text-black transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs"
                  >
                    Explore My Drink Family
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* K. MYJITO DEDICATED SPORTS-FASHION SHOWCASE (STRICT: NEVER MOJITO) */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'myjito' && (
          <div className="space-y-28 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            {/* 1. Manifesto Statement */}
            <section className="bg-gradient-to-br from-[#0B1A14] via-[#10241C] to-[#07100D] text-[#FAF7F2] p-8 sm:p-14 rounded-xs border border-[#2D7F67]/40 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#2D7F67]/20 via-transparent to-transparent pointer-events-none" />
              <div className="max-w-3xl relative z-10 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#2D7F67] font-semibold block">
                    Botanical Sports-Fashion House
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] px-2.5 py-0.5 border border-[#2D7F67]/40 text-[#2D7F67] rounded-xs font-mono">
                    My Drink Family Universe
                  </span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-cormorant font-light tracking-tight leading-tight text-white">
                  Botanical Vitality & Court Agility.
                </h2>
                <div className="text-base sm:text-xl font-cormorant text-[#2D7F67] tracking-[0.2em] uppercase font-light">
                  Mint · Ivory · Deep Navy · Fresh Lime · Restrained Gold
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope pt-2">
                  {brand.manifesto}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400 font-mono tracking-widest uppercase">
                  <span>Court Tracksuits</span>
                  <span>•</span>
                  <span>Ventilated Hoodies</span>
                  <span>•</span>
                  <span>Technical Visors</span>
                  <span>•</span>
                  <span>Garden Terrace Pacing</span>
                </div>
              </div>
            </section>

            {/* 2. Apparel Collection Feature (16:9) */}
            <section className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#2D7F67] font-semibold block">
                    Apparel Collection
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Botanical Court & Warmup Uniforms
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Mint and navy sports-fashion track jackets, athletic hoodies, breathable court tees, and sweatpants rendered in crushed botanical mint, structured navy, fresh lime accents, and restrained gold details.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('brand-collection-grid');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs uppercase tracking-widest text-[#2D7F67] hover:text-[#111215] font-semibold cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Explore Apparel Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/products/myjito/myjito-apparel-products.webp"
                    alt="MyJito mint and navy sports-fashion apparel collection featuring T-shirts, hoodies, a track jacket, and sweatpants in botanical mint, deep navy, lime, ivory, and gold"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>
              </div>
            </section>

            {/* 3. Accessories Collection Feature (16:9) */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/products/myjito/myjito-accessories-products.webp"
                    alt="MyJito accessories collection featuring dual-tone caps, athletic visors, technical crew socks, slides, and gym travel bags in mint, navy, lime, and ivory"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#2D7F67] font-semibold block">
                    Court & Outdoor Accoutrements
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Outdoor Vitality Gear
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Dual-tone athletic caps, performance visors, technical crew socks with arch compression, molded court slides, and lightweight gym travel bags engineered for energetic court routines.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('brand-collection-grid');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-[#1D5E4C] text-white hover:bg-[#154639] transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs shadow-md inline-flex items-center gap-2"
                    >
                      <span>Explore Accessories</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Color Story Palette */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#2D7F67] font-semibold block mb-1">
                  Atelier Chromatics
                </span>
                <h3 className="text-3xl font-cormorant font-normal text-[#111215]">
                  The MyJito Chromatic Vitality
                </h3>
                <p className="text-xs text-[#50545E] font-light mt-2 font-manrope">
                  Botanical freshness inspired by crushed garden herbs and crisp athletic court contrast.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {brand.paletteColors && brand.paletteColors.map((color) => (
                  <div key={color.name} className="bg-white border border-[#DDD7CB] p-5 rounded-xs shadow-xs flex flex-col justify-between">
                    <div>
                      <div
                        className="w-full h-20 rounded-xs mb-3 shadow-inner border border-black/10 flex items-end p-2.5"
                        style={{ backgroundColor: color.hex }}
                      >
                        <span
                          className={`text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-2xs ${
                            color.hex === '#F4F6F2' ? 'bg-black/80 text-white' : 'bg-white/90 text-black'
                          }`}
                        >
                          {color.hex}
                        </span>
                      </div>
                      <h4 className="text-base font-cormorant font-normal text-[#111215]">
                        {color.name}
                      </h4>
                      <p className="text-xs text-[#50545E] font-light mt-1 font-manrope leading-relaxed">
                        {color.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Honest Allocation CTA */}
            <section className="bg-[#0B1A14] border border-[#2D7F67]/40 p-8 sm:p-14 rounded-xs text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="max-w-2xl mx-auto relative z-10 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#2D7F67] font-semibold block">
                  Production Preview · Allocation Window
                </span>
                <h3 className="text-3xl sm:text-5xl font-cormorant font-light tracking-tight text-white">
                  Reserve MyJito Allocation
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope max-w-xl mx-auto">
                  Botanical athletic poise. Inquire below to register your allocation interest for the upcoming court capsule.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => {
                      const el = document.getElementById('brand-collection-grid');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-[#1D5E4C] text-white hover:bg-[#154639] transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs shadow-lg"
                  >
                    Explore Products Below
                  </button>
                  <button
                    onClick={() => onSelectBrand('my-drink-family')}
                    className="px-8 py-4 border border-[#2D7F67] text-[#2D7F67] hover:bg-[#2D7F67] hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs"
                  >
                    Explore My Drink Family
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* L. MYGARITA DEDICATED SPORTS-FASHION SHOWCASE (STRICT: NEVER MARGARITA) */}
        {/* ----------------------------------------------------------------------- */}
        {brand.id === 'mygarita' && (
          <div className="space-y-28 py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
            {/* 1. Manifesto Statement */}
            <section className="bg-gradient-to-br from-[#161511] via-[#211E18] to-[#0E0D0B] text-[#FAF7F2] p-8 sm:p-14 rounded-xs border border-[#7A8C74]/40 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#7A8C74]/20 via-transparent to-transparent pointer-events-none" />
              <div className="max-w-3xl relative z-10 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#7A8C74] font-semibold block">
                    Desert Horizon Sports-Fashion House
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] px-2.5 py-0.5 border border-[#7A8C74]/40 text-[#7A8C74] rounded-xs font-mono">
                    My Drink Family Universe
                  </span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-cormorant font-light tracking-tight leading-tight text-white">
                  Agave Horizon & Desert Warmth.
                </h2>
                <div className="text-base sm:text-xl font-cormorant text-[#7A8C74] tracking-[0.2em] uppercase font-light">
                  Agave Sage · Warm Sand · Cream · Black · Restrained Gold
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope pt-2">
                  {brand.manifesto}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400 font-mono tracking-widest uppercase">
                  <span>Desert Fleece Sets</span>
                  <span>•</span>
                  <span>Washed Twill Caps</span>
                  <span>•</span>
                  <span>Utility Duffels</span>
                  <span>•</span>
                  <span>Twilight Terrace Poise</span>
                </div>
              </div>
            </section>

            {/* 2. Apparel Collection Feature (16:9) */}
            <section className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#7A8C74] font-semibold block">
                    Apparel Collection
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Desert Horizon Sports-Fashion Apparel
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Heavyweight hoodies, relaxed track jackets, easy tees, and sweatpants rendered in calming agave sage, warm desert sand, pueblo cream, and volcanic black.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('brand-collection-grid');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs uppercase tracking-widest text-[#7A8C74] hover:text-[#111215] font-semibold cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Explore Apparel Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/products/mygarita/mygarita-apparel-products.webp"
                    alt="MyGarita agave sage and warm sand sports-fashion apparel collection featuring hoodies, track jackets, tees, and sweatpants in agave sage, sand, cream, black, and gold"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>
              </div>
            </section>

            {/* 3. Accessories Collection Feature (16:9) */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 bg-white p-3 border border-[#DDD7CB] rounded-xs shadow-xl">
                  <CampaignImage
                    src="assets/products/mygarita/mygarita-accessories-products.webp"
                    alt="MyGarita accessories collection featuring washed caps, beanies, visors, crew socks, slides, and travel duffel bags in agave sage, warm sand, and cream"
                    aspectRatio="16/9"
                    position="center center"
                    className="rounded-xs w-full"
                  />
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#7A8C74] font-semibold block">
                    Desert Transit & Poolside Accoutrements
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215] leading-tight">
                    Warm Sand & Sage Accoutrements
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Washed twill caps, bucket hats, ribbed knit beanies, cushioned crew socks, recovery slides, and durable travel duffels designed for sunlit weekend escapes.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('brand-collection-grid');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-[#53654E] text-white hover:bg-[#3F4F3B] transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs shadow-md inline-flex items-center gap-2"
                    >
                      <span>Explore Accessories</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Color Story Palette */}
            <section className="space-y-8 border-t border-[#E5DFD5] pt-16">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#7A8C74] font-semibold block mb-1">
                  Atelier Chromatics
                </span>
                <h3 className="text-3xl font-cormorant font-normal text-[#111215]">
                  The MyGarita Chromatic Landscape
                </h3>
                <p className="text-xs text-[#50545E] font-light mt-2 font-manrope">
                  Southwestern desert hues evoking agave flora, warm dunes, and twilight tranquility.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {brand.paletteColors && brand.paletteColors.map((color) => (
                  <div key={color.name} className="bg-white border border-[#DDD7CB] p-5 rounded-xs shadow-xs flex flex-col justify-between">
                    <div>
                      <div
                        className="w-full h-20 rounded-xs mb-3 shadow-inner border border-black/10 flex items-end p-2.5"
                        style={{ backgroundColor: color.hex }}
                      >
                        <span
                          className={`text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-2xs ${
                            color.hex === '#F8F5ED' ? 'bg-black/80 text-white' : 'bg-white/90 text-black'
                          }`}
                        >
                          {color.hex}
                        </span>
                      </div>
                      <h4 className="text-base font-cormorant font-normal text-[#111215]">
                        {color.name}
                      </h4>
                      <p className="text-xs text-[#50545E] font-light mt-1 font-manrope leading-relaxed">
                        {color.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Honest Allocation CTA */}
            <section className="bg-[#161511] border border-[#7A8C74]/40 p-8 sm:p-14 rounded-xs text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="max-w-2xl mx-auto relative z-10 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#7A8C74] font-semibold block">
                  Production Preview · Allocation Window
                </span>
                <h3 className="text-3xl sm:text-5xl font-cormorant font-light tracking-tight text-white">
                  Reserve MyGarita Allocation
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope max-w-xl mx-auto">
                  Desert athletic poise. Register your interest below to join the private release ledger.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => {
                      const el = document.getElementById('brand-collection-grid');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-[#53654E] text-white hover:bg-[#3F4F3B] transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs shadow-lg"
                  >
                    Explore Products Below
                  </button>
                  <button
                    onClick={() => onSelectBrand('my-drink-family')}
                    className="px-8 py-4 border border-[#7A8C74] text-[#7A8C74] hover:bg-[#7A8C74] hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer rounded-xs"
                  >
                    Explore My Drink Family
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 3. BRAND PRODUCTS COLLECTION GRID (IF PRODUCTS EXIST) */}
      {/* ========================================================================= */}
      {brandProducts.length > 0 && (
        <section id="brand-collection-grid" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#FAF7F2] border-y border-[#E2DDD3] relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2">
                  Seasonal Release
                </span>
                <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215]">
                  The {brand.name} Catalogue
                </h2>
              </div>

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
      {/* 4. EDITORIAL LIFESTYLE BANNER */}
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
      {/* 5. EXPLORE NEIGHBORING HOUSES */}
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
