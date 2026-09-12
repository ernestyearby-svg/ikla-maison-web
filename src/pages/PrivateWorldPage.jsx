import React from 'react';
import { ArrowLeft, ArrowRight, KeyRound, Mail } from 'lucide-react';
import { getAssetPath } from '../utils/assets';

const WORLDS = {
  kids: {
    eyebrow: 'IKLA Maison · Next Generation',
    title: 'IKLA Kids',
    intro: 'Elevated everyday sets for children, expressed through the master house palette with simpler marks, comfortable proportions, and a clear distinction between core pieces and limited custom drops.',
    hero: 'assets/ikla-kids/ikla-kids-core-collection-hero.webp',
    heroAlt: 'IKLA Kids core collection featuring refined sweatsuit colorways',
    note: 'Core collection preview',
    items: [
      ['Maison Green', 'assets/ikla-kids/ikla-kids-maison-green-pullover-set.webp'],
      ['Imperial Black', 'assets/ikla-kids/ikla-kids-imperial-black-crew-set.webp'],
      ['Midnight Navy', 'assets/ikla-kids/ikla-kids-midnight-navy-zip-set.webp'],
      ['Sky Summer', 'assets/ikla-kids/ikla-kids-sky-summer-essentials.webp'],
    ],
  },
  griffin: {
    eyebrow: 'IKLA Maison · Invitation-Led Commissions',
    title: 'The Griffin Edition',
    intro: 'A future-facing commission program exploring the IKLA language across automotive, maritime, residence, and aviation environments. The Griffin Edition is presented as a design vision—not a publicly orderable catalogue.',
    hero: 'assets/griffin/griffin-private-commissions-hero.webp',
    heroAlt: 'Griffin Edition private commission design vision',
    note: 'Commission concept · By private conversation',
    items: [
      ['Automotive Commission', 'assets/griffin/griffin-automotive-commission.webp'],
      ['Maritime Commission', 'assets/griffin/griffin-maritime-commission.webp'],
      ['Residence & Aviation Study', 'assets/griffin/griffin-residence-aviation-commission.webp'],
      ['Monochrome House Study', 'assets/editorial/ikla-monochrome-house-editorial-banner.webp'],
    ],
  },
};

export default function PrivateWorldPage({ world, onNavigateHome, onNavigateContact }) {
  const content = WORLDS[world] || WORLDS.kids;
  const subject = encodeURIComponent(`${content.title} private inquiry`);

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white">
      <section className="relative min-h-[72vh] flex items-end overflow-hidden">
        <img src={getAssetPath(content.hero)} alt={content.heroAlt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-black/35 to-black/20" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-12 pb-14 sm:pb-20">
          <button onClick={onNavigateHome} className="mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/75 hover:text-white"><ArrowLeft className="w-4 h-4" /> Maison Home</button>
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#D8B77D]">{content.eyebrow}</p>
          <h1 className="mt-3 text-5xl sm:text-7xl lg:text-8xl font-cormorant font-light">{content.title}</h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base text-white/80 font-manrope font-light leading-relaxed">{content.intro}</p>
          <p className="mt-5 text-[10px] uppercase tracking-[0.24em] text-[#D8B77D]">{content.note}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.items.map(([name, image]) => (
            <article key={name} className="border border-white/10 bg-white/[0.03] group">
              <div className="aspect-[4/5] overflow-hidden"><img src={getAssetPath(image)} alt={`${content.title} — ${name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" /></div>
              <div className="p-5"><p className="text-[9px] uppercase tracking-[0.25em] text-[#D8B77D]">Private Preview</p><h2 className="mt-2 text-xl font-cormorant">{name}</h2></div>
            </article>
          ))}
        </div>

        <div className="mt-16 border border-[#C8A97E]/35 bg-[#C8A97E]/[0.06] p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-7">
          <div><p className="text-[10px] uppercase tracking-[0.3em] text-[#D8B77D]">Private Client Relations</p><h2 className="mt-2 text-3xl sm:text-4xl font-cormorant">Begin the conversation.</h2><p className="mt-2 text-xs text-neutral-400">Specifications, availability, and next steps are confirmed directly.</p></div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`mailto:concierge@iklamaison.com?subject=${subject}`} className="px-6 py-3.5 bg-[#C8A97E] text-black text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2"><Mail className="w-4 h-4" /> Email Concierge</a>
            <button onClick={onNavigateContact} className="px-6 py-3.5 border border-white/25 hover:border-[#C8A97E] text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2"><KeyRound className="w-4 h-4" /> Request Access <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>
    </div>
  );
}
