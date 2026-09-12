import React, { useState, useMemo, useEffect } from 'react';
import { 
  Filter, SlidersHorizontal, ArrowUpDown, Search, X, Droplets, Wine, ArrowRight, 
  Compass, Sparkles, Check, Layers, ShieldCheck, Bookmark, Palette, Eye, ChevronRight, 
  MapPin, Sparkle, Tag, Shirt, Grid
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { BRAND_LIST, BRANDS, FASHION_HOUSES, BEVERAGE_HOUSES } from '../data/brands';
import { WARDROBE_CAMPAIGN_LOOKS } from '../data/expansionProducts';
import ProductCard from '../components/ProductCard';
import CampaignImage from '../components/CampaignImage';

export const PATHWAY_TAXONOMY = [
  { id: 'All', label: 'All Curations' },
  { id: 'New Arrivals', label: 'New Arrivals' },
  { id: 'Men', label: 'Men' },
  { id: 'Women', label: 'Women' },
  { id: 'Footwear', label: 'Footwear' },
  { id: 'Performance', label: 'Performance' },
  { id: 'Kids', label: 'Kids' },
  { id: 'Accessories & Objects', label: 'Accessories & Objects' },
  { id: 'Maison Living', label: 'Maison Living' },
  { id: 'Travel', label: 'Travel' },
  { id: 'Griffin Edition', label: 'Griffin Edition' },
  { id: 'Private Collections', label: 'Private Collections' },
];

export const SUBCATEGORIES_BY_PATHWAY = {
  Men: [
    'All Men',
    'Polos',
    'Tailored Shorts',
    'Tailored Trousers',
    'Dress Knitwear',
    'Dress Shoes',
    'Dress Boots',
    'Casual Footwear',
  ],
  Women: [
    'All Women',
    'Polos',
    'Tailored Shorts',
    'Wide-Leg Trousers',
    'Knit Dresses and Twinsets',
    'Legging Sets',
    'Sports Bras and Training Sets',
    'Heels',
    'Sandals and Flats',
    'Sneakers',
    'Dress Boots',
  ],
  Footwear: [
    'All Footwear',
    'Heels',
    'Sandals and Flats',
    'Sneakers',
    'Casual Footwear',
    'Dress Shoes',
    'Dress Boots',
  ],
  Performance: [
    'All Performance',
    'Legging Sets',
    'Sports Bras and Training Sets',
    'Athletic Separates',
  ],
  'Accessories & Objects': [
    'All Accessories',
    'Eyewear',
    'Insignia & Jewelry',
    'Small Leather Goods',
    'Travel Objects',
  ],
  'Maison Living': [
    'All Living',
    'Tableware & Porcelain',
    'Bedroom & Salon Textiles',
    'Atmosphere & Fragrance',
    'Office & Writing',
  ],
  Travel: [
    'All Travel',
    'Cabin Luggage & Cases',
    'Document Folios',
    'Motoring & Driving',
  ],
  'Griffin Edition': [
    'All Griffin Pieces',
    'Bespoke Insignia',
    'Architectural Eyewear',
    'Formal Footwear',
  ],
};

export default function CollectionPage({
  onSelectProduct,
  onSelectBrand,
  initialBrandFilter = 'all',
  initialCategory = 'All',
  searchQuery = '',
  onClearSearch,
}) {
  const [selectedBrand, setSelectedBrand] = useState(initialBrandFilter);
  const [selectedPathway, setSelectedPathway] = useState(initialCategory === 'Accessories' ? 'Accessories & Objects' : 'All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [showLookbookModal, setShowLookbookModal] = useState(false);
  const [selectedLook, setSelectedLook] = useState(WARDROBE_CAMPAIGN_LOOKS[0]);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  useEffect(() => {
    if (initialCategory === 'Accessories') {
      setSelectedPathway('Accessories & Objects');
    } else if (initialCategory !== 'All') {
      setSelectedPathway(initialCategory);
    }
  }, [initialCategory]);

  // Reset subcategory when pathway changes
  const handlePathwayChange = (pathwayId) => {
    setSelectedPathway(pathwayId);
    setSelectedSubCategory('All');
  };

  // Helper matching product to pathway
  const matchesPathway = (product, pathway) => {
    if (pathway === 'All') return true;
    if (pathway === 'New Arrivals') return Boolean(product.isNew);
    
    if (pathway === 'Men') {
      return (
        product.gender === 'Men' ||
        product.pathway === 'Men' ||
        (product.name?.toLowerCase().includes("men's") && !product.name?.toLowerCase().includes("women's")) ||
        product.subCategory === 'Tailored Trousers' ||
        product.subCategory === 'Dress Knitwear' ||
        (product.category === 'Footwear' && ['ikla-footwear-imperial-wholecut-oxford', 'ikla-footwear-griffin-evening-loafer', 'ikla-footwear-executive-chelsea-boot', 'ikla-footwear-griffin-balmoral-boot'].includes(product.id))
      );
    }

    if (pathway === 'Women') {
      return (
        product.gender === 'Women' ||
        product.pathway === 'Women' ||
        product.name?.toLowerCase().includes("women's") ||
        product.collection === "Women's Footwear Master" ||
        product.subCategory === 'Wide-Leg Trousers' ||
        product.subCategory === 'Knit Dresses and Twinsets' ||
        product.subCategory === 'Heels' ||
        product.subCategory === 'Sandals and Flats'
      );
    }

    if (pathway === 'Footwear') {
      return product.category === 'Footwear' || product.collection?.toLowerCase().includes('footwear');
    }

    if (pathway === 'Performance') {
      return (
        product.pathway === 'Performance' ||
        product.collection?.toLowerCase().includes('performance') ||
        product.subCategory?.includes('Legging') ||
        product.subCategory?.includes('Training') ||
        product.id.includes('legging') ||
        product.id.includes('training')
      );
    }

    if (pathway === 'Kids') {
      return (
        product.brandId === 'ikla-kids' ||
        product.brandName === 'IKLA Kids' ||
        product.id.startsWith('ikla-kids')
      );
    }

    if (pathway === 'Accessories & Objects') {
      return (
        (product.category === 'Accessories' && !product.id.startsWith('ikla-kids')) ||
        product.subCategory === 'Eyewear' ||
        product.subCategory === 'Insignia & Jewelry' ||
        product.collection === 'Eyewear & Insignia'
      );
    }

    if (pathway === 'Maison Living') {
      return (
        product.category === 'Table' ||
        product.id.includes('dinnerware') ||
        product.id.includes('tea-service') ||
        product.id.includes('textile') ||
        product.id.includes('fragrance') ||
        product.id.includes('bath') ||
        product.id.includes('writing')
      );
    }

    if (pathway === 'Travel') {
      return (
        product.collection?.toLowerCase().includes('travel') ||
        product.id.includes('travel') ||
        product.id.includes('cabin') ||
        product.id.includes('watch-roll') ||
        product.id.includes('driving-loafer') ||
        product.id.includes('umbrella')
      );
    }

    if (pathway === 'Griffin Edition') {
      return (
        product.collection === 'Griffin Edition' ||
        product.id.includes('griffin') ||
        product.pathway === 'Griffin Edition'
      );
    }

    if (pathway === 'Private Collections') {
      return (
        product.isReserve ||
        product.id.startsWith('ikla-private-') ||
        product.status?.includes('Private') ||
        product.status?.includes('Special') ||
        product.status?.includes('Bespoke')
      );
    }

    return true;
  };

  // Helper matching product to subcategory
  const matchesSubCategory = (product, subCat) => {
    if (!subCat || subCat === 'All' || subCat.startsWith('All ')) return true;
    const s = subCat.toLowerCase();
    const prodSub = (product.subCategory || '').toLowerCase();
    const prodName = (product.name || '').toLowerCase();
    const prodCat = (product.category || '').toLowerCase();

    if (s.includes('polo')) return prodSub.includes('polo') || prodName.includes('polo');
    if (s.includes('short')) return prodSub.includes('short') || prodName.includes('short');
    if (s.includes('trouser')) return prodSub.includes('trouser') || prodName.includes('trouser');
    if (s.includes('knit') || s.includes('sweater') || s.includes('twinset')) return prodSub.includes('knit') || prodSub.includes('sweater') || prodName.includes('sweater') || prodName.includes('twinset');
    if (s.includes('heel')) return prodSub.includes('heel') || prodName.includes('pump') || prodName.includes('slingback');
    if (s.includes('sandal') || s.includes('flat')) return prodSub.includes('sandal') || prodSub.includes('flat') || prodName.includes('sandal') || prodName.includes('slide') || prodName.includes('flat') || prodName.includes('mule');
    if (s.includes('sneaker')) return prodSub.includes('sneaker') || prodName.includes('sneaker');
    if (s.includes('dress shoe')) return prodSub.includes('dress shoes') || prodName.includes('oxford') || prodName.includes('evening loafer');
    if (s.includes('boot')) return prodSub.includes('boot') || prodName.includes('boot');
    if (s.includes('casual footwear')) return prodSub.includes('casual') || prodName.includes('low-top') || prodName.includes('slip-on') || prodName.includes('driving loafer') || prodName.includes('mid-high');
    if (s.includes('eyewear')) return prodSub.includes('eyewear') || prodName.includes('frame') || prodName.includes('sunglass') || prodName.includes('cat-eye');
    if (s.includes('insignia') || s.includes('jewelry')) return prodSub.includes('insignia') || prodName.includes('brooch') || prodName.includes('pin') || prodName.includes('cufflink') || prodName.includes('cuff');
    if (s.includes('tableware') || s.includes('porcelain')) return prodCat.includes('table') || prodName.includes('dinnerware') || prodName.includes('tea');
    if (s.includes('textile')) return prodName.includes('textile') || prodName.includes('pajama');
    if (s.includes('fragrance') || s.includes('bath')) return prodName.includes('fragrance') || prodName.includes('bath');
    if (s.includes('office')) return prodName.includes('writing') || prodName.includes('office');
    if (s.includes('legging')) return prodSub.includes('legging') || prodName.includes('legging');
    if (s.includes('sports bra') || s.includes('training')) return prodSub.includes('training') || prodName.includes('training');

    return prodSub.includes(s) || prodName.includes(s);
  };

  // Filter & Sort computation
  const filteredProducts = useMemo(() => {
    if (selectedBrand === 'ikla-water') return [];

    return PRODUCTS.filter((product) => {
      // 1. House Brand filter
      if (selectedBrand !== 'all' && product.brandId !== selectedBrand) {
        return false;
      }

      // 2. Pathway filter
      if (!matchesPathway(product, selectedPathway)) {
        return false;
      }

      // 3. Subcategory filter
      if (!matchesSubCategory(product, selectedSubCategory)) {
        return false;
      }

      // 4. Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name?.toLowerCase().includes(q);
        const matchesBrand = product.brandName?.toLowerCase().includes(q);
        const matchesCategory = product.category?.toLowerCase().includes(q);
        const matchesSub = product.subCategory?.toLowerCase().includes(q);
        const matchesDesc = product.description?.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesCategory && !matchesSub && !matchesDesc) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedBrand, selectedPathway, selectedSubCategory, sortBy, searchQuery]);

  const activeHouseData = selectedBrand !== 'all' ? BRANDS[selectedBrand] : null;
  const availableSubcategories = SUBCATEGORIES_BY_PATHWAY[selectedPathway] || [];

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (waitlistEmail.trim()) {
      const subject = encodeURIComponent('Private collection access request');
      const body = encodeURIComponent(`Please contact ${waitlistEmail} regarding future IKLA Maison private collection access.`);
      window.location.href = `mailto:concierge@iklamaison.com?subject=${subject}&body=${body}`;
      setWaitlistSubmitted(true);
      setTimeout(() => {
        setWaitlistSubmitted(false);
        setWaitlistEmail('');
      }, 4000);
    }
  };

  return (
    <div className="w-full bg-[#FAF7F2] text-[#16171A] min-h-screen">
      {/* ========================================================================= */}
      {/* 1. SHOP INTRODUCTION & HERO */}
      {/* ========================================================================= */}
      <div className="bg-[#F4EFE6] border-b border-[#E5DFD5] py-12 sm:py-16 px-6 sm:px-8 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
          <span className="text-[14vw] font-cormorant font-light tracking-[0.2em] text-[#111215] uppercase">
            IKLA MAISON
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#DDD7CB] text-[#8C6D3F] text-[10px] uppercase tracking-[0.28em] font-semibold rounded-xs shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8C6D3F]" />
            <span>Private Allocation & Wardrobe Directory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cormorant font-light text-[#111215] tracking-tight">
            I·K·L·A MAISON
          </h1>

          <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#8C6D3F] font-medium font-manrope">
            Internationally Known, Locally Accepted
          </p>

          <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-2xl mx-auto leading-relaxed font-manrope">
            A comprehensive catalog of high-tailored essentials, architectural footwear, dynasty insignia, and private appointments. Every piece is presented for private inquiry—never open mass commerce.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
        {/* ========================================================================= */}
        {/* 2. PRIMARY PATHWAY FILTER BAR */}
        {/* ========================================================================= */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between pb-2 border-b border-[#E0DBD0]">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C6D3F] font-semibold flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              Maison Collection Pathways
            </span>
            <span className="text-xs text-neutral-500 font-manrope hidden sm:inline">
              Private Client Presentation · No Public Pricing
            </span>
          </div>

          {/* Scrolling Luxury Pathways */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
            {PATHWAY_TAXONOMY.map((pathway) => {
              const isSelected = selectedPathway === pathway.id;
              return (
                <button
                  key={pathway.id}
                  onClick={() => handlePathwayChange(pathway.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium whitespace-nowrap transition-all rounded-xs cursor-pointer border ${
                    isSelected
                      ? 'bg-[#111215] text-[#FAF7F2] border-[#111215] shadow-md font-semibold'
                      : 'bg-white text-[#333] border-[#DDD7CB] hover:border-[#8C6D3F] hover:text-[#111215]'
                  }`}
                >
                  {pathway.label}
                </button>
              );
            })}
          </div>

          {/* Subcategory Pills Row (if available for current pathway) */}
          {availableSubcategories.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 border-t border-[#EAE5DC]/80 scrollbar-none animate-fade-in">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono shrink-0 pr-1">
                Refine:
              </span>
              {availableSubcategories.map((subCat) => {
                const isSelected = selectedSubCategory === subCat;
                return (
                  <button
                    key={subCat}
                    onClick={() => setSelectedSubCategory(subCat)}
                    className={`px-3 py-1 text-[11px] uppercase tracking-wider transition-colors rounded-xs cursor-pointer whitespace-nowrap border ${
                      isSelected
                        ? 'bg-[#8C6D3F] text-white border-[#8C6D3F] font-medium shadow-2xs'
                        : 'bg-white/80 text-neutral-600 border-[#DDD7CB] hover:border-neutral-400 hover:text-black'
                    }`}
                  >
                    {subCat}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 3. WARDROBE MODEL CAMPAIGN LOOKBOOK (EDITORIAL FEATURE) */}
        {/* ========================================================================= */}
        <section className="mb-14 p-6 sm:p-8 bg-[#111215] text-[#FAF7F2] rounded-xs border border-[#C8A97E]/30 relative overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-white/15 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#D4A657] font-semibold mb-1">
                <Sparkle className="w-3 h-3" />
                Wardrobe Model Campaign · Eight Canonical Looks
              </div>
              <h2 className="text-2xl sm:text-3xl font-cormorant font-light text-white tracking-wide">
                The Modeled Campaign Dossier
              </h2>
              <p className="text-xs text-neutral-400 font-light font-manrope max-w-xl mt-1">
                Modeled lifestyle photography capturing the Wardrobe Essentials Capsule across coastal resorts, private salons, member libraries, and rooftop terraces.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-mono">
                8 Editorial Locations
              </span>
            </div>
          </div>

          {/* Horizontal Campaign Carousel Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {WARDROBE_CAMPAIGN_LOOKS.map((look) => {
              const isSelected = selectedLook.id === look.id;
              return (
                <button
                  key={look.id}
                  onClick={() => {
                    setSelectedLook(look);
                    setShowLookbookModal(true);
                  }}
                  className={`group relative aspect-[4/5] rounded-xs overflow-hidden border text-left cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'border-[#D4A657] ring-2 ring-[#D4A657]/40 scale-[1.02]'
                      : 'border-white/10 hover:border-[#D4A657]/60'
                  }`}
                >
                  <img
                    src={look.image}
                    alt={look.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-2.5 flex flex-col justify-end">
                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#D4A657] font-mono">
                      {look.subtitle}
                    </span>
                    <span className="text-[10px] font-cormorant text-white font-medium line-clamp-1 leading-tight">
                      {look.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Modal for Campaign Look Inspection */}
        {showLookbookModal && selectedLook && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="campaign-look-title"
          >
            <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0E1013] text-[#FAF7F2] border border-[#D4A657]/40 shadow-2xl rounded-xs">
              <button
                onClick={() => setShowLookbookModal(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/70 border border-white/20 text-white hover:border-[#D4A657] rounded-xs"
                aria-label="Close lookbook inspection"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/5] md:aspect-auto bg-black">
                  <img
                    src={selectedLook.image}
                    alt={selectedLook.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] bg-black/80 text-[#D4A657] border border-[#D4A657]/30 backdrop-blur-sm">
                    {selectedLook.subtitle} · {selectedLook.location}
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4A657] font-semibold">
                      Editorial Lookbook Dossier
                    </span>
                    <h3 id="campaign-look-title" className="text-3xl font-cormorant font-light text-white">
                      {selectedLook.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed font-manrope">
                      {selectedLook.description}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] text-neutral-400 pt-2 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#D4A657]" />
                      <span>{selectedLook.location}</span>
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-white/10 pt-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block font-mono">
                      Featured Capsule Garments:
                    </span>
                    <div className="space-y-2">
                      {selectedLook.featuredProductIds?.map((prodId) => {
                        const prod = PRODUCTS.find((p) => p.id === prodId);
                        if (!prod) return null;
                        return (
                          <div
                            key={prodId}
                            onClick={() => {
                              setShowLookbookModal(false);
                              onSelectProduct(prod);
                            }}
                            className="flex items-center justify-between p-3 bg-white/5 border border-white/10 hover:border-[#D4A657] rounded-xs cursor-pointer transition-all group"
                          >
                            <div className="flex items-center gap-3">
                              <img src={prod.image} alt="" className="w-9 h-9 object-cover rounded-xs border border-white/10" />
                              <div>
                                <span className="text-xs font-cormorant text-white group-hover:text-[#D4A657] block leading-tight">
                                  {prod.name}
                                </span>
                                <span className="text-[9px] uppercase tracking-wider text-neutral-400">
                                  {prod.status || 'Private Allocation'}
                                </span>
                              </div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#D4A657] group-hover:translate-x-1 transition-transform" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setShowLookbookModal(false)}
                      className="w-full py-3 bg-[#D4A657] text-black text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#FAF7F2] transition-colors rounded-xs"
                    >
                      Return to Catalog
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. HOUSE BRAND QUICK FILTER SELECTOR */}
        {/* ========================================================================= */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono pr-1 shrink-0">
              Filter House:
            </span>
            <button
              onClick={() => setSelectedBrand('all')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-xs cursor-pointer transition-all border ${
                selectedBrand === 'all'
                  ? 'bg-[#111215] text-white border-[#111215] font-semibold'
                  : 'bg-white border-[#DDD7CB] text-neutral-700 hover:text-black'
              }`}
            >
              All Houses
            </button>
            {BRAND_LIST.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBrand(b.id)}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-xs cursor-pointer transition-all border flex items-center gap-1.5 ${
                  selectedBrand === b.id
                    ? `${b.buttonStyle} font-semibold shadow-xs`
                    : 'bg-white border-[#DDD7CB] text-neutral-700 hover:text-black'
                }`}
              >
                <span>{b.name}</span>
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-neutral-500 font-light hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-[#DDD7CB] text-xs py-1.5 px-3 rounded-xs text-[#111215] focus:outline-none focus:border-[#8C6D3F]"
            >
              <option value="featured">Featured Curations</option>
              <option value="name">Silhouettes A–Z</option>
            </select>
          </div>
        </div>

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

        {/* Active Pathway & Item Count Headline */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#E0DBD0]">
          <div>
            <h2 className="text-xl sm:text-2xl font-cormorant font-normal text-[#111215]">
              {selectedPathway === 'All' ? 'Complete Maison Curations' : selectedPathway}
              {selectedSubCategory !== 'All' && ` · ${selectedSubCategory}`}
            </h2>
            <p className="text-xs text-neutral-500 font-manrope">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'creation' : 'creations'} presented for private allocation
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. PRODUCT CATALOG GRID */}
        {/* ========================================================================= */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
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
              No garments match your active filters. Try selecting another pathway or resetting filters.
            </p>
            <button
              onClick={() => {
                setSelectedBrand('all');
                setSelectedPathway('All');
                setSelectedSubCategory('All');
                if (onClearSearch) onClearSearch();
              }}
              className="px-6 py-2.5 bg-[#111215] text-white text-xs uppercase tracking-widest font-medium rounded-xs hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 6. PRIORITY ALLOCATION INQUIRY FORM FOOTER */}
        {/* ========================================================================= */}
        <section className="mt-16 bg-[#111215] text-white p-8 sm:p-14 rounded-xs border border-[#C8A97E]/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-radial from-[#C8A97E]/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-[#DFBF95] text-[10px] uppercase tracking-[0.3em] font-semibold rounded-xs">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Priority Allocation Ledger</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-cormorant font-light tracking-tight text-white">
              Request Capsule Allocation
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-manrope">
              Request information about future IKLA Maison releases, bespoke footwear, dynasty insignia, or private appointments through direct correspondence.
            </p>

            {waitlistSubmitted ? (
              <div className="p-4 bg-emerald-900/40 border border-emerald-500/50 rounded-xs text-xs font-mono text-emerald-200 animate-fade-in">
                Your email application has opened with the access request pre-configured.
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="Enter your confidential email..."
                  className="w-full sm:w-72 px-4 py-3 bg-neutral-900/90 border border-neutral-700 text-white placeholder-neutral-500 text-xs rounded-xs focus:outline-none focus:border-[#C8A97E]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-[#C8A97E] hover:bg-[#DFBF95] text-black text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors cursor-pointer shrink-0"
                >
                  Prepare Request
                </button>
              </form>
            )}

            <div className="flex items-center justify-center gap-6 text-[10px] uppercase tracking-widest text-neutral-400 font-mono pt-3">
              <span>No Public Pricing</span>
              <span>•</span>
              <span>Direct Confirmation</span>
              <span>•</span>
              <span>By Request Only</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
