import React from 'react';
import { ArrowUpRight, KeyRound } from 'lucide-react';
import { BRANDS } from '../data/brands';

export default function ProductCard({ product, onSelectProduct, onSelectBrand }) {
  const brand = BRANDS[product.brandId];
  const brandAccent = brand?.palette?.accent || '#C8A97E';
  const cleanName = product.name.replace(/^\[Placeholder\]\s*/i, '');

  return (
    <article className="group relative flex flex-col bg-white border border-[#E6E0D5] hover:border-[#C8A97E]/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden rounded-xs">
      <button
        type="button"
        onClick={() => onSelectProduct?.(product)}
        className="relative aspect-square w-full overflow-hidden bg-[#F5F2EC] text-left cursor-pointer"
        aria-label={`View private access details for ${cleanName}`}
      >
        <img
          src={product.image}
          alt={product.imageAlt || cleanName}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/95 via-black/55 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          <span className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white font-semibold">
            View private dossier <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
        <span className="absolute top-3 right-3 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] bg-black/75 text-white border border-white/20 backdrop-blur-sm">
          {product.isReserve || product.status ? 'Private Preview' : 'By Request'}
        </span>
      </button>

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
