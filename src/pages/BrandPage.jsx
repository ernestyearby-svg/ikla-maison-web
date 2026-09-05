import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Compass, Layers, Shield } from 'lucide-react';
import { BRANDS, BRAND_LIST } from '../data/brands';
import { PRODUCTS } from '../data/products';
import BrandHero from '../components/BrandHero';
import ProductCard from '../components/ProductCard';

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
          const el = document.getElementById('brand-collection-grid');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreEthos={() => {
          const el = document.getElementById('brand-ethos-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Collection Flat Lay & Design Language Spotlight */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full z-10">
        {/* Subtle Background Brand Wordmark Watermark (4%–8% opacity) */}
        <div className="absolute -top-12 -left-20 w-[65vw] max-w-[900px] pointer-events-none select-none opacity-[0.05] filter contrast-125 z-0">
          <img src={brand.logos.wordmarkDark} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Flat Lay Visual Asset (collection.webp) */}
          <div className="lg:col-span-7 bg-white border border-[#DDD7CB] p-3 sm:p-4 group rounded-xs shadow-lg relative overflow-hidden">
            {/* Soft corner seal watermark */}
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

      {/* 3. Brand Products Collection Grid */}
      <section id="brand-collection-grid" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#FAF7F2] border-y border-[#E2DDD3] relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2">
                Seasonal Release
              </span>
              <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215]">
                The {brand.name} Collection
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

      {/* 4. Editorial Lifestyle Banner (editorial.webp) */}
      <section id="brand-ethos-section" className="relative w-full py-32 px-6 sm:px-8 lg:px-12 bg-neutral-950 overflow-hidden z-10">
        {/* Full-bleed background image using editorial.webp */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={brand.assets.editorial}
            alt={brand.alt.editorial}
            loading="lazy"
            className="w-full h-full object-cover object-center brightness-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-black/60 to-black/40" />
        </div>

        {/* Faded Wordmark Watermark overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.06] overflow-hidden">
          <img src={brand.logos.wordmarkDark} alt="" className="w-[85vw] max-w-[1100px] object-contain" />
        </div>

        {/* Editorial Story Text Overlay */}
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

      {/* 5. Explore Neighboring Houses */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full z-10 bg-[#ECEAE4] border-t border-[#DFDBD3]">
        <div className="flex items-center justify-between mb-12 pb-4 border-b border-[#D8D3C7]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block">
              Discover More
            </span>
            <h3 className="text-2xl sm:text-3xl font-cormorant text-[#111215] font-normal mt-1">
              Explore Sister Houses
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
          {otherBrands.map((b) => (
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

