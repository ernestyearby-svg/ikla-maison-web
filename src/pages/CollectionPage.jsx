import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, Search, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { BRAND_LIST, BRANDS } from '../data/brands';
import ProductCard from '../components/ProductCard';

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
          The Five Houses Catalogue
        </h1>
        <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-xl mx-auto leading-relaxed font-manrope relative z-10">
          Explore signature silhouettes spanning architectural tailoring, disciplined streetwear, sunlit Mediterranean resort wear, and celebratory lounge garments.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        {/* Brand Tabs Bar with Authentic House Crests */}
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
        </div>

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
              <span>Category Filter: {selectedCategory}</span>
            </button>
            <span className="text-xs text-neutral-600">{filteredProducts.length} Results</span>
          </div>

          {/* Mobile Category Dropdown panel */}
          {showFiltersMobile && (
            <div className="md:hidden flex flex-wrap gap-2 p-4 bg-[#FAF7F2] border border-[#DDD7CB]">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setShowFiltersMobile(false);
                  }}
                  className={`px-3 py-1.5 text-xs uppercase ${
                    selectedCategory === cat
                      ? 'bg-[#111215] text-white font-semibold'
                      : 'bg-white border border-[#DDD7CB] text-[#333]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Sort Selector & Active Search badge */}
          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
            {searchQuery && (
              <div className="flex items-center gap-2 px-3 py-1 bg-[#EAE5DC] border border-[#DDD7CB] text-xs text-[#111215] rounded-xs">
                <span>Searching: "{searchQuery}"</span>
                <button onClick={onClearSearch} aria-label="Clear search">
                  <X className="w-3.5 h-3.5 hover:text-black" />
                </button>
              </div>
            )}

            <div className="flex items-center gap-2 text-xs">
              <span className="text-neutral-500 uppercase tracking-widest hidden lg:inline">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-[#D5CFC3] text-[#111215] py-2 px-3 text-xs focus:border-[#8C6D3F] outline-none cursor-pointer rounded-xs shadow-2xs"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Designation: A–Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between text-xs text-neutral-600">
          <span>
            Displaying <strong className="text-[#111215]">{filteredProducts.length}</strong> creations
            {selectedBrand !== 'all' && ` from House of ${BRAND_LIST.find((b) => b.id === selectedBrand)?.name}`}
          </span>
          {(selectedBrand !== 'all' || selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedBrand('all');
                setSelectedCategory('All');
                if (onClearSearch) onClearSearch();
              }}
              className="text-[#8C6D3F] hover:underline font-medium cursor-pointer"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4 border border-[#DDD7CB] bg-white rounded-xs shadow-xs">
            <h3 className="text-2xl text-[#111215] font-light font-cormorant">No Garments Found</h3>
            <p className="text-xs text-[#50545E] max-w-sm mx-auto font-manrope">
              No creations currently match your selected filters. Reset filters to view all available foundational pieces.
            </p>
            <button
              onClick={() => {
                setSelectedBrand('all');
                setSelectedCategory('All');
                if (onClearSearch) onClearSearch();
              }}
              className="px-6 py-2.5 text-xs uppercase tracking-widest bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold cursor-pointer rounded-xs transition-colors shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onSelectBrand={onSelectBrand}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
