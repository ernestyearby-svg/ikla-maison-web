import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Compass, Shield, Sparkles, Check, Droplets, Clock, ExternalLink } from 'lucide-react';
import { IKLA_MAISON_APPOINTMENTS_PRODUCTS, IKLA_TRAVEL_RITUALS_PRODUCTS, IKLA_APPOINTMENTS_PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import VIPInquiryModal from '../components/VIPInquiryModal';
import { getAssetPath } from '../utils/assets.js';
import { PAGE_COLOR_SYSTEMS } from '../data/designTokens';

export default function PrivateAppointmentsPage({
  onSelectProduct,
  onNavigateHome,
  onNavigateCollection,
  onSelectBrand
}) {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState(null);

  const colors = PAGE_COLOR_SYSTEMS['private-appointments'];

  const handleOpenInquiry = (product = null) => {
    setInquiryProduct(product || {
      id: 'ikla-private-appointment-general',
      name: 'Maison Private Appointment Allocation',
      category: 'Concierge Appointment',
      accessMode: 'Reserved by Request',
      houseName: 'IKLA Maison',
      image: 'assets/appointments/ikla-appointments-editorial-banner.webp'
    });
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
    setInquiryProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0A0B0D] selection:bg-[#C5A869]/30 selection:text-[#0A0B0D]">
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#0A0B0D] text-white">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={getAssetPath('assets/appointments/ikla-appointments-editorial-banner.webp')}
            alt="IKLA accessories arranged on a dark walnut dressing table in morning light"
            className="w-full h-full object-cover transition-transform duration-1000 scale-100 filter brightness-[0.78] contrast-[1.06]"
            style={{ objectPosition: 'center 38%' }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D]/85 via-[#0A0B0D]/30 to-transparent pointer-events-none hidden md:block" />
        </div>

        {/* Top Breadcrumb Header */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 w-full flex items-center justify-between text-xs tracking-widest text-neutral-300">
          <div className="flex items-center gap-2">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#DFBF95] transition-colors cursor-pointer uppercase text-[10px] tracking-[0.2em]"
            >
              IKLA Maison
            </button>
            <ChevronRight className="w-3 h-3 text-neutral-500" />
            <button
              onClick={onNavigateCollection}
              className="hover:text-[#DFBF95] transition-colors cursor-pointer uppercase text-[10px] tracking-[0.2em] hidden sm:inline"
            >
              Collection
            </button>
            <ChevronRight className="w-3 h-3 text-neutral-500 hidden sm:inline" />
            <span className="text-[#C5A869] uppercase text-[10px] tracking-[0.2em] font-medium">
              Private Appointments
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-mono hidden sm:inline">
            Protocol of Finishing · 2026
          </span>
        </div>

        {/* Hero Live Typography & Statement */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20 w-full">
          <div className="max-w-2xl space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] font-medium backdrop-blur-md border border-[#C5A869]/40 text-[#DFBF95] bg-black/60 shadow-2xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] animate-pulse" />
              <span>IKLA MAISON · PRIVATE APPOINTMENTS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cormorant font-light text-white tracking-tight leading-[1.02]">
              The Final Measure of the House.
            </h1>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl font-manrope">
              A restrained collection of personal objects selected to complete the IKLA wardrobe and accompany the private rituals of movement, arrival, and occasion.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('maison-appointments');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-[#C5A869] hover:bg-[#D8BE82] text-black transition-all text-xs uppercase tracking-[0.22em] font-semibold cursor-pointer rounded-xs shadow-2xl flex items-center gap-2"
              >
                <span>Explore the Appointments</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleOpenInquiry()}
                className="px-8 py-4 border border-white/40 hover:bg-white/10 text-white transition-all text-xs uppercase tracking-[0.22em] font-medium cursor-pointer rounded-xs backdrop-blur-xs"
              >
                Request Private Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAISON STATEMENT & CANON STRIP */}
      {/* ========================================================================= */}
      <section className="py-12 px-6 bg-[#F4EFE6] border-y border-[#E2DDD3]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#0F2E22] font-semibold font-mono">
              The Canon of Finishing
            </span>
            <p className="text-sm sm:text-base font-cormorant text-[#111215] font-normal">
              "Every final detail carries intention—from the objects kept close to the pieces selected for the occasion."
            </p>
          </div>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-[#50545E] font-mono shrink-0">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F2E22]" />
              Maison Appointments (4)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
              Travel Rituals (4)
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. GROUP 1: MAISON APPOINTMENTS PRODUCT GRID */}
      {/* ========================================================================= */}
      <section id="maison-appointments" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E0DBD0]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F2E22]/10 border border-[#0F2E22]/20 text-[#0F2E22] text-[10px] uppercase tracking-[0.25em] font-medium rounded-xs mb-3">
              <span>Finishing Protocol · 01</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215]">
              Maison Appointments
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-md font-manrope mt-3 md:mt-0 leading-relaxed">
            Architectural optics, Como silk neckwear, hand-carved black onyx jewelry, and French box calfskin waist and pocket essentials.
          </p>
        </div>

        {/* 4 Square 1:1 Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IKLA_MAISON_APPOINTMENTS_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onSelectBrand={onSelectBrand}
              onOpenInquiry={handleOpenInquiry}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DRESSING-SALON EDITORIAL TRANSITION BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#0E1012] text-white border-y border-[#C5A869]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="relative rounded-xs overflow-hidden border border-white/10 group aspect-16/9 sm:aspect-21/9 max-h-[460px] w-full">
            <img
              src={getAssetPath('assets/appointments/ikla-appointments-editorial-banner.webp')}
              alt="IKLA accessories arranged on a dark walnut dressing table in morning light"
              className="w-full h-full object-cover filter brightness-[0.85] transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ objectPosition: 'center 42%' }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1012] via-[#0E1012]/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-xl">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFBF95] font-mono block">
                  THE RITUAL OF PREPARATION
                </span>
                <h3 className="text-2xl sm:text-4xl font-cormorant font-light text-white leading-tight">
                  Considered Before Arrival.
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light font-manrope leading-relaxed">
                  Every final detail carries intention—from the objects kept close to the pieces selected for the occasion.
                </p>
              </div>
              <span className="text-[10px] text-neutral-400 font-mono tracking-wider hidden md:inline shrink-0">
                Walnut Dressing Salon · Milan Atelier
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. GROUP 2: PRIVATE TRAVEL RITUALS PRODUCT GRID */}
      {/* ========================================================================= */}
      <section id="travel-rituals" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E0DBD0]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A869]/10 border border-[#C5A869]/30 text-[#8C6D3F] text-[10px] uppercase tracking-[0.25em] font-medium rounded-xs mb-3">
              <span>Finishing Protocol · 02</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215]">
              Private Travel Rituals
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-md font-manrope mt-3 md:mt-0 leading-relaxed">
            Transcontinental document folios, cushioned horological vaults, perforated lambskin driving gear, and turned-walnut wet-weather shelter.
          </p>
        </div>

        {/* 4 Square 1:1 Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IKLA_TRAVEL_RITUALS_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onSelectBrand={onSelectBrand}
              onOpenInquiry={handleOpenInquiry}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INTERNATIONAL-TRAVEL EDITORIAL TRANSITION BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#0E1012] text-white border-y border-[#C5A869]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="relative rounded-xs overflow-hidden border border-white/10 group aspect-16/9 sm:aspect-21/9 max-h-[460px] w-full">
            <img
              src={getAssetPath('assets/appointments/ikla-private-travel-editorial-banner.webp')}
              alt="Sophisticated couple crossing a modern international travel lounge"
              className="w-full h-full object-cover filter brightness-[0.85] transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ objectPosition: 'center 35%' }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1012] via-[#0E1012]/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-xl">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFBF95] font-mono block">
                  PRIVATE TRAVEL RITUALS
                </span>
                <h3 className="text-2xl sm:text-4xl font-cormorant font-light text-white leading-tight">
                  Known Before Arrival.
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light font-manrope leading-relaxed">
                  Considered objects for movement through the world—quietly marked by the House.
                </p>
              </div>
              <span className="text-[10px] text-neutral-400 font-mono tracking-wider hidden md:inline shrink-0">
                Transcontinental Transit · Paris — New York
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PRIVATE CLIENT SERVICES INVITATION */}
      {/* ========================================================================= */}
      <section id="private-client-services" className="py-28 px-6 sm:px-8 lg:px-12 bg-[#08090B] text-white text-center border-t border-[#C5A869]/30 relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#0F2E22]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#C5A869]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="w-12 h-12 rounded-full bg-[#C5A869]/10 border border-[#C5A869]/40 flex items-center justify-center mx-auto text-[#C5A869]">
            <Compass className="w-5 h-5" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.35em] text-[#DFBF95] font-semibold block font-mono">
            PRIVATE CLIENT SERVICES
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cormorant font-light text-white leading-tight">
            Reserved by Request.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto leading-relaxed font-manrope">
            Private Appointments are presented through limited allocation, special order, and invitation-only previews.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleOpenInquiry()}
              className="px-8 py-4 bg-[#C5A869] hover:bg-[#D8BE82] text-black text-xs uppercase tracking-[0.22em] font-semibold rounded-xs shadow-2xl transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Request an Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onNavigateCollection}
              className="px-7 py-4 border border-white/30 hover:bg-white/10 text-white text-xs uppercase tracking-[0.22em] font-medium rounded-xs transition-all cursor-pointer"
            >
              Explore Full Collection
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 text-[10px] uppercase tracking-widest text-neutral-400 font-mono pt-4">
            <span>Special Order</span>
            <span>•</span>
            <span>Private Allocation</span>
            <span>•</span>
            <span>Confidential Care</span>
          </div>
        </div>
      </section>

      {/* Dedicated Concierge Inquiry Modal */}
      <VIPInquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        product={inquiryProduct}
      />
    </div>
  );
}
