import React, { useEffect, useRef } from 'react';
import { X, ChevronRight, KeyRound, Globe, Droplets, ExternalLink } from 'lucide-react';
import { FASHION_HOUSES, BRANDS } from '../data/brands';
import { EXTERNAL_LINKS } from '../data/externalLinks';

export default function MobileMenu({ isOpen, onClose, onNavigate, currentView, currentBrandId }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKeyDown);
    closeButtonRef.current?.focus();
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over panel */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className="fixed inset-y-0 left-0 w-full max-w-xs sm:max-w-sm bg-[#0d0e11] border-r border-neutral-800 shadow-2xl flex flex-col justify-between text-neutral-100 animate-fade-in"
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
          <div className="text-left">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C8A97E] block">Multi-Brand Platform</span>
            <span className="text-base font-serif tracking-widest text-white">IKLA MAISON</span>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
          {/* Main Links */}
          <div className="space-y-2">
            <button
              onClick={() => {
                onNavigate('home');
                onClose();
              }}
              className={`w-full text-left py-2.5 px-3 uppercase tracking-[0.2em] text-xs font-medium transition-colors ${
                currentView === 'home' ? 'text-[#C8A97E] bg-white/5' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Master Home
            </button>

            <button
              onClick={() => {
                onNavigate('collection');
                onClose();
              }}
              className={`w-full text-left py-2.5 px-3 uppercase tracking-[0.2em] text-xs font-medium transition-colors ${
                currentView === 'collection' ? 'text-[#C8A97E] bg-white/5' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Shop All Collections
            </button>

            <button
              onClick={() => {
                onNavigate('collection', null, 'Accessories');
                onClose();
              }}
              className="w-full text-left py-2.5 px-3 uppercase tracking-[0.2em] text-xs font-medium text-neutral-300 hover:text-white transition-colors"
            >
              Accessories Collection
            </button>

            <button
              onClick={() => {
                onNavigate('appointments');
                onClose();
              }}
              className={`w-full text-left py-2.5 px-3 uppercase tracking-[0.2em] text-xs font-medium transition-colors ${
                currentView === 'appointments' ? 'text-[#C8A97E] bg-white/5' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Private Appointments
            </button>
          </div>

          {/* Fashion Houses */}
          <div className="border-t border-neutral-800/80 pt-4">
            <div className="flex items-center justify-between px-3 mb-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E] font-medium">
                Fashion Houses
              </span>
              <span className="text-[9px] text-neutral-500 font-mono">Maison Directory</span>
            </div>
            <div className="space-y-1">
              {FASHION_HOUSES.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => {
                    onNavigate('brand', brand.id);
                    onClose();
                  }}
                  className={`w-full text-left p-2.5 flex items-center justify-between rounded-xs transition-all group cursor-pointer ${
                    currentView === 'brand' && currentBrandId === brand.id
                      ? 'bg-white/10 text-white border-l-2 border-[#C8A97E]'
                      : 'hover:bg-white/5 text-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 p-1">
                      <img
                        src={brand.logos.crestLight}
                        alt=""
                        className="w-full h-full object-contain filter brightness-110"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white group-hover:text-[#C8A97E] transition-colors tracking-wide">
                        {brand.name}
                      </div>
                      <div className="text-[10px] text-neutral-400 font-light truncate max-w-[190px]">
                        {brand.tagline}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Connected hospitality platform */}
          <div className="border-t border-neutral-800/80 pt-4">
            <div className="flex items-center justify-between px-3 mb-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#E26D35] font-medium">
                Connected World
              </span>
              <span className="text-[9px] text-neutral-500 font-mono">Separate Platform</span>
            </div>
            <div className="space-y-1">
              {[BRANDS['my-drink-family']].map((brand) => (
                <button key={brand.id} onClick={() => { onNavigate('brand', brand.id); onClose(); }} className="w-full text-left p-2.5 flex items-center justify-between rounded-xs hover:bg-white/5 text-neutral-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 p-1">
                      <img
                        src={brand.logos.crestLight}
                        alt=""
                        className="w-full h-full object-contain filter brightness-110"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white group-hover:text-[#E26D35] transition-colors tracking-wide">
                        {brand.name}
                      </div>
                      <div className="text-[10px] text-neutral-400 font-light truncate max-w-[190px]">
                        {brand.tagline}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-transform group-hover:translate-x-1" />
                </button>
              ))}
              <a href={EXTERNAL_LINKS.myDrinkFamilyWebsite} target="_blank" rel="noreferrer" className="p-2.5 flex items-center justify-between text-xs text-neutral-300 hover:text-white">Visit Website <ExternalLink className="w-3.5 h-3.5" /></a>
              <a href={EXTERNAL_LINKS.myDrinkFamilyApp} target="_blank" rel="noreferrer" className="p-2.5 flex items-center justify-between text-xs text-neutral-300 hover:text-white">Open App <ExternalLink className="w-3.5 h-3.5" /></a>
            </div>
          </div>

          {/* Extension: IKLA Water */}
          <div className="border-t border-neutral-800/80 pt-3">
            <button
              onClick={() => {
                onNavigate('brand', 'ikla-water');
                onClose();
              }}
              className={`w-full text-left p-2.5 flex items-center justify-between rounded-xs transition-all group cursor-pointer ${
                currentView === 'brand' && currentBrandId === 'ikla-water'
                  ? 'bg-white/10 text-white border-l-2 border-[#5E8896]'
                  : 'hover:bg-white/5 text-neutral-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#1A2830] border border-[#5E8896]/40 flex items-center justify-center shrink-0 p-1 text-[#5E8896]">
                  <Droplets className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white group-hover:text-[#5E8896] transition-colors tracking-wide">
                    IKLA Water
                  </div>
                  <div className="text-[10px] text-neutral-400 font-light truncate max-w-[190px]">
                    Pure Mineral Glass Extension
                  </div>
                </div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Company Links */}
          <div className="border-t border-neutral-800/80 pt-4 space-y-2">
            <button
              onClick={() => {
                onNavigate('about');
                onClose();
              }}
              className={`w-full text-left py-2 px-3 text-xs uppercase tracking-widest transition-colors ${
                currentView === 'about' ? 'text-[#C8A97E]' : 'text-neutral-400 hover:text-white'
              }`}
            >
              About The Maison
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                onClose();
              }}
              className={`w-full text-left py-2 px-3 text-xs uppercase tracking-widest transition-colors ${
                currentView === 'contact' ? 'text-[#C8A97E]' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Client Concierge
            </button>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-neutral-800 bg-[#0a0b0d] space-y-3">
          <button
            onClick={() => {
              onNavigate('contact');
              onClose();
            }}
            className="w-full py-3 px-4 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs uppercase tracking-widest text-white flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-[#C8A97E]" />
              <span>Request Private Access</span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#C8A97E]" />
          </button>

          <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2 px-1">
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <span>International Client Relations</span>
            </span>
            <span>By Appointment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
