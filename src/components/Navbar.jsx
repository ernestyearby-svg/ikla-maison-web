import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, Search, ChevronDown, ArrowRight, X, Droplets, ExternalLink } from 'lucide-react';
import { BRANDS, BRAND_LIST, FASHION_HOUSES, BEVERAGE_HOUSES } from '../data/brands';
import { useCart } from '../context/CartContext';
import { ECOSYSTEM_LINKS } from '../utils/ecosystemLinks';
import { getAssetPath } from '../utils/assets.js';

export default function Navbar({
  currentView,
  currentBrandId,
  onNavigate,
  onOpenMobileMenu,
  searchQuery,
  onSearchChange,
}) {
  const { totalItems, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
        {currentView === 'appointments' ? (
          <span>Private Salon Appointments · By Confidential Request Only</span>
        ) : (
          <span>Complimentary White-Glove Shipping On Orders Over $350</span>
        )}
        <span className="hidden sm:inline text-[#C8A97E]">•</span>
        <span className="hidden md:inline text-neutral-300">Independent Houses · One Disciplined Maison</span>
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
            <div className="relative hidden lg:block">
              <button
                onClick={() => setIsBrandsDropdownOpen((prev) => !prev)}
                onMouseEnter={() => setIsBrandsDropdownOpen(true)}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-[#C8A97E] py-2 transition-colors cursor-pointer group"
              >
                <span>The Houses</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#C8A97E] transition-transform duration-200" />
              </button>

              {/* Mega Dropdown Panel */}
              {isBrandsDropdownOpen && (
                <div
                  onMouseLeave={() => setIsBrandsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-[760px] bg-[#0e1014]/98 backdrop-blur-xl border border-neutral-800/90 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-5 animate-fade-in z-50 rounded-xs"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {/* Column 1: Fashion Houses */}
                    <div>
                      <div className="flex items-center justify-between px-2 pb-2.5 border-b border-neutral-800 text-[9px] uppercase tracking-[0.3em] text-[#C8A97E] font-medium">
                        <span>Fashion Houses</span>
                        <span className="text-[9px] text-neutral-500 font-normal">5 Houses</span>
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
                                  src={getAssetPath(b.logos.crestLight)}
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

                    {/* Column 2: Beverage Houses & Hospitality */}
                    <div>
                      <div className="flex items-center justify-between px-2 pb-2.5 border-b border-neutral-800 text-[9px] uppercase tracking-[0.3em] text-[#E26D35] font-medium">
                        <span>Beverage Houses & Hospitality</span>
                        <span className="text-[9px] text-neutral-500 font-normal">6 Houses</span>
                      </div>
                      <div className="mt-2 space-y-1">
                        {[BRANDS['my-drink-family'], ...BEVERAGE_HOUSES].map((b) => (
                          <button
                            key={b.id}
                            onClick={() => {
                              onNavigate('brand', b.id);
                              setIsBrandsDropdownOpen(false);
                            }}
                            className="w-full text-left p-2 hover:bg-white/[0.04] border border-transparent hover:border-neutral-700/60 rounded-xs transition-all flex items-center justify-between group cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 p-1 group-hover:border-[#E26D35]/50 transition-colors">
                                <img
                                  src={getAssetPath(b.logos.crestLight)}
                                  alt=""
                                  className="w-full h-full object-contain filter brightness-110 group-hover:scale-105 transition-transform"
                                  loading="lazy"
                                />
                              </div>
                              <div>
                                <div className="text-xs font-medium text-white group-hover:text-[#E26D35] transition-colors tracking-[0.06em]">
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
                  </div>

                  {/* Extension Programs: IKLA Kids, Griffin Edition, Private Appointments, IKLA Water */}
                  <div className="pt-3 border-t border-neutral-800/80 mt-3 grid grid-cols-4 gap-2.5">
                    <button
                      onClick={() => {
                        onNavigate('kids');
                        setIsBrandsDropdownOpen(false);
                      }}
                      className="text-left p-2 hover:bg-white/[0.04] border border-transparent hover:border-[#013220]/60 rounded-xs transition-all flex items-center gap-2.5 group cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#013220]/40 border border-[#013220] flex items-center justify-center shrink-0 text-[#D4AF57] text-[10px] font-bold">
                        K
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white group-hover:text-[#D4AF57] transition-colors">
                          IKLA Kids
                        </div>
                        <div className="text-[9px] text-neutral-400 font-light truncate">
                          The First Inheritance
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        onNavigate('griffin');
                        setIsBrandsDropdownOpen(false);
                      }}
                      className="text-left p-2 hover:bg-white/[0.04] border border-transparent hover:border-[#C5A869]/60 rounded-xs transition-all flex items-center gap-2.5 group cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#151916] border border-[#C5A869]/40 flex items-center justify-center shrink-0 text-[#C5A869] text-[10px] font-bold">
                        G
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white group-hover:text-[#C5A869] transition-colors">
                          Griffin Edition
                        </div>
                        <div className="text-[9px] text-neutral-400 font-light truncate">
                          Private Commissions
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        onNavigate('appointments');
                        setIsBrandsDropdownOpen(false);
                      }}
                      className="text-left p-2 hover:bg-white/[0.04] border border-transparent hover:border-[#C5A869]/60 rounded-xs transition-all flex items-center gap-2.5 group cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#0F2E22] border border-[#C5A869]/50 flex items-center justify-center shrink-0 text-[#C5A869] text-[10px] font-serif font-bold">
                        A
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white group-hover:text-[#C5A869] transition-colors">
                          Appointments
                        </div>
                        <div className="text-[9px] text-neutral-400 font-light truncate">
                          Private Accessories
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        onNavigate('brand', 'ikla-water');
                        setIsBrandsDropdownOpen(false);
                      }}
                      className="text-left p-2 hover:bg-white/[0.04] border border-transparent hover:border-[#5E8896]/40 rounded-xs transition-all flex items-center gap-2.5 group cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#1A2830] border border-[#5E8896]/40 flex items-center justify-center shrink-0 p-1 text-[#5E8896]">
                        <Droplets className="w-3 h-3" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white group-hover:text-[#5E8896] transition-colors">
                          IKLA Water
                        </div>
                        <div className="text-[9px] text-neutral-400 font-light truncate">
                          Pure Mineral Stillness
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Direct Links */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-5 text-xs uppercase tracking-[0.16em] xl:tracking-[0.2em]">
              <button
                onClick={() => onNavigate('collection')}
                className={`relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C8A97E] after:transition-all after:duration-300 ${
                  currentView === 'collection' ? 'text-[#C8A97E] after:w-full' : 'text-neutral-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                Collection
              </button>
              <button
                onClick={() => onNavigate('kids')}
                className={`relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#013220] after:transition-all after:duration-300 ${
                  currentView === 'kids' ? 'text-[#D4AF57] after:w-full' : 'text-neutral-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                IKLA Kids
              </button>
              <button
                onClick={() => onNavigate('griffin')}
                className={`relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C5A869] after:transition-all after:duration-300 ${
                  currentView === 'griffin' ? 'text-[#C5A869] after:w-full' : 'text-neutral-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                Griffin
              </button>
              <button
                onClick={() => onNavigate('appointments')}
                className={`relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C5A869] after:transition-all after:duration-300 ${
                  currentView === 'appointments' ? 'text-[#C5A869] after:w-full' : 'text-neutral-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                Private Appointments
              </button>
              <button
                onClick={() => onNavigate('about')}
                className={`relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C8A97E] after:transition-all after:duration-300 ${
                  currentView === 'about' ? 'text-[#C8A97E] after:w-full' : 'text-neutral-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                The Maison
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className={`relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C8A97E] after:transition-all after:duration-300 ${
                  currentView === 'contact' ? 'text-[#C8A97E] after:w-full' : 'text-neutral-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Center: Brand Wordmark */}
          <div className="text-center cursor-pointer group" onClick={() => onNavigate('home')}>
            <span className="text-xl sm:text-2xl font-cormorant tracking-[0.35em] uppercase text-white font-light group-hover:text-[#DFBF95] transition-colors">
              IKLA MAISON
            </span>
            <span className="block text-[8px] tracking-[0.45em] text-[#C8A97E] uppercase font-light -mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
              The Houses & Collective
            </span>
          </div>

          {/* Right section: Ecosystem links, Search trigger & Shopping Bag */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Desktop Dynasty Ecosystem Links */}
            <div className="hidden xl:flex items-center gap-4 text-[11px] uppercase tracking-[0.16em] text-neutral-400 border-r border-white/10 pr-5">
              {ECOSYSTEM_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (!link.isExternal) {
                      e.preventDefault();
                      onNavigate('brand', 'my-drink-family');
                    }
                  }}
                  className="hover:text-[#E06D38] transition-colors flex items-center gap-1.5 cursor-pointer font-light"
                  aria-label={link.ariaLabel}
                >
                  <span>{link.label}</span>
                  {link.isExternal && <ExternalLink className="w-2.5 h-2.5 opacity-70" />}
                </a>
              ))}
            </div>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen((prev) => !prev)}
              aria-label="Toggle product search bar"
              className="p-2 text-neutral-300 hover:text-white transition-colors"
            >
              {isSearchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={openCart}
              aria-label="Open luxury shopping bag"
              className="relative p-2 text-neutral-200 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline text-xs uppercase tracking-[0.15em] font-medium">
                Bag
              </span>
              <span className="w-4 h-4 rounded-full bg-[#C8A97E] text-black text-[9px] font-bold flex items-center justify-center">
                {totalItems}
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
