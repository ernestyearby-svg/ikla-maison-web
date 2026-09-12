import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, KeyRound, Mail, X } from 'lucide-react';
import { BRANDS } from '../data/brands';

const CONTACT_EMAIL = 'concierge@iklamaison.com';

export default function ProductDetailModal({ product, onClose, onSelectBrand }) {
  const [openSection, setOpenSection] = useState('details');
  const brand = product ? BRANDS[product.brandId] : null;

  useEffect(() => {
    const handleKeyDown = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!product) return null;

  const cleanName = product.name.replace(/^\[Placeholder\]\s*/i, '');
  const mailSubject = encodeURIComponent(`Private allocation request — ${cleanName}`);
  const mailBody = encodeURIComponent(`I would like to request private access information for ${cleanName} by ${product.brandName}.\n\nPreferred color / size:\nClient name:\nPhone (optional):`);

  const sections = [
    { id: 'details', label: 'Private Access Process', content: ['Submit a direct inquiry', 'Share preferred size, color, or configuration', 'Receive confirmed specifications, availability, and terms before any order'] },
    { id: 'fit', label: 'Sizing & Configuration', content: 'Sizing and configuration are reviewed directly with client relations before allocation.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section role="dialog" aria-modal="true" aria-labelledby="private-dossier-title" className="relative w-full max-w-5xl max-h-[94vh] overflow-y-auto bg-[#0e1014] border border-neutral-800 shadow-2xl text-neutral-100">
        <button onClick={onClose} aria-label="Close private dossier" className="absolute top-4 right-4 z-30 p-2.5 bg-black/70 border border-white/15 text-white hover:border-[#C8A97E]">
          <X className="w-4 h-4" />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[360px] md:min-h-[680px] bg-neutral-900 overflow-hidden">
            <img src={product.image} alt={product.imageAlt || cleanName} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            <span className="absolute left-5 bottom-5 text-[9px] uppercase tracking-[0.3em] text-white/80">Private collection visual · Subject to final specification</span>
          </div>

          <div className="p-7 sm:p-10 flex flex-col">
            <div className="pr-10">
              <button onClick={() => { onClose(); onSelectBrand?.(product.brandId); }} className="text-[10px] uppercase tracking-[0.28em] text-[#C8A97E] hover:text-white">
                {product.brandName}
              </button>
              <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-neutral-500">Private Client Dossier</p>
              <h2 id="private-dossier-title" className="mt-2 text-3xl sm:text-4xl font-cormorant font-light leading-tight">{cleanName}</h2>
              <p className="mt-5 text-sm text-neutral-300 font-manrope font-light leading-relaxed">Presented as an individual private-collection concept. Final materials, configuration, availability, and terms are confirmed directly before any order.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 my-7">
              <div className="border border-neutral-800 p-3">
                <span className="block text-[9px] uppercase tracking-widest text-neutral-500">Access</span>
                <span className="block mt-1 text-xs text-white">By private request</span>
              </div>
              <div className="border border-neutral-800 p-3">
                <span className="block text-[9px] uppercase tracking-widest text-neutral-500">Status</span>
                <span className="block mt-1 text-xs text-white">{product.status || 'Allocation review'}</span>
              </div>
            </div>

            <div className="border-t border-neutral-800 divide-y divide-neutral-800 mb-7">
              {sections.map((section) => (
                <div key={section.id}>
                  <button onClick={() => setOpenSection(openSection === section.id ? null : section.id)} className="w-full py-3.5 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-neutral-300 hover:text-white">
                    {section.label}{openSection === section.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openSection === section.id && (
                    <div className="pb-4 text-xs text-neutral-400 font-manrope leading-relaxed">
                      {Array.isArray(section.content) ? (
                        <ul className="space-y-2">{section.content.map((item) => <li key={item} className="flex gap-2"><span className="text-[#C8A97E]">•</span><span>{item}</span></li>)}</ul>
                      ) : section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto space-y-3">
              <a href={`mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`} className={`${brand?.buttonStyle || 'bg-[#C8A97E] text-black'} w-full py-4 px-5 flex items-center justify-center gap-2`}>
                <Mail className="w-4 h-4" /> Request Allocation
              </a>
              <a href="#/contact" onClick={onClose} className="w-full py-3.5 border border-neutral-700 hover:border-[#C8A97E] flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white">
                <KeyRound className="w-4 h-4" /> Private Client Appointment <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[10px] text-neutral-500 text-center leading-relaxed">No public pricing or automatic checkout. Availability, specifications, and terms are confirmed directly by client relations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
