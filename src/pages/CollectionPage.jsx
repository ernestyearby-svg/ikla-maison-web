import React, { useState, useMemo, useEffect } from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, Search, X, Droplets, Wine, ArrowRight, Compass, Sparkles, Check, Layers, ShieldCheck, Bookmark, Palette } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { BRAND_LIST, BRANDS, FASHION_HOUSES, BEVERAGE_HOUSES } from '../data/brands';
import ProductCard from '../components/ProductCard';
import CampaignImage from '../components/CampaignImage';

export default function CollectionPage({
  onSelectProduct,
  onSelectBrand,
  initialBrandFilter = 'all',
  initialCategory = 'All',
  searchQuery = '',
  onClearSearch,
}) {
  const [selectedBrand, setSelectedBrand] = useState(initialBrandFilter);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [activeMymosaColorway, setActiveMymosaColorway] = useState('classic-orange');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

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
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedBrand, selectedCategory, sortBy, searchQuery]);

  const activeHouseData = selectedBrand !== 'all' ? BRANDS[selectedBrand] : null;

  // Products by beverage house
  const mymosaProducts = useMemo(() => PRODUCTS.filter((p) => p.brandId === 'mymosa'), []);
  const mytaiProducts = useMemo(() => PRODUCTS.filter((p) => p.brandId === 'mytai'), []);
  const mytiniProducts = useMemo(() => PRODUCTS.filter((p) => p.brandId === 'mytini'), []);
  const myjitoProducts = useMemo(() => PRODUCTS.filter((p) => p.brandId === 'myjito'), []);
  const mygaritaProducts = useMemo(() => PRODUCTS.filter((p) => p.brandId === 'mygarita'), []);
  const accessoriesProducts = useMemo(() => PRODUCTS.filter((p) => p.category === 'Accessories'), []);
  const fashionProducts = useMemo(() => PRODUCTS.filter((p) => ['ikla-maison', 'ktse', 'moteon', 'moral-compass', 'wnnr'].includes(p.brandId)), []);

  const mymosaColorways = [
    {
      id: 'classic-orange',
      name: 'Classic Orange',
      hex: '#E26D35',
      desc: 'The original citrus zest emblem of celebratory sunrise momentum. Tailored in vibrant loopback fleece and mercerized cotton.',
      image: 'assets/products/mymosa/mymosa-four-flavor-tracksuits.webp',
      alt: 'MyMosa Classic Orange sports-fashion tracksuits collection'
    },
    {
      id: 'pineapple',
      name: 'Pineapple',
      hex: '#E5A93C',
      desc: 'Golden tropical warmth with bright summer vibrancy. Evoking sun-drenched rooftop terraces and poolside gatherings.',
      image: 'assets/products/mymosa/mymosa-hoodies-four-flavors.webp',
      alt: 'MyMosa Pineapple colorway hoodies and athletic apparel'
    },
    {
      id: 'strawberry',
      name: 'Strawberry',
      hex: '#D93848',
      desc: 'Deep berry saturation engineered for bold club presence. Vibrant red tones with restrained white and gold accents.',
      image: 'assets/products/mymosa/mymosa-tshirts-four-flavors.webp',
      alt: 'MyMosa Strawberry colorway combed cotton t-shirts'
    },
    {
      id: 'watermelon',
      name: 'Watermelon',
      hex: '#317F55',
      secondaryHex: '#D84A58',
      desc: 'Crisp botanical emerald green accented with sweet crimson lining. High-contrast athletic expression of refreshing energy.',
      image: 'assets/products/mymosa/mymosa-athletic-shorts.webp',
      alt: 'MyMosa Watermelon athletic court shorts and separates'
    }
  ];

  const currentMymosaColor = mymosaColorways.find((c) => c.id === activeMymosaColorway) || mymosaColorways[0];

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
      {/* 1. SHOP INTRODUCTION */}
      {/* ========================================================================= */}
      <div className="bg-[#F4EFE6] border-b border-[#E5DFD5] py-14 sm:py-20 px-6 sm:px-8 lg:px-12 text-center relative overflow-hidden">
        {/* Subtle Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]">
          <span className="text-[14vw] font-cormorant font-light tracking-[0.2em] text-[#111215] uppercase">
            IKLA SHOP
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#DDD7CB] text-[#8C6D3F] text-[10px] uppercase tracking-[0.28em] font-semibold rounded-xs shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8C6D3F]" />
            <span>Curated Maison & Sports-Fashion Directory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cormorant font-normal text-[#111215] tracking-tight">
            Private Collections
          </h1>

          <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-2xl mx-auto leading-relaxed font-manrope">
            Explore IKLA Maison, its fashion houses and concept extension, plus a clearly separated window into the connected My Drink Family hospitality platform. Every piece is presented for inquiry—not instant checkout.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        {/* ========================================================================= */}
        {/* 2. HOUSE SELECTOR */}
        {/* ========================================================================= */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center justify-between pb-2 border-b border-[#E0DBD0]">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C6D3F] font-semibold">
              Filter by House, Category, or Connected Curation
            </span>
            <span className="text-xs text-neutral-500 font-manrope hidden sm:inline">
              Private Access · No Public Pricing
            </span>
          </div>

          {/* Primary Quick-Filter Categories */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={() => {
                setSelectedBrand('all');
                setSelectedCategory('All');
              }}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all rounded-xs cursor-pointer ${
                selectedBrand === 'all'
                  ? 'bg-[#111215] text-white shadow-md font-semibold'
                  : 'bg-white border border-[#DDD7CB] text-[#333] hover:text-black hover:border-[#111215]'
              }`}
            >
              All Curations ({PRODUCTS.length})
            </button>

            {/* Beverage Houses Quick Pills */}
            <div className="hidden lg:flex items-center gap-1.5 pl-2 border-l border-[#DDD7CB]">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono pr-1">Beverage:</span>
              {BEVERAGE_HOUSES.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBrand(b.id)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-all rounded-xs cursor-pointer ${
                    selectedBrand === b.id
                      ? `${b.buttonStyle} shadow-xs font-semibold`
                      : 'bg-white border border-[#DDD7CB] text-neutral-700 hover:text-black hover:border-neutral-400'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>

            {/* Fashion Houses Quick Pills */}
            <div className="hidden lg:flex items-center gap-1.5 pl-2 border-l border-[#DDD7CB]">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono pr-1">Fashion:</span>
              {FASHION_HOUSES.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBrand(b.id)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-all rounded-xs cursor-pointer ${
                    selectedBrand === b.id
                      ? `${b.buttonStyle} shadow-xs font-semibold`
                      : 'bg-white border border-[#DDD7CB] text-neutral-700 hover:text-black hover:border-neutral-400'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {/* Scrolling Complete Houses Tabs Bar */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-2 scrollbar-none">
            {BRAND_LIST.map((b) => {
              const count = PRODUCTS.filter((p) => p.brandId === b.id).length;
              const isSelected = selectedBrand === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setSelectedBrand(b.id)}
                  className={`px-4 py-2.5 text-xs uppercase tracking-[0.14em] font-medium whitespace-nowrap transition-all cursor-pointer rounded-xs flex items-center gap-2 ${
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
              className={`px-4 py-2.5 text-xs uppercase tracking-[0.14em] font-medium whitespace-nowrap transition-all cursor-pointer rounded-xs flex items-center gap-2 ${
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
        </div>

        {/* Selected House Editorial Spotlight Banner (when filtered to a specific house) */}
        {activeHouseData && selectedBrand !== 'ikla-water' && (
          <div className="mb-12 p-6 bg-white border border-[#DDD7CB] rounded-xs shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-[#F5F2EC] p-1.5 border border-[#DDD7CB]">
                <img src={activeHouseData.logos.crestLight} alt="" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold block">
                  Curation Spotlight
                </span>
                <h2 className="text-xl sm:text-2xl font-cormorant font-normal text-[#111215]">
                  {activeHouseData.name} — {activeHouseData.tagline}
                </h2>
                <p className="text-xs text-[#555A64] font-light mt-1 font-manrope max-w-xl">
                  {activeHouseData.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setSelectedBrand('all')}
                className="px-4 py-2.5 text-xs uppercase tracking-wider text-neutral-600 hover:text-black border border-neutral-300 rounded-xs transition-colors cursor-pointer"
              >
                View All Curations
              </button>
              <button
                onClick={() => onSelectBrand(selectedBrand)}
                className="px-5 py-2.5 bg-[#111215] text-white hover:bg-neutral-800 transition-colors text-xs uppercase tracking-widest font-medium rounded-xs flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Explore House Atelier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* IKLA WATER DEDICATED CONCEPT VIEW (IF SELECTED) */}
        {/* ========================================================================= */}
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
                    Conceived as an architectural study for the dining salon: sculptural vessel forms designed to integrate into modern living spaces. Product composition and availability remain subject to confirmation.
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
            {/* When viewing All Houses, show the curated 11-step editorial sections */}
            {selectedBrand === 'all' && (
              <div className="space-y-28 mb-20">
                {/* ========================================================================= */}
                {/* 3. MYMOSA FLAGSHIP COLLECTION */}
                {/* ========================================================================= */}
                <section id="mymosa-flagship" className="space-y-8">
                  <div className="bg-white border border-[#E6E0D5] p-6 sm:p-10 rounded-xs shadow-lg space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#EAE5DC]">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF2EB] border border-[#EADCCF] text-[#E26D35] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs">
                          <span>Flagship Sports-Fashion House</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215]">
                          MyMosa Flagship Sports-Fashion Collection
                        </h2>
                        <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-2xl font-manrope">
                          Translating the buoyant spirit of the celebrated premium wine cocktail into an expansive sports-fashion taxonomy. Tracksuits, heavyweight sweats, boxy tees, and athletic accessories calibrated across four signature flavor identities.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setSelectedBrand('mymosa')}
                          className="px-5 py-2.5 bg-[#E26D35] text-white hover:bg-[#CA5B26] transition-colors text-xs uppercase tracking-widest font-semibold rounded-xs cursor-pointer shadow-md flex items-center gap-2"
                        >
                          <span>Shop MyMosa Collection</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onSelectBrand('mymosa')}
                          className="px-5 py-2.5 border border-[#E26D35] text-[#E26D35] hover:bg-[#E26D35] hover:text-white transition-colors text-xs uppercase tracking-widest font-semibold rounded-xs cursor-pointer"
                        >
                          Explore MyMosa House
                        </button>
                      </div>
                    </div>

                    {/* 16:9 Collection Feature Banner */}
                    <div className="relative bg-neutral-900 rounded-xs overflow-hidden shadow-xl border border-[#DDD7CB] group">
                      <CampaignImage
                        src="assets/products/mymosa/mymosa-four-flavor-tracksuits.webp"
                        alt="MyMosa four-flavor sports-fashion tracksuits collection in Classic Orange, Pineapple, Strawberry, and Watermelon colorways"
                        aspectRatio="16/9"
                        position="center center"
                        className="w-full rounded-xs group-hover:scale-101 transition-transform duration-700"
                      />
                      <div className="p-4 bg-[#FAF7F2] border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xs">
                        <div className="text-xs font-mono text-neutral-600">
                          <span className="font-semibold text-[#111215]">Four-Flavor Tracksuit Series:</span> Classic Orange · Pineapple · Strawberry · Watermelon
                        </div>
                        <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-white border border-[#DDD7CB] rounded-xs font-medium text-[#8C6D3F]">
                          Heavyweight Fleece Direction
                        </span>
                      </div>
                    </div>

                    {/* House Categories Badges */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 bg-[#FAF7F2] border border-[#EAE5DC] rounded-xs space-y-1.5">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#E26D35] font-semibold block">
                          Apparel Taxonomy
                        </span>
                        <p className="text-xs text-[#444] font-manrope leading-relaxed">
                          Heavyweight T-shirts, Pullover & Zip Hoodies, Coordinated Sweatsuits, Track Jackets, and Athletic Shorts.
                        </p>
                      </div>
                      <div className="p-4 bg-[#FAF7F2] border border-[#EAE5DC] rounded-xs space-y-1.5">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#E26D35] font-semibold block">
                          Accessories Taxonomy
                        </span>
                        <p className="text-xs text-[#444] font-manrope leading-relaxed">
                          Six-panel Baseball Caps, Washed Caps, Bucket Hats, Ribbed Beanies, Athletic Visors, Crew Socks, Slides, and Travel Duffels.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ========================================================================= */}
                  {/* 4. MYMOSA FOUR-COLORWAY SELECTOR */}
                  {/* ========================================================================= */}
                  <div className="bg-white border border-[#E6E0D5] p-6 sm:p-10 rounded-xs shadow-md space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#EAE5DC]">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.28em] text-[#E26D35] font-semibold block mb-1">
                          Flavor Colorway Selector
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-cormorant font-normal text-[#111215]">
                          The Four MyMosa Flagship Color Stories
                        </h3>
                      </div>
                      <p className="text-xs text-neutral-500 font-manrope max-w-md">
                        Four calibrated flavor expressions designed to work as cohesive sports-fashion statements across the entire lifestyle suite.
                      </p>
                    </div>

                    {/* Interactive 4-Colorway Tabs */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {mymosaColorways.map((cw) => {
                        const isActive = activeMymosaColorway === cw.id;
                        return (
                          <button
                            key={cw.id}
                            onClick={() => setActiveMymosaColorway(cw.id)}
                            className={`p-4 rounded-xs border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                              isActive
                                ? 'border-[#111215] bg-[#FAF7F2] shadow-md ring-1 ring-[#111215]'
                                : 'border-[#DDD7CB] bg-white hover:border-[#111215]/50'
                            }`}
                          >
                            <div className="flex items-center justify-between w-full">
                              <div
                                className="w-5 h-5 rounded-full border border-black/15 shadow-2xs"
                                style={{ backgroundColor: cw.hex }}
                              />
                              {isActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#111215]" />
                              )}
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-[#111215] font-manrope tracking-wide">
                                {cw.name}
                              </div>
                              <div className="text-[10px] font-mono text-neutral-500 uppercase mt-0.5">
                                Flagship 0{mymosaColorways.indexOf(cw) + 1}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Colorway Editorial Display */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF7F2] border border-[#EAE5DC] p-6 rounded-xs">
                      <div className="lg:col-span-7 rounded-xs overflow-hidden border border-[#DDD7CB] shadow-md">
                        <CampaignImage
                          src={currentMymosaColor.image}
                          alt={currentMymosaColor.alt}
                          aspectRatio="16/9"
                          position="center center"
                          className="w-full"
                        />
                      </div>
                      <div className="lg:col-span-5 space-y-4">
                        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-xs text-[10px] uppercase font-mono tracking-widest text-white" style={{ backgroundColor: currentMymosaColor.hex }}>
                          <span>Colorway Identity</span>
                        </div>
                        <h4 className="text-2xl font-cormorant font-normal text-[#111215]">
                          {currentMymosaColor.name} Expression
                        </h4>
                        <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                          {currentMymosaColor.desc}
                        </p>
                        <div className="pt-2">
                          <button
                            onClick={() => setSelectedBrand('mymosa')}
                            className="text-xs uppercase tracking-widest font-semibold text-[#E26D35] hover:text-[#CA5B26] flex items-center gap-1 cursor-pointer"
                          >
                            <span>Browse All {currentMymosaColor.name} Silhouettes</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* MyMosa Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                      {mymosaProducts.slice(0, 4).map((p) => (
                        <ProductCard
                          key={p.id}
                          product={p}
                          onSelectProduct={onSelectProduct}
                          onSelectBrand={onSelectBrand}
                        />
                      ))}
                    </div>
                  </div>
                </section>

                {/* ========================================================================= */}
                {/* 5. MYTAI COLLECTION */}
                {/* ========================================================================= */}
                <section id="mytai-collection" className="space-y-6">
                  <div className="bg-white border border-[#CCDCE0] p-6 sm:p-10 rounded-xs shadow-md space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E0ECEF]">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4F8F8] border border-[#CCDCE0] text-[#2A7B88] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs">
                          <span>Island Sports-Fashion</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215]">
                          MyTai — Island Leisure & Athletic Poise
                        </h2>
                        <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-2xl font-manrope">
                          Balancing coastal resort ease with crisp athletic mobility. Rendered in volcanic black, raw ivory, deep oceanic teal, sunset coral, and restrained gold accents.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setSelectedBrand('mytai')}
                          className="px-5 py-2.5 bg-[#2A7B88] text-white hover:bg-[#20606B] transition-colors text-xs uppercase tracking-widest font-semibold rounded-xs cursor-pointer shadow-md flex items-center gap-2"
                        >
                          <span>View MyTai Collection</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onSelectBrand('mytai')}
                          className="px-5 py-2.5 border border-[#2A7B88] text-[#2A7B88] hover:bg-[#2A7B88] hover:text-white transition-colors text-xs uppercase tracking-widest font-semibold rounded-xs cursor-pointer"
                        >
                          Explore House
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="border border-[#CCDCE0] rounded-xs overflow-hidden group shadow-sm bg-neutral-900">
                        <CampaignImage
                          src="assets/products/mytai/mytai-apparel-products.webp"
                          alt="MyTai island-inspired sports-fashion apparel collection featuring T-shirts, hoodies, track jackets, and sweatpants in black, ivory, teal, coral, and restrained gold"
                          aspectRatio="16/9"
                          position="center center"
                          className="w-full"
                        />
                        <div className="p-4 bg-white border-t border-[#CCDCE0]">
                          <span className="text-[10px] uppercase tracking-widest text-[#2A7B88] font-semibold block">Apparel Collection</span>
                          <h4 className="text-base font-cormorant text-[#111215]">Tees, Hoodies, Track Jackets & Sweatpants</h4>
                        </div>
                      </div>

                      <div className="border border-[#CCDCE0] rounded-xs overflow-hidden group shadow-sm bg-neutral-900">
                        <CampaignImage
                          src="assets/products/mytai/mytai-accessories-products.webp"
                          alt="MyTai accessories collection featuring caps, beanies, visors, crew socks, slides, duffel bags, and belt bags in teal, coral, ivory, and black"
                          aspectRatio="16/9"
                          position="center center"
                          className="w-full"
                        />
                        <div className="p-4 bg-white border-t border-[#CCDCE0]">
                          <span className="text-[10px] uppercase tracking-widest text-[#2A7B88] font-semibold block">Accessories Collection</span>
                          <h4 className="text-base font-cormorant text-[#111215]">Caps, Visors, Socks, Slides & Duffel Bags</h4>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      {mytaiProducts.map((p) => (
                        <ProductCard
                          key={p.id}
                          product={p}
                          onSelectProduct={onSelectProduct}
                          onSelectBrand={onSelectBrand}
                        />
                      ))}
                    </div>
                  </div>
                </section>

                {/* ========================================================================= */}
                {/* 6. MYTINI COLLECTION */}
                {/* ========================================================================= */}
                <section id="mytini-collection" className="space-y-6">
                  <div className="bg-white border border-[#D9D3C7] p-6 sm:p-10 rounded-xs shadow-md space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E8E2D6]">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F5F2] border border-[#D9D3C7] text-[#382B24] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs">
                          <span>Nocturnal Sports-Fashion</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215]">
                          MyTini — Nocturnal Poise & Lounge Tailoring
                        </h2>
                        <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-2xl font-manrope">
                          The nocturnal pulse of the beverage collective. Sleek monochromatic athletic lines engineered with rich espresso warmth, cream silk contrasts, and restrained gold hardware.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setSelectedBrand('mytini')}
                          className="px-5 py-2.5 bg-[#211B17] text-white hover:bg-[#382B24] transition-colors text-xs uppercase tracking-widest font-semibold rounded-xs cursor-pointer shadow-md flex items-center gap-2"
                        >
                          <span>View MyTini Collection</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onSelectBrand('mytini')}
                          className="px-5 py-2.5 border border-[#211B17] text-[#211B17] hover:bg-[#211B17] hover:text-white transition-colors text-xs uppercase tracking-widest font-semibold rounded-xs cursor-pointer"
                        >
                          Explore House
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="border border-[#D9D3C7] rounded-xs overflow-hidden group shadow-sm bg-neutral-900">
                        <CampaignImage
                          src="assets/products/mytini/mytini-apparel-products.webp"
                          alt="MyTini nocturnal lounge sports-fashion apparel collection featuring T-shirts, hoodies, and tailored warmups in black, espresso, ivory, and restrained gold"
                          aspectRatio="16/9"
                          position="center center"
                          className="w-full"
                        />
                        <div className="p-4 bg-white border-t border-[#D9D3C7]">
                          <span className="text-[10px] uppercase tracking-widest text-[#382B24] font-semibold block">Apparel Collection</span>
                          <h4 className="text-base font-cormorant text-[#111215]">Monochromatic Tees, Minimalist Hoodies & Tailored Warmups</h4>
                        </div>
                      </div>

                      <div className="border border-[#D9D3C7] rounded-xs overflow-hidden group shadow-sm bg-neutral-900">
                        <CampaignImage
                          src="assets/products/mytini/mytini-accessories-products.webp"
                          alt="MyTini accessories collection featuring structured caps, beanies, socks, slides, weekender duffels, and belt bags in black, espresso, ivory, and restrained gold"
                          aspectRatio="16/9"
                          position="center center"
                          className="w-full"
                        />
                        <div className="p-4 bg-white border-t border-[#D9D3C7]">
                          <span className="text-[10px] uppercase tracking-widest text-[#382B24] font-semibold block">Accessories Collection</span>
                          <h4 className="text-base font-cormorant text-[#111215]">Structured Caps, Cashmere Beanies, Duffels & Slides</h4>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      {mytiniProducts.map((p) => (
                        <ProductCard
                          key={p.id}
                          product={p}
                          onSelectProduct={onSelectProduct}
                          onSelectBrand={onSelectBrand}
                        />
                      ))}
                    </div>
                  </div>
                </section>

                {/* ========================================================================= */}
                {/* 7. MYJITO COLLECTION (NEVER MOJITO) */}
                {/* ========================================================================= */}
                <section id="myjito-collection" className="space-y-6">
                  <div className="bg-white border border-[#C8DDD3] p-6 sm:p-10 rounded-xs shadow-md space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#D8ECE3]">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3F8F5] border border-[#C8DDD3] text-[#2D7F67] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs">
                          <span>Botanical Sports-Fashion</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215]">
                          MyJito — Botanical Vitality & Athletic Agility
                        </h2>
                        <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-2xl font-manrope">
                          Inspired by crushed garden mint and crisp citrus rituals. Designed for outdoor tennis courts, poolside warmups, and lively afternoons in mint, ivory, navy, fresh lime, and gold.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setSelectedBrand('myjito')}
                          className="px-5 py-2.5 bg-[#1D5E4C] text-white hover:bg-[#154639] transition-colors text-xs uppercase tracking-widest font-semibold rounded-xs cursor-pointer shadow-md flex items-center gap-2"
                        >
                          <span>View MyJito Collection</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onSelectBrand('myjito')}
                          className="px-5 py-2.5 border border-[#1D5E4C] text-[#1D5E4C] hover:bg-[#1D5E4C] hover:text-white transition-colors text-xs uppercase tracking-widest font-semibold rounded-xs cursor-pointer"
                        >
                          Explore House
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="border border-[#C8DDD3] rounded-xs overflow-hidden group shadow-sm bg-neutral-900">
                        <CampaignImage
                          src="assets/products/myjito/myjito-apparel-products.webp"
                          alt="MyJito mint and navy sports-fashion apparel collection featuring T-shirts, hoodies, a track jacket, and sweatpants in botanical mint, deep navy, lime, ivory, and gold"
                          aspectRatio="16/9"
                          position="center center"
                          className="w-full"
                        />
                        <div className="p-4 bg-white border-t border-[#C8DDD3]">
                          <span className="text-[10px] uppercase tracking-widest text-[#2D7F67] font-semibold block">Apparel Collection</span>
                          <h4 className="text-base font-cormorant text-[#111215]">Mint & Navy Track Jackets, Hoodies & Joggers</h4>
                        </div>
                      </div>

                      <div className="border border-[#C8DDD3] rounded-xs overflow-hidden group shadow-sm bg-neutral-900">
                        <CampaignImage
                          src="assets/products/myjito/myjito-accessories-products.webp"
                          alt="MyJito accessories collection featuring dual-tone caps, athletic visors, technical crew socks, slides, and gym travel bags in mint, navy, lime, and ivory"
                          aspectRatio="16/9"
                          position="center center"
                          className="w-full"
                        />
                        <div className="p-4 bg-white border-t border-[#C8DDD3]">
                          <span className="text-[10px] uppercase tracking-widest text-[#2D7F67] font-semibold block">Accessories Collection</span>
                          <h4 className="text-base font-cormorant text-[#111215]">Dual-Tone Caps, Court Visors, Socks & Gym Bags</h4>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      {myjitoProducts.map((p) => (
                        <ProductCard
                          key={p.id}
                          product={p}
                          onSelectProduct={onSelectProduct}
                          onSelectBrand={onSelectBrand}
                        />
                      ))}
                    </div>
                  </div>
                </section>

                {/* ========================================================================= */}
                {/* 8. MYGARITA COLLECTION (NEVER MARGARITA) */}
                {/* ========================================================================= */}
                <section id="mygarita-collection" className="space-y-6">
                  <div className="bg-white border border-[#D5D0C0] p-6 sm:p-10 rounded-xs shadow-md space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E5E0D0]">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F6F1] border border-[#D5D0C0] text-[#7A8C74] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-xs">
                          <span>Desert Sports-Fashion</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215]">
                          MyGarita — Agave Horizon & Warm Desert Silhouettes
                        </h2>
                        <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-2xl font-manrope">
                          Drawing from sun-soaked agave bluffs and southwestern stone terraces. Easy-wearing athletic track sets, washed canvas accessories, and weathered comfort in sage, sand, cream, and gold.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setSelectedBrand('mygarita')}
                          className="px-5 py-2.5 bg-[#53654E] text-white hover:bg-[#3F4F3B] transition-colors text-xs uppercase tracking-widest font-semibold rounded-xs cursor-pointer shadow-md flex items-center gap-2"
                        >
                          <span>View MyGarita Collection</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onSelectBrand('mygarita')}
                          className="px-5 py-2.5 border border-[#53654E] text-[#53654E] hover:bg-[#53654E] hover:text-white transition-colors text-xs uppercase tracking-widest font-semibold rounded-xs cursor-pointer"
                        >
                          Explore House
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="border border-[#D5D0C0] rounded-xs overflow-hidden group shadow-sm bg-neutral-900">
                        <CampaignImage
                          src="assets/products/mygarita/mygarita-apparel-products.webp"
                          alt="MyGarita agave sage and warm sand sports-fashion apparel collection featuring hoodies, track jackets, tees, and sweatpants in agave sage, sand, cream, black, and gold"
                          aspectRatio="16/9"
                          position="center center"
                          className="w-full"
                        />
                        <div className="p-4 bg-white border-t border-[#D5D0C0]">
                          <span className="text-[10px] uppercase tracking-widest text-[#7A8C74] font-semibold block">Apparel Collection</span>
                          <h4 className="text-base font-cormorant text-[#111215]">Agave Sage & Sand Fleece Hoodies, Track Jackets & Tees</h4>
                        </div>
                      </div>

                      <div className="border border-[#D5D0C0] rounded-xs overflow-hidden group shadow-sm bg-neutral-900">
                        <CampaignImage
                          src="assets/products/mygarita/mygarita-accessories-products.webp"
                          alt="MyGarita accessories collection featuring washed caps, beanies, visors, crew socks, slides, and travel duffel bags in agave sage, warm sand, and cream"
                          aspectRatio="16/9"
                          position="center center"
                          className="w-full"
                        />
                        <div className="p-4 bg-white border-t border-[#D5D0C0]">
                          <span className="text-[10px] uppercase tracking-widest text-[#7A8C74] font-semibold block">Accessories Collection</span>
                          <h4 className="text-base font-cormorant text-[#111215]">Washed Twill Caps, Bucket Hats, Slides & Travel Duffels</h4>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      {mygaritaProducts.map((p) => (
                        <ProductCard
                          key={p.id}
                          product={p}
                          onSelectProduct={onSelectProduct}
                          onSelectBrand={onSelectBrand}
                        />
                      ))}
                    </div>
                  </div>
                </section>

                {/* ========================================================================= */}
                {/* 9. ACCESSORIES ACROSS THE HOUSES */}
                {/* ========================================================================= */}
                <section id="accessories-across-houses" className="space-y-8 bg-white border border-[#E6E0D5] p-6 sm:p-10 rounded-xs shadow-md">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#EAE5DC]">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C6D3F] font-semibold block mb-1">
                        Cross-House Accoutrements
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-cormorant font-normal text-[#111215]">
                        Accessories Across the Houses
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-500 font-manrope max-w-md">
                      Caps, beanies, athletic visors, recovery slides, travel duffels, barware, and glassware engineered with equal devotion across all 11 houses.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {accessoriesProducts.slice(0, 8).map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onSelectProduct={onSelectProduct}
                        onSelectBrand={onSelectBrand}
                      />
                    ))}
                  </div>
                </section>

                {/* ========================================================================= */}
                {/* 9.5 BEYOND THE WARDROBE — LIFESTYLE & ACCESSORIES DISCOVERY */}
                {/* ========================================================================= */}
                <section id="beyond-the-wardrobe" className="space-y-12 bg-[#F6F3EC] border border-[#DDD7CB] p-6 sm:p-10 rounded-xs shadow-md">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D8D2C4]">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D3F] font-semibold block mb-2">
                        Lifestyle & Personal Rituals
                      </span>
                      <h3 className="text-3xl sm:text-5xl font-cormorant font-normal text-[#111215]">
                        Beyond the Wardrobe.
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-xl font-manrope leading-relaxed">
                      The world of IKLA Maison extends into private living, hospitality, movement, travel, and daily ritual—each house expressed through objects designed for its own environment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {[
                      {
                        id: 'ikla-maison-living',
                        brandId: 'ikla-maison',
                        anchorId: 'home-living',
                        title: 'Maison Living',
                        badge: 'Home & Living',
                        territory: 'Elevated living, bedroom, bath, and personal rituals',
                        image: 'assets/accessories/ikla-maison/ikla-maison-bedroom-collection.webp',
                        alt: 'IKLA Maison bedroom collection featuring bedding, pillows, throws, slippers, a sleep mask, candle, and leather valet tray.',
                        accent: '#8C6D3F'
                      },
                      {
                        id: 'mdf-hospitality',
                        brandId: 'my-drink-family',
                        anchorId: 'hospitality',
                        title: 'My Drink Family Hospitality',
                        badge: 'Hospitality',
                        territory: 'Hospitality, glassware, barware, and poolside entertaining',
                        image: 'assets/accessories/my-drink-family/my-drink-family-glassware-barware.webp',
                        alt: 'My Drink Family glassware and barware suite featuring crystal coupes, champagne flutes, rocks glasses, cocktail shaker, jigger, strainer, and gold serving tray.',
                        accent: '#E06D38'
                      },
                      {
                        id: 'ktse-training',
                        brandId: 'ktse',
                        anchorId: 'training-carry',
                        title: 'KTSE Training & Carry',
                        badge: 'Discipline',
                        territory: 'Training duffels, recovery mats, and movement discipline',
                        image: 'assets/accessories/ktse/ktse-training-everyday-carry.webp',
                        alt: 'KTSE training and everyday carry collection featuring heavyweight training duffels, technical backpacks, exercise mats, insulated bottles, lifting straps, and performance accessories.',
                        accent: '#8C7A6B'
                      },
                      {
                        id: 'moteon-travel',
                        brandId: 'moteon',
                        anchorId: 'resort-travel',
                        title: 'Motéon Resort & Travel',
                        badge: 'Resort Movement',
                        territory: 'Weekender bags, carryall totes, sunglasses, and coastal travel',
                        image: 'assets/accessories/moteon/moteon-resort-travel-collection.webp',
                        alt: 'Motéon resort and travel collection featuring weekender luggage, carryall totes, leather toiletry cases, passport wallets, designer sunglasses, and leisure accessories.',
                        accent: '#B85D3B'
                      },
                      {
                        id: 'moral-compass-leather',
                        brandId: 'moral-compass',
                        anchorId: 'executive-leather',
                        title: 'Moral Compass Leather',
                        badge: 'Executive Saddlery',
                        territory: 'Briefcases, document portfolios, journals, and private office instruments',
                        image: 'assets/accessories/moral-compass/moral-compass-executive-leather.webp',
                        alt: 'Moral Compass executive leather goods collection featuring architectural briefcases, document portfolios, leather journals, card holders, watch rolls, and refined brass keepsakes.',
                        accent: '#7A828A'
                      },
                      {
                        id: 'wnnr-travel',
                        brandId: 'wnnr',
                        anchorId: 'executive-travel',
                        title: 'WNNR Executive Travel',
                        badge: 'WIN WITHIN',
                        territory: 'Discipline weekender duffels, executive backpacks, and travel organizers',
                        image: 'assets/accessories/wnnr/wnnr-executive-travel.webp',
                        alt: 'WNNR executive travel and everyday-carry collection featuring obsidian leather totes, weekender duffels, executive backpacks, headwear, card holders, and discipline travel accessories.',
                        accent: '#C5A869'
                      },
                      {
                        id: 'ikla-water-service',
                        brandId: 'ikla-water',
                        anchorId: 'hydration-service',
                        title: 'IKLA Water Table Service',
                        badge: 'Table Ceremony',
                        territory: 'Sculptural carafes, tumblers, and architectural coaster suites',
                        image: 'assets/accessories/ikla-water/ikla-water-hydration-service.webp',
                        alt: 'IKLA Water hydration and table service collection featuring minimalist glass carafes, water tumblers, reusable glass travel bottles, ice buckets, coaster sets, and serving trays.',
                        accent: '#5E8896'
                      }
                    ].map((col) => (
                      <a
                        key={col.id}
                        href={`#/brand/${col.brandId}#${col.anchorId}`}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.hash = `/brand/${col.brandId}#${col.anchorId}`;
                        }}
                        className="bg-white border border-[#DDD7CB] hover:border-[#111215] rounded-xs overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                      >
                        <div>
                          <div className="overflow-hidden aspect-[16/9] w-full bg-neutral-900">
                            <CampaignImage
                              src={col.image}
                              alt={col.alt}
                              aspectRatio="16/9"
                              position="center center"
                              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-5 space-y-2">
                            <div className="flex items-center justify-between">
                              <span
                                className="text-[10px] uppercase tracking-[0.25em] font-semibold"
                                style={{ color: col.accent }}
                              >
                                {col.badge}
                              </span>
                              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                                Preview
                              </span>
                            </div>
                            <h4 className="text-xl font-cormorant font-normal text-[#111215] group-hover:text-black">
                              {col.title}
                            </h4>
                            <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                              {col.territory}
                            </p>
                          </div>
                        </div>

                        <div className="p-5 pt-3 border-t border-[#EAE5DC] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#8C6D3F] group-hover:text-[#111215]">
                          <span>Explore Collection</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </a>
                    ))}
                  </div>
                </section>

                {/* ========================================================================= */}
                {/* 10. RELATED IKLA MAISON COLLECTIONS */}
                {/* ========================================================================= */}
                <section id="related-fashion-collections" className="space-y-8">
                  <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C6D3F] font-semibold block">
                      The High Tailoring Federation
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-cormorant font-normal text-[#111215]">
                      Related IKLA Maison Fashion Houses
                    </h3>
                    <p className="text-xs text-[#50545E] font-manrope font-light">
                      Beyond beverage sports-fashion, explore the architectural couture and disciplined street viewpoints unified under the House of IKLA umbrella.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {FASHION_HOUSES.map((house) => (
                      <div
                        key={house.id}
                        onClick={() => onSelectBrand(house.id)}
                        className="bg-white border border-[#DDD7CB] hover:border-[#111215] p-5 rounded-xs transition-all shadow-xs hover:shadow-lg cursor-pointer flex flex-col justify-between group"
                      >
                        <div className="space-y-3">
                          <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#DDD7CB] p-1 flex items-center justify-center">
                            <img src={house.logos.crestLight} alt="" className="w-full h-full object-contain" />
                          </div>
                          <div>
                            <h4 className="text-lg font-cormorant font-normal text-[#111215] group-hover:text-black">
                              {house.name}
                            </h4>
                            <p className="text-[11px] text-[#555A64] font-light line-clamp-2 mt-1 font-manrope">
                              {house.tagline}
                            </p>
                          </div>
                        </div>

                        <div className="pt-4 mt-3 border-t border-[#EAE5DC] flex items-center justify-between text-[10px] uppercase tracking-widest font-semibold text-[#8C6D3F] group-hover:text-black">
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ========================================================================= */}
                {/* 11. WAITLIST & AVAILABILITY CALL TO ACTION */}
                {/* ========================================================================= */}
                <section className="bg-[#111215] text-white p-8 sm:p-14 rounded-xs border border-[#C8A97E]/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
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
                      Request information about future IKLA Maison releases, special-order objects, or connected My Drink Family hospitality merchandise through direct correspondence.
                    </p>

                    {waitlistSubmitted ? (
                      <div className="p-4 bg-emerald-900/40 border border-emerald-500/50 rounded-xs text-xs font-mono text-emerald-200 animate-fade-in">
                        Your email application should open with the access request prepared.
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
                      <span>No Online Payment</span>
                      <span>•</span>
                      <span>Direct Confirmation</span>
                      <span>•</span>
                      <span>By Request</span>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* When viewing a specific house, render standard filtered catalog controls & grid */}
            {selectedBrand !== 'all' && (
              <>
                {/* Filter Controls Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E0DBD0]">
                  {/* Category Filter Pills (Desktop) */}
                  <div className="hidden md:flex items-center gap-2 overflow-x-auto">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3.5 py-1.5 text-xs tracking-wider transition-colors cursor-pointer ${
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
                          className={`px-3 py-1.5 text-xs rounded-xs border cursor-pointer ${
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
          </>
        )}
      </div>
    </div>
  );
}
