import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Gift, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ onNavigateCollection, onSelectBrand, onReturnHome, onProceedToCheckout }) {
  const {
    items,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
    giftPackaging,
    setGiftPackaging,
    freeShippingThreshold,
    isEligibleForFreeShipping,
    amountToFreeShipping,
  } = useCart();

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <div
          onClick={closeCart}
          className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-drawer-title"
            className="relative w-screen max-w-md bg-[#101114] border-l border-neutral-800 shadow-2xl flex flex-col animate-slide-in-right text-neutral-100 overflow-hidden"
          >
            {/* Background Watermark */}
            <div className="absolute -right-16 -bottom-16 w-80 h-80 opacity-[0.04] pointer-events-none select-none z-0">
              <img
                src="/assets/ikla-maison/logos/crest-light.webp"
                alt=""
                className="w-full h-full object-contain animate-spin-slow"
              />
            </div>

            {/* Drawer Header */}
            <div className="relative z-10 p-6 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-[#C8A97E]" />
                <h2 id="cart-drawer-title" className="text-lg font-light tracking-wide text-white">
                  Shopping Bag <span className="text-xs text-neutral-500 font-normal">({totalItems})</span>
                </h2>
              </div>
              <button
                onClick={closeCart}
                aria-label="Close shopping bag"
                className="p-2 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="px-6 py-3 bg-neutral-900/60 border-b border-neutral-800/80 text-xs">
              <div className="flex justify-between text-neutral-300 mb-1.5 font-light">
                {isEligibleForFreeShipping ? (
                  <span className="text-emerald-400 font-medium">
                    ✓ Complimentary White-Glove Shipping Unlocked
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-white">${amountToFreeShipping} USD</strong> for Complimentary Shipping
                  </span>
                )}
                <span className="text-neutral-500 font-mono">{progressPercent}%</span>
              </div>
              <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C8A97E] transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 divide-y divide-neutral-800/70">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-neutral-400">
                  <div className="w-14 h-14 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-600">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base text-white font-light">Your Bag is Empty</h3>
                    <p className="text-xs text-neutral-500 max-w-xs mt-1">
                      Explore the curations of our five luxury houses to discover foundational garments.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      closeCart();
                      onNavigateCollection && onNavigateCollection();
                    }}
                    className="mt-4 px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold bg-[#C8A97E] hover:bg-[#DFBF95] text-black transition-all cursor-pointer"
                  >
                    Explore The Houses
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.cartItemId} className="py-4 flex gap-4">
                    {/* Item Image */}
                    <div className="w-20 h-20 bg-neutral-900 border border-neutral-800 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E]">
                            {item.brandName}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.cartItemId)}
                            aria-label={`Remove ${item.name}`}
                            className="text-neutral-500 hover:text-red-400 p-0.5 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h4 className="text-xs font-medium text-white line-clamp-1">{item.name}</h4>
                        <div className="text-[11px] text-neutral-400 mt-0.5">
                          Size: {item.selectedSize} | Color: {item.selectedColor}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-neutral-800 bg-neutral-900/60">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, -1)}
                            className="p-1 px-2 text-neutral-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs text-white font-mono">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, 1)}
                            className="p-1 px-2 text-neutral-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-medium text-white">
                          ${item.price * item.quantity} USD
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t border-neutral-800 bg-[#0d0e11] space-y-4">
                {/* Gift packaging option */}
                <label className="flex items-center gap-3 cursor-pointer text-xs text-neutral-300">
                  <input
                    type="checkbox"
                    checked={giftPackaging}
                    onChange={(e) => setGiftPackaging(e.target.checked)}
                    className="accent-[#C8A97E] w-4 h-4 rounded"
                  />
                  <div className="flex items-center gap-1.5">
                    <Gift className="w-3.5 h-3.5 text-[#C8A97E]" />
                    <span>Complimentary signature gift packaging & handwritten note</span>
                  </div>
                </label>

                {/* Subtotal */}
                <div className="space-y-1.5 text-xs text-neutral-400 border-t border-neutral-800/80 pt-3">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="text-white font-medium">${subtotal} USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courier Service:</span>
                    <span className="text-emerald-400 font-medium">
                      {isEligibleForFreeShipping ? 'Complimentary' : 'Calculated at checkout'}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={() => {
                    closeCart();
                    onProceedToCheckout && onProceedToCheckout();
                  }}
                  className="w-full py-4 text-xs uppercase tracking-[0.2em] font-semibold bg-[#C8A97E] hover:bg-[#DFBF95] text-black transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={closeCart}
                  className="w-full py-2 text-xs text-neutral-400 hover:text-white text-center cursor-pointer"
                >
                  Continue Browsing Collection
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
