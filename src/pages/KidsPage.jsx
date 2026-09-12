import React, { useState } from 'react';
import { ArrowRight, Sparkles, Shield, ChevronRight, Droplets, Check, Heart, Compass } from 'lucide-react';
import { IKLA_KIDS_CORE_PRODUCTS, PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import VIPInquiryModal from '../components/VIPInquiryModal';
import { getAssetPath } from '../utils/assets.js';
import { PAGE_COLOR_SYSTEMS } from '../data/designTokens';

export default function KidsPage({ onSelectProduct, onNavigateHome, onNavigateCollection }) {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState(null);

  const colors = PAGE_COLOR_SYSTEMS['ikla-kids'];
  const customVelourProduct = PRODUCTS.find((p) => p.id === 'ikla-kids-custom-velour-drop');

  const handleOpenInquiry = (product = null) => {
    setInquiryProduct(product || {
      id: 'ikla-kids-family-list',
      name: 'IKLA Kids Family List Private Allocation',
      category: 'Family Concierge',
      accessMode: 'Private Preview',
      houseName: 'IKLA Kids',
      image: 'assets/kids/ikla-kids-core-collection-hero.webp'
    });
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
    setInquiryProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#14181B] selection:bg-[#013220]/20 selection:text-[#013220]">
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO: ikla-kids-core-collection-hero.webp */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#0D1612]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={getAssetPath('assets/kids/ikla-kids-core-collection-hero.webp')}
            alt="Four children wearing coordinated IKLA Kids sweatsuit essentials in a warm architectural studio"
            className="w-full h-full object-cover transition-transform duration-1000 scale-100 filter brightness-[0.82] contrast-[1.04]"
            style={{ objectPosition: 'center 25%' }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1612] via-[#0D1612]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1612]/80 via-transparent to-transparent pointer-events-none hidden md:block" />
        </div>

        {/* Top Breadcrumb Header */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 w-full flex items-center justify-between text-xs tracking-widest text-neutral-300">
          <div className="flex items-center gap-2">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer uppercase text-[10px] tracking-[0.2em]"
            >
              IKLA Maison
            </button>
            <ChevronRight className="w-3 h-3 text-neutral-500" />
            <span className="text-[#D4AF57] uppercase text-[10px] tracking-[0.2em] font-medium">
              IKLA Kids
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 hidden sm:inline">
            The First Inheritance
          </span>
        </div>

        {/* Hero Narrative Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20 w-full">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] font-medium backdrop-blur-md border border-[#013220]/40 text-emerald-100 bg-[#013220]/60 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF57] animate-pulse" />
              <span>IKLA KIDS · THE FIRST INHERITANCE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cormorant font-light text-white tracking-tight leading-[1.02]">
              The Standard Starts Early.
            </h1>

            <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed max-w-xl font-manrope">
              Considered essentials for the next generation—built with the same discipline, material integrity and quiet confidence as the House.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('kids-core-collection');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3.5 bg-[#013220] hover:bg-[#02442c] text-white border border-[#D4AF57]/40 transition-all text-xs uppercase tracking-[0.22em] font-medium cursor-pointer rounded-xs shadow-xl flex items-center gap-2"
              >
                <span>Explore the Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleOpenInquiry()}
                className="px-7 py-3.5 border border-white/40 hover:bg-white/10 text-white transition-all text-xs uppercase tracking-[0.22em] font-medium cursor-pointer rounded-xs backdrop-blur-xs"
              >
                Join the Family List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAISON MANIFESTO STRIP */}
      {/* ========================================================================= */}
      <section className="py-12 px-6 bg-[#FAF6F0] border-y border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#013220] font-semibold">
              Canon of Permanence
            </span>
            <p className="text-sm font-cormorant sm:text-lg text-[#14181B] font-normal">
              "Internationally Known. Locally Accepted. A generational wardrobe built without compromise."
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-neutral-600 uppercase tracking-widest font-mono">
            <span>Ages 4Y — 14Y</span>
            <span className="w-1 h-1 rounded-full bg-[#013220]" />
            <span>450–500 GSM Cotton</span>
            <span className="w-1 h-1 rounded-full bg-[#013220]" />
            <span>Private Allocation</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE ESSENTIALS SUITE: 6 SQUARE CARDS */}
      {/* ========================================================================= */}
      <section id="kids-core-collection" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E1D5]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#013220]/10 border border-[#013220]/20 text-[#013220] text-[10px] uppercase tracking-[0.25em] font-medium rounded-xs mb-3">
              <Sparkles className="w-3 h-3 text-[#D4AF57]" />
              <span>Repeatable Youth Wardrobe</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#14181B]">
              The Core Youth Essentials
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-md font-manrope mt-3 md:mt-0 leading-relaxed">
            Engineered with reinforced seams, unbleached organic bases, and tactile softness. Every suite is an individual set or coordinated accessory collection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {IKLA_KIDS_CORE_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onSelectBrand={() => {}}
              onOpenInquiry={handleOpenInquiry}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE ATELIER DROP: CUSTOM VELOUR CAPSULE */}
      {/* ========================================================================= */}
      <section id="the-atelier-drop" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#0E1713] text-white border-y border-[#D4AF57]/30 relative overflow-hidden">
        {/* Subtle architectural ambient background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#013220]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Editorial Portrait Column */}
            <div className="lg:col-span-6">
              <div className="relative bg-[#15211B] border border-[#D4AF57]/30 p-3 sm:p-4 rounded-xs shadow-2xl overflow-hidden group">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-xs relative">
                  <img
                    src={getAssetPath('assets/kids/ikla-kids-custom-velour-limited-drop.webp')}
                    alt="Three children modeling custom jewel-tone IKLA velour tracksuits in sapphire, emerald, and ruby tones"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-2xs border border-[#D4AF57]/40">
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF57] font-mono">
                      Limited Drop · Custom Velour
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF57]/10 border border-[#D4AF57]/30 text-[#D4AF57] text-[10px] uppercase tracking-[0.28em] font-medium rounded-xs">
                <span>The Atelier Drop</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cormorant font-light text-white leading-tight">
                The Jewel-Tone Velour Capsule
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope">
                A separate limited-drop showcase reserved for ceremonial occasions. Custom-dyed silk-cotton velour woven in Como, Italy, finished with hand-dipped gold aglets, engraved zipper pulls, and bespoke tonal embroidery.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-[#D4AF57] shrink-0" />
                  <span>Available in three jewel colorways: Sapphire Midnight, Emerald Jewel, and Deep Ruby</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-[#D4AF57] shrink-0" />
                  <span>Hand-finished gold cord aglets and custom-milled brass hardware</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-[#D4AF57] shrink-0" />
                  <span>Numbered certificate of bespoke allocation included with each presentation case</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleOpenInquiry(customVelourProduct)}
                  className="px-8 py-4 bg-[#D4AF57] hover:bg-[#E5BF67] text-[#080808] transition-all text-xs uppercase tracking-[0.22em] font-semibold cursor-pointer rounded-xs shadow-xl flex items-center gap-2"
                >
                  <span>Request Drop Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-neutral-400 font-mono">
                  Allocation Status: By Private Invitation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. GENERATIONAL INHERITANCE STATEMENT */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto text-center space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#013220]/10 border border-[#013220]/20 flex items-center justify-center mx-auto text-[#013220]">
          <Shield className="w-5 h-5" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#013220] font-semibold block">
          Generational Integrity
        </span>
        <h3 className="text-2xl sm:text-4xl font-cormorant font-normal text-[#14181B] max-w-2xl mx-auto leading-snug">
          "Pieces conceived not as disposable playwear, but as the young patron's first encounter with genuine material integrity."
        </h3>
        <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-xl mx-auto leading-relaxed font-manrope">
          Pre-shrunk fibers, clean French piped seams, and natural plant-based dyes ensure every garment withstands everyday movement while aging gracefully into family keepsakes.
        </p>
        <div className="pt-4">
          <button
            onClick={onNavigateCollection}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#013220] hover:text-[#D4AF57] transition-colors cursor-pointer"
          >
            <span>Explore Entire Maison Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Concierge VIP Inquiry Modal */}
      <VIPInquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        product={inquiryProduct}
      />
    </div>
  );
}
