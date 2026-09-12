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
      heroDesktop: 'assets/campaigns/round-one/moteon-performance-hero.webp',
      heroMobile: 'assets/campaigns/round-one/moteon-performance-hero.webp',
      collection: '/assets/moteon/collection.webp',
      editorial: '/assets/moteon/editorial.webp',
    },
    alt: {
      heroDesktop: 'Adult male and female models wearing black and ivory Motéon performance apparel at a Mediterranean villa',
      heroMobile: 'Adult male and female models wearing black and ivory Motéon performance apparel at a Mediterranean villa',
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
      heroDesktop: 'assets/campaigns/round-one/moral-compass-hero.webp',
      heroMobile: 'assets/campaigns/round-one/moral-compass-hero.webp',
      collection: '/assets/moral-compass/collection.webp',
      editorial: '/assets/moral-compass/editorial.webp',
    },
    alt: {
      heroDesktop: 'Adult couple in bone and deep forest Moral Compass tailoring inside a dramatic stone corridor',
      heroMobile: 'Adult couple in bone and deep forest Moral Compass tailoring inside a dramatic stone corridor',
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
  },

  'wnnr': {
    id: 'wnnr',
    name: 'WNNR',
    spokenName: 'winner',
    tagline: 'WIN WITHIN',
    supportingLine: 'Discipline. Ambition. Execution.',
    description: 'Elevated discipline-led lifestyle essentials; victory begins internally before it is visible externally. Monolithic silhouettes sculpted in obsidian black, bone, deep forest, and restrained metallic gold.',
    keywords: ['Discipline', 'Ambition', 'Execution', 'Victory', 'Monolithic'],
    palette: {
      accent: '#C5A869',
      accentHover: '#DFBF95',
      badgeBg: 'rgba(27, 46, 36, 0.20)',
      badgeBorder: 'rgba(197, 168, 105, 0.45)',
      cardBg: '#FFFFFF',
      heroOverlay: 'linear-gradient(to top, rgba(13,15,14,0.96) 0%, rgba(13,15,14,0.45) 60%, rgba(13,15,14,0.18) 100%)',
      obsidian: '#0D0F0E',
      bone: '#F4F1EA',
      forest: '#1B2E24',
      gold: '#C5A869',
    },
    buttonStyle: 'bg-[#0D0F0E] text-[#F4F1EA] hover:bg-[#1B2E24] shadow-md border border-[#C5A869]/40 hover:border-[#C5A869] transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    buttonOutlineStyle: 'border border-[#0D0F0E] text-[#0D0F0E] hover:bg-[#0D0F0E] hover:text-[#F4F1EA] transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    navAccent: '#C5A869',
    glowColor: 'rgba(197, 168, 105, 0.30)',
    atmosphereBg: 'bg-[#F6F5F2] bg-radial-[at_top_right] from-[#EDEAE2] via-[#F6F5F2] to-[#E2DFD6]',
    houseBorder: 'border-[#D2CEBE]',
    typography: 'font-cormorant',
    founded: 'Discipline Atelier',
    origin: 'Internal Sanctuary — Global Ground',
    logos: {
      wordmarkDark: '/assets/wnnr/logos/wordmark-dark.webp',
      wordmarkLight: '/assets/wnnr/logos/wordmark-light.webp',
      crestLight: '/assets/wnnr/logos/crest-light.webp',
      crestDark: '/assets/wnnr/logos/crest-dark.webp',
    },
    assets: {
      heroDesktop: 'assets/campaigns/round-one/wnnr-win-within-hero.webp',
      heroMobile: 'assets/campaigns/round-one/wnnr-win-within-hero.webp',
      collection: 'assets/campaigns/round-one/wnnr-product-collection.webp',
      editorial: 'assets/campaigns/round-four/wnnr-discipline-lifestyle.webp',
      accessories: 'assets/campaigns/round-two/wnnr-accessories-collection.webp',
      tshirts: 'assets/campaigns/round-two/wnnr-tshirt-colorways.webp',
      uniform: 'assets/campaigns/round-three/wnnr-hoodie-jogger-colorways.webp',
      lifestyle: 'assets/campaigns/round-four/wnnr-discipline-lifestyle.webp'
    },
    alt: {
      heroDesktop: 'Adult couple wearing bone and black WNNR tracksuits in a luxury penthouse at sunset',
      heroMobile: 'Adult couple wearing bone and black WNNR tracksuits in a luxury penthouse at sunset',
      collection: 'WNNR hoodie T-shirt joggers socks slides cap beanie and weekender in black bone forest and gold',
      editorial: 'Adult Black man and woman wearing WNNR performance essentials in a penthouse training studio at sunrise',
      accessories: 'WNNR bags caps beanies socks and slides in black bone forest and gold arranged on architectural plinths',
      tshirts: 'Six heavyweight WNNR T-shirts in black bone forest oxblood ochre and charcoal',
      uniform: 'Five WNNR hoodie and jogger sets in black bone forest oxblood and charcoal',
      lifestyle: 'Adult Black man and woman wearing WNNR performance essentials in a penthouse training studio at sunrise'
    },
    manifesto: 'WNNR is founded on the unyielding principle that true victory begins within before it is ever realized externally. We construct elevated discipline-led essentials designed for uncompromising focus, quiet ambition, and flawless execution.',
    keyAttributes: [
      'Heavyweight discipline loopback fleeces & drop-tail tees',
      'Restrained obsidian, bone, forest, and gold color discipline',
      'Engineered for internal preparation, focus, and recovery',
      'Discreet WNNR tonal silicon branding & gilded crest tags'
    ],
    paletteColors: [
      { name: 'Obsidian Black', hex: '#0D0F0E', desc: 'Anchor of solitary focus and absolute resolve' },
      { name: 'Bone Cream', hex: '#F4F1EA', desc: 'Raw limestone purity and quiet tactile balance' },
      { name: 'Deep Forest', hex: '#1B2E24', desc: 'Grounded vitality, enduring endurance, and discipline' },
      { name: 'Restrained Gold', hex: '#C5A869', desc: 'Measured victory earned quietly from within' },
      { name: 'Oxblood Crimson', hex: '#4A1525', desc: 'Internal intensity, pulse, and disciplined determination' },
      { name: 'Gold Ochre', hex: '#C28B38', desc: 'Warm desert twilight and grounded harvest achievement' },
      { name: 'Charcoal Patina', hex: '#232528', desc: 'Tactile metropolitan resilience and midnight calm' }
    ]
  },

  'ikla-water': {
    id: 'ikla-water',
    name: 'IKLA Water',
    tagline: 'Pure Mineral Hydration & Sculptural Monolithic Vessels',
    description: 'An architectural house extension exploring sculptural glass vessels, dining aesthetics, and pure mineral hydration conceived for intentional tables.',
    keywords: ['Pure', 'Sculptural', 'Monolithic', 'Essential', 'Pristine'],
    palette: {
      accent: '#5E8896',
      accentHover: '#74A0AE',
      badgeBg: 'rgba(94, 136, 150, 0.14)',
      badgeBorder: 'rgba(94, 136, 150, 0.40)',
      cardBg: '#FFFFFF',
      heroOverlay: 'linear-gradient(to top, rgba(10,14,18,0.92) 0%, rgba(10,14,18,0.4) 60%, rgba(10,14,18,0.18) 100%)',
    },
    buttonStyle: 'bg-[#1A2830] text-[#FAFBFB] hover:bg-[#283C48] shadow-md border border-[#1A2830] hover:border-[#283C48] transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    buttonOutlineStyle: 'border border-[#1A2830] text-[#1A2830] hover:bg-[#1A2830] hover:text-white transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    navAccent: '#5E8896',
    glowColor: 'rgba(94, 136, 150, 0.25)',
    atmosphereBg: 'bg-[#F5F8F9] bg-radial-[at_top_right] from-[#EAF2F4] via-[#F5F8F9] to-[#DFECF0]',
    houseBorder: 'border-[#CADCE0]',
    typography: 'font-cormorant',
    founded: 'Maison Concept',
    origin: 'Alpine Source — Curation',
    isExtension: true,
    logos: {
      wordmarkDark: '/assets/ikla-maison/logos/wordmark-dark.webp',
      wordmarkLight: '/assets/ikla-maison/logos/wordmark-light.webp',
      crestLight: '/assets/ikla-maison/logos/crest-light.webp',
      crestDark: '/assets/ikla-maison/logos/crest-dark.webp',
    },
    assets: {
      heroDesktop: 'assets/campaigns/01-ready-to-use/ikla-water/ikla-water-dining-table.jpg',
      heroMobile: 'assets/campaigns/01-ready-to-use/ikla-water/ikla-water-dining-table.jpg',
      collection: 'assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-pedestal.jpg',
      editorial: 'assets/campaigns/01-ready-to-use/ikla-water/ikla-water-dining-table.jpg',
      roundedBottles: 'assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-rounded-bottles.jpg',
      cylinderBottles: 'assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-cylinder-bottles.jpg',
      pedestal: 'assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-pedestal.jpg',
      diningTable: 'assets/campaigns/01-ready-to-use/ikla-water/ikla-water-dining-table.jpg',
    },
    alt: {
      heroDesktop: 'IKLA Water sculptural bottle placed beside fine crystal glassware on a formal dining table',
      heroMobile: 'IKLA Water sculptural bottle placed beside fine crystal glassware on a formal dining table',
      collection: 'Three minimalist IKLA Water bottles displayed on architectural travertine pedestal',
      editorial: 'IKLA Water sculptural bottle placed beside fine crystal glassware on a formal dining table',
      roundedBottles: 'Trio of rounded glass IKLA Water bottles against clean studio backdrop',
      cylinderBottles: 'Trio of tall cylindrical glass IKLA Water bottles against clean studio backdrop',
      pedestal: 'Three minimalist IKLA Water bottles displayed on architectural travertine pedestal',
      diningTable: 'IKLA Water sculptural bottle placed beside fine crystal glassware on a formal dining table',
    },
    manifesto: 'Conceived as an architectural extension of the IKLA Maison dining salon. Pure natural mineral water contained in heavyweight reusable flint glass vessels designed to integrate seamlessly into modern living spaces.',
    keyAttributes: [
      'Pure alpine mineral water profile in reusable flint glass vessels',
      'Sculptural rounded and cylindrical monolithic bottle silhouettes',
      'Designed for refined dining tables and executive hospitality',
      'Maison concept and architectural lifestyle extension'
    ]
  },

  'mymosa': {
    id: 'mymosa',
    name: 'MyMosa',
    tagline: 'Four-Flavor Sports-Fashion Flagship',
    description: 'A vibrant sports-fashion expression rooted in four flagship flavor colorways: Classic Orange, Pineapple, Strawberry, and Watermelon.',
    keywords: ['Sports-Fashion', 'Four-Flavor', 'Celebration', 'Vibrant', 'Athletic'],
    palette: {
      accent: '#E26D35',
      accentHover: '#F07F48',
      badgeBg: 'rgba(226, 109, 53, 0.14)',
      badgeBorder: 'rgba(226, 109, 53, 0.40)',
      cardBg: '#FFFFFF',
      heroOverlay: 'linear-gradient(to top, rgba(14,11,9,0.94) 0%, rgba(14,11,9,0.35) 60%, rgba(14,11,9,0.18) 100%)',
      classicOrange: '#E26D35',
      pineapple: '#E5A93C',
      strawberry: '#D93848',
      watermelon: '#317F55',
    },
    buttonStyle: 'bg-[#E26D35] text-white hover:bg-[#CA5B26] shadow-md transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    buttonOutlineStyle: 'border border-[#E26D35] text-[#E26D35] hover:bg-[#E26D35] hover:text-white transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    navAccent: '#E26D35',
    glowColor: 'rgba(226, 109, 53, 0.25)',
    atmosphereBg: 'bg-[#FAF6F0] bg-radial-[at_top_right] from-[#FDF0E6] via-[#FAF6F0] to-[#F2EAE0]',
    houseBorder: 'border-[#EADCCF]',
    typography: 'font-manrope',
    founded: 'Sports-Fashion Atelier',
    origin: 'Atlanta — Brooklyn — Los Angeles',
    isBeverageHouse: true,
    parentUniverse: 'My Drink Family',
    logos: {
      wordmarkDark: '/assets/my-drink-family/logos/wordmark-dark.webp',
      wordmarkLight: '/assets/my-drink-family/logos/wordmark-light.webp',
      crestLight: '/assets/my-drink-family/logos/crest-light.webp',
      crestDark: '/assets/my-drink-family/logos/crest-dark.webp',
    },
    assets: {
      heroDesktop: 'assets/products/mymosa/mymosa-four-flavor-lifestyle-hero.webp',
      heroMobile: 'assets/products/mymosa/mymosa-four-flavor-lifestyle-hero.webp',
      tracksuits: 'assets/products/mymosa/mymosa-four-flavor-tracksuits.webp',
      sweats: 'assets/products/mymosa/mymosa-four-flavor-heavyweight-sweats.webp',
      accessories: 'assets/products/mymosa/mymosa-sports-accessories.webp',
      collection: 'assets/products/mymosa/mymosa-four-flavor-tracksuits.webp',
      editorial: 'assets/products/mymosa/mymosa-four-flavor-lifestyle-hero.webp',
      tshirts: 'assets/products/mymosa/mymosa-tshirts-four-flavors.webp',
      hoodies: 'assets/products/mymosa/mymosa-hoodies-four-flavors.webp',
      shorts: 'assets/products/mymosa/mymosa-athletic-shorts.webp',
      headwear: 'assets/products/mymosa/mymosa-hats-beanies-visors.webp',
      footwear: 'assets/products/mymosa/mymosa-slides-socks.webp',
      bags: 'assets/products/mymosa/mymosa-gym-travel-bags.webp',
    },
    alt: {
      heroDesktop: 'Four models wearing MyMosa tracksuits and athletic apparel in Classic Orange, Pineapple, Strawberry, and Watermelon in a sunlit lounge',
      heroMobile: 'Four models wearing MyMosa tracksuits and athletic apparel in Classic Orange, Pineapple, Strawberry, and Watermelon in a sunlit lounge',
      collection: 'MyMosa four-flavor sports-fashion tracksuits collection in Classic Orange, Pineapple, Strawberry, and Watermelon colorways',
      editorial: 'Four models wearing MyMosa tracksuits and athletic apparel in Classic Orange, Pineapple, Strawberry, and Watermelon in a sunlit lounge',
      tracksuits: 'MyMosa four-flavor sports-fashion tracksuits collection in Classic Orange, Pineapple, Strawberry, and Watermelon colorways',
      sweats: 'MyMosa heavyweight sweats and hoodies collection in Classic Orange, Pineapple, Strawberry, and Watermelon colorways',
      accessories: 'MyMosa sports accessories collection featuring caps, beanies, socks, slides, and gym duffel bags across four signature colorways',
    },
    manifesto: 'MyMosa translates the buoyant spirit of the celebrated premium wine cocktail into a flagship sports-fashion collection. Heavyweight loopback tracksuits, drop-shoulder tees, structured headwear, and court essentials calibrated across four signature colorways.',
    keyAttributes: [
      'Four flagship colorways: Classic Orange, Pineapple, Strawberry, Watermelon',
      '500 GSM loopback cotton fleece tracksuits and zip hoodies',
      'High-density embroidery and custom brass aglets',
      'Complete sports-fashion taxonomy from court shorts to travel duffels'
    ],
    flagshipColorways: [
      { id: 'classic-orange', name: 'Classic Orange', hex: '#E26D35', desc: 'The signature citrus zest emblem of celebratory sunrise momentum.' },
      { id: 'pineapple', name: 'Pineapple', hex: '#E5A93C', desc: 'Golden tropical warmth infused with radiant afternoon energy.' },
      { id: 'strawberry', name: 'Strawberry', hex: '#D93848', desc: 'Deep berry saturation engineered for bold club presence.' },
      { id: 'watermelon', name: 'Watermelon', hex: '#317F55', secondaryHex: '#D84A58', desc: 'Crisp botanical emerald green accented with sweet crimson lining.' }
    ]
  },

  'mytai': {
    id: 'mytai',
    name: 'MyTai',
    tagline: 'Island Leisure & Tropical Sports-Fashion',
    description: 'Island energy meets athletic poise in black, ivory, deep teal, rich coral, and restrained gold.',
    keywords: ['Island', 'Leisure', 'Teal', 'Coral', 'Tropical'],
    palette: {
      accent: '#2A7B88',
      accentHover: '#3A92A0',
      badgeBg: 'rgba(42, 123, 136, 0.14)',
      badgeBorder: 'rgba(42, 123, 136, 0.40)',
      cardBg: '#FFFFFF',
      heroOverlay: 'linear-gradient(to top, rgba(9,14,16,0.94) 0%, rgba(9,14,16,0.35) 60%, rgba(9,14,16,0.18) 100%)',
    },
    buttonStyle: 'bg-[#2A7B88] text-white hover:bg-[#20606B] shadow-md transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    buttonOutlineStyle: 'border border-[#2A7B88] text-[#2A7B88] hover:bg-[#2A7B88] hover:text-white transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    navAccent: '#2A7B88',
    glowColor: 'rgba(42, 123, 136, 0.25)',
    atmosphereBg: 'bg-[#F4F8F8] bg-radial-[at_top_right] from-[#E6F0F2] via-[#F4F8F8] to-[#DFECF0]',
    houseBorder: 'border-[#CCDCE0]',
    typography: 'font-manrope',
    founded: 'Sports-Fashion Atelier',
    origin: 'Coastal Collective — Worldwide',
    isBeverageHouse: true,
    parentUniverse: 'My Drink Family',
    logos: {
      wordmarkDark: '/assets/my-drink-family/logos/wordmark-dark.webp',
      wordmarkLight: '/assets/my-drink-family/logos/wordmark-light.webp',
      crestLight: '/assets/my-drink-family/logos/crest-light.webp',
      crestDark: '/assets/my-drink-family/logos/crest-dark.webp',
    },
    assets: {
      heroDesktop: 'assets/products/mytai/mytai-apparel-products.webp',
      heroMobile: 'assets/products/mytai/mytai-apparel-products.webp',
      apparel: 'assets/products/mytai/mytai-apparel-products.webp',
      accessories: 'assets/products/mytai/mytai-accessories-products.webp',
      collection: 'assets/products/mytai/mytai-accessories-products.webp',
      editorial: 'assets/products/mytai/mytai-apparel-products.webp',
    },
    alt: {
      heroDesktop: 'MyTai island-inspired sports-fashion apparel collection featuring T-shirts, hoodies, track jackets, and sweatpants in black, ivory, teal, coral, and restrained gold',
      heroMobile: 'MyTai island-inspired sports-fashion apparel collection featuring T-shirts, hoodies, track jackets, and sweatpants in black, ivory, teal, coral, and restrained gold',
      collection: 'MyTai accessories collection featuring caps, beanies, visors, crew socks, slides, duffel bags, and belt bags in teal, coral, ivory, and black',
      editorial: 'MyTai island-inspired sports-fashion apparel collection featuring T-shirts, hoodies, track jackets, and sweatpants in black, ivory, teal, coral, and restrained gold',
      apparel: 'MyTai island-inspired sports-fashion apparel collection featuring T-shirts, hoodies, track jackets, and sweatpants in black, ivory, teal, coral, and restrained gold',
      accessories: 'MyTai accessories collection featuring caps, beanies, visors, crew socks, slides, duffel bags, and belt bags in teal, coral, ivory, and black',
    },
    manifesto: 'MyTai channels tropical island ritual into structured athletic tailoring. Melding breezy poolside relaxation with technical track jackets, sweatpants, caps, and travel accessories accented in teal, coral, and gold.',
    keyAttributes: [
      'Apparel: Tees, hoodies, track jackets, and sweatpants',
      'Accessories: Caps, beanies, visors, socks, slides, and belt bags',
      'Palette: Black, ivory, teal, coral, and restrained gold',
      'Clubhouse and coastal resort versatility'
    ],
    paletteColors: [
      { name: 'Island Teal', hex: '#2A7B88', desc: 'Deep oceanic lagoon depth and movement' },
      { name: 'Sunset Coral', hex: '#E06D53', desc: 'Warm tropical twilight intensity' },
      { name: 'Raw Ivory', hex: '#F4F0E6', desc: 'Natural sand purity and relaxed comfort' },
      { name: 'Volcanic Black', hex: '#121516', desc: 'Crisp silhouette structure and grounding contrast' },
      { name: 'Restrained Gold', hex: '#C5A869', desc: 'Subtle metallic luxury insignia accents' }
    ]
  },

  'mytini': {
    id: 'mytini',
    name: 'MyTini',
    tagline: 'Nocturnal Poise & Lounge Sports-Fashion',
    description: 'Nocturnal lounge elegance and sleek athletic silhouettes in black, espresso, ivory, and restrained gold.',
    keywords: ['Nocturnal', 'Espresso', 'Lounge', 'Sleek', 'Poise'],
    palette: {
      accent: '#382B24',
      accentHover: '#4D3B31',
      badgeBg: 'rgba(56, 43, 36, 0.16)',
      badgeBorder: 'rgba(56, 43, 36, 0.40)',
      cardBg: '#FFFFFF',
      heroOverlay: 'linear-gradient(to top, rgba(12,11,10,0.95) 0%, rgba(12,11,10,0.4) 60%, rgba(12,11,10,0.18) 100%)',
    },
    buttonStyle: 'bg-[#211B17] text-white hover:bg-[#382B24] shadow-md transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    buttonOutlineStyle: 'border border-[#211B17] text-[#211B17] hover:bg-[#211B17] hover:text-white transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    navAccent: '#382B24',
    glowColor: 'rgba(56, 43, 36, 0.25)',
    atmosphereBg: 'bg-[#F7F5F2] bg-radial-[at_top_right] from-[#EDE8E1] via-[#F7F5F2] to-[#E5DFD6]',
    houseBorder: 'border-[#D9D3C7]',
    typography: 'font-manrope',
    founded: 'Sports-Fashion Atelier',
    origin: 'Manhattan — Milan — Tokyo',
    isBeverageHouse: true,
    parentUniverse: 'My Drink Family',
    logos: {
      wordmarkDark: '/assets/my-drink-family/logos/wordmark-dark.webp',
      wordmarkLight: '/assets/my-drink-family/logos/wordmark-light.webp',
      crestLight: '/assets/my-drink-family/logos/crest-light.webp',
      crestDark: '/assets/my-drink-family/logos/crest-dark.webp',
    },
    assets: {
      heroDesktop: 'assets/products/mytini/mytini-apparel-products.webp',
      heroMobile: 'assets/products/mytini/mytini-apparel-products.webp',
      apparel: 'assets/products/mytini/mytini-apparel-products.webp',
      accessories: 'assets/products/mytini/mytini-accessories-products.webp',
      collection: 'assets/products/mytini/mytini-accessories-products.webp',
      editorial: 'assets/products/mytini/mytini-apparel-products.webp',
    },
    alt: {
      heroDesktop: 'MyTini nocturnal lounge sports-fashion apparel collection featuring T-shirts, hoodies, and tailored warmups in black, espresso, ivory, and restrained gold',
      heroMobile: 'MyTini nocturnal lounge sports-fashion apparel collection featuring T-shirts, hoodies, and tailored warmups in black, espresso, ivory, and restrained gold',
      collection: 'MyTini accessories collection featuring structured caps, beanies, socks, slides, weekender duffels, and belt bags in black, espresso, ivory, and restrained gold',
      editorial: 'MyTini nocturnal lounge sports-fashion apparel collection featuring T-shirts, hoodies, and tailored warmups in black, espresso, ivory, and restrained gold',
      apparel: 'MyTini nocturnal lounge sports-fashion apparel collection featuring T-shirts, hoodies, and tailored warmups in black, espresso, ivory, and restrained gold',
      accessories: 'MyTini accessories collection featuring structured caps, beanies, socks, slides, weekender duffels, and belt bags in black, espresso, ivory, and restrained gold',
    },
    manifesto: 'MyTini is the nocturnal pulse of the beverage collective. Crafted for evening lounges, private clubrooms, and late-night movement with sleek monochromatic tailoring, espresso undertones, and understated gold hardware.',
    keyAttributes: [
      'Apparel: Monochromatic tees, minimalist hoodies, and tailored warmups',
      'Accessories: Structured caps, cashmere-blend beanies, duffels, and slides',
      'Palette: Black, espresso, ivory, and restrained gold',
      'Elevated evening lounge and active transit aesthetic'
    ],
    paletteColors: [
      { name: 'Midnight Black', hex: '#0E1011', desc: 'Nocturnal depth and clean modern lines' },
      { name: 'Roast Espresso', hex: '#382B24', desc: 'Rich velvet warmth and lounge poise' },
      { name: 'Warm Ivory', hex: '#F5F2EA', desc: 'Cream silk contrast and tactile lightness' },
      { name: 'Restrained Gold', hex: '#C5A869', desc: 'Signature gilded barware emblem' }
    ]
  },

  'myjito': {
    id: 'myjito',
    name: 'MyJito',
    tagline: 'Botanical Vitality & Crisp Sports-Fashion',
    description: 'Botanical freshness and athletic vitality rendered in mint, ivory, deep navy, fresh lime, and restrained gold.',
    keywords: ['Botanical', 'Mint', 'Navy', 'Vitality', 'Court'],
    palette: {
      accent: '#2D7F67',
      accentHover: '#3A9C80',
      badgeBg: 'rgba(45, 127, 103, 0.14)',
      badgeBorder: 'rgba(45, 127, 103, 0.40)',
      cardBg: '#FFFFFF',
      heroOverlay: 'linear-gradient(to top, rgba(9,15,12,0.94) 0%, rgba(9,15,12,0.35) 60%, rgba(9,15,12,0.18) 100%)',
    },
    buttonStyle: 'bg-[#1D5E4C] text-white hover:bg-[#154639] shadow-md transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    buttonOutlineStyle: 'border border-[#1D5E4C] text-[#1D5E4C] hover:bg-[#1D5E4C] hover:text-white transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    navAccent: '#2D7F67',
    glowColor: 'rgba(45, 127, 103, 0.25)',
    atmosphereBg: 'bg-[#F3F8F5] bg-radial-[at_top_right] from-[#E4F2EB] via-[#F3F8F5] to-[#DCEEE5]',
    houseBorder: 'border-[#C8DDD3]',
    typography: 'font-manrope',
    founded: 'Sports-Fashion Atelier',
    origin: 'Miami — Havana — Barcelona',
    isBeverageHouse: true,
    parentUniverse: 'My Drink Family',
    logos: {
      wordmarkDark: '/assets/my-drink-family/logos/wordmark-dark.webp',
      wordmarkLight: '/assets/my-drink-family/logos/wordmark-light.webp',
      crestLight: '/assets/my-drink-family/logos/crest-light.webp',
      crestDark: '/assets/my-drink-family/logos/crest-dark.webp',
    },
    assets: {
      heroDesktop: 'assets/products/myjito/myjito-apparel-products.webp',
      heroMobile: 'assets/products/myjito/myjito-apparel-products.webp',
      apparel: 'assets/products/myjito/myjito-apparel-products.webp',
      accessories: 'assets/products/myjito/myjito-accessories-products.webp',
      collection: 'assets/products/myjito/myjito-accessories-products.webp',
      editorial: 'assets/products/myjito/myjito-apparel-products.webp',
    },
    alt: {
      heroDesktop: 'MyJito mint and navy sports-fashion apparel collection featuring T-shirts, hoodies, a track jacket, and sweatpants in botanical mint, deep navy, lime, ivory, and gold',
      heroMobile: 'MyJito mint and navy sports-fashion apparel collection featuring T-shirts, hoodies, a track jacket, and sweatpants in botanical mint, deep navy, lime, ivory, and gold',
      collection: 'MyJito accessories collection featuring dual-tone caps, athletic visors, technical crew socks, slides, and gym travel bags in mint, navy, lime, and ivory',
      editorial: 'MyJito mint and navy sports-fashion apparel collection featuring T-shirts, hoodies, a track jacket, and sweatpants in botanical mint, deep navy, lime, ivory, and gold',
      apparel: 'MyJito mint and navy sports-fashion apparel collection featuring T-shirts, hoodies, a track jacket, and sweatpants in botanical mint, deep navy, lime, ivory, and gold',
      accessories: 'MyJito accessories collection featuring dual-tone caps, athletic visors, technical crew socks, slides, and gym travel bags in mint, navy, lime, and ivory',
    },
    manifesto: 'MyJito brings botanical vitality and vibrant agility to sports apparel. Inspired by crushed garden mint and crisp lime rituals, creating energized activewear and lifestyle carry designed for outdoor courts, poolside warmups, and lively afternoons.',
    keyAttributes: [
      'Apparel: Mint and navy track jackets, hoodies, tees, and athletic joggers',
      'Accessories: Dual-tone caps, athletic visors, technical socks, and weekenders',
      'Palette: Mint, ivory, deep navy, fresh lime, and restrained gold',
      'High-ventilation and energetic court readiness'
    ],
    paletteColors: [
      { name: 'Botanical Mint', hex: '#2D7F67', desc: 'Fresh crushed mint and organic vitality' },
      { name: 'Deep Navy', hex: '#13213B', desc: 'Structured athletic navy foundation' },
      { name: 'Fresh Lime', hex: '#85B832', desc: 'Bright citrus pop and energetic zest' },
      { name: 'Raw Ivory', hex: '#F4F6F2', desc: 'Sunlit terrace breeze and clean comfort' },
      { name: 'Restrained Gold', hex: '#C5A869', desc: 'Refined gilded embroidery details' }
    ]
  },

  'mygarita': {
    id: 'mygarita',
    name: 'MyGarita',
    tagline: 'Agave Horizon & Warm Desert Sports-Fashion',
    description: 'Sun-drenched desert hues and relaxed athletic luxury in agave sage, warm sand, cream, black, and restrained gold.',
    keywords: ['Agave', 'Sage', 'Sand', 'Desert', 'Athletic'],
    palette: {
      accent: '#7A8C74',
      accentHover: '#92A68C',
      badgeBg: 'rgba(122, 140, 116, 0.16)',
      badgeBorder: 'rgba(122, 140, 116, 0.40)',
      cardBg: '#FFFFFF',
      heroOverlay: 'linear-gradient(to top, rgba(14,13,11,0.94) 0%, rgba(14,13,11,0.35) 60%, rgba(14,13,11,0.18) 100%)',
    },
    buttonStyle: 'bg-[#53654E] text-white hover:bg-[#3F4F3B] shadow-md transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    buttonOutlineStyle: 'border border-[#53654E] text-[#53654E] hover:bg-[#53654E] hover:text-white transition-all duration-300 font-medium tracking-[0.18em] uppercase text-xs cursor-pointer',
    navAccent: '#7A8C74',
    glowColor: 'rgba(122, 140, 116, 0.25)',
    atmosphereBg: 'bg-[#F7F6F1] bg-radial-[at_top_right] from-[#EFECE1] via-[#F7F6F1] to-[#E6E2D4]',
    houseBorder: 'border-[#D5D0C0]',
    typography: 'font-manrope',
    founded: 'Sports-Fashion Atelier',
    origin: 'Sedona — Oaxaca — Palm Springs',
    isBeverageHouse: true,
    parentUniverse: 'My Drink Family',
    logos: {
      wordmarkDark: '/assets/my-drink-family/logos/wordmark-dark.webp',
      wordmarkLight: '/assets/my-drink-family/logos/wordmark-light.webp',
      crestLight: '/assets/my-drink-family/logos/crest-light.webp',
      crestDark: '/assets/my-drink-family/logos/crest-dark.webp',
    },
    assets: {
      heroDesktop: 'assets/products/mygarita/mygarita-apparel-products.webp',
      heroMobile: 'assets/products/mygarita/mygarita-apparel-products.webp',
      apparel: 'assets/products/mygarita/mygarita-apparel-products.webp',
      accessories: 'assets/products/mygarita/mygarita-accessories-products.webp',
      collection: 'assets/products/mygarita/mygarita-accessories-products.webp',
      editorial: 'assets/products/mygarita/mygarita-apparel-products.webp',
    },
    alt: {
      heroDesktop: 'MyGarita agave sage and warm sand sports-fashion apparel collection featuring hoodies, track jackets, tees, and sweatpants in agave sage, sand, cream, black, and gold',
      heroMobile: 'MyGarita agave sage and warm sand sports-fashion apparel collection featuring hoodies, track jackets, tees, and sweatpants in agave sage, sand, cream, black, and gold',
      collection: 'MyGarita accessories collection featuring washed caps, beanies, visors, crew socks, slides, and travel duffel bags in agave sage, warm sand, and cream',
      editorial: 'MyGarita agave sage and warm sand sports-fashion apparel collection featuring hoodies, track jackets, tees, and sweatpants in agave sage, sand, cream, black, and gold',
      apparel: 'MyGarita agave sage and warm sand sports-fashion apparel collection featuring hoodies, track jackets, tees, and sweatpants in agave sage, sand, cream, black, and gold',
      accessories: 'MyGarita accessories collection featuring washed caps, beanies, visors, crew socks, slides, and travel duffel bags in agave sage, warm sand, and cream',
    },
    manifesto: 'MyGarita draws from the warmth of sun-soaked desert agave fields and tranquil terracotta retreats. Sculpting easy-wearing athletic silhouettes, washed canvas accessories, and relaxed track sets that transition effortlessly from high-noon leisure to twilight gatherings.',
    keyAttributes: [
      'Apparel: Agave sage and sand fleece hoodies, track jackets, and easy tees',
      'Accessories: Washed twill caps, bucket hats, slides, and utility duffels',
      'Palette: Agave sage, warm sand, cream, black, and restrained gold',
      'Southwestern warmth, resort leisure, and athletic poise'
    ],
    paletteColors: [
      { name: 'Agave Sage', hex: '#7A8C74', desc: 'Earthy desert succulent and calming herbal poise' },
      { name: 'Warm Sand', hex: '#C9B18F', desc: 'Sun-baked dunes and natural terracotta stone' },
      { name: 'Pueblo Cream', hex: '#F8F5ED', desc: 'Airy linen softness and light reflection' },
      { name: 'Obsidian Black', hex: '#161817', desc: 'Clean architectural line definition' },
      { name: 'Restrained Gold', hex: '#C5A869', desc: 'Warm desert sunset shimmer' }
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

export const FASHION_HOUSES = [
  BRANDS['ikla-maison'],
  BRANDS['ktse'],
  BRANDS['moteon'],
  BRANDS['moral-compass'],
  BRANDS['wnnr']
];

export const BEVERAGE_HOUSES = [
  BRANDS['mymosa'],
  BRANDS['mytai'],
  BRANDS['mytini'],
  BRANDS['myjito'],
  BRANDS['mygarita']
];

export const BRAND_LIST = [
  BRANDS['ikla-maison'],
  BRANDS['ktse'],
  BRANDS['moteon'],
  BRANDS['moral-compass'],
  BRANDS['wnnr'],
  BRANDS['my-drink-family'],
  BRANDS['mymosa'],
  BRANDS['mytai'],
  BRANDS['mytini'],
  BRANDS['myjito'],
  BRANDS['mygarita']
];

export const ALL_HOUSES = Object.values(BRANDS);




