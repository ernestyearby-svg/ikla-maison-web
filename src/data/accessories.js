import { getAssetPath } from '../utils/assets.js';

export const ACCESSORY_COLLECTIONS = [
  // 1. IKLA Maison Bedroom Collection
  {
    id: 'ikla-maison-bedroom',
    brandId: 'ikla-maison',
    brandName: 'IKLA Maison',
    collectionName: 'Bedroom Collection',
    sectionHeading: 'The Maison, At Home.',
    supportingCopy: 'Private rituals, considered materials, and quiet comfort—an extension of IKLA Maison beyond the wardrobe.',
    file: 'assets/accessories/ikla-maison/ikla-maison-bedroom-collection.webp',
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
    alt: 'IKLA Maison bedroom collection featuring bedding, pillows, throws, slippers, a sleep mask, candle, and leather valet tray.',
    status: 'Collection Preview',
    allocationStatus: 'Request Allocation',
    category: 'Home & Living',
    territory: 'elevated living, bedroom, and personal rituals',
    products: [
      'Bedding',
      'Pillows',
      'Throws',
      'Slippers',
      'Sleep masks',
      'Candles',
      'Valet trays'
    ],
    details: [
      '300-thread-count washed Egyptian cotton sateen bedding',
      'Double-faced cashmere jacquard accent throws',
      'Molded calfskin and shearling residential slippers',
      'Poured vegetable wax candle with cedarwood and warm amber notes'
    ],
    anchorId: 'home-living'
  },

  // 2. IKLA Maison Bath & Spa Collection
  {
    id: 'ikla-maison-bath-spa',
    brandId: 'ikla-maison',
    brandName: 'IKLA Maison',
    collectionName: 'Bath & Spa Collection',
    sectionHeading: 'The Maison, At Home.',
    supportingCopy: 'Private rituals, considered materials, and quiet comfort—an extension of IKLA Maison beyond the wardrobe.',
    file: 'assets/accessories/ikla-maison/ikla-maison-bath-spa-collection.webp',
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
    alt: 'IKLA Maison bath and spa collection featuring plush towels, waffle robes, bath mats, slippers, ceramic vanity vessels, and leather toiletry cases.',
    status: 'Collection Preview',
    allocationStatus: 'Request Allocation',
    category: 'Bath & Spa',
    territory: 'bath, spa, and personal wellness rituals',
    products: [
      'Towels',
      'Robes',
      'Bath mats',
      'Bath slippers',
      'Vanity vessels',
      'Toiletry cases',
      'Grooming accessories'
    ],
    details: [
      '750 GSM zero-twist Aegean cotton bath sheets and towels',
      'Textured honeycomb waffle spa robes with tonal bullion chest monogram',
      'Hand-turned matte ceramic vanity canisters with brass lids',
      'Full-grain vegetable-tanned leather toiletry dopp kits'
    ],
    anchorId: 'bath-spa'
  },

  // 3. My Drink Family Glassware & Barware
  {
    id: 'my-drink-family-glassware-barware',
    brandId: 'my-drink-family',
    brandName: 'My Drink Family',
    collectionName: 'Glassware & Barware',
    sectionHeading: 'The Art of the Serve.',
    supportingCopy: 'Objects designed for gathering—across the bar, beside the pool, and throughout the seventeen-house hospitality universe.',
    file: 'assets/accessories/my-drink-family/my-drink-family-glassware-barware.webp',
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
    alt: 'My Drink Family glassware and barware suite featuring crystal coupes, champagne flutes, rocks glasses, cocktail shaker, jigger, strainer, and gold serving tray.',
    status: 'Collection Preview',
    allocationStatus: 'Register Interest',
    category: 'Hospitality & Barware',
    territory: 'hospitality, glassware, barware, and entertaining',
    products: [
      'Champagne flutes',
      'Coupes',
      'Wine goblets',
      'Stemless tumblers',
      'Rocks glasses',
      'Highball glasses',
      'Mixing glasses',
      'Shakers',
      'Jiggers',
      'Strainers',
      'Ice buckets',
      'Serving trays'
    ],
    details: [
      'Lead-free ultra-clarity crystalline blown by European glass artisans',
      'Laser-cut sheer rims with architectural faceted stemware geometry',
      'Double-walled 18/10 stainless steel shaker and jigger set with brushed brass finish',
      'Mirror-polished gilded brass rectangular cocktail serving plinth'
    ],
    anchorId: 'glassware-barware'
  },

  // 4. My Drink Family Poolside Hospitality
  {
    id: 'my-drink-family-poolside-hospitality',
    brandId: 'my-drink-family',
    brandName: 'My Drink Family',
    collectionName: 'Poolside Hospitality',
    sectionHeading: 'The Art of the Serve.',
    supportingCopy: 'Objects designed for gathering—across the bar, beside the pool, and throughout the seventeen-house hospitality universe.',
    file: 'assets/accessories/my-drink-family/my-drink-family-poolside-hospitality.webp',
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
    alt: 'My Drink Family poolside hospitality collection featuring floating bar stations, luxury pool floats, beach towels, tumblers, and outdoor entertaining pieces.',
    status: 'Collection Preview',
    allocationStatus: 'Register Interest',
    category: 'Poolside & Outdoor',
    territory: 'poolside experiences, outdoor gathering, and resort entertaining',
    products: [
      'Floating serving stations',
      'Resort floats',
      'Beach balls',
      'Towels',
      'Coolers',
      'Tumblers',
      'Serving caddies',
      'Outdoor entertainment accessories'
    ],
    details: [
      'Marine-grade floating service trays with recessed beverage holders',
      'UV-resistant heavy PVC resort loungers with integrated headrest',
      '600 GSM jacquard woven cabana beach towels',
      'Double-vacuum insulated stainless steel tumblers with splashproof lids'
    ],
    anchorId: 'poolside-hospitality'
  },

  // 5. KTSE Training & Everyday Carry
  {
    id: 'ktse-training-everyday-carry',
    brandId: 'ktse',
    brandName: 'KTSE',
    collectionName: 'Training & Everyday Carry',
    sectionHeading: 'Carry the Energy.',
    supportingCopy: 'Purpose-built objects for training, movement, recovery, and the discipline between sessions.',
    file: 'assets/accessories/ktse/ktse-training-everyday-carry.webp',
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
    alt: 'KTSE training and everyday carry collection featuring heavyweight training duffels, technical backpacks, exercise mats, insulated bottles, lifting straps, and performance accessories.',
    status: 'Collection Preview',
    allocationStatus: 'Request Allocation',
    category: 'Training & Carry',
    territory: 'training, movement, discipline, and everyday carry',
    mantras: [
      'Keep That Same Energy',
      'No Switches. No Excuses.',
      'Built Different. Made Consistent.'
    ],
    products: [
      'Training duffels',
      'Technical backpacks',
      'Exercise mats',
      'Insulated bottles',
      'Wrist wraps',
      'Lifting straps',
      'Resistance bands',
      'Performance towels',
      'Crew socks',
      'Slides',
      'Caps',
      'Beanies',
      'Crossbody pouches'
    ],
    details: [
      '1680D ballistic waterproof nylon duffels with ventilated shoe compartment',
      'High-density non-slip natural rubber 5mm training mats',
      'Heavyweight cotton lifting straps and reinforced neoprene wrist supports',
      'Ergonomic textured recovery slides with contoured arch support'
    ],
    anchorId: 'training-carry'
  },

  // 6. Motéon Resort & Travel
  {
    id: 'moteon-resort-travel',
    brandId: 'moteon',
    brandName: 'Motéon',
    collectionName: 'Resort & Travel',
    sectionHeading: 'Movement, Refined.',
    supportingCopy: 'A considered travel system shaped for resort mornings, coastal afternoons, and movement without interruption.',
    file: 'assets/accessories/moteon/moteon-resort-travel-collection.webp',
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
    alt: 'Motéon resort and travel collection featuring weekender luggage, carryall totes, leather toiletry cases, passport wallets, designer sunglasses, and leisure accessories.',
    status: 'Collection Preview',
    allocationStatus: 'Request Allocation',
    category: 'Resort & Travel',
    territory: 'resort movement, coastal travel, and refined leisure',
    products: [
      'Weekender bags',
      'Carryall totes',
      'Toiletry cases',
      'Passport wallets',
      'Sunglasses',
      'Silk scarves',
      'Visors',
      'Slides',
      'Travel socks',
      'Pool towels',
      'Insulated bottles',
      'Leisure equipment'
    ],
    details: [
      'Water-repellent structured canvas weekenders with saddle leather handles',
      'Italian acetate sunglasses with category 3 UV gradient lenses',
      'Pure silk twill foulards with hand-rolled edges in coastal terracotta tones',
      'Ultra-soft pima cotton compression travel socks for transatlantic voyages'
    ],
    anchorId: 'resort-travel'
  },

  // 7. Moral Compass Executive Leather Goods
  {
    id: 'moral-compass-executive-leather',
    brandId: 'moral-compass',
    brandName: 'Moral Compass',
    collectionName: 'Executive Leather Goods',
    sectionHeading: 'Objects of Certainty.',
    supportingCopy: 'Quietly constructed instruments for those who move with intention and answer to an internal standard.',
    file: 'assets/accessories/moral-compass/moral-compass-executive-leather.webp',
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
    alt: 'Moral Compass executive leather goods collection featuring architectural briefcases, document portfolios, leather journals, card holders, watch rolls, and refined brass keepsakes.',
    status: 'Collection Preview',
    allocationStatus: 'Private Preview',
    category: 'Executive Leather',
    territory: 'executive leather, personal organization, and private-office objects',
    products: [
      'Briefcases',
      'Document portfolios',
      'Leather journals',
      'Fountain pens',
      'Card holders',
      'Wallets',
      'Passport covers',
      'Key cases',
      'Watch rolls',
      'Belts',
      'Gloves',
      'Eyewear cases',
      'Compass keepsakes'
    ],
    details: [
      'Hand-stitched full-grain French calfskin briefcases with brass tuck locks',
      'Refillable archival parchment journals bound in bridle leather',
      'Triple watch travel rolls lined in plush microfiber suede',
      'Machined solid brass compass weight with cardinal coordinate engravings'
    ],
    anchorId: 'executive-leather'
  },

  // 8. WNNR Executive Travel
  {
    id: 'wnnr-executive-travel',
    brandId: 'wnnr',
    brandName: 'WNNR',
    collectionName: 'Executive Travel',
    sectionHeading: 'Prepared to Win.',
    supportingCopy: 'Executive travel and everyday-carry objects built around discipline, readiness, and the victory that begins within.',
    file: 'assets/accessories/wnnr/wnnr-executive-travel.webp',
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
    alt: 'WNNR executive travel and everyday-carry collection featuring obsidian leather totes, weekender duffels, executive backpacks, headwear, card holders, and discipline travel accessories.',
    status: 'Collection Preview',
    allocationStatus: 'Request Allocation',
    category: 'Executive Travel',
    territory: 'achievement, executive travel, and disciplined ambition',
    motto: 'WIN WITHIN',
    products: [
      'Leather totes',
      'Weekenders',
      'Executive backpacks',
      'Caps',
      'Beanies',
      'Belts',
      'Wallets',
      'Card holders',
      'Passport covers',
      'Watch rolls',
      'Shoe bags',
      'Insulated bottles',
      'Key fobs'
    ],
    details: [
      'Obsidian pebble-grain leather weekender with champagne gold hardware',
      'Structured technical executive backpack with padded laptop sleeve',
      'Full-grain leather passport case with RFID-shielding inner lining',
      'Breathable ripstop nylon travel shoe bags with ventilation eyelets'
    ],
    anchorId: 'executive-travel'
  },

  // 9. IKLA Water Hydration & Table Service
  {
    id: 'ikla-water-hydration-service',
    brandId: 'ikla-water',
    brandName: 'IKLA Water',
    collectionName: 'Hydration & Table Service',
    sectionHeading: 'The Ritual of Water.',
    supportingCopy: 'Hydration expressed through considered vessels, refined table service, and objects designed for everyday ceremony.',
    file: 'assets/accessories/ikla-water/ikla-water-hydration-service.webp',
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
    alt: 'IKLA Water hydration and table service collection featuring minimalist glass carafes, water tumblers, reusable glass travel bottles, ice buckets, coaster sets, and serving trays.',
    status: 'Collection Preview',
    allocationStatus: 'Register Interest',
    category: 'Table Service & Hydration',
    territory: 'hydration, table service, and elevated daily wellness',
    products: [
      'Glass carafes',
      'Water tumblers',
      'Insulated bottles',
      'Reusable glass travel bottles',
      'Ice buckets',
      'Tongs',
      'Coaster sets',
      'Bottle carriers',
      'Picnic coolers',
      'Serving trays'
    ],
    details: [
      'Hand-blown architectural flint glass water carafes with silicone-sealed stoppers',
      'Fine-rimmed crystalline mineral water tumblers designed for table ceremony',
      'Monolithic travertine stone coaster sets with non-scratch felt backing',
      'Leather-trimmed canvas insulated picnic coolers and bottle carriers'
    ],
    anchorId: 'hydration-service'
  }
];

export function getAccessoryCollection(id) {
  const item = ACCESSORY_COLLECTIONS.find((c) => c.id === id);
  if (!item) return null;
  return {
    ...item,
    url: getAssetPath(item.file)
  };
}

export function getAccessoriesByBrand(brandId) {
  return ACCESSORY_COLLECTIONS.filter((c) => c.brandId === brandId).map((c) => ({
    ...c,
    url: getAssetPath(c.file)
  }));
}

export function getHomepageLifestyleFeatures() {
  const ids = [
    'ikla-maison-bedroom',
    'my-drink-family-glassware-barware',
    'wnnr-executive-travel'
  ];
  return ids.map(getAccessoryCollection).filter(Boolean);
}
