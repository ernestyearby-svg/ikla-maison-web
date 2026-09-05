import React from 'react';
import { Shield, Sparkles, Compass, Users, Heart, ArrowRight } from 'lucide-react';
import { BRAND_LIST } from '../data/brands';

export default function AboutPage({ onSelectBrand, onNavigateContact, onNavigateCollection }) {
  return (
    <div className="w-full bg-[#FAF7F2] text-[#16171A] min-h-screen">
      {/* Editorial Header */}
      <section className="relative py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-[#F4EFE6] border-b border-[#E5DFD5] text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block mb-3">
            Atelier Manifesto
          </span>
          <h1 className="text-4xl sm:text-6xl font-cormorant font-normal text-[#111215] mb-6">
            The Philosophy of IKLA MAISON
          </h1>
          <p className="text-sm sm:text-lg text-[#4A4E57] font-light max-w-2xl mx-auto leading-relaxed font-manrope">
            An architectural luxury collective uniting five independent design houses under a singular standard of uncompromising materiality, disciplined construction, and cultural resonance.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold block mb-2">
              The Origin
            </span>
            <h2 className="text-2xl sm:text-3xl font-cormorant font-normal text-[#111215] mb-4">
              A Multi-Disciplinary Union
            </h2>
            <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed mb-4 font-manrope">
              IKLA MAISON was founded to create an autonomous ecosystem for five complementary design viewpoints. Rather than homogenizing individual brand voices into a singular corporate aesthetic, we preserve the distinct signature of each house while providing shared master-atelier resources and white-glove global client services.
            </p>
            <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
              From the monolithic concrete spaces of modern metropolitan centers to sunlit Mediterranean villas, each collection exists in dialogue with physical architecture and contemporary living.
            </p>
          </div>

          <div className="relative aspect-[4/3] bg-white border border-[#DDD7CB] shadow-md overflow-hidden rounded-xs">
            <img
              src="/assets/ikla-maison/editorial.webp"
              alt="Ikla Maison architectural terrace overlooking the sea"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* The Five Houses Detailed Profiles */}
        <div className="border-t border-[#E5DFD5] pt-16">
          <div className="text-center mb-14">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2">
              The Collectives
            </span>
            <h2 className="text-3xl font-cormorant font-normal text-[#111215]">
              Five Houses, Five Distinct Signatures
            </h2>
          </div>

          <div className="space-y-10">
            {BRAND_LIST.map((brand, idx) => (
              <div
                key={brand.id}
                className="p-8 bg-white border border-[#E5E0D8] rounded-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Background soft watermark crest */}
                <div className="absolute -right-8 -bottom-8 w-44 h-44 opacity-[0.06] pointer-events-none">
                  <img src={brand.logos.crestLight} alt="" className="w-full h-full object-contain" />
                </div>

                <div className="lg:col-span-4 aspect-[4/3] overflow-hidden bg-[#F5F2EC] border border-[#DDD7CB] rounded-xs relative">
                  <img
                    src={brand.assets.collection}
                    alt={brand.alt.collection}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md p-1.5 shadow-xs border border-neutral-200">
                    <img src={brand.logos.crestLight} alt="" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-4 relative z-10">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold">
                        House 0{idx + 1}
                      </span>
                      <span className="text-[11px] text-[#717682] font-mono">{brand.origin}</span>
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-cormorant font-normal text-[#111215]">{brand.name}</h3>
                      <div className="h-6 max-w-[140px] opacity-70">
                        <img src={brand.logos.wordmarkDark} alt="" className="h-full w-auto object-contain" />
                      </div>
                    </div>

                    <p className="text-xs font-serif italic mb-3 font-medium" style={{ color: brand.palette.accent }}>
                      {brand.tagline}
                    </p>
                    <p className="text-xs text-[#50545E] font-light leading-relaxed mb-4 font-manrope">
                      {brand.manifesto}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#EAE5DC]">
                    <div className="flex flex-wrap gap-2">
                      {brand.keywords.map((kw) => (
                        <span key={kw} className="text-[10px] uppercase px-2.5 py-1 bg-[#FAF7F2] border border-[#E0DBD0] text-[#3A3D44] rounded-xs font-medium">
                          {kw}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => onSelectBrand(brand.id)}
                      className={`px-5 py-2.5 ${brand.buttonStyle} flex items-center gap-1.5 cursor-pointer rounded-xs shadow-md`}
                    >
                      <span>Explore House</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Standards & Craftsmanship Charter */}
        <div className="border-t border-[#E5DFD5] pt-16">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2">
              Our Charter
            </span>
            <h2 className="text-3xl font-cormorant font-normal text-[#111215]">
              Atelier Standards & Sustainability
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-[#E2DDD3] space-y-3 rounded-xs shadow-xs">
              <Shield className="w-6 h-6 text-[#8C6D3F]" />
              <h4 className="text-base font-medium text-[#111215]">Limited Non-Industrial Runs</h4>
              <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                Garments are produced in controlled allocations to eliminate deadstock waste and preserve exclusivity and artisanal precision.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E2DDD3] space-y-3 rounded-xs shadow-xs">
              <Compass className="w-6 h-6 text-[#8C6D3F]" />
              <h4 className="text-base font-medium text-[#111215]">Natural Fiber Integrity</h4>
              <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                We prioritize certified Belgian flax, custom-spun organic cotton fleece, virgin merino wool, and natural horn and brass hardware.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E2DDD3] space-y-3 rounded-xs shadow-xs">
              <Heart className="w-6 h-6 text-[#8C6D3F]" />
              <h4 className="text-base font-medium text-[#111215]">Ethical Artisan Labor</h4>
              <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                Our partnered ateliers in Italy, Portugal, Japan, and the United States maintain living wages, master apprentice guilds, and safe conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Client Concierge CTA */}
        <div className="border-t border-[#E5DFD5] pt-16 text-center space-y-6">
          <h3 className="text-2xl font-cormorant text-[#111215] font-normal">
            Experience the Five Houses in Person
          </h3>
          <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-md mx-auto font-manrope">
            Schedule a private salon appointment or consult with our master stylists for bespoke sizing and wardrobe curation.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onNavigateContact}
              className="px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold bg-[#0F172A] hover:bg-[#1E293B] text-white transition-all cursor-pointer shadow-lg rounded-xs"
            >
              Contact Concierge
            </button>
            <button
              onClick={onNavigateCollection}
              className="px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#111215] border border-[#111215] hover:bg-[#111215] hover:text-white transition-all cursor-pointer rounded-xs"
            >
              View Catalogue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
