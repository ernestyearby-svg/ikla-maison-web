import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, Search, X, Droplets, Wine, ArrowRight, Compass } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { BRAND_LIST, BRANDS } from '../data/brands';
import ProductCard from '../components/ProductCard';
import CampaignImage from '../components/CampaignImage';

export default function CollectionPage({
  onSelectProduct,
  onSelectBrand,
  initialBrandFilter = 'all',
  searchQuery = '',
  onClearSearch,
}) {
  const [selectedBrand, setSelectedBrand] = useState(initialBrandFilter);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Filter & Sort computation
  const filteredProducts = useMemo(() => {
    if (selectedBrand === 'ikla-water') return [];
    return PRODUCTS.filter((product) => {
      // Brand filter
      if (selectedBrand !== 'all' && product.brandId !== selectedBrand) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesBrand = product.brandName.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesCategory && !matchesDesc) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedBrand, selectedCategory, sortBy, searchQuery]);

  const activeHouseData = selectedBrand !== 'all' ? BRANDS[selectedBrand] : null;

  return (
    <div className="w-full bg-[#FAF7F2] text-[#16171A] min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#F4EFE6] border-b border-[#E5DFD5] py-14 sm:py-18 px-6 sm:px-8 lg:px-12 text-center relative overflow-hidden">
        {/* Subtle Watermark in Collection Header */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.05]">
          <img src={BRANDS['ikla-maison'].logos.wordmarkDark} alt="" className="w-[80vw] max-w-[1000px] object-contain" />
        </div>

        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2 relative z-10">
          Complete Curated Inventory
        </span>
        <h1 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215] mb-4 relative z-10">
          The Houses Catalogue
        </h1>
        <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-xl mx-auto leading-relaxed font-manrope relative z-10">
          Explore signature silhouettes spanning architectural tailoring, disciplined streetwear, sunlit Mediterranean resort wear, and celebratory lounge garments.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        {/* Brand Tabs Bar with Authentic House Crests + IKLA Water Extension */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 border-b border-[#E0DBD0] scrollbar-none">
          <button
            onClick={() => setSelectedBrand('all')}
            className={`px-4.5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-all cursor-pointer rounded-xs ${
              selectedBrand === 'all'
                ? 'bg-[#111215] text-white font-semibold shadow-md'
                : 'bg-white border border-[#DDD7CB] text-[#333] hover:text-black hover:border-[#B5ADA0]'
            }`}
          >
            All Houses ({PRODUCTS.length})
          </button>
          {BRAND_LIST.map((b) => {
            const count = PRODUCTS.filter((p) => p.brandId === b.id).length;
            const isSelected = selectedBrand === b.id;
            return (
              <button
                key={b.id}
                onClick={() => setSelectedBrand(b.id)}
                className={`px-4.5 py-2.5 text-xs uppercase tracking-[0.14em] font-medium whitespace-nowrap transition-all cursor-pointer rounded-xs flex items-center gap-2 ${
                  isSelected
                    ? `${b.buttonStyle} shadow-md`
                    : 'bg-white border border-[#DDD7CB] text-[#333] hover:text-black hover:border-[#B5ADA0]'
                }`}
              >
                <div className="w-4 h-4 rounded-full overflow-hidden shrink-0">
                  <img src={b.logos.crestLight} alt="" className="w-full h-full object-contain" />
                </div>
                <span>{b.name} ({count})</span>
              </button>
            );
          })}

          {/* IKLA Water Concept Tab */}
          <button
            onClick={() => setSelectedBrand('ikla-water')}
            className={`px-4.5 py-2.5 text-xs uppercase tracking-[0.14em] font-medium whitespace-nowrap transition-all cursor-pointer rounded-xs flex items-center gap-2 ${
              selectedBrand === 'ikla-water'
                ? 'bg-[#1A2830] text-[#FAFBFB] shadow-md border border-[#1A2830]'
                : 'bg-white border border-[#CADCE0] text-[#5E8896] hover:text-[#1A2830] hover:border-[#5E8896]'
            }`}
          >
            <div className="w-4 h-4 rounded-full overflow-hidden shrink-0 flex items-center justify-center text-[#5E8896]">
              <Droplets className="w-3.5 h-3.5" />
            </div>
            <span>IKLA Water (Concept)</span>
          </button>
        </div>

        {/* Selected Brand Editorial Spotlight Banner */}
        {activeHouseData && selectedBrand !== 'ikla-water' && (
          <div className="mb-10 p-6 bg-white border border-[#DDD7CB] rounded-xs shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-[#F5F2EC] p-1 border border-[#DDD7CB]">
                <img src={activeHouseData.logos.crestLight} alt="" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold block">
                  House Focus
                </span>
                <h2 className="text-xl sm:text-2xl font-cormorant font-normal text-[#111215]">
                  {activeHouseData.name} — {activeHouseData.tagline}
                </h2>
                <p className="text-xs text-[#555A64] font-light mt-1 font-manrope max-w-xl">
                  {activeHouseData.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectBrand(selectedBrand)}
              className="shrink-0 px-5 py-2.5 bg-[#111215] text-white hover:bg-neutral-800 transition-colors text-xs uppercase tracking-widest font-medium rounded-xs flex items-center gap-2"
            >
              <span>View Editorial Showcase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* IKLA WATER DEDICATED CONCEPT PRODUCT-STORY LAYOUT */}
        {/* ------------------------------------------------------------------- */}
        {selectedBrand === 'ikla-water' ? (
          <div className="space-y-16 py-8">
            <div className="bg-white border border-[#CADCE0] p-8 sm:p-12 rounded-xs shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F8F9] border border-[#CADCE0] text-[#5E8896] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs">
                    <Droplets className="w-3.5 h-3.5" />
                    Maison Extension Concept
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215]">
                    IKLA Water — Sculptural Mineral Vessels
                  </h2>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
                    Conceived as an architectural extension of the formal dining salon. Pure natural mineral water contained in reusable heavyweight flint glass vessels designed to integrate seamlessly into modern living spaces.
                  </p>
                  <p className="text-xs text-[#7A828A] font-light italic font-manrope">
                    Private Maison concept archive. Not commercially sold as apparel inventory.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="p-3 bg-[#FAFBFB] border border-[#CADCE0] rounded-xs shadow-lg">
                    <CampaignImage
                      src="assets/campaigns/01-ready-to-use/ikla-water/ikla-water-dining-table.jpg"
                      alt="IKLA Water Dining Table Setting"
                      aspectRatio="16/10"
                      position="center 40%"
                      className="rounded-xs w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Vessel Profiles with object-fit: contain */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-[#CADCE0] p-4 rounded-xs shadow-sm flex flex-col justify-between">
                <CampaignImage
                  src="assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-pedestal.jpg"
                  alt="IKLA Water Pedestal Curation"
                  aspectRatio="1/1"
                  position="center"
                  className="rounded-xs w-full mb-4"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#5E8896] font-semibold block mb-1">
                    Pedestal Installation
                  </span>
                  <h3 className="text-lg font-cormorant font-normal text-[#111215]">
                    Travertine Gallery Pedestal
                  </h3>
                  <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">
                    Architectural display exploring vessel weight and material transparency.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#CADCE0] p-4 rounded-xs shadow-sm flex flex-col justify-between">
                <div className="aspect-square w-full bg-[#FAFBFB] border border-[#E5EEF0] rounded-xs p-4 mb-4 flex items-center justify-center">
                  <CampaignImage
                    src="assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-rounded-bottles.jpg"
                    alt="IKLA Water Rounded Bottles Silhouette"
                    aspectRatio="1/1"
                    fit="contain"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#5E8896] font-semibold block mb-1">
                    Silhouette 01
                  </span>
                  <h3 className="text-lg font-cormorant font-normal text-[#111215]">
                    Rounded Flint Glass Decanter
                  </h3>
                  <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">
                    Generous curved silhouette with embossed silver Maison insignia seal.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#CADCE0] p-4 rounded-xs shadow-sm flex flex-col justify-between">
                <div className="aspect-square w-full bg-[#FAFBFB] border border-[#E5EEF0] rounded-xs p-4 mb-4 flex items-center justify-center">
                  <CampaignImage
                    src="assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-cylinder-bottles.jpg"
                    alt="IKLA Water Cylinder Bottles Silhouette"
                    aspectRatio="1/1"
                    fit="contain"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#5E8896] font-semibold block mb-1">
                    Silhouette 02
                  </span>
                  <h3 className="text-lg font-cormorant font-normal text-[#111215]">
                    Monolithic Cylinder Vessel
                  </h3>
                  <p className="text-xs text-[#555A64] font-light mt-1 font-manrope">
                    Weighted base and clean vertical lines tailored for executive tables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Filter Controls Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E0DBD0]">
              {/* Category Filter Pills (Desktop) */}
              <div className="hidden md:flex items-center gap-2 overflow-x-auto">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs tracking-wider transition-colors ${
                      selectedCategory === cat
                        ? 'text-[#111215] border-b-2 border-[#8C6D3F] font-semibold'
                        : 'text-neutral-500 hover:text-[#111215]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Mobile Filter Toggle */}
              <div className="md:hidden flex items-center justify-between">
                <button
                  onClick={() => setShowFiltersMobile((prev) => !prev)}
                  className="flex items-center gap-2 px-3 py-2 bg-white border border-[#DDD7CB] text-xs uppercase tracking-wider text-[#111215]"
                >
                  <Filter className="w-3.5 h-3.5 text-[#8C6D3F]" />
                  <span>Category: {selectedCategory}</span>
                </button>
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <span className="text-xs text-neutral-500 font-light hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-[#DDD7CB] text-xs py-1.5 px-3 rounded-xs text-[#111215] focus:outline-none focus:border-[#8C6D3F]"
                >
                  <option value="featured">Featured Curations</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Silhouettes A–Z</option>
                </select>
              </div>
            </div>

            {/* Mobile Filter Sheet */}
            {showFiltersMobile && (
              <div className="md:hidden mb-6 p-4 bg-white border border-[#DDD7CB] rounded-xs space-y-3 animate-fade-in">
                <span className="text-[10px] uppercase tracking-widest text-[#8C6D3F] font-semibold block">
                  Select Category
                </span>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowFiltersMobile(false);
                      }}
                      className={`px-3 py-1.5 text-xs rounded-xs border ${
                        selectedCategory === cat
                          ? 'bg-[#111215] text-white border-[#111215]'
                          : 'bg-[#FAF7F2] text-[#444] border-[#DDD7CB]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Query Pill */}
            {searchQuery && (
              <div className="flex items-center gap-2 mb-6 text-xs text-[#50545E]">
                <span>Showing search results for: <strong>"{searchQuery}"</strong></span>
                <button
                  onClick={onClearSearch}
                  className="text-[#8C6D3F] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3 h-3" /> Clear search
                </button>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
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
            ) : (
              <div className="py-20 text-center bg-white border border-[#DDD7CB] rounded-xs p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#DDD7CB] flex items-center justify-center mx-auto text-[#8C6D3F]">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-cormorant font-normal text-[#111215]">
                  No Curations Found
                </h3>
                <p className="text-xs text-[#50545E] font-light max-w-sm mx-auto font-manrope">
                  No garments match your active filters. Try selecting another house or resetting category filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedBrand('all');
                    setSelectedCategory('All');
                    if (onClearSearch) onClearSearch();
                  }}
                  className="px-6 py-2.5 bg-[#111215] text-white text-xs uppercase tracking-widest font-medium rounded-xs hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
