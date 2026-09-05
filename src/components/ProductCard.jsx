import React, { useState } from 'react';
import { ShoppingBag, Eye, Check } from 'lucide-react';
import { BRANDS } from '../data/brands';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onSelectProduct, onSelectBrand }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : 'One Size');
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0].name : 'Standard');
  const [isAdded, setIsAdded] = useState(false);

  const brand = BRANDS[product.brandId];
  const brandAccent = brand ? brand.palette.accent : '#C8A97E';
  const brandGlow = brand ? brand.glowColor : 'rgba(200,169,126,0.3)';

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, selectedSize, selectedColor, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div
      onClick={() => onSelectProduct && onSelectProduct(product)}
      className="group relative flex flex-col bg-white border border-[#E6E0D5] hover:border-[#C8A97E]/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden rounded-xs"
      style={{
        '--brand-glow': brandGlow,
      }}
    >
      {/* Visual Asset Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#F5F2EC]">
        <img
          src={product.image}
          alt={product.imageAlt || product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Brand Badge Overlay with Crest Icon */}
        <div className="absolute top-3 left-3 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectBrand && onSelectBrand(product.brandId);
            }}
            className="px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-white/90 backdrop-blur-md text-[#16171A] border border-neutral-300/80 hover:border-[#0F172A] hover:bg-white transition-all flex items-center gap-1.5 rounded-xs cursor-pointer shadow-xs"
          >
            {brand?.logos?.crestLight && (
              <img src={brand.logos.crestLight} alt="" className="w-3 h-3 object-contain shrink-0" />
            )}
            <span>{product.brandName}</span>
          </button>
        </div>

        {/* Status badges */}
        {product.isNew && (
          <div
            className="absolute top-3 right-3 z-10 px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#0A0B0D] font-bold rounded-xs shadow-xs"
            style={{ backgroundColor: brandAccent }}
          >
            New
          </div>
        )}

        {/* Hover Quick Action Drawer */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2 z-20">
          {/* Quick size selection */}
          {product.sizes && product.sizes.length > 1 && (
            <div className="flex items-center justify-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              {product.sizes.slice(0, 5).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-7 h-7 text-[10px] font-medium flex items-center justify-center border transition-all rounded-xs cursor-pointer ${
                    selectedSize === size
                      ? 'border-white bg-white text-black font-semibold shadow'
                      : 'border-white/30 bg-black/70 text-white/80 hover:border-white/70'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={handleQuickAdd}
              className={`flex-1 py-2.5 px-3 text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer rounded-xs shadow-lg ${
                brand ? brand.buttonStyle : 'bg-[#0F172A] text-white hover:bg-[#1E293B]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Quick Add</span>
                </>
              )}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectProduct && onSelectProduct(product);
              }}
              title="View Product Details"
              aria-label={`View details for ${product.name}`}
              className="p-2.5 text-white/90 bg-neutral-800/90 hover:bg-neutral-700 border border-neutral-700 transition-colors flex items-center justify-center rounded-xs cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Information Area */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3 bg-white">
        <div>
          <div className="flex items-center justify-between text-xs text-neutral-500 font-light mb-1 font-manrope">
            <span>{product.category}</span>
            <span className="text-emerald-700 text-[10px] tracking-wider uppercase font-semibold">
              {product.inventory > 5 ? 'In Stock' : `Low: ${product.inventory} left`}
            </span>
          </div>

          <h3 className="text-sm font-medium text-[#16171A] group-hover:text-black transition-colors line-clamp-1 font-manrope tracking-wide">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between pt-2.5 border-t border-[#EAE5DC]">
          <span className="text-sm font-semibold text-[#0E0F12] tracking-wider font-manrope">
            ${product.price} <span className="text-[10px] text-neutral-500 font-normal">USD</span>
          </span>

          {/* Color preview dots */}
          {product.colors && (
            <div className="flex items-center gap-1.5">
              {product.colors.map((c) => (
                <span
                  key={c.name}
                  title={c.name}
                  className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-xs"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

