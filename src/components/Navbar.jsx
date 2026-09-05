import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, Search, ChevronDown, ArrowRight, X } from 'lucide-react';
import { BRANDS, BRAND_LIST } from '../data/brands';
import { useCart } from '../context/CartContext';

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
        <span>Complimentary White-Glove Shipping On Orders Over $350</span>
        <span className="hidden sm:inline text-[#C8A97E]">•</span>
        <span className="hidden md:inline text-neutral-300">Five Independent Houses · One Disciplined Maison</span>
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
                  className="absolute top-full left-0 mt-2 w-[520px] bg-[#0e1014]/98 backdrop-blur-xl border border-neutral-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-4.5 grid grid-cols-1 gap-2.5 animate-fade-in z-50 rounded-xs"
                >
                  <div className="flex items-center justify-between px-3 pt-1 pb-2.5 border-b border-neutral-800 text-[9px] uppercase tracking-[0.3em] text-[#C8A97E] font-medium">
                    <span>Curated Luxury Houses</span>
                    <span className="text-[9px] text-neutral-500 font-normal">5 Houses</span>
                  </div>
                  {BRAND_LIST.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => {
                        onNavigate('brand', b.id);
                        setIsBrandsDropdownOpen(false);
                      }}
                      className="w-full text-left p-2.5 hover:bg-white/[0.04] border border-transparent hover:border-neutral-700/60 rounded-xs transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 p-1 group-hover:border-[#C8A97E]/50 transition-colors">
                          <img
                            src={b.logos.crestLight}
                            alt=""
                            className="w-full h-full object-contain filter brightness-110 group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-white group-hover:text-[#C8A97E] transition-colors tracking-[0.08em]">
                            {b.name}
                          </div>
                          <div className="text-[11px] text-neutral-400 font-light truncate max-w-[320px]">
                            {b.tagline}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex items-center gap-1">
                        Enter <ArrowRight className="w-3 h-3" />
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Direct Links */}
            <div className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.2em]">
              <button
                onClick={() => onNavigate('collection')}
                className={`relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C8A97E] after:transition-all after:duration-300 ${
                  currentView === 'collection' ? 'text-[#C8A97E] after:w-full' : 'text-neutral-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                Collections
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
              Les Cinq Maisons
            </span>
          </div>

          {/* Right section: Search trigger & Shopping Bag */}
          <div className="flex items-center gap-3 sm:gap-5">
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
                placeholder="Search across all five houses (e.g. trench, linen, hoodie, overcoat)..."
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
