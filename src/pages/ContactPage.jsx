import React, { useState } from 'react';
import { Mail, Clock, Phone, MapPin, Send, CheckCircle2, Shield } from 'lucide-react';
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
  const [inquiryCode, setInquiryCode] = useState('');

  const handleSubmit = (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const code = 'INQ-' + Math.floor(100000 + Math.random() * 900000);
      setInquiryCode(code);
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
            Our private client relations team is at your disposal for wardrobe consultations, bespoke sizing requests, order tracking, and private appointment scheduling across all five houses.
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
                Atelier Communications
              </h2>
              <p className="text-xs text-[#50545E] font-light leading-relaxed font-manrope">
                Every inquiry is addressed directly by a dedicated Maison client associate within 4 business hours.
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
                <Clock className="w-5 h-5 text-[#8C6D3F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#111215] font-medium mb-1">Client Advisory Hours</div>
                  <div className="text-[#50545E]">Monday – Friday: 08:00 – 20:00 CET</div>
                  <div className="text-[#50545E]">Saturday: 10:00 – 18:00 CET</div>
                  <div className="text-[#717682] text-[11px] mt-0.5">Sunday by private salon appointment only</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-[#E2DDD3] shadow-xs rounded-xs">
                <MapPin className="w-5 h-5 text-[#8C6D3F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#111215] font-medium mb-1">Regional Salon Hubs</div>
                  <div className="text-[#50545E]">Paris (75001) • Milan (20121) • New York (10021)</div>
                  <div className="text-[#717682] text-[11px] mt-0.5">Private client fittings by invitation</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#EBF4F0] border border-[#C2E0D4] text-xs text-[#0B4F37] flex items-center gap-3 rounded-xs font-manrope">
              <Shield className="w-4 h-4 text-[#0B4F37] shrink-0" />
              <span>All client communications are strictly confidential and encrypted.</span>
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
                    Your correspondence has been assigned inquiry manifest code <strong className="text-[#111215] font-mono">{inquiryCode}</strong>. A dedicated client advisor will reply to <strong className="text-[#111215]">{formData.email}</strong> shortly.
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
                      <option value="All Houses">All Five Houses</option>
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
                      <option value="Order Dispatch & Tracking">Order Dispatch & Tracking</option>
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
