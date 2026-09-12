import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, KeyRound } from 'lucide-react';
import { BRAND_LIST } from '../data/brands';

export default function ContactPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: 'All Houses',
    subject: 'Sizing & Wardrobe Advisory',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const subject = encodeURIComponent(`${formData.subject} — ${formData.brand}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nInterest: ${formData.brand}\n\n${formData.message}`);
      window.location.href = `mailto:concierge@iklamaison.com?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      brand: 'All Houses',
      subject: 'Sizing & Wardrobe Advisory',
      message: '',
    });
  };

  return (
    <div className="w-full bg-[#FAF7F2] text-[#16171A] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#F4EFE6] border-b border-[#E5DFD5] text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D3F] font-semibold block mb-3">
            Private Client Advisory
          </span>
          <h1 className="text-4xl sm:text-5xl font-cormorant font-normal text-[#111215] mb-4">
            Maison Client Concierge
          </h1>
          <p className="text-xs sm:text-sm text-[#50545E] font-light leading-relaxed font-manrope">
            Request collection access, a private appointment, sizing guidance, or a commission conversation. Every request is reviewed individually.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Client Relations Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8C6D3F] font-semibold block mb-2">
                Direct Relations
              </span>
              <h2 className="text-2xl font-cormorant font-normal text-[#111215] mb-4">
                Direct Correspondence
              </h2>
              <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                Private client requests are handled through direct email correspondence. No payment is collected through this website.
              </p>
            </div>

            <div className="space-y-6 text-xs text-[#50545E]">
              <div className="flex items-start gap-4 p-4 bg-white border border-[#E2DDD3] shadow-xs rounded-xs">
                <Mail className="w-5 h-5 text-[#8C6D3F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#111215] font-medium mb-1">Direct Electronic Dossier</div>
                  <div className="text-[#50545E]">concierge@iklamaison.com</div>
                  <div className="text-[#717682] text-[11px] mt-0.5">Discreet inquiries, press, and styling dossiers</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-[#E2DDD3] shadow-xs rounded-xs">
                <KeyRound className="w-5 h-5 text-[#8C6D3F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#111215] font-medium mb-1">Private Access</div>
                  <div className="text-[#50545E]">Limited drops, special orders, and Griffin Edition commissions</div>
                  <div className="text-[#717682] text-[11px] mt-0.5">Details are confirmed directly after review</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Form */}
          <div className="lg:col-span-7 bg-white border border-[#DDD7CB] p-8 sm:p-10 rounded-xs shadow-md">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF5ED] border border-[#8C6D3F] flex items-center justify-center text-[#8C6D3F]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold">
                    Transmission Acknowledged
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-cormorant text-[#111215] font-normal mt-2 mb-3">
                    Thank You, {formData.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50545E] font-light max-w-md mx-auto leading-relaxed font-manrope">
                    Your email application should now be open with your request prepared for <strong className="text-[#111215]">concierge@iklamaison.com</strong>. Send it from your email application to complete the inquiry.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 text-xs uppercase tracking-widest text-[#111215] border border-[#DDD7CB] hover:border-black transition-colors cursor-pointer rounded-xs"
                  >
                    Submit Another Inquiry
                  </button>
                  <button
                    onClick={onNavigateHome}
                    className="px-6 py-3 text-xs uppercase tracking-widest font-semibold bg-[#0F172A] text-white hover:bg-[#1E293B] transition-colors cursor-pointer rounded-xs shadow-md"
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-cormorant font-normal text-[#111215] mb-1">Direct Correspondence Form</h3>
                  <p className="text-xs text-[#50545E] font-light font-manrope">
                    Please provide your particulars and inquiry details below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-[#4A4E57] mb-1.5 uppercase tracking-wider text-[11px] font-manrope font-medium">
                      Your Full Name <span className="text-[#8C6D3F]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Montgomery"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFC3] rounded-xs p-3.5 text-[#111215] placeholder-neutral-400 focus:bg-white focus:border-[#8C6D3F] focus:ring-1 focus:ring-[#8C6D3F]/30 focus:outline-none transition-all font-manrope text-xs shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[#4A4E57] mb-1.5 uppercase tracking-wider text-[11px] font-manrope font-medium">
                      Confidential Email <span className="text-[#8C6D3F]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. client@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFC3] rounded-xs p-3.5 text-[#111215] placeholder-neutral-400 focus:bg-white focus:border-[#8C6D3F] focus:ring-1 focus:ring-[#8C6D3F]/30 focus:outline-none transition-all font-manrope text-xs shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-[#4A4E57] mb-1.5 uppercase tracking-wider text-[11px] font-manrope font-medium">
                      House of Interest
                    </label>
                    <select
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFC3] rounded-xs p-3.5 text-[#111215] focus:bg-white focus:border-[#8C6D3F] focus:ring-1 focus:ring-[#8C6D3F]/30 focus:outline-none cursor-pointer transition-all font-manrope text-xs shadow-2xs"
                    >
                      <option value="All Houses">All Houses</option>
                      {BRAND_LIST.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#4A4E57] mb-1.5 uppercase tracking-wider text-[11px] font-manrope font-medium">
                      Nature of Inquiry
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFC3] rounded-xs p-3.5 text-[#111215] focus:bg-white focus:border-[#8C6D3F] focus:ring-1 focus:ring-[#8C6D3F]/30 focus:outline-none cursor-pointer transition-all font-manrope text-xs shadow-2xs"
                    >
                      <option value="Sizing & Wardrobe Advisory">Sizing & Wardrobe Advisory</option>
                      <option value="Private Salon Appointment">Private Salon Appointment</option>
                      <option value="Private Allocation Request">Private Allocation Request</option>
                      <option value="IKLA Kids Interest">IKLA Kids Interest</option>
                      <option value="Griffin Edition Commission">Griffin Edition Commission</option>
                      <option value="Garment Archival Care">Garment Archival Care</option>
                      <option value="Press & Editorial Inquiries">Press & Editorial Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#4A4E57] mb-1.5 uppercase tracking-wider text-[11px] font-manrope font-medium">
                    Message Particulars <span className="text-[#8C6D3F]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Provide details regarding your size measurements, desired garments, or salon scheduling request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D5CFC3] rounded-xs p-3.5 text-[#111215] placeholder-neutral-400 focus:bg-white focus:border-[#8C6D3F] focus:ring-1 focus:ring-[#8C6D3F]/30 focus:outline-none resize-none transition-all font-manrope text-xs shadow-2xs"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full py-4 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl rounded-xs active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Private Correspondence</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
