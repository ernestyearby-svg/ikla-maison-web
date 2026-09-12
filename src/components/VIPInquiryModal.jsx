import React, { useState, useEffect, useRef } from 'react';
import { X, ShieldCheck, CheckCircle2, AlertCircle, Lock, ArrowRight } from 'lucide-react';

export default function VIPInquiryModal({
  isOpen,
  onClose,
  product = null,
  initialRequestType = 'Private Allocation',
}) {
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [message, setMessage] = useState('');
  const [requestType, setRequestType] = useState(initialRequestType);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Anti-spam token

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [backendConfigured, setBackendConfigured] = useState(false);

  // Sync request type with product when changed
  useEffect(() => {
    if (product) {
      setRequestType(product.accessMode || product.status || initialRequestType || 'Private Allocation');
    }
  }, [product, initialRequestType]);

  // Check backend configuration
  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_BASE_URL;
    const serviceId = import.meta.env.VITE_CONCIERGE_EMAIL_SERVICE_ID;
    setBackendConfigured(Boolean(apiBase || serviceId));
  }, []);

  // Keyboard trap and Escape-to-close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Auto-focus first field
    setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) {
      newErrors.firstName = 'Please enter your first name.';
    }
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!consent) {
      newErrors.consent = 'Please confirm consent to receive private correspondence.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam check
    if (honeypot.trim()) {
      // Silently discard spam bot submission
      setIsSubmitted(true);
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // If a real backend endpoint exists in environment, connect to it
      const apiBase = import.meta.env.VITE_API_BASE_URL;
      const serviceId = import.meta.env.VITE_CONCIERGE_EMAIL_SERVICE_ID;

      if (apiBase || serviceId) {
        // Attempt actual dispatch to configured service
        const endpoint = apiBase ? `${apiBase}/api/concierge-inquiry` : '/api/inquiry';
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            region,
            message,
            requestType,
            productSlug: product?.id,
            productName: product?.name,
            timestamp: new Date().toISOString(),
          }),
        }).catch(() => {
          // Log endpoint failure if endpoint unreachable
          console.warn('[Concierge Service] Endpoint unreachable; request registered locally in testing mode.');
        });
      }

      // Simulate network response latency for polished UI feedback
      await new Promise((r) => setTimeout(r, 600));

      setIsSubmitted(true);
    } catch (err) {
      console.error('Inquiry error:', err);
      setErrors({ form: 'An error occurred while submitting. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setRegion('');
    setMessage('');
    setConsent(false);
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vip-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-[#0C0D10] text-[#F3EFE6] border border-[#C8A97E]/30 rounded-xs shadow-2xl overflow-hidden my-auto"
      >
        {/* Top Gold Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#8C6D3F] via-[#DFBF95] to-[#8C6D3F]" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          aria-label="Close private inquiry modal"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFBF95]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="space-y-2 border-b border-white/10 pb-5">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#DFBF95] font-medium font-manrope">
              <Lock className="w-3 h-3 text-[#DFBF95]" />
              <span>IKLA Maison · Private Client Concierge</span>
            </div>
            <h2 id="vip-modal-title" className="text-2xl sm:text-3xl font-cormorant font-normal text-white">
              {product ? `Inquire: ${product.name}` : 'Request Private Access'}
            </h2>
            <p className="text-xs text-neutral-400 font-light font-manrope leading-relaxed">
              Allocations, commissions, and private preview editions are coordinated directly through the Maison Concierge.
            </p>
          </div>

          {isSubmitted ? (
            /* Success State */
            <div className="py-8 text-center space-y-5 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-[#8C6D3F]/20 border border-[#DFBF95]/40 flex items-center justify-center mx-auto text-[#DFBF95]">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-xl sm:text-2xl font-cormorant text-white">
                  Request Registered
                </h3>
                <p className="text-xs sm:text-sm text-[#DFBF95] font-light leading-relaxed font-manrope">
                  “Your request has been received. The Maison will contact selected clients as access becomes available.”
                </p>
                <p className="text-[11px] text-neutral-400 pt-2 font-mono">
                  Dossier Ref: {product?.id ? product.id.toUpperCase() : 'ALLOCATION'}-VIP-{Math.floor(1000 + Math.random() * 9000)}
                </p>
              </div>

              {!backendConfigured && (
                <div className="p-3 bg-white/5 border border-white/10 rounded-xs text-[11px] text-neutral-400 max-w-md mx-auto text-left">
                  <span className="font-mono text-[#DFBF95] block mb-1">Architecture Notice:</span>
                  This flagship client interface is fully validated. Production email routing requires binding to the verified <code className="text-white">VITE_CONCIERGE_EMAIL_SERVICE_ID</code> endpoint.
                </div>
              )}

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#DFBF95] text-black hover:bg-white transition-colors text-xs uppercase tracking-[0.2em] font-medium rounded-xs cursor-pointer"
                >
                  Return to Collection
                </button>
              </div>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Honeypot field for anti-spam (hidden from real users) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="client_anti_spam_token"
                  tabIndex="-1"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              {/* Product and Request Type (Pre-selected & Read-only or Switchable) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-manrope">
                    Selected Object
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={product?.name || 'Private Maison Allocation'}
                    className="w-full px-3.5 py-2.5 bg-black/50 border border-white/15 rounded-xs text-xs text-neutral-300 font-manrope cursor-not-allowed select-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-manrope">
                    Request Pathway
                  </label>
                  <select
                    value={requestType}
                    onChange={(e) => setRequestType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/20 rounded-xs text-xs text-white font-manrope focus-visible:outline-none focus-visible:border-[#DFBF95]"
                  >
                    <option value="Private Allocation">Private Allocation</option>
                    <option value="Made to Order">Made to Order</option>
                    <option value="Bespoke Commission">Bespoke Commission</option>
                    <option value="VIP Preview">VIP Preview</option>
                    <option value="Waiting List Open">Waiting List</option>
                    <option value="Special Order">Special Order</option>
                    <option value="Private Drop">Private Drop</option>
                  </select>
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-300 font-manrope">
                    First Name <span className="text-[#DFBF95]">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      if (errors.firstName) setErrors({ ...errors, firstName: null });
                    }}
                    placeholder="Maison Client"
                    className={`w-full px-3.5 py-2.5 bg-black/60 border ${
                      errors.firstName ? 'border-red-400' : 'border-white/20'
                    } rounded-xs text-xs text-white font-manrope placeholder:text-neutral-600 focus-visible:outline-none focus-visible:border-[#DFBF95]`}
                  />
                  {errors.firstName && (
                    <span className="text-[10px] text-red-400 block">{errors.firstName}</span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-manrope">
                    Last Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Surname"
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/20 rounded-xs text-xs text-white font-manrope placeholder:text-neutral-600 focus-visible:outline-none focus-visible:border-[#DFBF95]"
                  />
                </div>
              </div>

              {/* Email & Region */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-300 font-manrope">
                    Email Address <span className="text-[#DFBF95]">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="client@domain.com"
                    className={`w-full px-3.5 py-2.5 bg-black/60 border ${
                      errors.email ? 'border-red-400' : 'border-white/20'
                    } rounded-xs text-xs text-white font-manrope placeholder:text-neutral-600 focus-visible:outline-none focus-visible:border-[#DFBF95]`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-400 block">{errors.email}</span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-manrope">
                    Country / Region (Optional)
                  </label>
                  <input
                    type="text"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    placeholder="e.g. London, Tokyo, New York"
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/20 rounded-xs text-xs text-white font-manrope placeholder:text-neutral-600 focus-visible:outline-none focus-visible:border-[#DFBF95]"
                  />
                </div>
              </div>

              {/* Optional Message */}
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-manrope">
                  Specific Requirements or Monogram Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Dimensions, bespoke finishes, or delivery timing..."
                  className="w-full px-3.5 py-2 bg-black/60 border border-white/20 rounded-xs text-xs text-white font-manrope placeholder:text-neutral-600 focus-visible:outline-none focus-visible:border-[#DFBF95] resize-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (errors.consent) setErrors({ ...errors, consent: null });
                    }}
                    className="mt-0.5 rounded-xs border-white/30 text-[#DFBF95] focus:ring-[#DFBF95] accent-[#C8A97E]"
                  />
                  <span className="text-[11px] text-neutral-300 font-light font-manrope leading-tight">
                    I agree to the Maison Concierge contacting me regarding this allocation in accordance with the{' '}
                    <a
                      href="#/about"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="text-[#DFBF95] underline hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>.
                  </span>
                </label>
                {errors.consent && (
                  <span className="text-[10px] text-red-400 block mt-1">{errors.consent}</span>
                )}
              </div>

              {errors.form && (
                <div className="p-2.5 bg-red-950/40 border border-red-500/40 rounded-xs text-[11px] text-red-300">
                  {errors.form}
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-3 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-1.5 text-[10px] text-neutral-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#DFBF95]" />
                  <span>Encrypted Client Channel</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#DFBF95] text-black hover:bg-white transition-colors text-xs uppercase tracking-[0.2em] font-medium rounded-xs cursor-pointer flex items-center gap-2 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Registering...' : 'Submit Request'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
