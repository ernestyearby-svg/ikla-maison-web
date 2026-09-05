import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, ShieldCheck, Truck, RefreshCw, ChevronDown, ChevronUp, Check, ArrowRight } from 'lucide-react';
import { BRANDS } from '../data/brands';
import { useCart } from '../context/CartContext';

export default function ProductDetailModal({ product, onClose, onSelectBrand, onContinueShopping }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[0] : 'One Size');
  const [selectedColor, setSelectedColor] = useState(product?.colors ? product.colors[0].name : 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState('details');
  const [isAdded, setIsAdded] = useState(false);

  const brand = product ? BRANDS[product.brandId] : null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 400);
  };

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdp-modal-title"
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#0e1014] border border-neutral-800/90 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col text-neutral-100 rounded-xs overflow-hidden"
      >
        {/* Brand Faded Wordmark Watermark in Background (5% opacity, pointer-events: none) */}
        {brand?.logos?.wordmarkDark && (
          <div className="absolute top-1/3 -right-20 pointer-events-none select-none opacity-[0.05] w-[500px] z-0 overflow-hidden">
            <img src={brand.logos.wordmarkDark} alt="" className="w-full h-auto object-contain" />
          </div>
        )}

        {/* Rotating Circular Brand Crest in Corner Background (8% opacity, pointer-events: none) */}
        {brand?.logos?.crestLight && (
          <div className="absolute -bottom-16 -left-16 w-64 h-64 pointer-events-none select-none opacity-[0.08] z-0">
            <img src={brand.logos.crestLight} alt="" className="w-full h-full object-contain animate-spin-slow" />
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 p-2.5 text-neutral-400 hover:text-white bg-black/60 hover:bg-black/90 border border-neutral-800 rounded-xs transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10 relative z-10">
          {/* Left Column: Product Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full bg-neutral-900 border border-neutral-800/80 overflow-hidden group rounded-xs">
              <img
                src={product.image}
                alt={product.imageAlt || product.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <button
                  onClick={() => {
                    onClose();
                    onSelectBrand && onSelectBrand(product.brandId);
                  }}
                  className="px-3 py-1.5 text-xs uppercase tracking-[0.2em] font-medium bg-black/80 backdrop-blur-md text-white border border-white/20 hover:border-white/60 transition-colors flex items-center gap-1.5 rounded-xs cursor-pointer"
                >
                  {brand?.logos?.crestLight && (
                    <img src={brand.logos.crestLight} alt="" className="w-3.5 h-3.5 object-contain" />
                  )}
                  <span>{product.brandName}</span>
                </button>
              </div>
            </div>

            <p className="text-[11px] text-neutral-500 italic text-center">
              Official archive visual asset from the House of {product.brandName} collection.
            </p>
          </div>

          {/* Right Column: Garment Specs & Ordering */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Brand identifier */}
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C8A97E] font-medium">
                  {product.brandName}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {product.inventory > 5 ? 'Guaranteed In Stock' : `Limited: ${product.inventory} Units Left`}
                </span>
              </div>

              {/* Title & Price */}
              <h2 id="pdp-modal-title" className="text-2xl sm:text-3xl font-light text-white mb-3">
                {product.name}
              </h2>

              <div className="text-xl font-light text-white mb-6">
                ${product.price}{' '}
                <span className="text-xs text-neutral-400 font-normal uppercase tracking-wider">USD (Taxes included)</span>
              </div>

              {/* Short description */}
              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6 border-b border-neutral-800 pb-6">
                {product.description}
              </p>

              {/* Color selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs mb-2.5">
                    <span className="uppercase tracking-widest text-neutral-400">Color Palette</span>
                    <span className="text-neutral-200 font-medium">{selectedColor}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`flex items-center gap-2 px-3 py-1.5 border text-xs transition-all ${
                          selectedColor === color.name
                            ? 'border-[#C8A97E] bg-white/5 text-white'
                            : 'border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-white/20"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs mb-2.5">
                    <span className="uppercase tracking-widest text-neutral-400">Select Size</span>
                    <span className="text-neutral-400 hover:text-neutral-200 cursor-pointer underline text-[11px]">
                      Complimentary Size Consultation
                    </span>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2.5 text-xs font-medium border transition-all ${
                          selectedSize === size
                            ? 'border-[#C8A97E] bg-[#C8A97E] text-black font-semibold'
                            : 'border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:border-neutral-600 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Bag */}
              <div className="flex items-center gap-4 mb-8">
                {/* Quantity modifier */}
                <div className="flex items-center border border-neutral-800 bg-neutral-900/80">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="px-3.5 py-3 text-neutral-400 hover:text-white disabled:opacity-30"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-medium text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(product.inventory, q + 1))}
                    disabled={quantity >= product.inventory}
                    className="px-3.5 py-3 text-neutral-400 hover:text-white disabled:opacity-30"
                  >
                    +
                  </button>
                </div>

                {/* Primary Add Button */}
                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3.5 px-6 rounded-xs flex items-center justify-center gap-2.5 active:scale-[0.99] shadow-lg cursor-pointer ${
                    brand ? brand.buttonStyle : 'bg-[#C8A97E] hover:bg-[#DFBF95] text-black text-xs uppercase tracking-[0.2em] font-semibold'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-900" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag — ${product.price * quantity}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Collapsible Accordions */}
              <div className="border-t border-neutral-800 divide-y divide-neutral-800/80 text-xs">
                {/* Details */}
                <div>
                  <button
                    onClick={() => toggleSection('details')}
                    className="w-full py-3.5 flex items-center justify-between text-neutral-300 hover:text-white transition-colors"
                  >
                    <span className="uppercase tracking-widest font-medium">Garment Details & Construction</span>
                    {openSection === 'details' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openSection === 'details' && (
                    <div className="pb-4 text-neutral-400 font-light space-y-2">
                      {product.details?.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-[#C8A97E] mt-0.5">•</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Fabric & Care */}
                <div>
                  <button
                    onClick={() => toggleSection('care')}
                    className="w-full py-3.5 flex items-center justify-between text-neutral-300 hover:text-white transition-colors"
                  >
                    <span className="uppercase tracking-widest font-medium">Fabric Composition & Care</span>
                    {openSection === 'care' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openSection === 'care' && (
                    <div className="pb-4 text-neutral-400 font-light leading-relaxed">
                      {product.fabricCare}
                    </div>
                  )}
                </div>

                {/* Fit */}
                <div>
                  <button
                    onClick={() => toggleSection('fit')}
                    className="w-full py-3.5 flex items-center justify-between text-neutral-300 hover:text-white transition-colors"
                  >
                    <span className="uppercase tracking-widest font-medium">Fit & Tailoring Guide</span>
                    {openSection === 'fit' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openSection === 'fit' && (
                    <div className="pb-4 text-neutral-400 font-light leading-relaxed">
                      {product.fitNotes}
                    </div>
                  )}
                </div>

                {/* Shipping & Delivery */}
                <div>
                  <button
                    onClick={() => toggleSection('shipping')}
                    className="w-full py-3.5 flex items-center justify-between text-neutral-300 hover:text-white transition-colors"
                  >
                    <span className="uppercase tracking-widest font-medium">White-Glove Shipping & Returns</span>
                    {openSection === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openSection === 'shipping' && (
                    <div className="pb-4 text-neutral-400 font-light space-y-2 leading-relaxed">
                      <p>Complimentary signature insured courier delivery on all orders above $350.</p>
                      <p>Includes signature archival keepsake box, acid-free garment tissue, and numbered authenticity certificate.</p>
                      <p>Complimentary 30-day returns and exchanges via dedicated concierge pickup.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between">
              <button
                onClick={() => {
                  onClose();
                  onContinueShopping && onContinueShopping();
                }}
                className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Continue Shopping Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  onClose();
                  onSelectBrand && onSelectBrand(product.brandId);
                }}
                className="text-xs text-[#C8A97E] hover:underline uppercase tracking-wider"
              >
                Explore House of {product.brandName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
