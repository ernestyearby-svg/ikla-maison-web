import React, { useRef, useState } from 'react';
import { ArrowUpRight, KeyRound } from 'lucide-react';
import { BRANDS } from '../data/brands';
import { getProductStyledImage, getProductStyledImageAlt } from '../data/productPresentation';

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
    <article className="group relative flex flex-col bg-white border border-[#E6E0D5] hover:border-[#C8A97E]/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden rounded-xs">
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
            src={product.image}
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
              {isStyledVisible ? 'Complete styled look' : 'View private dossier'} <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </button>

        {styledImage && (
          <div
            className="absolute left-3 bottom-12 z-20 inline-flex items-center gap-1 rounded-full border border-white/25 bg-black/65 p-1 backdrop-blur-sm"
            aria-label={`Image views for ${cleanName}`}
          >
            <button
              type="button"
              onClick={() => {
                setIsHovering(false);
                setMobileView('product');
              }}
              className={`min-w-8 rounded-full px-2 py-1 text-[8px] uppercase tracking-[0.14em] transition-colors ${
                !isStyledVisible ? 'bg-white text-black' : 'text-white hover:bg-white/15'
              }`}
              aria-pressed={!isStyledVisible}
            >
              Item
            </button>
            <button
              type="button"
              onClick={() => setMobileView('styled')}
              className={`min-w-8 rounded-full px-2 py-1 text-[8px] uppercase tracking-[0.14em] transition-colors ${
                isStyledVisible ? 'bg-[#D4A657] text-black' : 'text-white hover:bg-white/15'
              }`}
              aria-pressed={isStyledVisible}
            >
              Look
            </button>
          </div>
        )}

        {styledImage && (
          <span className="absolute top-3 left-3 z-20 px-2.5 py-1 text-[8px] uppercase tracking-[0.18em] bg-white/90 text-[#16171A] border border-black/10 backdrop-blur-sm">
            {isStyledVisible ? 'Styled View' : 'Hover · Tap · Swipe'}
          </span>
        )}
        <span className="absolute top-3 right-3 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] bg-black/75 text-white border border-white/20 backdrop-blur-sm">
          {product.isReserve || product.status ? 'Private Preview' : 'By Request'}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <button
          type="button"
          onClick={() => onSelectBrand?.(product.brandId)}
          className="self-start text-[9px] uppercase tracking-[0.22em] font-semibold hover:underline"
          style={{ color: brandAccent }}
        >
          {product.brandName}
        </button>
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 mb-1">{product.category}</p>
          <h3 className="text-base font-cormorant text-[#16171A] leading-tight">{cleanName}</h3>
          <p className="text-[11px] text-neutral-500 mt-2 line-clamp-2 font-manrope leading-relaxed">
            Individual collection presentation. Final specifications and availability are confirmed through private client relations.
          </p>
        </div>
        <div className="pt-3 border-t border-[#EAE5DC] flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.18em] text-[#6F5735] font-semibold">
            {product.status || 'Private Allocation'}
          </span>
          <button type="button" onClick={() => onSelectProduct?.(product)} className="p-2 text-[#16171A] hover:text-[#8C6D3F]" aria-label={`Request access to ${cleanName}`}>
            <KeyRound className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
