import React, { useRef, useState } from 'react';
import { ArrowUpRight, KeyRound, Sparkles } from 'lucide-react';
import { BRANDS } from '../data/brands';
import { getProductStyledImage, getProductStyledImageAlt } from '../data/productPresentation';
import { getAssetPath } from '../utils/assets.js';

export default function ProductCard({ product, onSelectProduct, onSelectBrand }) {
  const brand = BRANDS[product.brandId];
  const brandAccent = brand?.palette?.accent || '#C8A97E';
  const cleanName = product.name.replace(/^\[Placeholder\]\s*/i, '');
  const styledImage = getProductStyledImage(product);
  const styledImageAlt = getProductStyledImageAlt(product);
  const [isHovering, setIsHovering] = useState(false);
  const [mobileView, setMobileView] = useState('product');
  const touchStartX = useRef(null);
  const suppressTouchClick = useRef(false);
  const isStyledVisible = Boolean(styledImage) && (isHovering || mobileView === 'styled');

  const isTouchLayout = () => (
    typeof window !== 'undefined' && window.matchMedia('(hover: none), (pointer: coarse)').matches
  );

  const handleMediaClick = () => {
    if (suppressTouchClick.current) {
      suppressTouchClick.current = false;
      return;
    }
    if (styledImage && isTouchLayout()) {
      setMobileView((current) => current === 'product' ? 'styled' : 'product');
      return;
    }
    onSelectProduct?.(product);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (!styledImage || touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    if (Math.abs(endX - touchStartX.current) >= 32) {
      suppressTouchClick.current = true;
      setMobileView(endX < touchStartX.current ? 'styled' : 'product');
    }
    touchStartX.current = null;
  };

  return (
    <article className="group relative flex flex-col bg-[#FCFBF8] border border-[#E6E0D5] hover:border-[#C8A97E]/80 shadow-xs hover:shadow-xl transition-all duration-500 overflow-hidden rounded-xs h-full">
      <div
        className="relative aspect-square w-full overflow-hidden bg-[#F5F2EC]"
        onPointerEnter={(event) => event.pointerType === 'mouse' && styledImage && setIsHovering(true)}
        onPointerLeave={(event) => event.pointerType === 'mouse' && setIsHovering(false)}
        data-product-media={styledImage ? 'paired' : 'single'}
        data-media-state={isStyledVisible ? 'styled' : 'product'}
      >
        <button
          type="button"
          onClick={handleMediaClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => { touchStartX.current = null; }}
          className="absolute inset-0 w-full h-full text-left cursor-pointer"
          aria-label={styledImage
            ? `Toggle styled look or view private access details for ${cleanName}`
            : `View private access details for ${cleanName}`}
        >
          <img
            src={getAssetPath(product.image)}
            alt={product.imageAlt || cleanName}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
              isStyledVisible ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100 group-hover:scale-105'
            }`}
          />
          {styledImage && (
            <img
              src={styledImage}
              alt={styledImageAlt}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 w-full h-full object-contain object-center bg-[#EEE9DF] transition-all duration-700 ease-out ${
                isStyledVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.025]'
              }`}
            />
          )}
          <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/95 via-black/55 to-transparent transition-opacity duration-300 ${
            isStyledVisible ? 'opacity-100' : 'opacity-100 sm:opacity-0 sm:group-hover:opacity-100'
          }`}>
            <span className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white font-semibold">
              {isStyledVisible ? 'Complete styled look' : 'View private dossier'} <ArrowUpRight className="w-4 h-4 text-[#C8A97E]" />
            </span>
          </div>
        </button>

        {styledImage && (
          <div
            className="absolute left-3 bottom-12 z-20 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/75 p-1 backdrop-blur-md shadow-lg"
            aria-label={`Image views for ${cleanName}`}
          >
            <button
              type="button"
              onClick={() => {
                setIsHovering(false);
                setMobileView('product');
              }}
              className={`min-w-8 rounded-full px-2 py-1 text-[8px] uppercase tracking-[0.14em] transition-colors ${
                !isStyledVisible ? 'bg-white text-black font-semibold' : 'text-white/80 hover:bg-white/15'
              }`}
              aria-pressed={!isStyledVisible}
            >
              Item
            </button>
            <button
              type="button"
              onClick={() => setMobileView('styled')}
              className={`min-w-8 rounded-full px-2 py-1 text-[8px] uppercase tracking-[0.14em] transition-colors ${
                isStyledVisible ? 'bg-[#D4A657] text-black font-semibold' : 'text-white/80 hover:bg-white/15'
              }`}
              aria-pressed={isStyledVisible}
            >
              Look
            </button>
          </div>
        )}

        {styledImage && (
          <span className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 text-[8px] uppercase tracking-[0.2em] bg-white/95 text-[#16171A] border border-[#E2DDD3] shadow-xs backdrop-blur-md rounded-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
            <span>{isStyledVisible ? 'Styled View' : 'Hover · Tap · Swipe'}</span>
          </span>
        )}
        <span className="absolute top-3 right-3 z-20 px-2.5 py-1 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] bg-[#0A0B0D]/85 text-[#F5F2EC] border border-white/15 backdrop-blur-md font-manrope rounded-xs">
          {product.isReserve || product.status ? (product.status || 'Private Release') : 'By Request'}
        </span>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1 gap-3">
        <button
          type="button"
          onClick={() => onSelectBrand?.(product.brandId)}
          className="self-start text-[9px] uppercase tracking-[0.24em] font-semibold hover:underline"
          style={{ color: brandAccent }}
        >
          {product.brandName}
        </button>
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C6D3F] font-medium mb-1">{product.category}</p>
          <h3 className="text-base sm:text-lg font-cormorant text-[#16171A] leading-snug">{cleanName}</h3>
          <p className="text-[11px] text-[#555A64] mt-2 line-clamp-2 font-manrope leading-relaxed">
            {product.shortStatement || product.material || 'Individual collection presentation. Specifications and private allocation terms confirmed through client relations.'}
          </p>
        </div>
        <div className="pt-3 border-t border-[#EAE5DC] flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#6F5735] font-semibold">
            {product.status || 'Private Allocation'}
          </span>
          <button
            type="button"
            onClick={() => onSelectProduct?.(product)}
            className="p-2 text-[#16171A] hover:text-[#8C6D3F] transition-colors cursor-pointer"
            aria-label={`Request access to ${cleanName}`}
          >
            <KeyRound className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
