import React, { useState, useEffect, useRef } from 'react';
import { Menu, KeyRound, Search, ChevronDown, ArrowRight, X, Droplets, ExternalLink, Sparkles } from 'lucide-react';
import { BRANDS, FASHION_HOUSES } from '../data/brands';
import { EXTERNAL_LINKS } from '../data/externalLinks';

export default function Navbar({
  currentView,
  currentBrandId,
  onNavigate,
  onOpenMobileMenu,
  searchQuery,
  onSearchChange,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  const openDropdown = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsBrandsDropdownOpen(true);
  };

  const closeDropdown = (delay = 200) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsBrandsDropdownOpen(false);
    }, delay);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsBrandsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const currentBrand = currentView === 'brand' && currentBrandId ? BRANDS[currentBrandId] : null;
  const activeAccent = currentBrand ? currentBrand.navAccent : '#C8A97E';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#07080a] text-neutral-400 border-b border-neutral-800/80 py-2 px-4 text-center text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-light flex items-center justify-center gap-3">
        <span className="hidden sm:inline text-[#C8A97E]">•</span>
        <span>Private Collections · Access by Request</span>
        <span className="hidden sm:inline text-[#C8A97E]">•</span>
        <span className="hidden md:inline text-neutral-300">Internationally Known · Locally Accepted</span>
        <span className="hidden md:inline text-[#C8A97E]">•</span>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0b0d]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0a0b0d]/95 to-[#0a0b0d]/70 backdrop-blur-sm border-b border-white/10 py-4.5'
        }`}
      >
        {/* Dynamic active house indicator line */}
        {currentBrand && (
          <div
            className="absolute bottom-0 left-0 right-0 h-[1.5px] transition-all duration-500 shadow-[0_0_12px_var(--accent-glow)]"
            style={{
              backgroundColor: activeAccent,
              '--accent-glow': currentBrand.glowColor,
            }}
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Left section: Hamburger (Mobile) + The Houses dropdown (Desktop) */}
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenMobileMenu}
              aria-label="Open mobile navigation menu"
              className="lg:hidden p-2 text-neutral-300 hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Desktop Brand Switcher Dropdown */}
            <div
              ref={dropdownRef}
              className="relative hidden lg:block"
              onMouseEnter={openDropdown}
              onMouseLeave={() => closeDropdown(200)}
            >
              <button
                data-testid="the-houses-dropdown-trigger"
                onClick={() => setIsBrandsDropdownOpen((prev) => !prev)}
                onMouseEnter={openDropdown}
                aria-expanded={isBrandsDropdownOpen}
                aria-haspopup="menu"
                className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-[#C8A97E] py-2 transition-colors cursor-pointer group"
              >
                <span>The Houses</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#C8A97E] transition-transform duration-200" />
              </button>

              {/* Mega Dropdown Panel */}
              {isBrandsDropdownOpen && (
                <div
                  data-testid="mega-dropdown-panel"
                  onMouseEnter={openDropdown}
                  onMouseLeave={() => closeDropdown(200)}
                  className="absolute top-full left-0 mt-2 w-[760px] bg-[#0e1014]/98 backdrop-blur-xl border border-neutral-800/90 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-5 animate-fade-in z-50 rounded-xs before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {/* Column 1: Fashion Houses */}
                    <div>
                      <div className="flex items-center justify-between px-2 pb-2.5 border-b border-neutral-800 text-[9px] uppercase tracking-[0.3em] text-[#C8A97E] font-medium">
                        <span>Fashion Houses</span>
                        <span className="text-[9px] text-neutral-500 font-normal">Maison Directory</span>
                      </div>
                      <div className="mt-2 space-y-1">
                        {FASHION_HOUSES.map((b) => (
                          <button
                            key={b.id}
                            onClick={() => {
                              onNavigate('brand', b.id);
                              setIsBrandsDropdownOpen(false);
                            }}
                            className="w-full text-left p-2 hover:bg-white/[0.04] border border-transparent hover:border-neutral-700/60 rounded-xs transition-all flex items-center justify-between group cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 p-1 group-hover:border-[#C8A97E]/50 transition-colors">
                                <img
                                  src={b.logos.crestLight}
                                  alt=""
                                  className="w-full h-full object-contain filter brightness-110 group-hover:scale-105 transition-transform"
                                  loading="lazy"
                                />
                              </div>
                              <div>
                                <div className="text-xs font-medium text-white group-hover:text-[#C8A97E] transition-colors tracking-[0.06em]">
                                  {b.name}
                                </div>
                                <div className="text-[10px] text-neutral-400 font-light truncate max-w-[220px]">
                                  {b.tagline}
                                </div>
                              </div>
                            </div>
                            <span className="text-[10px] text-neutral-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex items-center gap-1">
                              <ArrowRight className="w-3 h-3" />
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Extensions and connected platforms */}
                    <div>
                      <div className="flex items-center justify-between px-2 pb-2.5 border-b border-neutral-800 text-[9px] uppercase tracking-[0.3em] text-[#D4A657] font-medium">
                        <span>Extensions & Private Worlds</span>
                        <span className="text-[9px] text-neutral-500 font-normal">Distinct Ateliers</span>
                      </div>
                      <div className="mt-2 space-y-1 text-left">
                        <button
                          onClick={() => {
                            onNavigate('griffin');
                            setIsBrandsDropdownOpen(false);
                          }}
                          className="w-full p-2.5 hover:bg-white/[0.04] border border-transparent hover:border-[#D4A657]/40 rounded-xs flex items-center justify-between group cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#12110D] border border-[#D4A657]/40 flex items-center justify-center shrink-0 text-[#D4A657]">
                              <Sparkles className="w-4 h-4" />
                            </div>
                            <div>
                              <strong className="block text-xs text-white group-hover:text-[#D4A657] transition-colors">The Griffin Edition</strong>
                              <span className="text-[10px] text-neutral-400">Bespoke mobility & architecture</span>
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#D4A657] group-hover:translate-x-1 transition-all" />
                        </button>

                        <button
                          onClick={() => {
                            onNavigate('appointments');
                            setIsBrandsDropdownOpen(false);
                          }}
                          className="w-full p-2.5 hover:bg-white/[0.04] border border-transparent hover:border-[#C8A97E]/40 rounded-xs flex items-center justify-between group cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 text-[#C8A97E]">
                              <KeyRound className="w-4 h-4" />
                            </div>
                            <div>
                              <strong className="block text-xs text-white group-hover:text-[#C8A97E] transition-colors">Private Appointments</strong>
                              <span className="text-[10px] text-neutral-400">Accessories by confidential request</span>
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#C8A97E] group-hover:translate-x-1 transition-all" />
                        </button>

                        <button
                          onClick={() => {
                            onNavigate('kids');
                            setIsBrandsDropdownOpen(false);
                          }}
                          className="w-full p-2.5 hover:bg-white/[0.04] border border-transparent hover:border-[#013220]/60 rounded-xs flex items-center justify-between group cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#0D1612] border border-[#013220]/60 flex items-center justify-center shrink-0 text-[#C8A97E]">
                              <Sparkles className="w-4 h-4 text-[#8C9B8F]" />
                            </div>
                            <div>
                              <strong className="block text-xs text-white group-hover:text-[#C8A97E] transition-colors">IKLA Kids</strong>
                              <span className="text-[10px] text-neutral-400">Next-generation luxury wardrobe</span>
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#C8A97E] group-hover:translate-x-1 transition-all" />
                        </button>

                        <button
                          onClick={() => {
                            onNavigate('brand', 'ikla-water');
                            setIsBrandsDropdownOpen(false);
                          }}
                          className="w-full p-2.5 hover:bg-white/[0.04] border border-transparent hover:border-[#5E8896]/40 rounded-xs flex items-center justify-between group cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#10181C] border border-[#5E8896]/40 flex items-center justify-center shrink-0 text-[#5E8896]">
                              <Droplets className="w-4 h-4" />
                            </div>
                            <div>
                              <strong className="block text-xs text-white group-hover:text-[#5E8896] transition-colors">IKLA Water</strong>
                              <span className="text-[10px] text-neutral-400">Maison concept extension</span>
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#5E8896] group-hover:translate-x-1 transition-all" />
                        </button>

                        <div className="pt-2 border-t border-neutral-800/80 mt-1">
                          <button
                            onClick={() => {
                              onNavigate('brand', 'my-drink-family');
                              setIsBrandsDropdownOpen(false);
                            }}
                            className="w-full p-2.5 hover:bg-white/[0.04] border border-transparent hover:border-[#E26D35]/40 rounded-xs flex items-center justify-between group cursor-pointer transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 p-1">
                                <img src={BRANDS['my-drink-family'].logos.crestLight} alt="" className="w-full h-full object-contain" />
                              </div>
                              <div>
                                <strong className="block text-xs text-white group-hover:text-[#E26D35] transition-colors">My Drink Family</strong>
                                <span className="text-[10px] text-neutral-400">Connected hospitality platform</span>
                              </div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#E26D35] group-hover:translate-x-1 transition-all" />
                          </button>

                          <div className="grid grid-cols-2 gap-2 mt-1 px-1">
                            <a href={EXTERNAL_LINKS.myDrinkFamilyWebsite} target="_blank" rel="noreferrer" className="p-2 hover:bg-white/[0.04] flex items-center justify-between text-[11px] text-neutral-400 hover:text-white rounded-xs">
                              <span>MDF Website</span> <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href={EXTERNAL_LINKS.myDrinkFamilyApp} target="_blank" rel="noreferrer" className="p-2 hover:bg-white/[0.04] flex items-center justify-between text-[11px] text-neutral-400 hover:text-white rounded-xs">
                              <span>MDF App</span> <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Desktop Direct Links */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] xl:text-xs uppercase tracking-[0.16em] xl:tracking-[0.2em]">
              <button
                onClick={() => onNavigate('collection')}
                className={`relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C8A97E] after:transition-all after:duration-300 ${
                  currentView === 'collection' ? 'text-[#C8A97E] after:w-full font-medium' : 'text-neutral-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                Shop
              </button>
              <button
                onClick={() => onNavigate('griffin')}
                className={`relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#D4A657] after:transition-all after:duration-300 ${
                  currentView === 'griffin' ? 'text-[#D4A657] after:w-full font-medium' : 'text-neutral-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                Griffin Edition
              </button>
              <button
                onClick={() => onNavigate('appointments')}
                className={`relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C8A97E] after:transition-all after:duration-300 ${
                  currentView === 'appointments' ? 'text-[#C8A97E] after:w-full font-medium' : 'text-neutral-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                Appointments
              </button>
              <button
                onClick={() => onNavigate('about')}
                className={`relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C8A97E] after:transition-all after:duration-300 ${
                  currentView === 'about' ? 'text-[#C8A97E] after:w-full font-medium' : 'text-neutral-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                The Maison
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className={`relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C8A97E] after:transition-all after:duration-300 ${
                  currentView === 'contact' ? 'text-[#C8A97E] after:w-full font-medium' : 'text-neutral-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                Concierge
              </button>
            </div>
          </div>

          {/* Center: Brand Wordmark */}
          <div className="text-center cursor-pointer group" onClick={() => onNavigate('home')}>
            <span className="text-xl sm:text-2xl font-cormorant tracking-[0.35em] uppercase text-white font-light group-hover:text-[#DFBF95] transition-colors">
              IKLA MAISON
            </span>
            <span className="block text-[8px] tracking-[0.45em] text-[#C8A97E] uppercase font-light -mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
              Internationally Known · Locally Accepted
            </span>
          </div>

          {/* Right section: Search trigger & Private Access */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen((prev) => !prev)}
              aria-label="Toggle product search bar"
              className="p-2 text-neutral-300 hover:text-white transition-colors"
            >
              {isSearchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
            </button>

            {/* Private client access trigger */}
            <button
              onClick={() => onNavigate('contact')}
              aria-label="Request private access"
              className="relative p-2 text-neutral-200 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
            >
              <KeyRound className="w-4 h-4" />
              <span className="hidden sm:inline text-xs uppercase tracking-[0.15em] font-medium">
                Private Access
              </span>
            </button>
          </div>
        </div>

        {/* Expandable Search Drawer */}
        {isSearchOpen && (
          <div className="w-full bg-[#101114] border-t border-neutral-800 p-4 px-6 sm:px-12 animate-fade-in">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-4 h-4 text-[#C8A97E]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  if (currentView !== 'collection') onNavigate('collection');
                }}
                placeholder="Search across all houses (e.g. trench, linen, hoodie, overcoat, WNNR)..."
                autoFocus
                className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="text-xs text-neutral-500 hover:text-white uppercase tracking-wider"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
