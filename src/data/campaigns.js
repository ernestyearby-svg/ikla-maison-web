import { getAssetPath } from '../utils/assets.js';

export const CAMPAIGN_ASSETS = [
  // =========================================================================
  // 01-READY-TO-USE (CLEAN HIGH-RESOLUTION CROPS)
  // =========================================================================
  {
    id: 'ikla-business-casual-couple',
    brandId: 'ikla-maison',
    status: 'ready',
    file: 'assets/campaigns/01-ready-to-use/ikla-maison/ikla-business-casual-couple.jpg',
    width: 1024,
    height: 1536,
    aspectRatio: '2/3',
    alt: 'IKLA Maison editorial portrait of a sophisticated couple in refined business-casual tailoring with structured trench coats and neutral knitwear',
    category: 'business-casual',
    theme: 'House Introduction & Executive Tailoring',
    notes: 'Clean crop; approved for placement'
  },
  {
    id: 'ikla-dynasty-spectrum-hoodies',
    brandId: 'ikla-maison',
    status: 'ready',
    file: 'assets/campaigns/01-ready-to-use/ikla-maison/ikla-dynasty-spectrum-hoodies.jpg',
    width: 706,
    height: 711,
    aspectRatio: '1/1',
    alt: 'The IKLA Maison Dynasty Spectrum showing five heavyweight organic cotton hoodies in tonal gradient colorways from bone cream to obsidian black',
    category: 'dynasty-spectrum',
    theme: 'Foundational Silhouettes & Natural Fibres',
    notes: 'Clean crop; approved for placement'
  },
  {
    id: 'ikla-mens-golf-flatlay',
    brandId: 'ikla-maison',
    status: 'ready',
    file: 'assets/campaigns/01-ready-to-use/ikla-maison/ikla-mens-golf-flatlay.jpg',
    width: 706,
    height: 711,
    aspectRatio: '1/1',
    alt: 'IKLA Maison Men\'s Leisure Golf flat lay featuring technical polo, luxury clubhead cover, bespoke balls, and tailored shorts on clean stone',
    category: 'leisure-golf',
    theme: 'Maison Sport & Leisure',
    notes: 'Clean crop; approved for placement'
  },
  {
    id: 'ikla-womens-golf-flatlay',
    brandId: 'ikla-maison',
    status: 'ready',
    file: 'assets/campaigns/01-ready-to-use/ikla-maison/ikla-womens-golf-flatlay.jpg',
    width: 706,
    height: 711,
    aspectRatio: '1/1',
    alt: 'IKLA Maison Women\'s Leisure Golf flat lay featuring cream pleated skirt, minimalist polo, visor, and tailored accessories',
    category: 'leisure-golf',
    theme: 'Maison Sport & Leisure',
    notes: 'Clean crop; approved for placement'
  },
  {
    id: 'moteon-launching-april-first',
    brandId: 'moteon',
    status: 'ready',
    file: 'assets/campaigns/01-ready-to-use/moteon/moteon-launching-april-first.jpg',
    width: 1024,
    height: 1365,
    aspectRatio: '3/4',
    alt: 'Motéon luxury resort editorial campaign launching April 1 with fluid linen silhouettes against Mediterranean stone walls',
    category: 'launch',
    theme: 'Riviera Resort & Effortless Movement',
    notes: 'Clean crop; approved for placement'
  },
  {
    id: 'ikla-water-dining-table',
    brandId: 'ikla-water',
    status: 'ready',
    file: 'assets/campaigns/01-ready-to-use/ikla-water/ikla-water-dining-table.jpg',
    width: 1024,
    height: 1536,
    aspectRatio: '2/3',
    alt: 'IKLA Water monolithic glass bottle arranged on a formal dining table beside fine crystal glassware and architectural tableware',
    category: 'hospitality',
    theme: 'Dining Salon & Pure Mineral Hydration',
    notes: 'Clean crop; approved for placement'
  },
  {
    id: 'ikla-water-trio-pedestal',
    brandId: 'ikla-water',
    status: 'ready',
    file: 'assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-pedestal.jpg',
    width: 1024,
    height: 1024,
    aspectRatio: '1/1',
    alt: 'Trio of sculptural IKLA Water glass bottles showcased atop a natural travertine pedestal in a serene minimalist gallery',
    category: 'pedestal',
    theme: 'Sculptural Vessel Design',
    notes: 'Clean crop; approved for placement'
  },
  {
    id: 'ikla-water-trio-rounded-bottles',
    brandId: 'ikla-water',
    status: 'ready',
    file: 'assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-rounded-bottles.jpg',
    width: 710,
    height: 711,
    aspectRatio: '1/1',
    alt: 'Clean product profile of three rounded IKLA Water glass bottles with silver foil typographic seal and pristine mineral clarity',
    category: 'vessels',
    theme: 'Rounded Silhouette Curation',
    notes: 'Clean crop; approved for placement'
  },
  {
    id: 'ikla-water-trio-cylinder-bottles',
    brandId: 'ikla-water',
    status: 'ready',
    file: 'assets/campaigns/01-ready-to-use/ikla-water/ikla-water-trio-cylinder-bottles.jpg',
    width: 710,
    height: 711,
    aspectRatio: '1/1',
    alt: 'Clean product profile of three tall cylindrical IKLA Water glass bottles with architectural cap closures',
    category: 'vessels',
    theme: 'Cylinder Silhouette Curation',
    notes: 'Clean crop; approved for placement'
  },

  // =========================================================================
  // 02-REFERENCE-CROPS (EDITORIAL CAMPAIGN CROPS)
  // =========================================================================
  {
    id: 'ikla-x-mymosa-lifestyle',
    brandId: 'collaborations',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/collaborations/ikla-x-mymosa-lifestyle.jpg',
    width: 706,
    height: 944,
    aspectRatio: '3/4',
    alt: 'IKLA Maison × MyMosa collaboration editorial celebration with guests toasting with MyMosa Premium Wine Cocktails',
    category: 'collaborations',
    theme: 'Shared Hospitality & Modern Celebrations',
    notes: 'MyMosa is a Premium Wine Cocktail.'
  },
  {
    id: 'ktse-streetwear-duo',
    brandId: 'ktse',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ktse/ktse-streetwear-duo.jpg',
    width: 706,
    height: 1191,
    aspectRatio: '3/5',
    alt: 'KTSE campaign duo wearing heavyweight raw-hem hoodie and sweatpant sets in a brutalist urban setting',
    category: 'editorial-duo',
    theme: 'Keep That Same Energy Streetwear',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ktse-multiple-colorways-product-grid',
    brandId: 'ktse',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ktse/ktse-multiple-colorways-product-grid.jpg',
    width: 706,
    height: 948,
    aspectRatio: '3/4',
    alt: 'KTSE colorways grid showcasing four signature earth tones across heavyweight loopback cotton sets',
    category: 'colorways',
    theme: 'Architectural Color Palette',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ktse-vintage-black-colorways',
    brandId: 'ktse',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ktse/ktse-vintage-black-colorways.jpg',
    width: 706,
    height: 948,
    aspectRatio: '3/4',
    alt: 'KTSE vintage washed black hoodie and short colorways display with tonal chest embroidery',
    category: 'colorways',
    theme: 'Vintage Black Palette',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ktse-ash-grey-set',
    brandId: 'ktse',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ktse/ktse-ash-grey-set.jpg',
    width: 706,
    height: 948,
    aspectRatio: '3/4',
    alt: 'KTSE signature ash grey heavyweight fleece hoodie and matching raw-hem sweat shorts set',
    category: 'colorways',
    theme: 'Ash Grey Loopback Set',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ktse-brand-shirt-still-life',
    brandId: 'ktse',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ktse/ktse-brand-shirt-still-life.jpg',
    width: 706,
    height: 1011,
    aspectRatio: '7/10',
    alt: 'KTSE branded heavyweight tee still life highlighting tactile ribbed collar and dense woven knit',
    category: 'still-life',
    theme: 'Heavyweight Textile Density',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ktse-urban-same-energy',
    brandId: 'ktse',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ktse/ktse-urban-same-energy.jpg',
    width: 706,
    height: 964,
    aspectRatio: '3/4',
    alt: 'KTSE urban editorial with Keep That Same Energy typography against textured industrial masonry',
    category: 'campaign-manifesto',
    theme: 'Keep That Same Energy Ethos',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ktse-coastal-couple',
    brandId: 'ktse',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ktse/ktse-coastal-couple.jpg',
    width: 706,
    height: 941,
    aspectRatio: '3/4',
    alt: 'KTSE lifestyle couple walking along ocean coastline wearing relaxed bone and slate heavyweight fleece',
    category: 'lifestyle',
    theme: 'Coastal Atmosphere & Movement',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ktse-beach-collection',
    brandId: 'ktse',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ktse/ktse-beach-collection.jpg',
    width: 706,
    height: 964,
    aspectRatio: '3/4',
    alt: 'KTSE beach campaign showcasing earth-tone terry garments against ocean surf and golden twilight',
    category: 'lifestyle',
    theme: 'Natural Horizon & Raw Hems',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ktse-summer-lifestyle-trio',
    brandId: 'ktse',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ktse/ktse-summer-lifestyle-trio.jpg',
    width: 706,
    height: 941,
    aspectRatio: '3/4',
    alt: 'Three friends wearing KTSE matching summer loungewear enjoying an elevated outdoor terrace gathering',
    category: 'lifestyle',
    theme: 'Summer Community & Comfort',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ktse-collection-collage',
    brandId: 'ktse',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ktse/ktse-collection-collage.jpg',
    width: 706,
    height: 964,
    aspectRatio: '3/4',
    alt: 'KTSE collection collage featuring lookbook snapshots of signature silhouettes and tonal colorways',
    category: 'collage',
    theme: 'Full Season Catalogue Overview',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'moteon-not-a-trend',
    brandId: 'moteon',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/moteon/moteon-not-a-trend.jpg',
    width: 706,
    height: 932,
    aspectRatio: '3/4',
    alt: 'Motéon campaign visual bearing the manifesto Not A Trend with effortless woven resort silhouettes',
    category: 'ethos',
    theme: 'Not A Trend — Enduring Riviera Style',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'moteon-designed-to-move',
    brandId: 'moteon',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/moteon/moteon-designed-to-move.jpg',
    width: 706,
    height: 900,
    aspectRatio: '3/4',
    alt: 'Motéon performance lifestyle campaign bearing the headline Designed To Move with relaxed linen apparel',
    category: 'ethos',
    theme: 'Designed To Move — Fluid Freedom',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'moral-compass-coming-soon',
    brandId: 'moral-compass',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/moral-compass/moral-compass-coming-soon.jpg',
    width: 706,
    height: 912,
    aspectRatio: '3/4',
    alt: 'Moral Compass coming soon preview visual featuring monolithic celestial rotunda and cardinal orientation insignia',
    category: 'preview',
    theme: 'Internal Direction & Architectural Inception',
    notes: 'Keep minimal and intentional. Coming soon private preview.'
  },
  {
    id: 'ikla-tennis-collection',
    brandId: 'ikla-maison',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ikla-maison/ikla-tennis-collection.jpg',
    width: 706,
    height: 911,
    aspectRatio: '3/4',
    alt: 'IKLA Maison Tennis Club campaign featuring players on clay court in tailored white and cream athletic silhouettes',
    category: 'movement',
    theme: 'Maison Movement: The Tennis Court',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ikla-coastal-cycling',
    brandId: 'ikla-maison',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ikla-maison/ikla-coastal-cycling.jpg',
    width: 706,
    height: 943,
    aspectRatio: '3/4',
    alt: 'IKLA Maison cyclist riding along winding Mediterranean coastal highway in disciplined technical outerwear',
    category: 'movement',
    theme: 'Maison Movement: Coastal Cycling',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ikla-family-airport-travel',
    brandId: 'ikla-maison',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ikla-maison/ikla-family-airport-travel.jpg',
    width: 706,
    height: 939,
    aspectRatio: '3/4',
    alt: 'IKLA Maison family travel portrait walking through private aviation terminal in tailored matching leisurewear',
    category: 'travel-family',
    theme: 'The Voyage: Family & Travel',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ikla-focus-discipline-purpose',
    brandId: 'ikla-maison',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ikla-maison/ikla-focus-discipline-purpose.jpg',
    width: 706,
    height: 952,
    aspectRatio: '3/4',
    alt: 'IKLA Maison Focus, Discipline, Purpose campaign portrait of athlete preparing in monolithic marble training facility',
    category: 'discipline',
    theme: 'Ethos: Focus, Discipline, Purpose',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ikla-luxury-coastal-couple',
    brandId: 'ikla-maison',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ikla-maison/ikla-luxury-coastal-couple.jpg',
    width: 706,
    height: 782,
    aspectRatio: '9/10',
    alt: 'IKLA Maison couple relaxing on yacht deck in tailored leisurewear overlooking azure sea waters',
    category: 'leisure',
    theme: 'Maritime Leisure & Quiet Luxury',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ikla-brand-ambassador-program',
    brandId: 'ikla-maison',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ikla-maison/ikla-brand-ambassador-program.jpg',
    width: 706,
    height: 950,
    aspectRatio: '3/4',
    alt: 'IKLA Maison Brand Ambassador collective portrait showcasing diverse leaders in tailored house silhouettes',
    category: 'community',
    theme: 'The Maison Collective & Ambassadors',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ikla-standard-hoodie-sweats',
    brandId: 'ikla-maison',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ikla-maison/ikla-standard-hoodie-sweats.jpg',
    width: 706,
    height: 941,
    aspectRatio: '3/4',
    alt: 'IKLA Maison Standard fleece hoodie and tailored sweatpants in warm oatmeal limestone fleece',
    category: 'foundations',
    theme: 'Everyday Heirloom Fleece',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'ikla-standard-black-white-basics',
    brandId: 'ikla-maison',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/ikla-maison/ikla-standard-black-white-basics.jpg',
    width: 706,
    height: 935,
    aspectRatio: '3/4',
    alt: 'IKLA Maison monochrome essential foundation tees in heavyweight combed cotton',
    category: 'foundations',
    theme: 'Monochrome Foundational Essentials',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'my-drink-family-rep-the-legacy-merch',
    brandId: 'my-drink-family',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/my-drink-family/my-drink-family-rep-the-legacy-merch.jpg',
    width: 706,
    height: 943,
    aspectRatio: '3/4',
    alt: 'My Drink Family Rep The Legacy campaign featuring circular crest fleece and lifestyle clubhouse merchandise',
    category: 'community',
    theme: 'Rep The Legacy Clubhouse Apparel',
    notes: 'Cropped from social screenshot; use with deliberate framing'
  },
  {
    id: 'mymosa-family-merch',
    brandId: 'my-drink-family',
    status: 'reference',
    file: 'assets/campaigns/02-reference-crops/my-drink-family/mymosa-family-merch.jpg',
    width: 706,
    height: 952,
    aspectRatio: '3/4',
    alt: 'My Drink Family and MyMosa collaborative merch collection celebrating rooftop celebrations and good spirits',
    category: 'collaborations',
    theme: 'MyMosa × Family Legacy Curation',
    notes: 'MyMosa is a Premium Wine Cocktail.'
  }
];

// Helper to look up any asset by id with safe resolved URL
export function getCampaignAsset(id) {
  const asset = CAMPAIGN_ASSETS.find(a => a.id === id);
  if (!asset) return null;
  return {
    ...asset,
    url: getAssetPath(asset.file)
  };
}

// Helper to get assets by brand
export function getCampaignAssetsByBrand(brandId) {
  return CAMPAIGN_ASSETS.filter(a => a.brandId === brandId).map(a => ({
    ...a,
    url: getAssetPath(a.file)
  }));
}
