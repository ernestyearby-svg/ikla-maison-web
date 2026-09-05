import { getAssetPath } from '../utils/assets.js';

export const BRANDS = {
  'ikla-maison': {
    id: 'ikla-maison',
    name: 'IKLA Maison',
    tagline: 'Architectural Elegance & Timeless Tailoring',
    description: 'Refined, architectural, international, timeless, and luxurious. Defined by precision proportions, neutral travertine textures, and heirloom construction.',
    keywords: ['Refined', 'Architectural', 'International', 'Timeless', 'Luxurious'],
    palette: {
      accent: '#C8A97E',
      accentHover: '#DFBF95',
      badgeBg: 'rgba(200, 169, 126, 0.16)',
      badgeBorder: 'rgba(200, 169, 126, 0.45)',
      cardBg: '#FFFFFF',
      heroOverlay: 'linear-gradient(to top, rgba(10,11,14,0.94) 0%, rgba(10,11,14,0.4) 60%, rgba(10,11,14,0.18) 100%)',
    },
    buttonStyle: 'bg-[#0F172A] text-[#FAF7F2] hover:bg-[#1E293B] shadow-md border border-[#0F172A] hover:border-[#1E293B] transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    buttonOutlineStyle: 'border border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    navAccent: '#C8A97E',
    glowColor: 'rgba(200, 169, 126, 0.25)',
    atmosphereBg: 'bg-[#FAF7F2] bg-radial-[at_top_right] from-[#F3EFE8] via-[#FAF7F2] to-[#EFE7DA]',
    houseBorder: 'border-[#DCD6CA]',
    typography: 'font-cormorant',
    founded: 'Maison Curated',
    origin: 'Paris — Milan — New York',
    logos: {
      wordmarkDark: '/assets/ikla-maison/logos/wordmark-dark.webp',
      wordmarkLight: '/assets/ikla-maison/logos/wordmark-light.webp',
      crestLight: '/assets/ikla-maison/logos/crest-light.webp',
      crestDark: '/assets/ikla-maison/logos/crest-dark.webp',
    },
    assets: {
      heroDesktop: '/assets/ikla-maison/hero-desktop.webp',
      heroMobile: '/assets/ikla-maison/hero-mobile.webp',
      collection: '/assets/ikla-maison/collection.webp',
      editorial: '/assets/ikla-maison/editorial.webp',
    },
    alt: {
      heroDesktop: 'Models descending architectural staircase in tailored cream suit and black overcoat',
      heroMobile: 'Models in marble colonnade wearing IKLA Maison embroidered knitwear',
      collection: 'Flat lay of IKLA Maison collection on travertine marble with gold embroidery',
      editorial: 'Sunset villa terrace overlooking infinity pool and coastal horizon',
    },
    manifesto: 'IKLA Maison exists at the convergence of pure architectural geometry and relaxed couture. Each garment is conceived as a habitable silhouette—measured, intentional, and sculpted from world-class natural wools, cashmere, and raw silks.',
    keyAttributes: [
      'Sculpted architectural tailoring',
      'Heirloom double-faced cashmere and silk-linen blends',
      'Discreet gilded bullion signature embroidery',
      'Timeless trans-seasonal silhouettes'
    ]
  },

  'ktse': {
    id: 'ktse',
    name: 'KTSE',
    tagline: 'Disciplined Streetwear & Heavyweight Form',
    description: 'Premium, disciplined, urban, heavyweight, and streetwear-focused. Monolithic silhouettes sculpted in 450GSM french terry and custom-milled vintage cottons.',
    keywords: ['Premium', 'Disciplined', 'Urban', 'Heavyweight', 'Streetwear-Focused'],
    palette: {
      accent: '#C8A97E',
      accentHover: '#DFBF95',
      badgeBg: 'rgba(67, 20, 34, 0.12)',
      badgeBorder: 'rgba(67, 20, 34, 0.35)',
      cardBg: '#FFFFFF',
      heroOverlay: 'linear-gradient(to top, rgba(12,13,16,0.94) 0%, rgba(12,13,16,0.4) 60%, rgba(12,13,16,0.2) 100%)',
    },
    buttonStyle: 'bg-[#431422] text-[#F5F5F0] border border-[#431422] hover:bg-[#320D18] hover:shadow-md transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    buttonOutlineStyle: 'border border-[#431422] text-[#431422] hover:bg-[#431422] hover:text-white transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    navAccent: '#9B324D',
    glowColor: 'rgba(67, 20, 34, 0.25)',
    atmosphereBg: 'bg-[#F2F2F0] bg-radial-[at_top_right] from-[#E9E8E4] via-[#F2F2F0] to-[#DFDED9]',
    houseBorder: 'border-[#D5D4CE]',
    typography: 'font-syne',
    founded: 'Discipline Atelier',
    origin: 'Tokyo — London — Chicago',
    logos: {
      wordmarkDark: '/assets/ktse/logos/wordmark-dark.webp',
      wordmarkLight: '/assets/ktse/logos/wordmark-light.webp',
      crestLight: '/assets/ktse/logos/crest-light.webp',
      crestDark: '/assets/ktse/logos/crest-dark.webp',
    },
    assets: {
      heroDesktop: '/assets/ktse/hero-desktop.webp',
      heroMobile: '/assets/ktse/hero-mobile.webp',
      collection: '/assets/ktse/collection.webp',
      editorial: '/assets/ktse/editorial.webp',
    },
    alt: {
      heroDesktop: 'Four models in KTSE heavyweight washed streetwear sets in brutalist concrete courtyard',
      heroMobile: 'Model walking in monolithic concrete corridor wearing bone cream KTSE hoodie and shorts',
      collection: 'Flat lay of four two-piece KTSE heavyweight raw-hem sweat sets on dark concrete',
      editorial: 'Models walking down city avenue beside stone colonnade and urban transit line',
    },
    manifesto: 'KTSE approaches streetwear through brutalist discipline. Stripping away unnecessary ornamentation to emphasize density, balance, and tactile gravity through custom heavyweight textiles that hold their structure across time.',
    keyAttributes: [
      'Custom 450–520 GSM custom-knit loopback terry',
      'Raw-edge hand-finished hems and drop-shoulder drape',
      'Pigment-washed earthy charcoal and stone hues',
      'Subtle tonal micro-embroidered brand stamp'
    ]
  },

  'moteon': {
    id: 'moteon',
    name: 'Motéon',
    tagline: 'Effortless Resort & Elevated Sunlit Leisure',
    description: 'Warm, elevated, resort-inspired, effortless, and sophisticated. Fluid linens, artisan crochet open-knits, and coastal silhouettes tailored for sun-drenched escapes.',
    keywords: ['Warm', 'Elevated', 'Resort-Inspired', 'Effortless', 'Sophisticated'],
    palette: {
      accent: '#B85D3B',
      accentHover: '#CF714E',
      badgeBg: 'rgba(184, 93, 59, 0.12)',
      badgeBorder: 'rgba(184, 93, 59, 0.35)',
      cardBg: '#FFFFFF',
      heroOverlay: 'linear-gradient(to top, rgba(14,12,11,0.94) 0%, rgba(14,12,11,0.35) 60%, rgba(14,12,11,0.18) 100%)',
    },
    buttonStyle: 'bg-[#B85D3B] text-[#FDFBF7] border border-[#B85D3B] hover:bg-[#9E4A2B] hover:shadow-md transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    buttonOutlineStyle: 'border border-[#B85D3B] text-[#B85D3B] hover:bg-[#B85D3B] hover:text-white transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    navAccent: '#B85D3B',
    glowColor: 'rgba(184, 93, 59, 0.25)',
    atmosphereBg: 'bg-[#FCF8F2] bg-radial-[at_top_right] from-[#F8EFE6] via-[#FCF8F2] to-[#F7EFE1]',
    houseBorder: 'border-[#E5DDD2]',
    typography: 'font-cormorant',
    founded: 'Riviera Atelier',
    origin: 'Amalfi — Saint-Tropez — Mallorca',
    logos: {
      wordmarkDark: '/assets/moteon/logos/wordmark-dark.webp',
      wordmarkLight: '/assets/moteon/logos/wordmark-light.webp',
      crestLight: '/assets/moteon/logos/crest-light.webp',
      crestDark: '/assets/moteon/logos/crest-dark.webp',
    },
    assets: {
      heroDesktop: '/assets/moteon/hero-desktop.webp',
      heroMobile: '/assets/moteon/hero-mobile.webp',
      collection: '/assets/moteon/collection.webp',
      editorial: '/assets/moteon/editorial.webp',
    },
    alt: {
      heroDesktop: 'Couple lounging on terrace daybed overlooking sea with embroidered Motéon cushion and book',
      heroMobile: 'Man walking down travertine villa steps in cream Motéon open-knit shirt and linen pants',
      collection: 'Flat lay of Motéon resort collection on travertine marble featuring halter top and crochet polo',
      editorial: 'Guests arriving by wooden motorboat at Mediterranean rocky cove at golden hour',
    },
    manifesto: 'Motéon embodies the poetic rhythm of coastal living. Crafted for unhurried days along the Mediterranean basin, marrying breathable hand-woven linens with open-gauge knitwear designed to move seamlessly from seaside to twilight dining.',
    keyAttributes: [
      'Ultra-fine breathable Mediterranean flax linen',
      'Open-gauge artisan crochet and knit polo shirts',
      'Tortoiseshell buckle accents and natural horn buttons',
      'Sun-bleached chalk, sand, terracotta, and espresso palette'
    ]
  },

  'moral-compass': {
    id: 'moral-compass',
    name: 'Moral Compass',
    tagline: 'Directional Precision & Celestial Structure',
    description: 'Purposeful, intellectual, directional, structured, and modern. Featuring celestial navigation iconography, structured double-breasted tailoring, and deep cardinal tones.',
    keywords: ['Purposeful', 'Intellectual', 'Directional', 'Structured', 'Modern'],
    palette: {
      accent: '#9CA3AF',
      accentHover: '#E5E7EB',
      badgeBg: 'rgba(19, 43, 32, 0.12)',
      badgeBorder: 'rgba(19, 43, 32, 0.35)',
      cardBg: '#FFFFFF',
      heroOverlay: 'linear-gradient(to top, rgba(9,11,16,0.94) 0%, rgba(9,11,16,0.4) 60%, rgba(9,11,16,0.2) 100%)',
    },
    buttonStyle: 'bg-[#132B20] text-[#FFFFFF] border border-[#132B20] hover:bg-[#1C3D2E] hover:shadow-md transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    buttonOutlineStyle: 'border border-[#132B20] text-[#132B20] hover:bg-[#132B20] hover:text-white transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    navAccent: '#132B20',
    glowColor: 'rgba(19, 43, 32, 0.25)',
    atmosphereBg: 'bg-[#F8F6F0] bg-radial-[at_top_right] from-[#E8EBE5] via-[#F8F6F0] to-[#EFECE4]',
    houseBorder: 'border-[#D6D9D4]',
    typography: 'font-cinzel',
    founded: 'Directional House',
    origin: 'Copenhagen — Zurich — London',
    logos: {
      wordmarkDark: '/assets/moral-compass/logos/wordmark-dark.webp',
      wordmarkLight: '/assets/moral-compass/logos/wordmark-light.webp',
      crestLight: '/assets/moral-compass/logos/crest-light.webp',
      crestDark: '/assets/moral-compass/logos/crest-dark.webp',
    },
    assets: {
      heroDesktop: '/assets/moral-compass/hero-desktop.webp',
      heroMobile: '/assets/moral-compass/hero-mobile.webp',
      collection: '/assets/moral-compass/collection.webp',
      editorial: '/assets/moral-compass/editorial.webp',
    },
    alt: {
      heroDesktop: 'Models standing in neoclassical stone colonnade with compass floor medallions and star brooches',
      heroMobile: 'Tailored woman standing under sunlit rotunda oculus on celestial compass floor medallion',
      collection: 'Flat lay on black marble showing Moral Compass overcoat with gold celestial lining and star knitwear',
      editorial: 'Three figures in stone circular rotunda with compass floor looking toward mountain vista',
    },
    manifesto: 'Moral Compass is an intellectual exploration of internal direction and structured purpose. Drawing inspiration from classical navigational instruments, astronomical charts, and sharp architectural tailoring that anchors the wearer.',
    keyAttributes: [
      'Gilded compass star brooches and hardware fobs',
      'Bespoke celestial navigation jacquard silk lining',
      'Structured wool gabardine and heavyweight rib knits',
      'Deep cardinal, midnight navy, and volcanic obsidian palette'
    ]
  },

  'my-drink-family': {
    id: 'my-drink-family',
    name: 'My Drink Family',
    tagline: 'Celebratory Spirit & Cultural Connection',
    description: 'Celebratory, social, colorful, premium, and culturally connected. Connecting rooftop gatherings, craft beverages, and clubhouse apparel through vibrant energy.',
    keywords: ['Celebratory', 'Social', 'Colorful', 'Premium', 'Culturally Connected'],
    palette: {
      accent: '#D4AF37',
      accentHover: '#E8C862',
      badgeBg: 'rgba(11, 79, 55, 0.12)',
      badgeBorder: 'rgba(11, 79, 55, 0.35)',
      cardBg: '#FFFFFF',
      heroOverlay: 'linear-gradient(to top, rgba(8,13,10,0.94) 0%, rgba(8,13,10,0.35) 60%, rgba(8,13,10,0.18) 100%)',
    },
    buttonStyle: 'bg-[#0B4F37] text-[#FFFFFF] border border-[#0B4F37] hover:bg-[#0E6244] hover:shadow-md transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    buttonOutlineStyle: 'border border-[#0B4F37] text-[#0B4F37] hover:bg-[#0B4F37] hover:text-white transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    navAccent: '#0B4F37',
    glowColor: 'rgba(11, 79, 55, 0.25)',
    atmosphereBg: 'bg-[#FCF8F0] bg-radial-[at_top_right] from-[#FDF1E7] via-[#FCF8F0] to-[#EBF4F2]',
    houseBorder: 'border-[#E2DCBE]',
    typography: 'font-manrope',
    founded: 'Social Collective',
    origin: 'Brooklyn — Atlanta — Los Angeles',
    logos: {
      wordmarkDark: '/assets/my-drink-family/logos/wordmark-dark.webp',
      wordmarkLight: '/assets/my-drink-family/logos/wordmark-light.webp',
      crestLight: '/assets/my-drink-family/logos/crest-light.webp',
      crestDark: '/assets/my-drink-family/logos/crest-dark.webp',
    },
    assets: {
      heroDesktop: '/assets/my-drink-family/hero-desktop.webp',
      heroMobile: '/assets/my-drink-family/hero-mobile.webp',
      collection: '/assets/my-drink-family/collection.webp',
      editorial: '/assets/my-drink-family/editorial.webp',
    },
    alt: {
      heroDesktop: 'Rooftop sunset banquet with friends toasting with cocktails and My Drink Family apparel',
      heroMobile: 'Golden hour rooftop party portrait of smiling friends in My Drink Family crest apparel',
      collection: 'Flat lay of My Drink Family circular crest hoodie, tee, ball cap, and satin varsity jacket',
      editorial: 'Rooftop cocktail hour with friends enjoying colorful canned drinks against skyline',
    },
    manifesto: 'My Drink Family celebrates togetherness, hospitality, and shared moments under golden hour skies. Bridging contemporary lounge lifestyle with elevated club silhouettes that embody community and good company.',
    keyAttributes: [
      'Embroidered circular family crest emblems',
      'Lustrous satin varsity outerwear and heavyweight cottons',
      'Vibrant sunset orange, rich emerald, and warm cream palette',
      'Seamless transition from day celebration to evening lounge'
    ]
  }
};

Object.values(BRANDS).forEach(brand => {
  if (brand.logos) {
    Object.keys(brand.logos).forEach(k => {
      brand.logos[k] = getAssetPath(brand.logos[k]);
    });
  }
  if (brand.assets) {
    Object.keys(brand.assets).forEach(k => {
      brand.assets[k] = getAssetPath(brand.assets[k]);
    });
  }
});

export const BRAND_LIST = Object.values(BRANDS);


