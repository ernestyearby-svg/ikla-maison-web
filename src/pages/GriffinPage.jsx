import React, { useState } from 'react';
import { ArrowRight, Shield, ChevronRight, Check, Compass, Plane, Anchor, Car, Home, X, Sparkles } from 'lucide-react';
import { getAssetPath } from '../utils/assets.js';
import { PAGE_COLOR_SYSTEMS } from '../data/designTokens';

export default function GriffinPage({ onNavigateHome, onNavigateCollection }) {
  const [isCommissionModalOpen, setIsCommissionModalOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState('Automotive · Bespoke Cabin Studies');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    region: 'North America',
    domain: 'Automotive · Bespoke Cabin Studies',
    timeline: 'Within 6–12 months',
    notes: '',
    honeypot: ''
  });

  const colors = PAGE_COLOR_SYSTEMS['griffin-edition'];

  const commissionDomains = [
    {
      id: 'automotive',
      title: 'Automotive · Bespoke Cabin Studies',
      domain: 'Mobility & Grand Touring',
      image: 'assets/griffin/griffin-automotive-commission.webp',
      alt: 'Bespoke green leather grand touring interior with a gold griffin medallion and walnut veneers',
      narrative: 'Tailored grand touring interiors engineered in partnership with premier coachbuilders. Hand-selected aniline hides, bookmatched walnut veneers, and solid brass tactile switchgear.',
      attributes: ['Hand-stitched saddle leather', 'Custom griffin seal medallion', 'Acoustic micro-perforation']
    },
    {
      id: 'maritime',
      title: "Maritime · Owner's Environments",
      domain: 'Superyacht & Naval Architecture',
      image: 'assets/griffin/griffin-maritime-commission.webp',
      alt: "Bespoke superyacht owner's cabin with deep green textiles, brushed metal fixtures, and subtle griffin detailing",
      narrative: "Private suites and salon atmospheres for transoceanic vessels. Marine-grade climate-calibrated textiles, teak-inlaid joinery, and restrained architectural illumination.",
      attributes: ['Salt-resistant titanium hardware', 'Custom woven deep green cashmere blankets', 'Integrated hidden illumination']
    },
    {
      id: 'residence',
      title: 'Residence · Complete Interior Commissions',
      domain: 'Architectural Living Environments',
      image: 'assets/griffin/griffin-residence-aviation-commission.webp',
      alt: 'Residential architectural material study with restrained griffin detailing',
      narrative: 'Comprehensive private residence commissions uniting spatial acoustics, bespoke seating plinths, hand-tufted wool rugs, and architectural bronze detailing into unified sanctuaries.',
      attributes: ['Full spatial material direction', 'Bespoke travertine furniture monoliths', 'Archival wall textile installations']
    },
    {
      id: 'aviation',
      title: 'Aviation · Private Cabin Concepts',
      domain: 'Long-Range Executive Aviation',
      image: 'assets/griffin/griffin-residence-aviation-commission.webp',
      alt: 'Private aircraft cabin and material study with restrained griffin detailing',
      narrative: 'Ultra-long-range cabin environments designed for sustained transcontinental composure. Weight-optimized natural fibers, whisper-soft leather seating, and ergonomic rest suites.',
      attributes: ['FAA/EASA certified luxury textiles', 'Custom executive workstation inlays', 'Low-emissivity ambient lighting']
    }
  ];

  const handleOpenModal = (domainTitle = null) => {
    if (domainTitle) {
      setSelectedDomain(domainTitle);
      setFormData(prev => ({ ...prev, domain: domainTitle }));
    }
    setFormSubmitted(false);
    setIsCommissionModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#08090A] text-[#F8F5F0] selection:bg-[#C5A869]/30 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. CINEMATIC ATELIER HERO: griffin-private-commissions-hero.webp */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#060708]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={getAssetPath('assets/griffin/griffin-private-commissions-hero.webp')}
            alt="Dark IKLA Maison commission atelier with a griffin medallion and bespoke mobility concepts"
            className="w-full h-full object-cover transition-transform duration-1000 scale-100 filter brightness-[0.72] contrast-[1.08]"
            style={{ objectPosition: 'center 35%' }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/55 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090A]/85 via-transparent to-transparent pointer-events-none hidden md:block" />
        </div>

        {/* Top Breadcrumb Header */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 w-full flex items-center justify-between text-xs tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer uppercase text-[10px] tracking-[0.2em]"
            >
              IKLA Maison
            </button>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-[#C5A869] uppercase text-[10px] tracking-[0.2em] font-medium">
              Griffin Edition
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 hidden sm:inline">
            Private Commissions Atelier
          </span>
        </div>

        {/* Hero Live Typography */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 sm:pb-24 w-full">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] font-medium backdrop-blur-md border border-[#C5A869]/40 text-[#F5E8D0] bg-[#0A0C0B]/70 shadow-2xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] animate-pulse" />
              <span>IKLA MAISON · GRIFFIN EDITION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cormorant font-light text-white tracking-tight leading-[1.02]">
              One Standard. Every Environment.
            </h1>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl font-manrope">
              A private commission program extending the language of the Maison into mobility, residence, maritime, and aviation.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleOpenModal()}
                className="px-8 py-4 bg-[#C5A869] hover:bg-[#D8BE82] text-[#080808] transition-all text-xs uppercase tracking-[0.22em] font-semibold cursor-pointer rounded-xs shadow-2xl flex items-center gap-2"
              >
                <span>Request a Private Introduction</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] text-neutral-400 font-mono tracking-wide">
                Concept commissions presented by invitation.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ARCHITECTURAL PRINCIPLES BANNER */}
      {/* ========================================================================= */}
      <section className="py-14 px-6 bg-[#0B0E0C] border-y border-[#C5A869]/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A869] font-mono">01 / Mandate</span>
            <h4 className="text-base font-cormorant text-white">Sovereign Scale</h4>
            <p className="text-xs text-neutral-400 font-light font-manrope">Extending bespoke garment craftsmanship into total spatial realms.</p>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A869] font-mono">02 / Material</span>
            <h4 className="text-base font-cormorant text-white">Enduring Substance</h4>
            <p className="text-xs text-neutral-400 font-light font-manrope">Full-grain aniline leather, bookmatched walnut, solid brass, and titanium.</p>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A869] font-mono">03 / Privacy</span>
            <h4 className="text-base font-cormorant text-white">Absolute Discretion</h4>
            <p className="text-xs text-neutral-400 font-light font-manrope">Client identity and project specifications guarded under private protocol.</p>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A869] font-mono">04 / Access</span>
            <h4 className="text-base font-cormorant text-white">By Invitation Only</h4>
            <p className="text-xs text-neutral-400 font-light font-manrope">Strictly limited bespoke commissions allocated annually.</p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE FOUR COMMISSION DOMAINS: 4 TEASER CARDS */}
      {/* ========================================================================= */}
      <section id="commission-domains" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A869]/10 border border-[#C5A869]/30 text-[#C5A869] text-[10px] uppercase tracking-[0.25em] font-medium rounded-xs mb-3">
              <Sparkles className="w-3 h-3 text-[#C5A869]" />
              <span>Special Commission Programs</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-white">
              Commission Environments
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md font-manrope mt-3 md:mt-0 leading-relaxed">
            Presented as concept-direction studies. Each program represents an architectural extension of the Maison into private environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {commissionDomains.map((domain) => (
            <div
              key={domain.id}
              className="bg-[#0F1210] border border-[#C5A869]/25 hover:border-[#C5A869]/60 transition-all duration-300 p-6 sm:p-8 rounded-xs shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-square w-full overflow-hidden rounded-xs relative mb-6 bg-[#08090A]">
                  <img
                    src={getAssetPath(domain.image)}
                    alt={domain.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-2xs border border-[#C5A869]/40">
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A869] font-mono">
                      {domain.domain}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-cormorant font-normal text-white mb-2">
                  {domain.title}
                </h3>

                <p className="text-xs text-neutral-300 font-light leading-relaxed font-manrope mb-6">
                  {domain.narrative}
                </p>

                <div className="space-y-2 py-4 border-t border-neutral-800/80">
                  {domain.attributes.map((attr, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-neutral-400 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                      <span>{attr}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-neutral-800 flex items-center justify-between">
                <button
                  onClick={() => handleOpenModal(domain.title)}
                  className="px-6 py-3 bg-[#131915] hover:bg-[#C5A869] text-white hover:text-black border border-[#C5A869]/40 hover:border-[#C5A869] transition-all text-xs uppercase tracking-[0.2em] font-medium cursor-pointer rounded-xs flex items-center gap-2"
                >
                  <span>Discuss a Commission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] text-neutral-500 font-mono">
                  By Allocation
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CANONICAL GOVERNANCE STATEMENT */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#060708] border-t border-neutral-900 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#C5A869] font-mono block">
            Archival Note
          </span>
          <p className="text-xs text-neutral-400 leading-relaxed font-manrope font-light">
            Griffin Edition is the sovereign commission seal of IKLA Maison. Visual assets represent private concept studies and material direction. All projects are executed through private contractual agreement with certified master partners under singular Maison art direction.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* COMMISSION INQUIRY MODAL */}
      {/* ========================================================================= */}
      {isCommissionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Griffin Edition Commission Inquiry"
            className="bg-[#0E110F] border border-[#C5A869]/40 w-full max-w-xl p-6 sm:p-8 rounded-xs shadow-2xl relative text-[#F8F5F0]"
          >
            <button
              onClick={() => setIsCommissionModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors cursor-pointer p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 mb-6">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A869] font-mono block">
                Private Commission Desk
              </span>
              <h3 className="text-2xl font-cormorant font-normal text-white">
                Request a Private Introduction
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Please submit your preliminary project scope. All inquiries are reviewed directly by the Maison Commission Directorate under strict non-disclosure.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center space-y-4 bg-[#141A16] border border-[#C5A869]/30 rounded-xs">
                <div className="w-12 h-12 rounded-full bg-[#C5A869]/20 border border-[#C5A869] flex items-center justify-center mx-auto text-[#C5A869]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-cormorant text-white">Inquiry Registered</h4>
                <p className="text-xs text-neutral-300 font-light leading-relaxed max-w-sm mx-auto">
                  Your commission preliminary scope has been logged for private concierge review. A senior Maison director will reach out to schedule your private introduction.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsCommissionModalOpen(false)}
                    className="px-6 py-2.5 bg-[#C5A869] text-black text-xs uppercase tracking-widest font-semibold rounded-xs cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-manrope">
                {/* Honeypot anti-spam field */}
                <input
                  type="text"
                  name="website_reference"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-widest text-neutral-400">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Lord / Lady / Mr. / Ms."
                      className="w-full bg-[#141715] border border-neutral-700 focus:border-[#C5A869] px-3.5 py-2.5 rounded-xs text-white outline-hidden transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-widest text-neutral-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@sanctuary.com"
                      className="w-full bg-[#141715] border border-neutral-700 focus:border-[#C5A869] px-3.5 py-2.5 rounded-xs text-white outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-widest text-neutral-400">
                      Region / Residence
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full bg-[#141715] border border-neutral-700 focus:border-[#C5A869] px-3 py-2.5 rounded-xs text-white outline-hidden transition-colors cursor-pointer"
                    >
                      <option value="North America">North America</option>
                      <option value="Europe">Europe</option>
                      <option value="Middle East">Middle East</option>
                      <option value="Asia-Pacific">Asia-Pacific</option>
                      <option value="Other">Other Transcontinental</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-widest text-neutral-400">
                      Commission Domain
                    </label>
                    <select
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      className="w-full bg-[#141715] border border-neutral-700 focus:border-[#C5A869] px-3 py-2.5 rounded-xs text-white outline-hidden transition-colors cursor-pointer"
                    >
                      <option value="Automotive · Bespoke Cabin Studies">Automotive · Bespoke Cabin Studies</option>
                      <option value="Maritime · Owner's Environments">Maritime · Owner's Environments</option>
                      <option value="Residence · Complete Interior Commissions">Residence · Complete Interior Commissions</option>
                      <option value="Aviation · Private Cabin Concepts">Aviation · Private Cabin Concepts</option>
                      <option value="Complete Multi-Environment Commission">Complete Multi-Environment Commission</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase tracking-widest text-neutral-400">
                    Project Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#141715] border border-neutral-700 focus:border-[#C5A869] px-3 py-2.5 rounded-xs text-white outline-hidden transition-colors cursor-pointer"
                  >
                    <option value="Immediate (within 3 months)">Immediate (within 3 months)</option>
                    <option value="Within 6–12 months">Within 6–12 months</option>
                    <option value="Strategic / Long-term (1–2 years)">Strategic / Long-term (1–2 years)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase tracking-widest text-neutral-400">
                    Confidential Scope / Architectural Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly describe the vehicle, vessel, or property scope..."
                    className="w-full bg-[#141715] border border-neutral-700 focus:border-[#C5A869] p-3 rounded-xs text-white outline-hidden transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#C5A869] hover:bg-[#D8BE82] text-black text-xs uppercase tracking-[0.2em] font-semibold rounded-xs shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Commission Introduction</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
