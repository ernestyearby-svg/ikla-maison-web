import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Lock, CreditCard, ArrowRight, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutModal({ isOpen, onClose, onReturnHome }) {
  const { items, subtotal, giftPackaging, isEligibleForFreeShipping, clearCart, closeCart } = useCart();
  const [step, setStep] = useState('shipping'); // 'shipping' | 'payment' | 'confirmed'
  const [orderId, setOrderId] = useState('');

  const [formData, setFormData] = useState({
    firstName: 'Eleanor',
    lastName: 'Vance',
    email: 'eleanor.vance@iklamaison-client.com',
    phone: '+1 (555) 382-9901',
    address: '740 Park Avenue, Apt 14B',
    city: 'New York',
    state: 'NY',
    zip: '10021',
    country: 'United States',
    shippingMethod: 'complimentary',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4092',
    cardExpiry: '08/29',
    cardCvc: '•••',
  });

  if (!isOpen) return null;

  const shippingCost = isEligibleForFreeShipping || formData.shippingMethod === 'complimentary' ? 0 : 45;
  const estimatedTax = Math.round(subtotal * 0.08);
  const total = subtotal + shippingCost + estimatedTax;

  const handleCompleteOrder = (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const randomId = 'IKLA-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
    setStep('confirmed');
    clearCart();
    closeCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in text-neutral-100">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-modal-title"
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#101114] border border-neutral-800 shadow-2xl p-6 sm:p-10 flex flex-col"
      >
        {/* Background Watermark */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-[0.03] pointer-events-none select-none z-0">
          <img
            src="/assets/ikla-maison/logos/crest-light.webp"
            alt=""
            className="w-full h-full object-contain animate-spin-slow"
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close checkout modal"
          className="relative z-10 self-end -mt-2 -mr-2 p-2 text-neutral-400 hover:text-white bg-black/50 border border-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'confirmed' ? (
          <div className="text-center py-10 px-4 space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C8A97E]/10 border border-[#C8A97E] flex items-center justify-center text-[#C8A97E]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8A97E] font-medium">
                Order Confirmed
              </span>
              <h2 id="checkout-modal-title" className="text-2xl sm:text-3xl font-serif font-normal text-white mt-1">
                Thank You for Your Patronage
              </h2>
              <p className="text-neutral-400 text-sm mt-2">
                Order reference number: <strong className="text-white font-mono">{orderId}</strong>
              </p>
            </div>

            <div className="max-w-md mx-auto p-4 bg-neutral-900/80 border border-neutral-800 text-xs text-left space-y-2 text-neutral-300">
              <div className="flex justify-between">
                <span className="text-neutral-500">Destination:</span>
                <span>{formData.address}, {formData.city}, {formData.state}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Delivery Service:</span>
                <span>White-Glove Insured Courier (2–3 Business Days)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Packaging:</span>
                <span>{giftPackaging ? 'Signature Archival Keepsake Box & Ribbon' : 'Standard Eco-Luxury Garment Bag'}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-neutral-800 text-white font-medium">
                <span>Total Settled:</span>
                <span>${total} USD</span>
              </div>
            </div>

            <p className="text-xs text-neutral-500 max-w-md mx-auto">
              A detailed dispatch dossier and tracking manifest have been forwarded to {formData.email}.
            </p>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => {
                  closeCart();
                  onClose();
                  onReturnHome && onReturnHome();
                }}
                className="px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold bg-[#C8A97E] hover:bg-[#DFBF95] text-black transition-all cursor-pointer"
              >
                Return to Maison Home
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="border-b border-neutral-800 pb-4 mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E]">Concierge Checkout</span>
                <h2 id="checkout-modal-title" className="text-2xl font-serif font-normal text-white">White-Glove Order Placement</h2>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-Bit Encrypted</span>
              </div>
            </div>

            <form onSubmit={handleCompleteOrder} className="space-y-6">
              {/* Client information */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-3">1. Client Particulars</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-neutral-400 mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 p-2.5 text-white focus:border-[#C8A97E] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 p-2.5 text-white focus:border-[#C8A97E] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">Client Email (For dispatch dossier)</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 p-2.5 text-white focus:border-[#C8A97E] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">Contact Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 p-2.5 text-white focus:border-[#C8A97E] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-3">2. Delivery Residence</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="sm:col-span-3">
                    <label className="block text-neutral-400 mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 p-2.5 text-white focus:border-[#C8A97E] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 p-2.5 text-white focus:border-[#C8A97E] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">State / Province</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 p-2.5 text-white focus:border-[#C8A97E] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">Postal Code</label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 p-2.5 text-white focus:border-[#C8A97E] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment details */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-3">3. Payment Settlement</h3>
                <div className="p-4 bg-neutral-900/60 border border-neutral-800 space-y-3 text-xs">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CreditCard className="w-4 h-4 text-[#C8A97E]" />
                    <span>Secure Encrypted Card Transaction</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-3 sm:col-span-2">
                      <label className="block text-neutral-400 mb-1">Card Number</label>
                      <input
                        type="text"
                        disabled
                        value={formData.cardNumber}
                        className="w-full bg-neutral-950 border border-neutral-800 p-2.5 text-neutral-300 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-400 mb-1">Expiry</label>
                      <input
                        type="text"
                        disabled
                        value={formData.cardExpiry}
                        className="w-full bg-neutral-950 border border-neutral-800 p-2.5 text-neutral-300 font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial summary breakdown */}
              <div className="p-4 bg-neutral-900/40 border border-neutral-800 text-xs space-y-2">
                <div className="flex justify-between text-neutral-400">
                  <span>Bag Subtotal ({items.length} garments):</span>
                  <span className="text-white font-medium">${subtotal} USD</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>White-Glove Insured Delivery:</span>
                  <span className="text-emerald-400 font-medium">
                    {shippingCost === 0 ? 'Complimentary' : `$${shippingCost} USD`}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Estimated Statutory Tax:</span>
                  <span className="text-white font-medium">${estimatedTax} USD</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-neutral-800 text-sm font-medium text-white">
                  <span>Total Amount:</span>
                  <span className="text-[#C8A97E] text-base">${total} USD</span>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-neutral-400 hover:text-white underline cursor-pointer"
                >
                  Return to Shopping Bag
                </button>

                <button
                  type="button"
                  onClick={handleCompleteOrder}
                  className="px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold bg-[#C8A97E] hover:bg-[#DFBF95] text-black transition-all cursor-pointer flex items-center gap-2 shadow-xl"
                >
                  <span>Authorize & Place Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
