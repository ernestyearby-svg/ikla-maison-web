import { getAssetPath } from '../utils/assets.js';

const styled = (path) => getAssetPath(`assets/${path}`);

// Exact product-to-campaign matches already documented by the wardrobe lookbook.
const EXACT_STYLED_LOOKS = {
  'ikla-wardrobe-mens-green-polo': styled('campaigns/wardrobe-models/01_mens_polo_khaki_shorts_resort.webp'),
  'ikla-wardrobe-womens-cream-polo': styled('campaigns/wardrobe-models/02_womens_polo_khaki_shorts_arcade.webp'),
  'ikla-wardrobe-mens-bermuda-shorts': styled('campaigns/wardrobe-models/01_mens_polo_khaki_shorts_resort.webp'),
  'ikla-wardrobe-womens-high-waist-shorts': styled('campaigns/wardrobe-models/02_womens_polo_khaki_shorts_arcade.webp'),
  'ikla-wardrobe-mens-khaki-trousers': styled('campaigns/wardrobe-models/03_mens_polo_khaki_trousers_gallery.webp'),
  'ikla-wardrobe-womens-wide-leg-trousers': styled('campaigns/wardrobe-models/04_womens_polo_wide_leg_trousers_penthouse.webp'),
  'ikla-wardrobe-mens-dress-sweater': styled('campaigns/wardrobe-models/05_mens_dress_sweater_private_library.webp'),
  'ikla-wardrobe-womens-cream-twinset': styled('campaigns/wardrobe-models/06_womens_cream_twinset_maison_salon.webp'),
  'ikla-wardrobe-womens-legging-set': styled('campaigns/wardrobe-models/07_womens_architectural_legging_set_studio.webp'),
  'ikla-wardrobe-womens-training-set': styled('campaigns/wardrobe-models/08_womens_training_set_rooftop.webp'),
};

// House editorials are restricted to apparel. Objects and unmatched accessories
// remain single-image cards so the interface never implies a false product match.
const HOUSE_STYLED_LOOKS = {
  'ikla-maison': [
    styled('lookbook/product-hover/ikla-maison-01.webp'),
    styled('lookbook/product-hover/ikla-maison-02.webp'),
  ],
  ktse: [
    styled('lookbook/product-hover/ktse-01.webp'),
    styled('lookbook/product-hover/ktse-02.webp'),
  ],
  moteon: [
    styled('lookbook/product-hover/moteon-01.webp'),
    styled('lookbook/product-hover/moteon-02.webp'),
  ],
  'moral-compass': [
    styled('lookbook/product-hover/moral-compass-01.webp'),
    styled('lookbook/product-hover/moral-compass-02.webp'),
  ],
  wnnr: [
    styled('lookbook/product-hover/wnnr-01.webp'),
    styled('lookbook/product-hover/wnnr-02.webp'),
  ],
  mymosa: [
    styled('lookbook/product-hover/mymosa-01.webp'),
    styled('lookbook/product-hover/mymosa-02.webp'),
  ],
  mytai: [
    styled('lookbook/product-hover/mytai-01.webp'),
    styled('lookbook/product-hover/mytai-02.webp'),
  ],
  mytini: [
    styled('lookbook/product-hover/mytini-01.webp'),
    styled('lookbook/product-hover/mytini-02.webp'),
  ],
  myjito: [
    styled('lookbook/product-hover/myjito-01.webp'),
    styled('lookbook/product-hover/myjito-02.webp'),
  ],
  mygarita: [
    styled('lookbook/product-hover/mygarita-01.webp'),
    styled('lookbook/product-hover/mygarita-02.webp'),
  ],
};

const KIDS_STYLED_LOOKS = [
  styled('lookbook/product-hover/ikla-kids-01.webp'),
  styled('lookbook/product-hover/ikla-kids-02.webp'),
];

const APPAREL_CATEGORIES = new Set(['Tops', 'Bottoms', 'Outerwear', 'Sets']);

const stableIndex = (value, length) => {
  if (!length) return 0;
  const score = Array.from(value || '').reduce((total, character) => total + character.charCodeAt(0), 0);
  return score % length;
};

export function getProductStyledImage(product) {
  if (!product) return null;
  if (product.modelImage) return product.modelImage;
  if (EXACT_STYLED_LOOKS[product.id]) return EXACT_STYLED_LOOKS[product.id];

  if (product.brandName === 'IKLA Kids' || product.id?.startsWith('ikla-kids-')) {
    return KIDS_STYLED_LOOKS[stableIndex(product.id, KIDS_STYLED_LOOKS.length)];
  }

  if (!APPAREL_CATEGORIES.has(product.category)) return null;

  const houseLooks = HOUSE_STYLED_LOOKS[product.brandId];
  if (!houseLooks?.length) return null;
  return houseLooks[stableIndex(product.id, houseLooks.length)];
}

export function getProductStyledImageAlt(product) {
  const name = product?.name?.replace(/^\[Placeholder\]\s*/i, '') || 'collection piece';
  return `${name} presented as a complete styled look with coordinated footwear and accessories`;
}
